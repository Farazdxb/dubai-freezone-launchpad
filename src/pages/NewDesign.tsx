import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Building2,
  ShieldCheck,
  Sparkles,
  FileText,
  Bell,
  Bot,
  Clock,
  Star,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import imgRegister from "@/assets/nd-register.jpg";
import imgComply from "@/assets/nd-comply.jpg";
import imgGrow from "@/assets/nd-grow.jpg";
import imgFounder from "@/assets/nd-hero-founder.jpg";
import imgStorefront from "@/assets/nd-hero-storefront.jpg";

/* ────────────────────────────────────────────────────────────
   /new-design — Fiverr-inspired, refined
   Font: Manrope (project default). Brand accent: #1B17FF
──────────────────────────────────────────────────────────── */

const BRAND = "#1B17FF";
const INK = "#0B0B0B";

const useFonts = () => {
  useEffect(() => {
    const id = "nd-fonts";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id;
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(l);
  }, []);
};

const ease = [0.22, 1, 0.36, 1] as const;
const FONT = "'Inter', sans-serif";
const SERIF = "'Instrument Serif', serif";
const CREAM = "#F5F1EA";

const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── NAV ─────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/new-design" className="flex items-center">
          <img src={cspLogo} alt="CSPzone" className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] text-neutral-700">
          <a href="#formation" className="hover:text-black transition">Formation</a>
          <a href="#compliance" className="hover:text-black transition">Compliance</a>
          <a href="#manage" className="hover:text-black transition">Manage</a>
          <a href="#pricing" className="hover:text-black transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-flex text-[14.5px] text-neutral-700 hover:text-black"
          >
            Login
          </Link>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[14px] font-semibold text-white hover:opacity-90 transition"
            style={{ background: INK }}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

/* ─── HERO (Tailor Brands-style) ──────────────────────────── */
const Hero = () => {
  const { scrollY } = useScroll();
  const yL = useTransform(scrollY, [0, 600], [0, -50]);
  const yR = useTransform(scrollY, [0, 600], [0, -25]);
  return (
    <section
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
      style={{ background: CREAM }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left photo */}
          <motion.div
            style={{ y: yL }}
            className="hidden lg:block lg:col-span-3"
          >
            <Reveal y={40}>
              <div className="rounded-[28px] overflow-hidden aspect-[3/4] -rotate-2">
                <img
                  src={imgFounder}
                  alt="UAE founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </motion.div>

          {/* Center copy */}
          <div className="lg:col-span-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur text-[12px] font-medium text-neutral-700 mb-7">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
                Zero consultancy fee · All 7 emirates
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1
                className="text-[52px] sm:text-[80px] lg:text-[104px] leading-[0.96] tracking-[-0.02em] font-medium text-black"
                style={{ fontFamily: SERIF }}
              >
                Launch your
                <br />
                UAE business,{" "}
                <span className="italic" style={{ color: BRAND }}>
                  effortlessly.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-md mx-auto text-[16px] leading-relaxed text-neutral-600">
                Freezone formation, compliance autopilot and AI accounting —
                in one transparent platform.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white hover:opacity-90 transition"
                  style={{ background: INK }}
                >
                  Start your company
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-black underline underline-offset-4 decoration-1 hover:opacity-70 transition"
                >
                  See packages
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center justify-center gap-4 text-[13px] text-neutral-500">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                  ))}
                  <span className="ml-1.5 font-medium text-neutral-700">4.9 · 500+ founders</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right photo */}
          <motion.div
            style={{ y: yR }}
            className="hidden lg:block lg:col-span-3"
          >
            <Reveal y={40} delay={0.1}>
              <div className="rounded-[28px] overflow-hidden aspect-[3/4] rotate-2 mt-12">
                <img
                  src={imgStorefront}
                  alt="UAE boutique"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── TRUST BAR ───────────────────────────────────────────── */
const TrustBar = () => (
  <section className="border-y border-black/5 bg-neutral-50/60">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { v: "500+", l: "Businesses launched" },
        { v: "3–5 days", l: "Average license time" },
        { v: "0 AED", l: "Consultancy fees" },
        { v: "4.9/5", l: "Customer rating" },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div>
            <div className="text-[28px] font-extrabold tracking-tight text-black" style={{ fontFamily: FONT }}>
              {s.v}
            </div>
            <div className="text-[13px] text-neutral-500 mt-1">{s.l}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ─── THREE PILLARS (with real images) ───────────────────── */
const pillars = [
  {
    id: "formation",
    eyebrow: "Register",
    title: "Your license,",
    titleAccent: "in days.",
    body: "Pick a freezone — we file every document and deliver your license in 3–5 days.",
    img: imgRegister,
  },
  {
    id: "compliance",
    eyebrow: "Comply",
    title: "Compliance,",
    titleAccent: "always on.",
    body: "Renewals, VAT, corporate tax — all tracked, all on time. Quietly handled.",
    img: imgComply,
  },
  {
    id: "manage",
    eyebrow: "Grow",
    title: "An AI co-pilot",
    titleAccent: "for the boring stuff.",
    body: "Invoicing, bookkeeping, cashflow — ask in plain English, get a real answer.",
    img: imgGrow,
  },
];

const Pillars = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
            The platform
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[40px] sm:text-[56px] leading-[1.02] tracking-[-0.035em] font-extrabold text-black"
            style={{ fontFamily: FONT }}
          >
            One platform. <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>Three milestones.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <a
              href={`#${p.id}`}
              className="group block rounded-[28px] overflow-hidden h-full bg-[#f5f5f7] hover:bg-[#eef0f3] transition-colors duration-500"
            >
              <div className="px-8 pt-10 pb-2 text-center">
                <div className="text-[12px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
                  {p.eyebrow}
                </div>
                <h3
                  className="text-[26px] sm:text-[30px] leading-[1.1] tracking-[-0.025em] font-bold text-black"
                  style={{ fontFamily: FONT }}
                >
                  {p.title}{" "}
                  <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>{p.titleAccent}</span>
                </h3>
                <p className="mt-4 text-[14.5px] text-neutral-600 leading-relaxed max-w-[34ch] mx-auto">
                  {p.body}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-black">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
              <div className="mt-6 aspect-[5/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);


/* ─── DUAL CARD (inspired by attachment 3) ──────────────── */
const DualCard = () => {
  const [tab, setTab] = useState<"reviews" | "solve" | "prevent">("reviews");
  return (
    <section className="py-12 lg:py-20">
      <div className="px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto rounded-[32px] bg-white border border-black/5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.15)] p-8 sm:p-12">
          <div className="flex items-start justify-between flex-wrap gap-6 mb-10">
            <Reveal>
              <h3
                className="text-[28px] sm:text-[40px] leading-[1.05] tracking-[-0.025em] font-extrabold text-neutral-400 max-w-xl"
                style={{ fontFamily: FONT }}
              >
                Smarter systems spot risk —{" "}
                <span className="text-black">and solve it.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-1 bg-neutral-100 rounded-full p-1">
                {(["reviews", "solve", "prevent"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-1.5 rounded-full text-[13px] font-medium capitalize transition ${
                      tab === t
                        ? "bg-white text-black shadow-sm"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {tab === t && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                        style={{ background: BRAND }}
                      />
                    )}
                    {t}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-3xl border border-black/10 p-7 h-full bg-white">
                <h4 className="text-[20px] font-bold text-black mb-3" style={{ fontFamily: FONT }}>
                  License renewal flagged (45 days)
                </h4>
                <p className="text-[14px] text-neutral-600 leading-relaxed mb-6">
                  Your IFZA trade license is approaching renewal. Our AI prepared
                  documents and pre-filled the renewal application.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[12px] px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    IFZA · 2024
                  </span>
                  <span
                    className="text-[12px] px-3 py-1 rounded-full"
                    style={{ background: "#E8FBEE", color: "#0E7C3A" }}
                  >
                    Auto-prepared
                  </span>
                  <span className="text-[12px] px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    renewal
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-[13px] text-neutral-500">
                    <span className="font-semibold text-black">(12)</span> deadlines tracked
                  </span>
                  <a href="#" className="text-[13px] font-semibold underline text-black">
                    Read more
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl p-7 h-full bg-[#0B0B0B] text-white flex flex-col">
                <h4 className="text-[20px] font-bold mb-3" style={{ fontFamily: FONT }}>
                  Secure & compliant filing
                </h4>
                <p className="text-[14px] text-white/65 leading-relaxed mb-6">
                  Every renewal is double-checked by a human PRO before submission.
                  Government portals updated in real time.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Filed
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-[13px] font-semibold hover:bg-white/90 transition"
                  >
                    View timeline <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── DEEP DIVE BLOCK ─────────────────────────────────────── */
const DeepDive = ({
  id,
  eyebrow,
  title,
  body,
  bullets,
  cta,
  reverse = false,
  tone = "light",
  visual,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  bullets: string[];
  cta: string;
  reverse?: boolean;
  tone?: "light" | "dark" | "tint";
  visual: React.ReactNode;
}) => {
  const toneStyles =
    tone === "dark"
      ? "bg-[#0B0B0B] text-white"
      : tone === "tint"
      ? "bg-[#EFF1F5] text-black"
      : "bg-white text-black";
  return (
    <section id={id} className="px-6 lg:px-10 py-6">
      <div className={`max-w-[1400px] mx-auto rounded-[32px] ${toneStyles} overflow-hidden`}>
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-20 ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div>
            <Reveal>
              <div className="text-[12px] uppercase tracking-[0.2em] opacity-60 mb-5">
                {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h3
                className="text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.03em] font-extrabold"
                style={{ fontFamily: FONT }}
              >
                {title}
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[16.5px] leading-relaxed opacity-75 max-w-lg">{body}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]">
                    <span
                      className="mt-1 inline-flex w-5 h-5 rounded-full items-center justify-center shrink-0"
                      style={{ background: BRAND }}
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="opacity-90">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="#pricing"
                className={`mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition ${
                  tone === "dark"
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:opacity-90"
                }`}
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>{visual}</Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─── HOW IT WORKS ────────────────────────────────────────── */
const steps = [
  { n: "01", t: "Tell us about your business", d: "2-minute form — activity, owners, freezone preference." },
  { n: "02", t: "We file & process", d: "Documents, approvals and government liaison — all handled." },
  { n: "03", t: "Get your license", d: "Trade license delivered in 3–5 working days." },
  { n: "04", t: "Run on autopilot", d: "Renewals, accounting and compliance from one dashboard." },
];

const HowItWorks = () => (
  <section className="py-24 lg:py-36">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <Reveal>
        <h2
          className="text-[40px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] font-extrabold text-black max-w-3xl"
          style={{ fontFamily: FONT }}
        >
          From idea to <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>issued license</span> in four steps.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="rounded-3xl border border-black/10 bg-white p-7 h-full hover:border-black/30 transition">
              <div className="text-[14px] font-bold mb-10" style={{ color: BRAND, fontFamily: FONT }}>
                {s.n}
              </div>
              <h4 className="text-[20px] font-bold text-black mb-2 tracking-tight" style={{ fontFamily: FONT }}>
                {s.t}
              </h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white hover:opacity-90 transition"
            style={{ background: INK }}
          >
            Get started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── PRICING ─────────────────────────────────────────────── */
const tiers = [
  {
    name: "Starter",
    price: "12,500",
    note: "AED · one-time",
    desc: "Mainland-free setup with essentials to launch fast.",
    features: ["Trade license", "1 visa allocation", "Bank account intro", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "18,900",
    note: "AED · one-time",
    desc: "Most popular for solo founders and small teams.",
    features: [
      "Trade license",
      "3 visa allocations",
      "Dedicated account manager",
      "Compliance autopilot — 12 months",
      "AI accounting assistant",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    note: "tailored to your operation",
    desc: "Multi-license, holding structures and CFO support.",
    features: ["Unlimited licenses", "Custom freezones", "PRO services", "Priority concierge"],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 lg:py-36 bg-neutral-50/60 border-y border-black/5">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <Reveal>
          <h2
            className="text-[40px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] font-extrabold text-black"
            style={{ fontFamily: FONT }}
          >
            Transparent pricing. <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>Zero surprises.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[16px] text-neutral-600">
            No consultancy fee. No hidden mark-ups. Just real freezone prices, packaged clearly.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={`rounded-[28px] p-8 h-full flex flex-col ${
                t.featured
                  ? "bg-[#0B0B0B] text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
                  : "bg-white border border-black/10 text-black"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[22px] font-bold tracking-tight" style={{ fontFamily: FONT }}>
                  {t.name}
                </h4>
                {t.featured && (
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: BRAND, color: "white" }}
                  >
                    Popular
                  </span>
                )}
              </div>
              <p className={`text-[14px] mb-7 ${t.featured ? "text-white/60" : "text-neutral-500"}`}>
                {t.desc}
              </p>
              <div className="mb-7">
                <span className="text-[44px] font-extrabold tracking-tight" style={{ fontFamily: FONT }}>
                  {t.price}
                </span>
                <span className={`ml-2 text-[13px] ${t.featured ? "text-white/60" : "text-neutral-500"}`}>
                  {t.note}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: t.featured ? "#fff" : BRAND }}
                      strokeWidth={2.5}
                    />
                    <span className={t.featured ? "text-white/90" : "text-neutral-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/checkout"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition ${
                  t.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:opacity-90"
                }`}
              >
                Choose {t.name} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS ────────────────────────────────────────── */
const quotes = [
  { q: "From signup to trade license in 4 days. The compliance autopilot alone is worth it.", n: "Aisha Rahman", r: "Founder, Lumen Studio" },
  { q: "We replaced our accountant, PRO and consultant — and pay less than we used to for one.", n: "Marc Devereaux", r: "CEO, Halo Trading FZE" },
  { q: "Honest pricing in this industry is rare. CSP just shows you the numbers and gets it done.", n: "Priya Nair", r: "Director, Northwind Logistics" },
];

const Testimonials = () => (
  <section className="py-24 lg:py-36">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <Reveal>
        <h2
          className="text-[40px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] font-extrabold text-black max-w-3xl mb-14"
          style={{ fontFamily: FONT }}
        >
          Founders who chose <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>the simpler way.</span>
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {quotes.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-3xl bg-white border border-black/10 p-8 h-full hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] transition">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="text-[17px] leading-relaxed text-black mb-6">"{t.q}"</p>
              <div>
                <div className="text-[14px] font-semibold text-black">{t.n}</div>
                <div className="text-[13px] text-neutral-500">{t.r}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQ ─────────────────────────────────────────────────── */
const faqs = [
  { q: "How long does it take to get a UAE trade license?", a: "Most freezone licenses are issued in 3–5 working days once we have your documents. We'll tell you upfront based on your activity and freezone." },
  { q: "Do you charge consultancy fees?", a: "No. We make money from clear, fixed packages — not hidden mark-ups. The price you see is the price you pay." },
  { q: "Which freezones do you cover?", a: "All major UAE freezones — IFZA, SHAMS, Meydan, RAKEZ, DMCC, DUQE and more — plus mainland setups." },
  { q: "What happens after I get my license?", a: "You move to our compliance autopilot: renewals, VAT, corporate tax and bookkeeping — handled, with deadlines tracked by AI." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-36 bg-neutral-50/60 border-y border-black/5">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2
            className="text-[40px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] font-extrabold text-black mb-14 text-center"
            style={{ fontFamily: FONT }}
          >
            Questions, <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>answered.</span>
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl bg-white border border-black/10 p-6 hover:border-black/30 transition"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[17px] font-semibold text-black" style={{ fontFamily: FONT }}>
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-[15px] text-neutral-600 leading-relaxed">{f.a}</p>
                </motion.div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FOOTER + FINAL CTA (attachment 4 style) ─────────────── */
const FooterBlock = () => (
  <section className="px-6 lg:px-10 pt-16 pb-6 relative">
    {/* Black CTA panel with soft gradient fade */}
    <div className="max-w-[1400px] mx-auto rounded-[36px] overflow-hidden relative">
      <div
        className="relative px-8 py-24 sm:py-32 lg:py-44 text-center"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #1a1a1a 0%, #0B0B0B 50%, #050505 100%)",
        }}
      >
        <Reveal>
          <h2
            className="text-[40px] sm:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.03em] font-extrabold text-white max-w-3xl mx-auto"
            style={{ fontFamily: FONT }}
          >
            Start your UAE business today.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[16px] text-white/65 max-w-lg mx-auto">
            CSPzone makes it effortless to launch, comply and grow — everything you need in one place.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href="#pricing"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold bg-white text-black hover:bg-white/90 transition"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </div>
    </div>

    {/* Footer card */}
    <div className="max-w-[1400px] mx-auto -mt-10 relative">
      <div className="rounded-[28px] bg-white border border-black/5 p-8 sm:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)]">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <img src={cspLogo} alt="CSPzone" className="h-7 w-auto mb-5" />
            <p className="text-[13.5px] text-neutral-500 leading-relaxed max-w-xs">
              CSPzone helps founders launch and run UAE businesses — formation,
              compliance and AI accounting, all in one place.
            </p>
          </div>
          {[
            { h: "Product", l: ["Formation", "Compliance", "AI Assistant", "Pricing"] },
            { h: "Resources", l: ["Documentation", "Guides", "Blog", "Support"] },
            { h: "Company", l: ["About", "Careers", "Contact", "Partners"] },
          ].map((c) => (
            <div key={c.h} className="md:col-span-2.5 md:[grid-column:span_2.66]">
              <div className="text-[13px] font-semibold text-black mb-4">{c.h}</div>
              <ul className="space-y-2.5 text-[13px] text-neutral-500">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-black transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-[12px] text-neutral-500">
          <span>© {new Date().getFullYear()} CSPzone. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black transition">Terms of Service</a>
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Giant ghost wordmark */}
      <div className="overflow-hidden mt-6 select-none pointer-events-none">
        <div
          className="text-center font-extrabold tracking-[-0.05em] leading-none whitespace-nowrap"
          style={{
            fontFamily: FONT,
            fontSize: "clamp(80px, 18vw, 280px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.08)",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          CSPzone
        </div>
      </div>
    </div>
  </section>
);

/* ─── MOBILE STICKY CTA ───────────────────────────────────── */
const MobileCTA = () => (
  <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
    <a
      href="#pricing"
      className="flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 text-[15px] font-semibold text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
      style={{ background: INK }}
    >
      Get started <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

/* ─── PAGE ────────────────────────────────────────────────── */
const NewDesign = () => {
  useFonts();
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: FONT }}>
      <Nav />
      <main className="pt-0">
        <Hero />
        <TrustBar />
        <Pillars />
        <DualCard />

        <DeepDive
          id="formation"
          eyebrow="Register · Formation"
          title={<>Your license, <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>in days — not months.</span></>}
          body="Skip the agents, the back-and-forth and the surprise invoices. Pick a freezone, share a few details, and we handle every step end-to-end."
          bullets={[
            "All major UAE freezones + mainland",
            "Trade license, MOA and establishment card",
            "Visa allocations & PRO services included",
            "Bank account introductions",
          ]}
          cta="Start your company"
          tone="tint"
          visual={
            <div className="relative aspect-[5/4] rounded-3xl bg-white border border-black/10 overflow-hidden p-8 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[12px] text-neutral-500">License preview</div>
                  <div className="text-[14px] font-semibold">IFZA · Commercial</div>
                </div>
              </div>
              <div className="space-y-3">
                {["Activity selected", "Documents collected", "Application filed", "License issued"].map(
                  (s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: i < 3 ? BRAND : "#EFF1F5",
                          color: i < 3 ? "white" : "#999",
                        }}
                      >
                        {i < 3 ? <Check className="w-3 h-3" strokeWidth={3} /> : <Clock className="w-3 h-3" />}
                      </div>
                      <span className="text-[14px] text-neutral-800">{s}</span>
                    </div>
                  )
                )}
              </div>
              <div className="text-[12px] text-neutral-500">Estimated: 3–5 working days</div>
            </div>
          }
        />

        <DeepDive
          id="compliance"
          eyebrow="Comply · Autopilot"
          title={<>Never miss a <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>single deadline.</span></>}
          body="License renewals, VAT, corporate tax, visa expiries — all tracked, all on time. We file what we can file. You're notified about everything else."
          bullets={[
            "License & visa renewal tracking",
            "Quarterly VAT preparation",
            "Corporate tax registration & filing",
            "Real-time compliance dashboard",
          ]}
          cta="See compliance plans"
          reverse
          tone="dark"
          visual={
            <div className="relative aspect-[5/4] rounded-3xl bg-[#111] border border-white/10 p-8 overflow-hidden">
              <div className="flex items-center gap-2 text-white/60 text-[12px] mb-6">
                <Bell className="w-3.5 h-3.5" /> Upcoming
              </div>
              <div className="space-y-3">
                {[
                  { t: "VAT Q2 filing", d: "Due in 14 days", c: "#34D399" },
                  { t: "Visa renewal — A. Khan", d: "Due in 32 days", c: BRAND },
                  { t: "Trade license", d: "Due in 84 days", c: "#FBBF24" },
                  { t: "Corporate tax return", d: "Due in 120 days", c: "#fff" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
                  >
                    <div>
                      <div className="text-white text-[14px] font-medium">{r.t}</div>
                      <div className="text-white/50 text-[12px]">{r.d}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ background: r.c }} />
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <DeepDive
          id="manage"
          eyebrow="Grow · AI Suite"
          title={<>An AI co-pilot for the <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>boring stuff.</span></>}
          body="Invoicing, bookkeeping, cashflow, expenses — ask in plain English, get answers, signed PDFs and filed reports. The way a finance team should feel."
          bullets={[
            "AI-powered bookkeeping & categorization",
            "Invoicing with AED multi-currency",
            "Cashflow forecasts in one tap",
            "Ask anything — get a real answer",
          ]}
          cta="Explore the suite"
          tone="light"
          visual={
            <div className="relative aspect-[5/4] rounded-3xl bg-[#0B0B0B] p-7 overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(27,23,255,0.55), transparent 55%)",
                }}
              />
              <div className="relative space-y-3">
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3 text-white/85 text-[13px] max-w-[80%]">
                  How much VAT do I owe this quarter?
                </div>
                <div
                  className="rounded-2xl px-4 py-3 text-white text-[13px] max-w-[85%] ml-auto"
                  style={{ background: BRAND }}
                >
                  AED 8,412 — based on 47 invoices and 23 expenses. I've drafted the return for review.
                </div>
                <div className="flex items-center gap-2 text-white/50 text-[11px] pt-2">
                  <Bot className="w-3.5 h-3.5" /> CSP Assistant · just now
                </div>
              </div>
            </div>
          }
        />

        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FooterBlock />
      </main>
      <MobileCTA />
    </div>
  );
};

export default NewDesign;
