import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  Star,
  Zap,
  LineChart,
  Smartphone,
  ShieldCheck,
  Headphones,
  Sparkles,
  PlugZap,
  Workflow,
  TrendingUp,
} from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import imgFounder from "@/assets/nd-hero-founder.jpg";
import imgStorefront from "@/assets/nd-hero-storefront.jpg";
import imgRegister from "@/assets/nd-register.jpg";
import imgComply from "@/assets/nd-comply.jpg";
import imgGrow from "@/assets/nd-grow.jpg";

/* ────────────────────────────────────────────────────────────
   /new-design — AirSuite-inspired layout for CSPzone
   Accent: #1B17FF (electric blue logo color)
   Type:   Instrument Serif italic accents + Inter body
──────────────────────────────────────────────────────────── */

const BRAND = "#1B17FF";
const BRAND_SOFT = "#E6E5FF";
const INK = "#0B0B0B";
const SURFACE = "#F2F3F5";

const SERIF = "'Instrument Serif', serif";
const FONT = "'Inter', sans-serif";
const ease = [0.22, 1, 0.36, 1] as const;

const useFonts = () => {
  useEffect(() => {
    const id = "nd-fonts";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id;
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap";
    document.head.appendChild(l);
  }, []);
};

/* ───────── motion helpers — match AirSuite feel: soft fade + 24px rise ───────── */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease },
};

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
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ───────── Nav ───────── */

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all"
      style={{
        background: scrolled ? "rgba(242,243,245,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/new-design" className="flex items-center gap-2">
          <img src={cspLogo} alt="CSPzone" className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[15px]" style={{ color: INK }}>
          <a href="#home" style={{ color: BRAND }} className="font-medium">Home</a>
          <a href="#features" className="hover:opacity-70 transition">Features</a>
          <a href="#pricing" className="hover:opacity-70 transition">Pricing</a>
          <a href="#about" className="hover:opacity-70 transition">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-5 h-11 rounded-full bg-white text-[14px] font-medium hover:shadow-sm transition"
            style={{ color: INK }}
          >
            Sign in
          </Link>
          <Link
            to="/checkout"
            className="inline-flex items-center px-5 h-11 rounded-full text-white text-[14px] font-medium hover:opacity-90 transition"
            style={{ background: BRAND }}
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

/* ───────── Hero ───────── */

const Hero = () => (
  <section id="home" className="px-4 sm:px-6 lg:px-10 pt-4 pb-16 lg:pb-24" style={{ background: SURFACE }}>
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-5">
      {/* left card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[560px]"
      >
        <div>
          <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-[#F2F3F5]">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white"
              style={{ background: BRAND }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              New
            </span>
            <span className="text-[13px]" style={{ color: INK }}>
              Zero consultancy fee setup
            </span>
            <ArrowRight className="w-3.5 h-3.5" style={{ color: INK }} />
          </div>

          <h1
            className="mt-8 text-[44px] sm:text-[58px] lg:text-[70px] leading-[1.02] tracking-[-0.02em] font-medium"
            style={{ color: INK, fontFamily: FONT }}
          >
            Your go-to app
            <br />
            for launching your{" "}
            <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
              freezone
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[16px] leading-[1.55] text-[#4A4A4A]">
            Setting up your UAE company is effortless with our self-service platform —
            transparent pricing, real-time tracking, zero consultancy fees.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/checkout"
            className="inline-flex items-center gap-2 px-7 h-14 rounded-full text-white font-medium text-[15px] hover:opacity-90 transition"
            style={{ background: INK }}
          >
            Start your company
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* right photo card with floating stat chips */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className="relative rounded-[28px] overflow-hidden min-h-[560px]"
      >
        <img src={imgFounder} alt="UAE founder" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />

        {/* floating stat - bottom-left */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="absolute bottom-8 left-8 right-auto bg-white rounded-2xl p-4 shadow-xl w-[230px]"
        >
          <div className="text-[12px] text-[#6B7280] font-medium mb-2">Setup Progress</div>
          <div className="flex items-end gap-1.5 h-16">
            {[35, 55, 40, 70, 95, 60, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.7, delay: 0.9 + i * 0.06, ease }}
                className="flex-1 rounded-md"
                style={{ background: i === 4 ? BRAND : BRAND_SOFT }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-[#9CA3AF]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
        </motion.div>

        {/* floating stat - top-right */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease }}
          className="absolute top-8 right-8 bg-white rounded-2xl px-5 py-4 shadow-xl"
        >
          <div className="text-[12px] text-[#6B7280] font-medium">Licenses issued</div>
          <div className="text-[24px] font-semibold mt-0.5" style={{ color: INK }}>
            2,480<span style={{ color: BRAND }}>+</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ───────── Logo bar ───────── */

const LogoBar = () => (
  <section className="px-4 sm:px-6 lg:px-10 pb-16" style={{ background: SURFACE }}>
    <Reveal>
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-center">
        <p className="text-[15px] text-[#4A4A4A] max-w-xs">
          Trusted by fast-growing companies across the UAE and the region
        </p>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 opacity-60">
          {["IFZA", "Meydan", "DMCC", "RAKEZ", "SHAMS", "Ajman", "Sharjah"].map((b) => (
            <span key={b} className="text-[20px] tracking-tight font-semibold" style={{ color: INK }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

/* ───────── How it works (4 icon cards) ───────── */

const HowItWorks = () => {
  const items = [
    { icon: Sparkles, title: "Pick your freezone", body: "Compare 40+ UAE freezones and choose the one that matches your activity & budget." },
    { icon: PlugZap, title: "Submit & pay online", body: "Fill the application, upload your passport, pay securely — fully digital, no paperwork chaos." },
    { icon: Workflow, title: "We process everything", body: "Our team handles approvals, license issuance, and Emirates ID — you track every step live." },
    { icon: Headphones, title: "24/7 founder support", body: "Talk to a real person whenever you need — from bank account opening to visa renewals." },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              How it Works
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              Unlock the full potential of your{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                UAE business
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div
                className="rounded-2xl p-7 h-full transition hover:-translate-y-1"
                style={{ background: SURFACE }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "white" }}
                >
                  <it.icon className="w-6 h-6" style={{ color: BRAND }} />
                </div>
                <h3 className="mt-6 text-[19px] font-semibold" style={{ color: INK }}>
                  {it.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-[#4A4A4A]">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── 4 simple steps — image cards ───────── */

const Steps = () => {
  const steps = [
    { tag: "Step 1", title: "Apply in minutes", body: "Submit your details once — we pre-fill everything across freezones.", img: imgRegister },
    { tag: "Step 2", title: "Set your activity", body: "Tell us what you'll do and we'll match the right license type.", img: imgComply },
    { tag: "Step 3", title: "Track your license", body: "Real-time progress, document checklist, and status alerts — no chasing.", img: imgGrow },
    { tag: "Step 4", title: "Launch & grow", body: "Get your license, Emirates ID and bank intro — start trading the same week.", img: imgStorefront },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28" style={{ background: SURFACE }}>
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              How It Works
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              Everything comes together in{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                4 simple steps
              </span>
            </h2>
            <p className="mt-4 text-[15px] text-[#4A4A4A]">
              The exact playbook hundreds of founders use to set up in the UAE — with zero hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.tag} delay={i * 0.08}>
              <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col transition hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden" style={{ background: SURFACE }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <span
                    className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: BRAND_SOFT, color: BRAND }}
                  >
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-[18px] font-semibold" style={{ color: INK }}>
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[#4A4A4A]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center px-6 h-12 rounded-full bg-white text-[14px] font-medium hover:shadow-sm transition"
              style={{ color: INK }}
            >
              Browse all packages
            </Link>
            <Link
              to="/checkout"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-full text-white text-[14px] font-medium hover:opacity-90 transition"
              style={{ background: BRAND }}
            >
              Get started for free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ───────── Features (asymmetric 4-card grid) ───────── */

const Features = () => (
  <section id="features" className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 bg-white">
    <div className="max-w-[1280px] mx-auto">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              Features
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              What makes us{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                different
              </span>
            </h2>
          </div>
          <p className="text-[15px] text-[#4A4A4A] max-w-md md:justify-self-end">
            Built for founders, not consultants. Transparent pricing, real-time tracking,
            and the only platform that covers every UAE freezone in one place.
          </p>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* tall card */}
        <Reveal>
          <div className="rounded-3xl p-7 h-full flex flex-col" style={{ background: SURFACE }}>
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <Zap className="w-5 h-5" style={{ color: BRAND }} />
            </div>
            <h3 className="mt-6 text-[20px] font-semibold" style={{ color: INK }}>
              Quick insights
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[#4A4A4A]">
              Compare freezone packages side-by-side with real costs — visa quotas, office types,
              activity lists — in seconds.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-5 flex-1 flex flex-col justify-end">
              <div className="text-[12px] text-[#6B7280]">Avg. comparison time</div>
              <div className="text-[34px] font-semibold tracking-tight" style={{ color: INK }}>
                12s
              </div>
              <div className="mt-3 h-2 rounded-full bg-[#EFEFEF] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease, delay: 0.2 }}
                  className="h-full rounded-full"
                  style={{ background: BRAND }}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* large card spanning 2 cols */}
        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="rounded-3xl p-7 h-full flex flex-col lg:flex-row gap-6" style={{ background: INK, color: "white" }}>
            <div className="lg:max-w-sm">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <LineChart className="w-5 h-5" style={{ color: "white" }} />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold">Personalized reports</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-white/70">
                Automated compliance reports, license expiry reminders and renewal workflows —
                so nothing slips through the cracks.
              </p>
            </div>
            <div className="flex-1 rounded-2xl bg-white/5 p-5 border border-white/10">
              <div className="flex items-center justify-between text-[12px] text-white/60 mb-3">
                <span>Compliance Overview</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: BRAND, color: "white" }}>LIVE</span>
              </div>
              {[
                { label: "Trade License", status: "Active", pct: 100 },
                { label: "Establishment Card", status: "Renewing", pct: 78 },
                { label: "Emirates ID", status: "Active", pct: 100 },
                { label: "VAT Filing — Q3", status: "Auto-prepared", pct: 92 },
              ].map((r, i) => (
                <div key={r.label} className="py-2.5 border-t border-white/10 first:border-t-0">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-white">{r.label}</span>
                    <span className="text-white/60">{r.status}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: BRAND }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* bottom row */}
        <Reveal delay={0.06} className="lg:col-span-2">
          <div className="rounded-3xl p-7 h-full grid sm:grid-cols-[1fr_auto] gap-6 items-center" style={{ background: SURFACE }}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Smartphone className="w-5 h-5" style={{ color: BRAND }} />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold" style={{ color: INK }}>
                Stay on top — anywhere
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[#4A4A4A] max-w-md">
                Approve documents, track applications, and chat with your specialist from one app —
                whether you're in Dubai or Delhi.
              </p>
            </div>
            <div className="hidden sm:block w-[180px] h-[230px] rounded-3xl bg-white p-3 shadow-sm">
              <div className="h-full rounded-2xl flex flex-col" style={{ background: INK }}>
                <div className="p-3 text-[10px] text-white/60">CSPzone · iOS</div>
                <div className="flex-1 p-3 space-y-2">
                  {["License approved", "Visa stamping", "Bank intro ready"].map((t, i) => (
                    <div key={t} className="rounded-lg bg-white/5 p-2.5 text-[10px] text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-3xl p-7 h-full flex flex-col" style={{ background: SURFACE }}>
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" style={{ color: BRAND }} />
            </div>
            <h3 className="mt-6 text-[20px] font-semibold" style={{ color: INK }}>
              Stay safe
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[#4A4A4A]">
              Bank-grade encryption, role-based access and full audit trails — your KYC documents
              are handled the way regulated institutions handle them.
            </p>
            <div className="mt-auto pt-6 flex items-center gap-2 text-[12px] text-[#4A4A4A]">
              <ShieldCheck className="w-4 h-4" style={{ color: BRAND }} />
              ISO 27001 · GDPR compliant
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ───────── Pricing ───────── */

type Plan = { name: string; price: string; tagline: string; features: string[]; featured?: boolean };

const monthly: Plan[] = [
  { name: "Starter", price: "$10", tagline: "Kick off your UAE journey", features: ["Freezone comparison", "Self-service application", "Email support", "Document vault", "License tracking"] },
  { name: "Professional", price: "$70", tagline: "For founders who want it done right", features: ["Everything in Starter", "Dedicated specialist", "Bank account intro", "Visa coordination", "Priority support"], featured: true },
  { name: "Teams", price: "$130", tagline: "For companies and group structures", features: ["Everything in Professional", "Multiple shareholders", "Custom corporate setup", "VAT & accounting add-on", "Phone support"] },
];
const annual: Plan[] = [
  { name: "Starter", price: "$6", tagline: "Kick off your UAE journey", features: monthly[0].features },
  { name: "Professional", price: "$49", tagline: "For founders who want it done right", features: monthly[1].features, featured: true },
  { name: "Teams", price: "$99", tagline: "For companies and group structures", features: monthly[2].features },
];

const Pricing = () => {
  const [annualOn, setAnnualOn] = useState(false);
  const plans = annualOn ? annual : monthly;
  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              Pricing
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              Choose a{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                pricing plan
              </span>
            </h2>
            <p className="mt-4 text-[15px] text-[#4A4A4A]">
              Transparent pricing — no consultancy fees, ever.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex p-1 rounded-full" style={{ background: SURFACE }}>
              <button
                onClick={() => setAnnualOn(false)}
                className="px-5 h-10 rounded-full text-[13px] font-medium transition"
                style={{ background: !annualOn ? "white" : "transparent", color: INK, boxShadow: !annualOn ? "0 1px 2px rgba(0,0,0,.04)" : "none" }}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setAnnualOn(true)}
                className="px-5 h-10 rounded-full text-[13px] font-medium transition flex items-center gap-2"
                style={{ background: annualOn ? "white" : "transparent", color: INK, boxShadow: annualOn ? "0 1px 2px rgba(0,0,0,.04)" : "none" }}
              >
                Annual billing <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: BRAND_SOFT, color: BRAND }}>Save 20%</span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col"
                style={{
                  background: p.featured ? INK : SURFACE,
                  color: p.featured ? "white" : INK,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold" style={{ color: p.featured ? "white" : INK }}>
                    {p.name}
                  </span>
                  {p.featured && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full font-semibold" style={{ background: BRAND, color: "white" }}>
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-[44px] font-medium tracking-tight">{p.price}</span>
                  <span className={p.featured ? "text-white/60 text-[14px]" : "text-[#6B7280] text-[14px]"}>/mth</span>
                </div>
                <p className={`mt-1 text-[14px] ${p.featured ? "text-white/70" : "text-[#4A4A4A]"}`}>{p.tagline}</p>
                <Link
                  to="/checkout"
                  className="mt-6 inline-flex items-center justify-center h-12 rounded-full text-[14px] font-medium transition"
                  style={{
                    background: p.featured ? BRAND : "white",
                    color: p.featured ? "white" : INK,
                  }}
                >
                  Free 14-day trial
                </Link>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.featured ? BRAND : BRAND }} />
                      <span className={p.featured ? "text-white/85" : "text-[#2A2A2A]"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── Testimonials marquee ───────── */

const testimonials = [
  { quote: "We launched our IFZA company in 6 days. The dashboard made every step visible — no chasing, no surprises. This is how UAE setup should always feel.", name: "Rohan M.", role: "Founder, Drift Studio" },
  { quote: "Switched from a traditional consultant to CSPzone and saved AED 8,000 in fees. Same license, same speed, better experience.", name: "Aisha K.", role: "CEO, Verdant Trading" },
  { quote: "Compliance reminders alone are worth it. License renewal, establishment card, VAT — all automated. We finally sleep at night.", name: "Daniel P.", role: "COO, NorthCloud" },
  { quote: "The team is sharp, responsive, and refreshingly honest about what each freezone actually costs. Rare combination.", name: "Mei L.", role: "Founder, Lumen Labs" },
];

const Testimonials = () => (
  <section className="py-20 lg:py-28 overflow-hidden" style={{ background: SURFACE }}>
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
            Testimonials
          </span>
          <h2
            className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
            style={{ color: INK, fontFamily: FONT }}
          >
            See what founders say{" "}
            <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
              about us
            </span>
          </h2>
        </div>
      </Reveal>
    </div>

    <Reveal delay={0.1}>
      <div className="mt-14 relative" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[420px] bg-white rounded-3xl p-7 flex flex-col"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: BRAND }} />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-[1.55] text-[#2A2A2A]">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-semibold text-white" style={{ background: BRAND }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[14px] font-semibold" style={{ color: INK }}>{t.name}</div>
                  <div className="text-[12px] text-[#6B7280]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Reveal>
  </section>
);

/* ───────── FAQ ───────── */

const faqs = [
  { q: "Do I need to be in the UAE to set up?", a: "No — the entire process is remote. We handle approvals digitally and ship your documents wherever you are." },
  { q: "How quickly can my license be issued?", a: "Most freezones issue licenses in 3–7 working days once your documents are submitted." },
  { q: "What's actually included in the price?", a: "License fee, registration, name approval, and our service fee. Visa, Emirates ID and office costs are itemized separately — no hidden charges." },
  { q: "Can you help open a bank account?", a: "Yes. We introduce you to multiple UAE banks based on your business profile and assist with the application." },
  { q: "Is there ongoing support after setup?", a: "Yes — license renewals, visa management, accounting and compliance reminders are all available from your dashboard." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <div>
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              FAQ
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              Frequently asked{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                questions
              </span>
            </h2>
            <p className="mt-4 text-[15px] text-[#4A4A4A]">
              Everything you need to know about setting up your company with CSPzone.
              Still curious? Talk to us.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-5 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[16px] font-medium" style={{ color: INK }}>{f.q}</span>
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition"
                      style={{ background: isOpen ? BRAND : SURFACE, color: isOpen ? "white" : INK }}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pt-3 pr-12 text-[14.5px] leading-[1.6] text-[#4A4A4A]">{f.a}</p>
                  </motion.div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ───────── Integrations marquee ───────── */

const integrationItems = ["IFZA", "Meydan", "DMCC", "RAKEZ", "SHAMS", "Ajman Free Zone", "Sharjah Publishing", "Wio Bank", "Emirates NBD", "Mashreq Neo", "Zoho Books", "QuickBooks", "Stripe UAE", "Telr", "Network International"];

const Integrations = () => (
  <section className="py-20 lg:py-28 overflow-hidden" style={{ background: SURFACE }}>
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
            Integrations
          </span>
          <h2
            className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
            style={{ color: INK, fontFamily: FONT }}
          >
            Seamless setup across every{" "}
            <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
              freezone
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-[#4A4A4A]">
            CSPzone connects directly with UAE freezone authorities and banks — so your application
            moves from submitted to approved without back-and-forth.
          </p>
        </div>
      </Reveal>
    </div>

    {[0, 1].map((row) => (
      <Reveal key={row} delay={0.05 * row}>
        <div className="mt-8 relative" style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}>
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...integrationItems, ...integrationItems].map((name, i) => (
              <div key={i} className="bg-white rounded-2xl px-6 h-16 flex items-center gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: BRAND_SOFT, color: BRAND }}>
                  <span className="text-[12px] font-bold">{name.charAt(0)}</span>
                </div>
                <span className="text-[14px] font-medium" style={{ color: INK }}>{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Reveal>
    ))}
  </section>
);

/* ───────── Blog ───────── */

const posts = [
  { title: "How real-time tracking transforms UAE company setup", excerpt: "From application to license: why visibility into every step changes the founder experience.", img: imgRegister },
  { title: "Choosing the right freezone in 2026 — a founder's guide", excerpt: "IFZA vs Meydan vs DMCC — what actually matters when you compare 40+ jurisdictions.", img: imgComply },
  { title: "Bank account opening in the UAE — what to prepare", excerpt: "Documents, profiles, and the timeline that actually gets your account approved.", img: imgGrow },
];

const Blog = () => (
  <section className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 bg-white">
    <div className="max-w-[1280px] mx-auto">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-6 items-end mb-12">
          <div>
            <span className="text-[13px] uppercase tracking-[0.18em] font-medium" style={{ color: BRAND }}>
              Blog
            </span>
            <h2
              className="mt-4 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium"
              style={{ color: INK, fontFamily: FONT }}
            >
              Insights for{" "}
              <span className="italic font-normal" style={{ color: BRAND, fontFamily: SERIF }}>
                ambitious founders
              </span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link to="/blog" className="inline-flex items-center gap-2 px-5 h-11 rounded-full text-[14px] font-medium" style={{ background: SURFACE, color: INK }}>
              Browse all articles <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Link to="/blog" className="block rounded-3xl overflow-hidden group" style={{ background: SURFACE }}>
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-semibold leading-[1.3]" style={{ color: INK }}>{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#4A4A4A]">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium" style={{ color: BRAND }}>
                  Read post <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── Final CTA ───────── */

const FinalCTA = () => (
  <section className="px-4 sm:px-6 lg:px-10 py-12" style={{ background: SURFACE }}>
    <div className="max-w-[1280px] mx-auto">
      <Reveal>
        <div
          className="rounded-[32px] p-10 sm:p-16 text-center relative overflow-hidden"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${BRAND} 0%, #0B0B0B 70%)`,
            color: "white",
          }}
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-white/70">
            Get Started
          </span>
          <h2
            className="mt-3 text-[40px] sm:text-[60px] leading-[1.05] tracking-[-0.02em] font-medium max-w-3xl mx-auto"
            style={{ fontFamily: FONT }}
          >
            Ready to launch your{" "}
            <span className="italic font-normal" style={{ color: "#B3B0FF", fontFamily: SERIF }}>
              UAE business?
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-white/70 max-w-md mx-auto">
            Join 2,400+ founders who chose transparent, self-service company setup.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2 p-2 rounded-full bg-white/10 backdrop-blur"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 h-12 text-[14px] text-white placeholder:text-white/50 outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full text-[14px] font-medium text-white"
              style={{ background: BRAND }}
            >
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ───────── Footer ───────── */

const FooterBlock = () => (
  <footer id="about" className="px-4 sm:px-6 lg:px-10 pb-10" style={{ background: SURFACE }}>
    <div className="max-w-[1280px] mx-auto bg-white rounded-[32px] p-10 lg:p-14">
      <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <img src={cspLogo} alt="CSPzone" className="h-7" />
          <p className="mt-5 text-[14px] leading-[1.6] text-[#4A4A4A] max-w-xs">
            The self-service platform for UAE company setup.
            Transparent pricing, real-time tracking, zero consultancy fees.
          </p>
        </div>
        {[
          { h: "Product", links: ["Features", "Pricing", "Integrations", "Blog"] },
          { h: "Company", links: ["About", "Customers", "Careers", "Contact"] },
          { h: "Legal", links: ["Terms", "Privacy", "Security", "Cookies"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-[13px] font-semibold mb-4" style={{ color: INK }}>{c.h}</div>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[14px] text-[#4A4A4A] hover:opacity-70">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[13px] text-[#6B7280]">© 2026 CSPzone. All rights reserved.</span>
        <span className="text-[13px] text-[#6B7280]">Made with care in the UAE 🇦🇪</span>
      </div>

      <div className="mt-10 select-none text-center leading-none overflow-hidden">
        <span
          className="block font-medium tracking-[-0.04em]"
          style={{
            fontFamily: FONT,
            fontSize: "clamp(80px, 18vw, 260px)",
            color: "transparent",
            WebkitTextStroke: "1px #DCDCDC",
          }}
        >
          CSP<span style={{ fontFamily: SERIF, fontStyle: "italic", WebkitTextStroke: `1px ${BRAND}` }}>zone</span>
        </span>
      </div>
    </div>
  </footer>
);

/* ───────── Page ───────── */

const NewDesign = () => {
  useFonts();
  return (
    <div style={{ fontFamily: FONT, background: SURFACE, color: INK }}>
      <Nav />
      <Hero />
      <LogoBar />
      <HowItWorks />
      <Steps />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Integrations />
      <Blog />
      <FinalCTA />
      <FooterBlock />
    </div>
  );
};

export default NewDesign;
