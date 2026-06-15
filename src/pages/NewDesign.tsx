import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  FileCheck2,
  Headphones,
  LineChart,
  LockKeyhole,
  Minus,
  Plus,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import imgFounder from "@/assets/nd-hero-founder.jpg";
import imgStorefront from "@/assets/nd-hero-storefront.jpg";
import imgRegister from "@/assets/nd-register.jpg";
import imgComply from "@/assets/nd-comply.jpg";
import imgGrow from "@/assets/nd-grow.jpg";

const BRAND = "#1B36FF";
const BRAND_LIGHT = "#E8EBFF";
const INK = "#191B24";
const GRAPHITE = "#555966";
const MIST = "#F1F2F5";
const LINE = "#E2E4EA";
const SERIF = "'Instrument Serif', serif";
const FONT = "'Inter', sans-serif";
const ease = [0.22, 1, 0.36, 1] as const;

const useFonts = () => {
  useEffect(() => {
    const id = "new-design-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease } },
};

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
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.78, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({
  eyebrow,
  title,
  accent,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body?: string;
  align?: "center" | "left";
}) => (
  <Reveal>
    <div className={align === "center" ? "mx-auto max-w-[700px] text-center" : "max-w-[640px]"}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND }}>
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-[38px] font-semibold leading-[1.05] sm:text-[52px] lg:text-[60px]"
        style={{ color: INK, fontFamily: FONT }}
      >
        {title} <span className="font-normal italic" style={{ color: BRAND, fontFamily: SERIF }}>{accent}</span>
      </h2>
      {body && <p className="mt-5 text-[16px] leading-[1.65]" style={{ color: GRAPHITE }}>{body}</p>}
    </div>
  </Reveal>
);

const StyleBlock = () => (
  <style>{`
    .nd-marquee { animation: nd-marquee 34s linear infinite; }
    .nd-marquee-reverse { animation: nd-marquee-reverse 38s linear infinite; }
    .nd-float { animation: nd-float 5.5s ease-in-out infinite; }
    .nd-float-two { animation: nd-float 6.3s ease-in-out infinite reverse; }
    .nd-mask { mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
    @keyframes nd-marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
    @keyframes nd-marquee-reverse { from { transform: translate3d(-50%,0,0); } to { transform: translate3d(0,0,0); } }
    @keyframes nd-float { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-13px,0); } }
    @media (prefers-reduced-motion: reduce) { .nd-marquee, .nd-marquee-reverse, .nd-float, .nd-float-two { animation: none; } }
  `}</style>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(241,242,245,.82)" : MIST, backdropFilter: scrolled ? "blur(14px)" : "none" }}
    >
      <div className="mx-auto flex h-[92px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/new-design" className="flex items-center gap-3" aria-label="CSPzone home">
          <img src={cspLogo} alt="CSPzone" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-10 text-[15px] font-medium md:flex" style={{ color: INK }}>
          <a href="#home" style={{ color: BRAND }}>Home</a>
          <a href="#features" className="transition hover:opacity-60">Features</a>
          <a href="#pricing" className="transition hover:opacity-60">Pricing</a>
          <a href="#about" className="transition hover:opacity-60">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden h-12 items-center rounded-full bg-white px-6 text-[15px] font-medium transition hover:-translate-y-0.5 sm:inline-flex" style={{ color: INK }}>
            Sign in
          </Link>
          <Link to="/checkout" className="inline-flex h-12 items-center rounded-full px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5" style={{ background: BRAND }}>
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="px-5 pb-24 pt-8 sm:px-8 lg:px-10" style={{ background: MIST }}>
    <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease }}
        className="flex min-h-[560px] flex-col justify-center rounded-[28px] bg-white px-8 py-12 sm:px-12 lg:min-h-[620px] lg:px-14"
      >
        <div className="inline-flex w-fit items-center gap-3 rounded-full px-2 py-1.5" style={{ background: "#F5F3FF" }}>
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold text-white" style={{ background: BRAND }}>
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> New
          </span>
          <span className="text-[14px] font-medium" style={{ color: GRAPHITE }}>Zero consultancy fee setup</span>
          <ChevronRight className="h-4 w-4" style={{ color: BRAND }} />
        </div>

        <h1 className="mt-9 max-w-[620px] text-[52px] font-semibold leading-[1.07] sm:text-[68px] lg:text-[78px]" style={{ color: INK }}>
          Your go-to app for launching your <span className="font-normal italic" style={{ color: BRAND, fontFamily: SERIF }}>freezone</span>
        </h1>
        <p className="mt-7 max-w-[560px] text-[18px] leading-[1.58]" style={{ color: GRAPHITE }}>
          Start your UAE company with transparent packages, real-time tracking, and founder support from application to license.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/checkout" className="inline-flex h-13 items-center gap-2 rounded-full px-7 py-4 text-[16px] font-semibold text-white transition hover:-translate-y-0.5" style={{ background: INK }}>
            Get Started for Free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex h-13 items-center gap-2 rounded-full bg-white px-6 py-4 text-[16px] font-semibold transition hover:-translate-y-0.5" style={{ color: INK, boxShadow: `inset 0 0 0 1px ${LINE}` }}>
            See packages
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.08 }}
        className="relative min-h-[560px] overflow-hidden rounded-[28px] lg:min-h-[620px]"
      >
        <img src={imgFounder} alt="Founder using CSPzone for UAE business setup" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="nd-float absolute bottom-8 left-7 w-[235px] rounded-2xl bg-white/95 p-5 shadow-[0_18px_60px_rgba(23,27,36,.14)] backdrop-blur">
          <p className="text-[12px] font-semibold" style={{ color: GRAPHITE }}>Application Progress</p>
          <div className="mt-4 flex h-16 items-end gap-2">
            {[48, 64, 52, 84, 100, 74].map((height, index) => (
              <span key={index} className="flex-1 rounded-md" style={{ height: `${height}%`, background: index === 4 ? BRAND : "#C9D1FF" }} />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px]" style={{ color: "#8A8F9D" }}>
            <span>Apply</span><span>KYC</span><span>Pay</span><span>Review</span><span>Issue</span>
          </div>
        </div>
        <div className="nd-float-two absolute bottom-32 right-7 rounded-2xl bg-white/95 px-5 py-4 shadow-[0_18px_60px_rgba(23,27,36,.14)] backdrop-blur">
          <p className="text-[13px] font-semibold" style={{ color: GRAPHITE }}>Average setup saving</p>
          <p className="mt-1 text-[25px] font-bold" style={{ color: INK }}>AED 8,000+</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const LogoBar = () => {
  const logos = ["IFZA", "DMCC", "Meydan", "RAKEZ", "SHAMS", "Ajman", "Sharjah"];
  return (
    <section className="overflow-hidden px-5 pb-24 sm:px-8 lg:px-10" style={{ background: MIST }}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-[1fr_2.6fr]">
        <p className="max-w-[260px] text-[18px] leading-[1.45]" style={{ color: "#7A808C" }}>Trusted by fast-growing founders across the UAE</p>
        <div className="nd-mask overflow-hidden">
          <div className="nd-marquee flex w-max items-center gap-14 pr-14">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span key={`${logo}-${index}`} className="text-[25px] font-extrabold tracking-tight opacity-40 grayscale" style={{ color: INK }}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const items = [
    { icon: Sparkles, title: "Pick your freezone", body: "Compare 40+ UAE freezones by activity, visa quota, timeline, and total cost." },
    { icon: FileCheck2, title: "Submit documents", body: "Upload passports, choose shareholders, and complete your application online." },
    { icon: LineChart, title: "Track every stage", body: "Follow approvals, payments, renewals, and documents from one dashboard." },
    { icon: Headphones, title: "Get founder support", body: "Speak to a real specialist when you need help with visas, banking, or renewals." },
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="How it Works" title="Unlock the full potential of your" accent="UAE business" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-[28px] p-7 transition duration-300 hover:-translate-y-1" style={{ background: MIST }}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                  <item.icon className="h-7 w-7" style={{ color: BRAND }} />
                </div>
                <h3 className="mt-7 text-[21px] font-bold" style={{ color: INK }}>{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.62]" style={{ color: GRAPHITE }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { title: "Sign Up Today", body: "Create your profile and tell us where you want to launch.", image: imgRegister },
    { title: "Set Your Goals", body: "Choose your activity, visa count, package, and preferred freezone.", image: imgComply },
    { title: "Track Your Progress", body: "Watch approvals move live without chasing consultants.", image: imgGrow },
    { title: "Achieve Success", body: "Receive your license, open banking options, and start trading.", image: imgStorefront },
  ];

  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-28" style={{ background: MIST }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="How It works"
          title="Everything comes together in just"
          accent="4 simple steps"
          body="A clean digital flow built for founders who want speed, transparency, and zero consultancy fees."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="group h-full overflow-hidden rounded-[28px] bg-white transition duration-300 hover:-translate-y-1">
                <div className="relative aspect-[1.08] overflow-hidden" style={{ background: BRAND_LIGHT }}>
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-[12px] font-bold" style={{ color: BRAND }}>0{index + 1}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-[22px] font-bold" style={{ color: INK }}>{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.62]" style={{ color: GRAPHITE }}>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/services" className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 py-4 text-[15px] font-bold" style={{ color: INK }}>Browse all features</Link>
            <Link to="/checkout" className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-white" style={{ background: BRAND }}>Get Started for Free <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Features = () => {
  const miniBars = [70, 46, 82, 58, 92, 66];
  return (
    <section id="features" className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end">
          <SectionHeading eyebrow="Features" title="What makes us unique compared to" accent="others?" align="left" />
          <Reveal delay={0.08}>
            <p className="max-w-[470px] text-[16px] leading-[1.65] md:justify-self-end" style={{ color: GRAPHITE }}>
              A modern setup experience with instant package comparison, secure documents, automated reminders, and real human support.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="min-h-[430px] rounded-[28px] p-7" style={{ background: MIST }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"><Zap className="h-6 w-6" style={{ color: BRAND }} /></div>
              <h3 className="mt-7 text-[24px] font-bold" style={{ color: INK }}>Quick Insights</h3>
              <p className="mt-3 text-[15px] leading-[1.62]" style={{ color: GRAPHITE }}>Compare packages, visa quotas, costs, and approval speed before you commit.</p>
              <div className="mt-8 rounded-[22px] bg-white p-5">
                <p className="text-[12px] font-semibold" style={{ color: GRAPHITE }}>Freezone fit score</p>
                <div className="mt-5 flex h-[120px] items-end gap-3">
                  {miniBars.map((bar, index) => <span key={index} className="flex-1 rounded-lg" style={{ height: `${bar}%`, background: index === 4 ? BRAND : "#CBD2FF" }} />)}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-2">
            <div className="grid min-h-[430px] gap-7 rounded-[28px] p-7 text-white md:grid-cols-[.8fr_1fr]" style={{ background: INK }}>
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "rgba(255,255,255,.1)" }}><ReceiptText className="h-6 w-6" /></div>
                <h3 className="mt-7 text-[24px] font-bold">Personalized reports</h3>
                <p className="mt-3 text-[15px] leading-[1.62] text-white/70">License expiry, document status, payment history, and renewal tasks stay organized in one place.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[.06] p-5">
                <div className="mb-5 flex items-center justify-between text-[13px] text-white/60"><span>Compliance Overview</span><span className="rounded-full px-2.5 py-1 text-[10px] font-bold text-white" style={{ background: BRAND }}>LIVE</span></div>
                {[
                  ["Trade License", "Active", 100],
                  ["Establishment Card", "Renewing", 76],
                  ["Emirates ID", "Active", 100],
                  ["VAT & Accounting", "Prepared", 88],
                ].map(([label, status, pct], index) => (
                  <div key={String(label)} className="border-t border-white/10 py-4 first:border-t-0">
                    <div className="flex items-center justify-between text-[14px]"><span>{label}</span><span className="text-white/55">{status}</span></div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: index * 0.08, ease }} className="h-full rounded-full" style={{ background: BRAND }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="grid min-h-[300px] items-center gap-8 rounded-[28px] p-7 md:grid-cols-[1fr_270px]" style={{ background: MIST }}>
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"><LineChart className="h-6 w-6" style={{ color: BRAND }} /></div>
                <h3 className="mt-7 text-[24px] font-bold" style={{ color: INK }}>Stay on top</h3>
                <p className="mt-3 max-w-[520px] text-[15px] leading-[1.62]" style={{ color: GRAPHITE }}>Approve documents, track licenses, request visas, and see renewal dates from mobile or desktop.</p>
              </div>
              <div className="hidden rounded-[28px] bg-white p-4 shadow-[0_18px_50px_rgba(23,27,36,.08)] md:block">
                <div className="rounded-[22px] p-4" style={{ background: INK }}>
                  <p className="text-[11px] font-semibold text-white/50">CSPzone · Mobile</p>
                  <div className="mt-5 space-y-3">
                    {["License approved", "Bank intro ready", "Visa payment due"].map((item) => <div key={item} className="rounded-xl bg-white/10 p-3 text-[12px] text-white"><span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ background: BRAND }} />{item}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="min-h-[300px] rounded-[28px] p-7" style={{ background: MIST }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"><LockKeyhole className="h-6 w-6" style={{ color: BRAND }} /></div>
              <h3 className="mt-7 text-[24px] font-bold" style={{ color: INK }}>Stay safe out there</h3>
              <p className="mt-3 text-[15px] leading-[1.62]" style={{ color: GRAPHITE }}>Encrypted document storage, audit trails, and secure payment flows for every application.</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-bold" style={{ color: INK }}><ShieldCheck className="h-4 w-4" style={{ color: BRAND }} /> Secure vault</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

type Plan = { name: string; price: string; tagline: string; features: string[]; featured?: boolean };

const planFeatures = [
  "Freezone comparison",
  "Digital application tracking",
  "Secure document vault",
  "Transparent government fees",
  "Email and chat support",
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const plans: Plan[] = useMemo(() => [
    { name: "Personal", price: annual ? "$06" : "$10", tagline: "How much to kick things off?", features: planFeatures },
    { name: "Professional", price: annual ? "$49" : "$70", tagline: "Perfect for founders who want support", features: ["Everything in Personal", "Dedicated setup specialist", "Bank intro assistance", "Visa coordination", "Priority support"], featured: true },
    { name: "Teams", price: annual ? "$99" : "$130", tagline: "For shareholders and group structures", features: ["Everything in Professional", "Multiple shareholders", "Custom corporate structure", "Accounting add-ons", "Phone support"] },
  ], [annual]);

  return (
    <section id="pricing" className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Pricing" title="Choose a pricing" accent="plan" body="Take charge of your UAE setup with transparent packages and zero consultancy fees." />
        <Reveal delay={0.08}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full p-1.5" style={{ background: MIST }}>
              <button onClick={() => setAnnual(false)} className="rounded-full px-5 py-3 text-[14px] font-bold transition" style={{ background: annual ? "transparent" : "white", color: INK }}>Monthly billing</button>
              <button onClick={() => setAnnual(true)} className="rounded-full px-5 py-3 text-[14px] font-bold transition" style={{ background: annual ? "white" : "transparent", color: INK }}>Annual billing <span style={{ color: BRAND }}>[Save 20%]</span></button>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-[28px] p-8" style={{ background: plan.featured ? INK : MIST, color: plan.featured ? "white" : INK }}>
                <h3 className="text-[22px] font-bold">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-1"><span className="text-[54px] font-bold leading-none">{plan.price}</span><span className="pb-2 text-[15px] opacity-60">/mth</span></div>
                <p className="mt-3 text-[15px] leading-[1.55] opacity-70">{plan.tagline}</p>
                <Link to="/checkout" className="mt-7 inline-flex h-13 items-center justify-center rounded-full px-5 py-4 text-[15px] font-bold" style={{ background: plan.featured ? BRAND : "white", color: plan.featured ? "white" : INK }}>Free-14 Day Trial</Link>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[14px] leading-[1.45]"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} /><span className="opacity-85">{feature}</span></li>
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

const testimonials = [
  { quote: "We launched our IFZA company in 6 days. The dashboard made every step clear and the fees stayed exactly as promised.", name: "Rohan M.", role: "Founder, Drift Studio" },
  { quote: "CSPzone removed the consultant back-and-forth. I could compare packages, pay online, and track everything myself.", name: "Aisha K.", role: "CEO, Verdant Trading" },
  { quote: "The renewal reminders and document vault are excellent. It feels like a proper operating system for my UAE company.", name: "Daniel P.", role: "COO, NorthCloud" },
  { quote: "Transparent, fast, and honestly much cleaner than the old-school setup agencies we spoke with.", name: "Mei L.", role: "Founder, Lumen Labs" },
];

const Testimonials = () => (
  <section className="overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-28" style={{ background: MIST }}>
    <div className="mx-auto max-w-[1280px]">
      <SectionHeading eyebrow="Testimonials" title="See what founders say about our" accent="setup platform" body="A self-service setup experience built around clarity, speed, and trust." />
    </div>
    <div className="nd-mask mt-14 overflow-hidden">
      <div className="nd-marquee flex w-max gap-5 pr-5">
        {[...testimonials, ...testimonials].map((item, index) => (
          <article key={`${item.name}-${index}`} className="w-[410px] rounded-[28px] bg-white p-7">
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: BRAND }} />)}</div>
            <p className="mt-6 text-[16px] leading-[1.62]" style={{ color: INK }}>“{item.quote}”</p>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ background: BRAND }}>{item.name[0]}</div>
              <div><p className="text-[15px] font-bold" style={{ color: INK }}>{item.name}</p><p className="text-[13px]" style={{ color: GRAPHITE }}>{item.role}</p></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

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
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.75fr_1fr]">
        <SectionHeading eyebrow="Frequently questions" title="Frequently ask" accent="questions" align="left" body="Everything you need to know before starting your UAE company setup." />
        <Reveal delay={0.08}>
          <div className="divide-y" style={{ borderColor: LINE }}>
            {faqs.map((faq, index) => {
              const active = open === index;
              return (
                <button key={faq.q} onClick={() => setOpen(active ? -1 : index)} className="w-full py-6 text-left">
                  <span className="flex items-center justify-between gap-5">
                    <span className="text-[18px] font-bold" style={{ color: INK }}>{faq.q}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: active ? BRAND : MIST, color: active ? "white" : INK }}>{active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                  </span>
                  <motion.span initial={false} animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }} transition={{ duration: 0.34, ease }} className="block overflow-hidden">
                    <span className="block max-w-[720px] pt-3 text-[15px] leading-[1.65]" style={{ color: GRAPHITE }}>{faq.a}</span>
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

const Integrations = () => {
  const rowOne = ["IFZA", "DMCC", "Meydan", "RAKEZ", "SHAMS", "Ajman", "Wio", "Mashreq", "Zoho"];
  const rowTwo = ["QuickBooks", "Stripe UAE", "Telr", "Emirates NBD", "VAT", "MOFA", "ICP", "Dubai Chamber", "Freezones"];
  const renderRow = (items: string[], reverse = false) => (
    <div className="nd-mask mt-5 overflow-hidden">
      <div className={`${reverse ? "nd-marquee-reverse" : "nd-marquee"} flex w-max gap-4 pr-4`}>
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex h-[76px] items-center gap-4 rounded-[22px] bg-white px-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-[14px] font-bold" style={{ background: BRAND_LIGHT, color: BRAND }}>{item[0]}</span>
            <span className="text-[15px] font-bold" style={{ color: INK }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section className="overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-28" style={{ background: MIST }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Integrations" title="Seamless setup across every" accent="freezone" body="CSPzone keeps your formation, payments, banking tasks, and compliance reminders moving together." />
      </div>
      <div className="mt-14">{renderRow(rowOne)}{renderRow(rowTwo, true)}</div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { title: "How real-time tracking transforms UAE company setup", body: "Why founders should never chase approvals manually again.", image: imgRegister },
    { title: "Choosing the right freezone in 2026", body: "The practical way to compare costs, visas, and business activity rules.", image: imgComply },
    { title: "Bank account opening in the UAE", body: "Documents, profiles, and expectations that make onboarding smoother.", image: imgGrow },
  ];
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading eyebrow="Blog" title="Unlock the full potential of your" accent="UAE company" align="left" />
          <Reveal delay={0.08}><Link to="/blog" className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-bold" style={{ background: MIST, color: INK }}>Browse all articles <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.06}>
              <Link to="/blog" className="group block overflow-hidden rounded-[28px]" style={{ background: MIST }}>
                <div className="aspect-[1.25] overflow-hidden"><img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></div>
                <div className="p-7"><h3 className="text-[22px] font-bold leading-[1.2]" style={{ color: INK }}>{post.title}</h3><p className="mt-3 text-[15px] leading-[1.6]" style={{ color: GRAPHITE }}>{post.body}</p><span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold" style={{ color: BRAND }}>Read post <ArrowRight className="h-4 w-4" /></span></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="px-5 py-10 sm:px-8 lg:px-10" style={{ background: MIST }}>
    <div className="mx-auto max-w-[1280px]">
      <Reveal>
        <div className="overflow-hidden rounded-[34px] px-8 py-16 text-center text-white sm:px-12 lg:py-20" style={{ background: `radial-gradient(circle at 50% 0%, ${BRAND} 0%, ${INK} 68%)` }}>
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/65">Get Started</p>
          <h2 className="mx-auto mt-4 max-w-[820px] text-[42px] font-semibold leading-[1.05] sm:text-[64px]">Ready to simplify your <span className="font-normal italic" style={{ color: "#C6CBFF", fontFamily: SERIF }}>business setup?</span></h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.65] text-white/70">Start your UAE company with transparent pricing, digital tracking, and support when it matters.</p>
          <form onSubmit={(event) => event.preventDefault()} className="mx-auto mt-9 flex max-w-[520px] flex-col gap-2 rounded-full bg-white/10 p-2 backdrop-blur sm:flex-row">
            <input type="email" placeholder="Enter your email" className="h-13 flex-1 bg-transparent px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/50" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-white" style={{ background: BRAND }}>Get started <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </Reveal>
    </div>
  </section>
);

const FooterBlock = () => (
  <footer id="about" className="px-5 pb-10 sm:px-8 lg:px-10" style={{ background: MIST }}>
    <div className="mx-auto max-w-[1280px] rounded-[34px] bg-white p-8 sm:p-10 lg:p-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={cspLogo} alt="CSPzone" className="h-8 w-auto" />
          <p className="mt-5 max-w-[330px] text-[15px] leading-[1.65]" style={{ color: GRAPHITE }}>The self-service platform for UAE company setup. Transparent pricing, real-time tracking, zero consultancy fees.</p>
        </div>
        {[
          ["Product", "Features", "Pricing", "Integrations", "Blog"],
          ["Company", "About", "Customers", "Contact", "Support"],
          ["Legal", "Terms", "Privacy", "Security", "Cookies"],
        ].map(([heading, ...links]) => (
          <div key={heading}>
            <p className="text-[14px] font-bold" style={{ color: INK }}>{heading}</p>
            <div className="mt-5 space-y-3">{links.map((link) => <a key={link} href="#home" className="block text-[14px] transition hover:opacity-60" style={{ color: GRAPHITE }}>{link}</a>)}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col justify-between gap-3 border-t pt-6 text-[13px] sm:flex-row" style={{ borderColor: LINE, color: "#8A8F9D" }}><span>© 2026 CSPzone. All rights reserved.</span><span>Made with care in the UAE 🇦🇪</span></div>
      <div className="mt-10 select-none overflow-hidden text-center leading-none">
        <span className="block font-semibold" style={{ color: "transparent", fontSize: "clamp(72px, 17vw, 240px)", WebkitTextStroke: `1px ${LINE}` }}>CSP<span className="font-normal italic" style={{ fontFamily: SERIF, WebkitTextStroke: `1px ${BRAND}` }}>zone</span></span>
      </div>
    </div>
  </footer>
);

const MobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 backdrop-blur md:hidden" style={{ borderColor: LINE }}>
    <Link to="/checkout" className="flex h-12 items-center justify-center gap-2 rounded-full text-[15px] font-bold text-white" style={{ background: BRAND }}>Start your company <ArrowRight className="h-4 w-4" /></Link>
  </div>
);

const NewDesign = () => {
  useFonts();
  return (
    <main style={{ background: MIST, color: INK, fontFamily: FONT }}>
      <StyleBlock />
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
      <MobileCTA />
    </main>
  );
};

export default NewDesign;