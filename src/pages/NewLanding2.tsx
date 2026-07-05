import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BarChart3,
  Bell,
  Building2,
  Check,
  FileCheck2,
  FolderLock,
  Globe2,
  IdCard,
  LineChart,
  Minus,
  Plus,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Stamp,
  Wallet,
} from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import imgFounder from "@/assets/nd-hero-founder.jpg";
import imgStorefront from "@/assets/nd-hero-storefront.jpg";
import imgRegister from "@/assets/nd-register.jpg";
import imgComply from "@/assets/nd-comply.jpg";
import imgGrow from "@/assets/nd-grow.jpg";

/* ---------- Antigravity-inspired tokens ---------- */
const INK = "#0B0C0F";
const GREY = "#5F6368";
const FOG = "#F4F5F7";
const LINE = "#E8EAED";
const BRAND = "#1B36FF";
const FONT = "'Figtree', system-ui, sans-serif";
const ease = [0.22, 1, 0.36, 1] as const;

const useFonts = () => {
  useEffect(() => {
    const id = "new-landing-2-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
};

const StyleBlock = () => (
  <style>{`
    .nl2-float { animation: nl2-float 6s ease-in-out infinite; }
    .nl2-float-b { animation: nl2-float 7.2s ease-in-out infinite reverse; }
    .nl2-float-c { animation: nl2-float 8.4s ease-in-out infinite; animation-delay: -2.4s; }
    @keyframes nl2-float { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-12px,0); } }
    @media (prefers-reduced-motion: reduce) { .nl2-float, .nl2-float-b, .nl2-float-c { animation: none; } }
  `}</style>
);

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const PillLink = ({
  to,
  children,
  dark = false,
  onLight = true,
}: {
  to: string;
  children: React.ReactNode;
  dark?: boolean;
  onLight?: boolean;
}) => (
  <Link
    to={to}
    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.03]"
    style={
      dark
        ? { background: INK, color: "white" }
        : onLight
          ? { background: FOG, color: INK }
          : { background: "white", color: INK }
    }
  >
    {children}
  </Link>
);

/* ---------- Nav ---------- */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,.86)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${LINE}` : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link to="/new-landing-2" aria-label="CSPzone home" className="flex items-center gap-2.5">
          <img src={cspLogo} alt="CSPzone" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-9 text-[15px] font-medium md:flex" style={{ color: INK }}>
          <a href="#platform" className="transition hover:opacity-55">Platform</a>
          <a href="#founders" className="transition hover:opacity-55">Founders</a>
          <a href="#pricing" className="transition hover:opacity-55">Pricing</a>
          <a href="#faq" className="transition hover:opacity-55">FAQ</a>
        </nav>
        <div className="flex items-center gap-2.5">
          <Link to="/login" className="hidden h-11 items-center rounded-full px-5 text-[15px] font-semibold transition hover:opacity-60 sm:inline-flex" style={{ color: INK }}>
            Sign in
          </Link>
          <Link to="/checkout" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03]" style={{ background: INK }}>
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

/* ---------- Hero ---------- */
const Hero = () => (
  <section className="bg-white px-5 pb-10 pt-[150px] text-center sm:px-8 lg:pt-[176px]">
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
      <div className="inline-flex items-center gap-2.5">
        <img src={cspLogo} alt="" className="h-6 w-auto" />
        <span className="text-[17px] font-semibold" style={{ color: GREY }}>CSPzone</span>
      </div>
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease, delay: 0.08 }}
      className="mx-auto mt-7 max-w-[1060px] font-semibold"
      style={{ color: INK, fontSize: "clamp(46px, 7vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
    >
      Experience liftoff for your UAE business
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.18 }}
      className="mx-auto mt-7 max-w-[560px] text-[18px] leading-[1.6]"
      style={{ color: GREY }}
    >
      Launch, comply, and grow across 40+ freezones with zero consultancy fees and total transparency.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.26 }}
      className="mt-9 flex flex-wrap items-center justify-center gap-3"
    >
      <PillLink to="/checkout" dark>
        <Rocket className="h-4 w-4" /> Start your company
      </PillLink>
      <PillLink to="/services">Explore packages</PillLink>
    </motion.div>
  </section>
);

/* ---------- Hero media frame with floating chips ---------- */
const chipsLeft = [Building2, Stamp, FileCheck2, Wallet, IdCard];
const chipsRight = [Globe2, Banknote, BarChart3, Bell, ShieldCheck];

const Chip = ({ Icon, className = "" }: { Icon: typeof Building2; className?: string }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(11,12,15,.10)] ${className}`}>
    <Icon className="h-5 w-5" style={{ color: INK }} />
  </div>
);

const HeroMedia = () => (
  <section className="bg-white px-5 pb-24 pt-8 sm:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.95, ease, delay: 0.3 }}
      className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px]"
      style={{ background: `radial-gradient(120% 130% at 50% 0%, #E9EDFF 0%, ${FOG} 55%, #FFFFFF 100%)` }}
    >
      {/* floating icon chips */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="nl2-float absolute left-[6%] top-[18%]"><Chip Icon={chipsLeft[0]} /></div>
        <div className="nl2-float-b absolute left-[11%] top-[52%]"><Chip Icon={chipsLeft[1]} /></div>
        <div className="nl2-float-c absolute left-[5%] top-[78%]"><Chip Icon={chipsLeft[2]} /></div>
        <div className="nl2-float-b absolute left-[17%] top-[30%] opacity-70"><Chip Icon={chipsLeft[3]} /></div>
        <div className="nl2-float absolute left-[15%] top-[70%] opacity-70"><Chip Icon={chipsLeft[4]} /></div>
        <div className="nl2-float-b absolute right-[6%] top-[20%]"><Chip Icon={chipsRight[0]} /></div>
        <div className="nl2-float absolute right-[11%] top-[50%]"><Chip Icon={chipsRight[1]} /></div>
        <div className="nl2-float-c absolute right-[5%] top-[76%]"><Chip Icon={chipsRight[2]} /></div>
        <div className="nl2-float absolute right-[17%] top-[32%] opacity-70"><Chip Icon={chipsRight[3]} /></div>
        <div className="nl2-float-b absolute right-[15%] top-[68%] opacity-70"><Chip Icon={chipsRight[4]} /></div>
      </div>

      {/* dashboard mock */}
      <div className="mx-auto max-w-[860px] px-5 pb-0 pt-14 sm:px-8 lg:pt-20">
        <div className="overflow-hidden rounded-t-[24px] shadow-[0_40px_100px_rgba(11,12,15,.18)]" style={{ background: INK }}>
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-[12px] font-medium text-white/45">cspzone.com / dashboard</span>
            <span className="ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white" style={{ background: BRAND }}>LIVE</span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_.9fr] sm:p-7">
            <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5">
              <p className="text-[12px] font-semibold text-white/50">Application progress</p>
              <div className="mt-4 space-y-3.5">
                {[
                  ["Trade license", "Issued", 100],
                  ["Establishment card", "In review", 72],
                  ["Visa allocation", "Processing", 48],
                ].map(([label, status, pct], index) => (
                  <div key={String(label)}>
                    <div className="flex items-center justify-between text-[13px] text-white">
                      <span>{label}</span>
                      <span className="text-white/45">{status}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.12, ease }}
                        className="h-full rounded-full"
                        style={{ background: BRAND }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5">
                <p className="text-[12px] font-semibold text-white/50">Setup savings</p>
                <p className="mt-1.5 text-[30px] font-bold text-white">AED 8,000+</p>
                <p className="text-[12px] text-white/45">vs. traditional consultants</p>
              </div>
              <div className="hidden rounded-2xl border border-white/10 bg-white/[.05] p-5 sm:block">
                <p className="text-[12px] font-semibold text-white/50">Next action</p>
                <p className="mt-1.5 text-[14px] font-semibold text-white">Upload shareholder passport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

/* ---------- Scroll word reveal ---------- */
const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {children}
    </motion.span>
  );
};

const ScrollStatement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.82", "end 0.42"] });
  const text =
    "CSPzone is the self-service platform for UAE company setup, letting any founder register, comply, and grow in the zero-consultancy era.";
  const words = text.split(" ");

  return (
    <section className="bg-white px-5 py-28 sm:px-8 lg:py-40">
      <div ref={ref} className="mx-auto max-w-[1060px]">
        <img src={cspLogo} alt="" className="mb-9 h-9 w-auto" />
        <p className="font-semibold" style={{ color: INK, fontSize: "clamp(30px, 4.4vw, 58px)", lineHeight: 1.14, letterSpacing: "-0.02em" }}>
          {words.map((word, index) => (
            <Word key={index} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
};

/* ---------- Sticky stacked platform cards ---------- */
const pillars = [
  {
    tag: "CSPzone Formation",
    title: "Company formation, without the middlemen",
    body: "Compare 40+ freezones by activity, visa quota, timeline, and true total cost. Apply online with clear government fees shown before you pay a dirham.",
    image: imgRegister,
    cta: "Compare freezones",
    to: "/services",
    dark: false,
  },
  {
    tag: "CSPzone Compliance",
    title: "Compliance that runs itself",
    body: "VAT, corporate tax, bookkeeping, and renewal deadlines tracked automatically. Encrypted document vault, audit trails, and reminders before anything expires.",
    image: imgComply,
    cta: "See compliance tools",
    to: "/services",
    dark: true,
  },
  {
    tag: "CSPzone Growth",
    title: "Visas, banking, and everything after",
    body: "Request visas, get bank introductions, and add PRO services as you scale — all coordinated from the same dashboard that issued your license.",
    image: imgGrow,
    cta: "Explore growth services",
    to: "/services",
    dark: false,
  },
  {
    tag: "CSPzone Dashboard",
    title: "Your command center for the UAE",
    body: "One dashboard for applications, payments, licenses, and support. Track every approval in real time — no chasing consultants, ever.",
    image: imgFounder,
    cta: "Explore the dashboard",
    to: "/dashboard",
    dark: true,
  },
];

const Pillars = () => (
  <section id="platform" className="bg-white px-5 pb-28 sm:px-8">
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <h2 className="max-w-[760px] font-semibold" style={{ color: INK, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
          One platform. Every stage of your company.
        </h2>
      </Reveal>
      <div className="mt-14 space-y-6">
        {pillars.map((pillar, index) => (
          <div key={pillar.tag} className="sticky" style={{ top: `${88 + index * 14}px` }}>
            <div
              className="grid overflow-hidden rounded-[32px] lg:grid-cols-2"
              style={{ background: pillar.dark ? INK : FOG }}
            >
              <div className="flex flex-col justify-center p-9 sm:p-12 lg:p-16">
                <p className="text-[14px] font-semibold" style={{ color: pillar.dark ? "#9DA8FF" : BRAND }}>{pillar.tag}</p>
                <h3 className="mt-4 max-w-[440px] text-[30px] font-semibold leading-[1.1] sm:text-[38px]" style={{ color: pillar.dark ? "white" : INK, letterSpacing: "-0.02em" }}>
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-[460px] text-[16px] leading-[1.65]" style={{ color: pillar.dark ? "rgba(255,255,255,.62)" : GREY }}>
                  {pillar.body}
                </p>
                <Link
                  to={pillar.to}
                  className="mt-8 inline-flex w-fit min-h-[48px] items-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-transform duration-200 hover:scale-[1.03]"
                  style={pillar.dark ? { background: "white", color: INK } : { background: INK, color: "white" }}
                >
                  {pillar.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={pillar.image} alt={pillar.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Built for founders ---------- */
const founderCases = [
  {
    title: "First-time founder",
    body: "Go from idea to trade license in days with a guided flow, clear costs, and support when you need a human.",
    image: imgFounder,
  },
  {
    title: "E-commerce founder",
    body: "Get the right license for online trade, payment gateway readiness, and product import rules — without guesswork.",
    image: imgStorefront,
  },
  {
    title: "Enterprise & holding",
    body: "Structure multiple shareholders, corporate entities, and group setups with full document control and audit trails.",
    image: imgRegister,
  },
];

const Founders = () => (
  <section id="founders" className="px-5 py-28 sm:px-8" style={{ background: FOG }}>
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <h2 className="mx-auto max-w-[720px] text-center font-semibold" style={{ color: INK, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
          Built for founders in the transparency-first era
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mx-auto mt-6 max-w-[600px] text-center text-[17px] leading-[1.65]" style={{ color: GREY }}>
          Whether you are launching your first company or restructuring a group, CSPzone is built for trust — with every fee visible before you commit.
        </p>
      </Reveal>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {founderCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <div className="group overflow-hidden rounded-[28px] bg-white transition-transform duration-300 hover:-translate-y-1.5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3.5 py-1.5 text-[13px] font-semibold backdrop-blur" style={{ color: INK }}>
                  <img src={cspLogo} alt="" className="h-3.5 w-auto" /> {item.title}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-[21px] font-semibold" style={{ color: INK, letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.62]" style={{ color: GREY }}>{item.body}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold transition hover:gap-2.5" style={{ color: INK }}>
                  View case <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Steps strip ---------- */
const steps = [
  { icon: Building2, title: "Pick your freezone", body: "Compare cost, visas, and timelines side by side." },
  { icon: FileCheck2, title: "Submit documents", body: "Upload passports and complete KYC fully online." },
  { icon: LineChart, title: "Track approvals", body: "Watch every stage move live from your dashboard." },
  { icon: Stamp, title: "Receive your license", body: "Get issued, open banking, and start trading." },
];

const Steps = () => (
  <section className="bg-white px-5 py-28 sm:px-8">
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[560px] font-semibold" style={{ color: INK, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            From application to license in four steps
          </h2>
          <PillLink to="/checkout" dark>Start now <ArrowRight className="h-4 w-4" /></PillLink>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] sm:grid-cols-2 lg:grid-cols-4" style={{ background: LINE }}>
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06} className="h-full">
            <div className="h-full bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: FOG }}>
                  <step.icon className="h-5 w-5" style={{ color: INK }} />
                </div>
                <span className="text-[14px] font-semibold" style={{ color: "#B7BAC2" }}>0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-[19px] font-semibold" style={{ color: INK }}>{step.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6]" style={{ color: GREY }}>{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- CTA tiles duo ---------- */
const CTATiles = () => (
  <section className="bg-white px-5 pb-28 sm:px-8">
    <div className="mx-auto grid max-w-[1320px] gap-5 lg:grid-cols-2">
      <Reveal>
        <div className="flex min-h-[380px] flex-col items-start justify-between rounded-[32px] p-10 sm:p-12" style={{ background: INK }}>
          <span className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white/80">Zero consultancy fees</span>
          <div>
            <h3 className="max-w-[380px] text-[34px] font-semibold leading-[1.08] text-white sm:text-[42px]" style={{ letterSpacing: "-0.02em" }}>
              Achieve new heights
            </h3>
            <Link to="/checkout" className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold transition-transform duration-200 hover:scale-[1.03]" style={{ color: INK }}>
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.07}>
        <div
          className="flex min-h-[380px] flex-col items-start justify-between rounded-[32px] p-10 sm:p-12"
          style={{ background: `radial-gradient(130% 140% at 85% 0%, #DCE2FF 0%, ${FOG} 60%)` }}
        >
          <span className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold" style={{ color: BRAND }}>Now available</span>
          <div>
            <h3 className="max-w-[400px] text-[34px] font-semibold leading-[1.08] sm:text-[42px]" style={{ color: INK, letterSpacing: "-0.02em" }}>
              Level up your entire setup
            </h3>
            <Link to="/services" className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03]" style={{ background: INK }}>
              See packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- Pricing ---------- */
const plans = [
  {
    name: "Personal",
    price: "$10",
    tagline: "Everything you need to kick things off.",
    features: ["Freezone comparison", "Digital application tracking", "Secure document vault", "Transparent government fees", "Email and chat support"],
    featured: false,
  },
  {
    name: "Professional",
    price: "$70",
    tagline: "For founders who want a specialist on call.",
    features: ["Everything in Personal", "Dedicated setup specialist", "Bank intro assistance", "Visa coordination", "Priority support"],
    featured: true,
  },
  {
    name: "Teams",
    price: "$130",
    tagline: "For shareholders and group structures.",
    features: ["Everything in Professional", "Multiple shareholders", "Custom corporate structure", "Accounting add-ons", "Phone support"],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="px-5 py-28 sm:px-8" style={{ background: FOG }}>
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <h2 className="mx-auto max-w-[640px] text-center font-semibold" style={{ color: INK, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
          Simple, transparent pricing
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mx-auto mt-6 max-w-[520px] text-center text-[17px] leading-[1.6]" style={{ color: GREY }}>
          Every package shows government fees upfront. No consultancy markup, ever.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.07} className="h-full">
            <div
              className="flex h-full flex-col rounded-[28px] p-8"
              style={plan.featured ? { background: INK, color: "white" } : { background: "white", color: INK }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-semibold">{plan.name}</h3>
                {plan.featured && <span className="rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: BRAND }}>POPULAR</span>}
              </div>
              <div className="mt-7 flex items-end gap-1.5">
                <span className="text-[52px] font-semibold leading-none" style={{ letterSpacing: "-0.03em" }}>{plan.price}</span>
                <span className="pb-1.5 text-[14px] opacity-55">/mth</span>
              </div>
              <p className="mt-3 text-[15px] leading-[1.55] opacity-70">{plan.tagline}</p>
              <Link
                to="/checkout"
                className="mt-7 inline-flex min-h-[50px] items-center justify-center rounded-full text-[15px] font-semibold transition-transform duration-200 hover:scale-[1.02]"
                style={plan.featured ? { background: "white", color: INK } : { background: INK, color: "white" }}
              >
                Start free 14-day trial
              </Link>
              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[14.5px] leading-[1.45]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: plan.featured ? "#9DA8FF" : BRAND }} />
                    <span className="opacity-85">{feature}</span>
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

/* ---------- Testimonials ---------- */
const testimonials = [
  { quote: "We launched our IFZA company in 6 days. The dashboard made every step clear and the fees stayed exactly as promised.", name: "Rohan M.", role: "Founder, Drift Studio" },
  { quote: "CSPzone removed the consultant back-and-forth. I could compare packages, pay online, and track everything myself.", name: "Aisha K.", role: "CEO, Verdant Trading" },
  { quote: "The renewal reminders and document vault are excellent. It feels like a proper operating system for my UAE company.", name: "Daniel P.", role: "COO, NorthCloud" },
  { quote: "Transparent, fast, and honestly much cleaner than the old-school setup agencies we spoke with.", name: "Mei L.", role: "Founder, Lumen Labs" },
];

const Testimonials = () => (
  <section className="bg-white px-5 py-28 sm:px-8">
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <h2 className="max-w-[620px] font-semibold" style={{ color: INK, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
          Founders who already made the switch
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-[28px] p-9" style={{ background: FOG }}>
              <blockquote className="text-[19px] font-medium leading-[1.55]" style={{ color: INK, letterSpacing: "-0.01em" }}>
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-bold text-white" style={{ background: INK }}>
                  {item.name[0]}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold" style={{ color: INK }}>{item.name}</span>
                  <span className="block text-[13.5px]" style={{ color: GREY }}>{item.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Do I need to be in the UAE to set up?", a: "No. You can begin remotely, upload documents online, and track your application from anywhere." },
  { q: "How quickly can my license be issued?", a: "Most licenses are issued in 3–7 working days once all documents and authority requirements are complete." },
  { q: "Are there consultancy fees?", a: "No. CSPzone is built around transparent self-service setup with package costs shown clearly before payment." },
  { q: "Can you help with banking and visas?", a: "Yes. You can request visa coordination and bank introduction support directly from your setup flow." },
  { q: "What happens after company formation?", a: "You can manage renewals, documents, reminders, and support requests from your dashboard." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white px-5 pb-28 sm:px-8">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <h2 className="max-w-[380px] font-semibold" style={{ color: INK, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            Questions, answered
          </h2>
          <p className="mt-5 max-w-[340px] text-[16px] leading-[1.6]" style={{ color: GREY }}>
            Everything you need to know before starting your UAE company setup.
          </p>
        </Reveal>
        <Reveal delay={0.07}>
          <div className="divide-y" style={{ borderColor: LINE }}>
            {faqs.map((faq, index) => {
              const active = open === index;
              return (
                <button key={faq.q} onClick={() => setOpen(active ? -1 : index)} className="w-full py-6 text-left">
                  <span className="flex items-center justify-between gap-5">
                    <span className="text-[18px] font-semibold" style={{ color: INK }}>{faq.q}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: active ? INK : FOG, color: active ? "white" : INK }}>
                      {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.32, ease }}
                    className="block overflow-hidden"
                  >
                    <span className="block max-w-[640px] pt-3 text-[15px] leading-[1.65]" style={{ color: GREY }}>{faq.a}</span>
                  </motion.span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- Blog ---------- */
const posts = [
  { title: "How real-time tracking transforms UAE company setup", date: "Jun 2026", tag: "Product", image: imgRegister },
  { title: "Choosing the right freezone in 2026", date: "May 2026", tag: "Guides", image: imgComply },
  { title: "Bank account opening in the UAE", date: "Apr 2026", tag: "Banking", image: imgGrow },
];

const Blog = () => (
  <section className="px-5 py-28 sm:px-8" style={{ background: FOG }}>
    <div className="mx-auto max-w-[1320px]">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-semibold" style={{ color: INK, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            Latest from the blog
          </h2>
          <Link to="/blog" className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold transition-transform duration-200 hover:scale-[1.03]" style={{ color: INK }}>
            View blog <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.06}>
            <Link to="/blog" className="group block overflow-hidden rounded-[28px] bg-white transition-transform duration-300 hover:-translate-y-1.5">
              <div className="aspect-square overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
              </div>
              <div className="p-7">
                <p className="text-[13px] font-semibold" style={{ color: GREY }}>{post.date} · {post.tag}</p>
                <h3 className="mt-2.5 text-[20px] font-semibold leading-[1.25]" style={{ color: INK, letterSpacing: "-0.01em" }}>{post.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold transition group-hover:gap-2.5" style={{ color: INK }}>
                  Read blog <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Final CTA + Footer ---------- */
const FinalCTA = () => (
  <section className="bg-white px-5 py-28 text-center sm:px-8 lg:py-36">
    <Reveal>
      <img src={cspLogo} alt="" className="mx-auto h-9 w-auto" />
      <h2 className="mx-auto mt-8 max-w-[860px] font-semibold" style={{ color: INK, fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
        Ready for liftoff?
      </h2>
      <p className="mx-auto mt-6 max-w-[480px] text-[17px] leading-[1.6]" style={{ color: GREY }}>
        Start your UAE company today with transparent pricing and real-time tracking.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <PillLink to="/checkout" dark>
          <Rocket className="h-4 w-4" /> Start your company
        </PillLink>
        <PillLink to="/services">Talk to us</PillLink>
      </div>
    </Reveal>
  </section>
);

const FooterBlock = () => (
  <footer className="bg-white px-5 pb-12 sm:px-8">
    <div className="mx-auto max-w-[1320px] border-t pt-14" style={{ borderColor: LINE }}>
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={cspLogo} alt="CSPzone" className="h-8 w-auto" />
          <p className="mt-5 max-w-[320px] text-[14.5px] leading-[1.65]" style={{ color: GREY }}>
            The self-service platform for UAE company setup. Transparent pricing, real-time tracking, zero consultancy fees.
          </p>
        </div>
        {[
          ["Platform", "Formation", "Compliance", "Growth", "Dashboard"],
          ["Company", "About", "Customers", "Contact", "Support"],
          ["Legal", "Terms", "Privacy", "Security", "Cookies"],
        ].map(([heading, ...links]) => (
          <div key={heading}>
            <p className="text-[14px] font-semibold" style={{ color: INK }}>{heading}</p>
            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <a key={link} href="#platform" className="block text-[14px] transition hover:opacity-55" style={{ color: GREY }}>{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t pt-6 text-[13px] sm:flex-row" style={{ borderColor: LINE, color: "#9AA0A6" }}>
        <span>© 2026 CSPzone by RAS Corporate Advisor, Dubai, UAE</span>
        <span className="inline-flex items-center gap-1.5"><FolderLock className="h-3.5 w-3.5" /> ISO 9001 Certified · <ReceiptText className="h-3.5 w-3.5" /> Transparent fees</span>
      </div>
    </div>
  </footer>
);

const MobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 backdrop-blur md:hidden" style={{ borderColor: LINE }}>
    <Link to="/checkout" className="flex h-12 items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white" style={{ background: INK }}>
      Start your company <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
);

const NewLanding2 = () => {
  useFonts();
  return (
    <main className="bg-white" style={{ color: INK, fontFamily: FONT }}>
      <StyleBlock />
      <Nav />
      <Hero />
      <HeroMedia />
      <ScrollStatement />
      <Pillars />
      <Founders />
      <Steps />
      <CTATiles />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <FinalCTA />
      <FooterBlock />
      <MobileCTA />
    </main>
  );
};

export default NewLanding2;
