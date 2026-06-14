import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus, Check } from "lucide-react";

/**
 * /new-design — Editorial premium homepage.
 * Palette: pure white / soft grey / black, with #1B17FF (logo) as the only accent.
 * Typography: Instrument Serif (display) + Inter (body).
 * Motion: gentle, long-tween, no parallax jank.
 */

const ACCENT = "#1B17FF";
const INK = "#0A0A0A";
const MIST = "#B4B7BE";
const SURFACE = "#F5F5F7";
const EASE = [0.22, 1, 0.36, 1] as const;

/* Inject Instrument Serif + Inter once */
function useEditorialFonts() {
  useEffect(() => {
    const id = "editorial-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

const SERIF: React.CSSProperties = {
  fontFamily: '"Instrument Serif", "Times New Roman", serif',
  fontWeight: 400,
  letterSpacing: "-0.02em",
};
const SANS: React.CSSProperties = {
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
};

/* ---------------- Reveal helper (smooth, single tween) ---------------- */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Magnetic button ---------------- */
function Magnet({
  children,
  className = "",
  to,
  external,
}: {
  children: React.ReactNode;
  className?: string;
  to?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }
  const Comp: any = external ? "a" : Link;
  return (
    <motion.div style={{ x: sx, y: sy, display: "inline-block" }}>
      <Comp
        ref={ref as any}
        to={to}
        href={external ? to : undefined}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={className}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

/* ---------------- Top bar ---------------- */
function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 12);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.05]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={SANS}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between text-[13px]">
        <Link to="/" className="flex items-baseline gap-1.5 font-semibold tracking-tight text-[15px]" style={{ color: INK }}>
          <span style={{ ...SERIF, fontSize: 22, lineHeight: 1 }}>Csp</span>
          <span style={{ color: ACCENT }}>zone</span>
          <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[#3a3a3c]">
          {["Index", "Licenses", "Compliance", "Pricing", "Journal"].map((l) => (
            <a key={l} href="#" className="hover:text-black transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: ACCENT }} />
            </a>
          ))}
        </nav>
        <Link
          to="/campaign"
          className="rounded-full px-4 py-2 text-white transition-all hover:opacity-90"
          style={{ background: INK }}
        >
          Get started
        </Link>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden" style={SANS}>
      {/* Subtle radial wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(27,23,255,0.06), transparent 60%), radial-gradient(800px 500px at 90% 10%, rgba(0,0,0,0.04), transparent 60%)",
        }}
      />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em]" style={{ color: MIST }}>
            <span className="w-8 h-px" style={{ background: MIST }} />
            <span>Index — 01 / Business Setup, UAE</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.05}>
          <h1
            className="mt-8 text-[56px] sm:text-[88px] lg:text-[128px] leading-[0.95]"
            style={{ ...SERIF, color: INK }}
          >
            Start a company,
            <br />
            <span className="italic" style={{ color: ACCENT }}>
              quietly
            </span>{" "}
            extraordinary.
          </h1>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <Reveal delay={0.15} className="lg:col-span-6">
            <p className="text-[18px] leading-relaxed max-w-xl" style={{ color: "#3a3a3c" }}>
              A self-service portal to launch and operate your UAE business — across every freezone, mainland and offshore. Zero consultancy fees. Issued in days, not months.
            </p>
            <div className="mt-8 flex items-center gap-5 flex-wrap">
              <Magnet
                to="/campaign"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] text-white shadow-[0_12px_30px_-12px_rgba(27,23,255,0.45)] transition-colors"
                {...({ style: { background: ACCENT } } as any)}
              >
                Get my license
                <ArrowUpRight className="w-4 h-4" />
              </Magnet>
              <a href="#story" className="text-[14px] underline underline-offset-4 decoration-[1.5px] hover:opacity-60 transition-opacity" style={{ color: INK }}>
                How it works
              </a>
            </div>
          </Reveal>

          {/* Numbered meta column */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 text-[12px]" style={{ color: INK }}>
            {[
              ["01", "From", "AED 4,320"],
              ["02", "Issued in", "3–5 days"],
              ["03", "Covers", "All UAE"],
            ].map(([num, k, v], i) => (
              <Reveal key={num} delay={0.25 + i * 0.08}>
                <div className="border-t border-black/15 pt-4">
                  <p className="text-[11px] tracking-[0.2em]" style={{ color: MIST }}>{num}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: MIST }}>{k}</p>
                  <p className="mt-1 text-[20px]" style={SERIF}>{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Hero artwork: layered cards */}
        <Reveal delay={0.35} y={40}>
          <div className="relative mt-20 lg:mt-28">
            <div className="aspect-[16/8] rounded-[28px] overflow-hidden bg-[#EFF1F5] relative">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2200&q=85"
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.25) 100%)" }} />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white" style={SANS}>
                <p className="text-[12px] uppercase tracking-[0.2em] opacity-80">A film by CSPzone — Dubai, 2026</p>
                <p className="text-[12px] opacity-80">© Index 01</p>
              </div>
            </div>

            {/* Floating receipt card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
              className="hidden md:block absolute -bottom-10 -left-4 lg:left-10 w-[280px] rounded-2xl bg-white p-5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] border border-black/[0.04]"
              style={SANS}
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em]" style={{ color: MIST }}>
                <span>License issued</span>
                <span style={{ color: ACCENT }}>● live</span>
              </div>
              <p className="mt-3 text-[22px]" style={SERIF}>IFZA — Trade License</p>
              <p className="text-[12px]" style={{ color: "#6e6e73" }}>Reference TR-2026-08841</p>
              <div className="mt-4 pt-4 border-t border-black/[0.06] flex items-end justify-between">
                <span className="text-[12px]" style={{ color: "#6e6e73" }}>Time to issue</span>
                <span className="text-[24px]" style={SERIF}>4 days</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.65, ease: EASE }}
              className="hidden md:block absolute -bottom-6 -right-4 lg:right-10 w-[260px] rounded-2xl p-5 text-white border border-white/10"
              style={{ background: INK, ...SANS }}
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] opacity-70">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                AI Compliance
              </div>
              <p className="mt-3 text-[20px]" style={SERIF}>“VAT filing due in 9 days. Drafted.”</p>
              <p className="mt-3 text-[12px] opacity-70">Auto-prepared. One tap to approve.</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Marquee logos ---------------- */
function LogoStrip() {
  const logos = ["IFZA", "MEYDAN", "DMCC", "RAKEZ", "SHAMS", "SPC", "JAFZA", "ADGM", "DAFZA"];
  return (
    <section className="py-20 border-y border-black/[0.06] bg-white overflow-hidden" style={SANS}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 flex items-center justify-between flex-wrap gap-6 text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>
        <span>— Trusted across 40+ UAE freezones</span>
        <span>2026 / Index</span>
      </div>
      <div className="mt-10 relative">
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-20 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="text-[34px] tracking-tight" style={{ ...SERIF, color: "#cfd1d6" }}>
              {l}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Sticky storytelling: 4 steps with one pinned visual ---------------- */
function Story() {
  const steps = [
    { n: "01", t: "Choose", d: "Pick a freezone, package or visa — guided by our self-service flow." },
    { n: "02", t: "Submit", d: "Upload IDs and details once. No paperwork chases, no back and forth." },
    { n: "03", t: "Approve", d: "We coordinate with the freezone authority on your behalf in real time." },
    { n: "04", t: "Operate", d: "Receive your license, visa and Emirates ID — all in your dashboard." },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const active = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const [i, setI] = useState(0);
  useEffect(() => active.on("change", (v) => setI(Math.min(3, Math.round(v)))), [active]);

  return (
    <section id="story" ref={ref} className="relative bg-white" style={SANS}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        {/* Pinned visual */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 self-start h-[80vh] hidden lg:flex items-center">
          <div className="w-full aspect-[4/5] rounded-[28px] overflow-hidden relative" style={{ background: SURFACE }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0"
              >
                <img
                  src={
                    [
                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85",
                      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
                      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
                      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
                    ][i]
                  }
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35))" }} />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <p className="text-[12px] uppercase tracking-[0.2em] opacity-80">Step {steps[i].n}</p>
                  <p className="text-[28px]" style={SERIF}>{steps[i].t}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Steps */}
        <div className="lg:col-span-6 py-24 lg:py-40">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>— Index 02 / How it works</p>
            <h2 className="mt-6 text-[44px] sm:text-[64px] leading-[1]" style={{ ...SERIF, color: INK }}>
              Four steps. <span className="italic" style={{ color: ACCENT }}>No friction.</span>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-12">
            {steps.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 0.05}>
                <div className="grid grid-cols-12 gap-4 border-t border-black/[0.08] pt-6">
                  <div className="col-span-2 text-[12px] tracking-[0.2em]" style={{ color: MIST }}>{s.n}</div>
                  <div className="col-span-10">
                    <h3 className="text-[32px]" style={SERIF}>{s.t}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed max-w-md" style={{ color: "#3a3a3c" }}>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI section (dark, editorial) ---------------- */
function AISection() {
  const lines = [
    "Renewal due — DED Trade License — drafted.",
    "VAT Q3 filing prepared. 12 entries reconciled.",
    "Emirates ID for shareholder ready to download.",
    "Annual audit pack — packaged.",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % lines.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-32 lg:py-44 px-6 lg:px-10 text-white relative overflow-hidden" style={{ background: INK, ...SANS }}>
      {/* Soft accent wash */}
      <div className="absolute inset-0 -z-0 opacity-30"
           style={{ background: "radial-gradient(700px 400px at 20% 10%, rgba(27,23,255,0.6), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(27,23,255,0.35), transparent 60%)" }} />
      <div className="relative max-w-[1240px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] opacity-60">— Index 03 / AI Compliance</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[48px] sm:text-[72px] lg:text-[88px] leading-[0.98]" style={SERIF}>
              Compliance that
              <br />
              <span className="italic" style={{ color: "#9c98ff" }}>watches itself.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 text-[17px] leading-relaxed opacity-75 max-w-lg">
              We pair our portal with an AI co-pilot that monitors renewals, VAT, audit pack and corporate tax. It quietly prepares — you simply approve.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 grid grid-cols-2 gap-y-5 gap-x-8 max-w-md">
              {[
                "Renewal predictions",
                "Auto VAT drafts",
                "Audit pack assembly",
                "Risk monitoring",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[14px]">
                  <Check className="w-4 h-4" style={{ color: "#9c98ff" }} />
                  <span className="opacity-90">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* AI feed card */}
        <Reveal delay={0.2} y={40} className="lg:col-span-6">
          <div className="relative rounded-[24px] p-6 sm:p-8 border border-white/10 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] opacity-60">
              <span>CSPzone · AI Co-pilot</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#9c98ff" }} />
                live
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {lines.map((l, idx) => {
                const state = idx === i ? "active" : idx < i ? "done" : "queue";
                return (
                  <motion.div
                    key={l}
                    animate={{
                      opacity: state === "queue" ? 0.35 : 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 border"
                    style={{
                      background: state === "active" ? "rgba(156,152,255,0.08)" : "rgba(255,255,255,0.02)",
                      borderColor: state === "active" ? "rgba(156,152,255,0.35)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                      style={{
                        background: state === "done" ? "#9c98ff" : "transparent",
                        border: state === "done" ? "none" : "1px solid rgba(255,255,255,0.25)",
                        color: state === "done" ? INK : "white",
                      }}
                    >
                      {state === "done" ? <Check className="w-3 h-3" /> : idx + 1}
                    </span>
                    <span className="text-[15px]">{l}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-7 pt-5 border-t border-white/10 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] opacity-60">Hours saved this month</p>
                <p className="mt-1 text-[40px]" style={SERIF}>34<span className="opacity-50 text-[24px]"> h</span></p>
              </div>
              <Magnet
                to="/campaign"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[13px] px-4 py-2 transition-opacity hover:opacity-90"
                {...({ style: { color: INK } } as any)}
              >
                Try the co-pilot <ArrowUpRight className="w-3.5 h-3.5" />
              </Magnet>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Big editorial split ---------------- */
function Manifesto() {
  return (
    <section className="py-32 lg:py-44 px-6 lg:px-10 bg-white" style={SANS}>
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>— Index 04 / Manifesto</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 text-[40px] sm:text-[64px] lg:text-[84px] leading-[1.02] max-w-5xl" style={{ ...SERIF, color: INK }}>
            We believe paperwork should
            <span className="italic" style={{ color: ACCENT }}> disappear</span> — so founders can
            <span className="italic"> focus on the work that matters.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-3 gap-10">
          {[
            { k: "Transparency", d: "What you see is exactly what you pay. No retainers. No hidden fees." },
            { k: "Velocity", d: "License in 3–5 working days. Submit once, we handle the rest." },
            { k: "Intelligence", d: "AI co-pilot tracks deadlines, drafts filings, prevents penalties." },
          ].map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div className="border-t border-black/[0.1] pt-6">
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>0{i + 1}</p>
                <h3 className="mt-4 text-[32px]" style={SERIF}>{p.k}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3a3a3c" }}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const tiers = [
    { name: "Freezone", price: "4,320", desc: "Trade license, ready in 5 days.", to: "/campaign" },
    { name: "License + Visa", price: "9,720", desc: "Investor visa & Emirates ID included.", to: "/business-license-visa", featured: true },
    { name: "Offshore", price: "7,999", desc: "Holding companies & global structures.", to: "/offshore-company-setup" },
  ];
  return (
    <section className="py-32 lg:py-44 px-6 lg:px-10" style={{ background: SURFACE, ...SANS }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>— Index 05 / Pricing</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-[44px] sm:text-[68px] leading-[1]" style={{ ...SERIF, color: INK }}>
                Pick the one <span className="italic" style={{ color: ACCENT }}>that fits.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`group relative h-full rounded-[24px] p-8 transition-all duration-700 hover:-translate-y-1 ${
                  t.featured
                    ? "text-white"
                    : "bg-white border border-black/[0.05] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
                }`}
                style={t.featured ? { background: INK } : undefined}
              >
                {t.featured && (
                  <span className="absolute -top-2.5 left-8 rounded-full text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 text-white" style={{ background: ACCENT }}>
                    Popular
                  </span>
                )}
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: t.featured ? "#9c98ff" : MIST }}>0{i + 1}</p>
                <h3 className="mt-4 text-[36px]" style={SERIF}>{t.name}</h3>
                <p className="mt-2 text-[14px]" style={{ color: t.featured ? "rgba(255,255,255,0.7)" : "#6e6e73" }}>{t.desc}</p>

                <div className="mt-10 flex items-baseline gap-1.5">
                  <span className="text-[14px] opacity-60">AED</span>
                  <span className="text-[52px] leading-none" style={SERIF}>{t.price}</span>
                </div>

                <Link
                  to={t.to}
                  className={`mt-10 inline-flex items-center justify-between w-full rounded-full px-5 py-3 text-[14px] transition-all ${
                    t.featured ? "bg-white text-black hover:opacity-90" : "border border-black/[0.1] hover:border-black"
                  }`}
                >
                  Get started <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials marquee ---------------- */
function Voices() {
  const items = [
    { t: "Got my e-commerce license in 4 days. Self-service portal is incredible.", n: "Rahul K.", r: "Shopify seller" },
    { t: "The co-pilot flagged a renewal I'd forgotten about. Saved me a fine.", n: "Priya S.", r: "Founder, Tech" },
    { t: "From signup to license — under a week. It just works.", n: "Omar H.", r: "Trader" },
    { t: "The cleanest portal I've used in the UAE. Pure clarity.", n: "James M.", r: "Consultant" },
    { t: "Compliance reminders alone are worth the price. Zero stress.", n: "Sara A.", r: "Investor" },
  ];
  return (
    <section className="py-32 bg-white overflow-hidden" style={SANS}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>— Index 06 / Voices</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[44px] sm:text-[64px] leading-[1] max-w-3xl" style={{ ...SERIF, color: INK }}>
            Loved by founders across the <span className="italic" style={{ color: ACCENT }}>Emirates.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items].map((q, i) => (
            <div key={i} className="shrink-0 w-[380px] rounded-[22px] p-7 border border-black/[0.06]" style={{ background: SURFACE }}>
              <p className="text-[20px] leading-snug" style={{ ...SERIF, color: INK }}>“{q.t}”</p>
              <div className="mt-6 pt-5 border-t border-black/[0.08] flex items-center justify-between text-[12px]">
                <span style={{ color: INK }}>{q.n}</span>
                <span style={{ color: MIST }}>{q.r}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "How long does it take to get my license?", a: "Most freezone licenses are issued in 3–5 working days after payment and document submission." },
    { q: "Are there hidden fees?", a: "No. The amount you see is the amount you pay. Government fees are itemised separately and disclosed upfront." },
    { q: "Can I add a visa later?", a: "Yes. You can upgrade to the License + Visa package at any time from your dashboard." },
    { q: "What does the AI co-pilot do?", a: "It monitors renewals, prepares VAT and audit drafts, and flags risks — quietly, in the background." },
    { q: "Which freezones do you support?", a: "All major UAE freezones including IFZA, Meydan, DMCC, RAKEZ, SHAMS, JAFZA, ADGM, DAFZA and more." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 px-6 lg:px-10 bg-white" style={SANS}>
      <div className="max-w-[980px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MIST }}>— Index 07 / FAQ</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[40px] sm:text-[52px] leading-[1]" style={{ ...SERIF, color: INK }}>
              Questions, <span className="italic" style={{ color: ACCENT }}>answered.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={i} onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left py-6">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[20px]" style={{ ...SERIF, color: INK }}>{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="shrink-0 w-8 h-8 rounded-full border border-black/15 flex items-center justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[15px] leading-relaxed max-w-xl" style={{ color: "#3a3a3c" }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function Closing() {
  return (
    <section className="relative py-40 lg:py-56 px-6 lg:px-10 overflow-hidden text-white" style={{ background: INK, ...SANS }}>
      <div aria-hidden className="absolute inset-0 opacity-50"
           style={{ background: "radial-gradient(800px 500px at 50% 100%, rgba(27,23,255,0.45), transparent 60%)" }} />
      <div className="relative max-w-[1240px] mx-auto text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] opacity-60">— Index 08 / Begin</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 text-[56px] sm:text-[96px] lg:text-[136px] leading-[0.95]" style={SERIF}>
            Your company.<br />
            <span className="italic" style={{ color: "#9c98ff" }}>In a few clicks.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12">
            <Magnet
              to="/campaign"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[15px] px-8 py-4 hover:opacity-90 transition-opacity"
              {...({ style: { color: INK } } as any)}
            >
              Start now <ArrowRight className="w-4 h-4" />
            </Magnet>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-10 bg-white border-t border-black/[0.06]" style={SANS}>
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between gap-4 text-[12px]" style={{ color: "#6e6e73" }}>
        <p>© {new Date().getFullYear()} CSPzone. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-black transition-colors">Terms</Link>
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function NewDesign() {
  useEditorialFonts();
  useEffect(() => {
    document.title = "CSPzone — UAE Business Setup, Quietly Extraordinary";
  }, []);
  return (
    <div className="min-h-screen bg-white" style={{ color: INK, ...SANS }}>
      <TopBar />
      <main>
        <Hero />
        <LogoStrip />
        <Story />
        <AISection />
        <Manifesto />
        <Pricing />
        <Voices />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
