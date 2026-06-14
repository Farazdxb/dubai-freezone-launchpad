import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe2,
  Brain,
  FileCheck2,
  Bell,
  ScanLine,
  Bot,
  Lock,
  TrendingUp,
  Star,
} from "lucide-react";

/**
 * /new-design — Apple × once-ui inspired premium homepage.
 * Light, generous, animated. Does not replace "/".
 */

const SF =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------- Top Bar ---------------- */
function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/75 border-b border-black/[0.06]"
          : "backdrop-blur-md bg-white/40 border-b border-transparent"
      }`}
      style={{ fontFamily: SF }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-12 flex items-center justify-between text-[13px] text-[#1d1d1f]">
        <Link to="/" className="font-semibold tracking-tight text-[15px]">
          CSP<span className="text-[#0071e3]">zone</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 opacity-90">
          {["Licenses", "Freezones", "Visas", "AI Compliance", "Pricing"].map((l) => (
            <a key={l} href="#" className="hover:text-[#0071e3] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <Link
          to="/campaign"
          className="rounded-full bg-[#1d1d1f] text-white px-4 py-1.5 hover:bg-[#0071e3] transition-colors"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}

/* ---------------- Animated Word Cycle ---------------- */
function CycleWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block bg-gradient-to-r from-[#0071e3] via-[#6c5cff] to-[#ff3ea5] bg-clip-text text-transparent"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative pt-28 pb-12 text-center overflow-hidden" style={{ fontFamily: SF }}>
      {/* gradient mesh background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-3xl opacity-60"
             style={{ background: "radial-gradient(closest-side, #c9defc 0%, transparent 70%)" }} />
        <div className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
             style={{ background: "radial-gradient(closest-side, #ffd6ec 0%, transparent 70%)" }} />
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
             style={{ background: "radial-gradient(closest-side, #d8d0ff 0%, transparent 70%)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="px-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-black/[0.06] px-3.5 py-1.5 text-[12px] text-[#1d1d1f] shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
          <span>Introducing AI-powered compliance</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-50" />
        </motion.div>

        <h1 className="mt-6 text-[44px] sm:text-[68px] lg:text-[88px] font-semibold tracking-[-0.045em] leading-[1.02] text-[#1d1d1f]">
          Your UAE company.
          <br />
          <CycleWord words={["Effortless.", "Intelligent.", "Compliant.", "Beautiful."]} />
        </h1>
        <p className="mt-6 text-[18px] sm:text-[21px] text-[#1d1d1f]/75 max-w-2xl mx-auto leading-relaxed">
          From <span className="font-semibold text-[#1d1d1f]">AED 4,320</span>. Zero consultancy fees.
          <br className="hidden sm:block" />
          Designed to feel as effortless as the products we love.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/campaign"
            className="group inline-flex items-center gap-1.5 bg-[#1d1d1f] hover:bg-[#0071e3] text-white rounded-full px-6 py-3 text-[15px] transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(0,113,227,0.4)]"
          >
            Get my license
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#ai"
            className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur border border-black/[0.08] hover:border-black/20 text-[#1d1d1f] rounded-full px-6 py-3 text-[15px] transition-all"
          >
            See AI in action
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="mt-16 sm:mt-24 px-5"
      >
        <div className="mx-auto max-w-5xl aspect-[16/10] rounded-[28px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] relative">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Logo Marquee ---------------- */
function LogoMarquee() {
  const logos = ["IFZA", "MEYDAN", "DMCC", "RAKEZ", "SHAMS", "SPC", "JAFZA", "ADGM"];
  return (
    <section className="py-16 sm:py-20 border-y border-black/[0.06] bg-white" style={{ fontFamily: SF }}>
      <p className="text-center text-[13px] uppercase tracking-[0.2em] text-[#86868b]">
        Trusted across 40+ UAE freezones
      </p>
      <div className="mt-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="text-[28px] font-semibold tracking-tight text-[#1d1d1f]/40">
              {l}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- AI Compliance Hero Section ---------------- */
function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const items = [
    { icon: ScanLine, title: "Document scanning", body: "AI parses contracts, IDs, and licenses in seconds." },
    { icon: Bell, title: "Renewal alerts", body: "Predictive reminders before deadlines hit." },
    { icon: FileCheck2, title: "Auto VAT filing", body: "AI prepares filings and flags inconsistencies." },
    { icon: Lock, title: "Risk monitoring", body: "Continuous scanning of compliance posture." },
  ];

  return (
    <section
      id="ai"
      ref={ref}
      className="relative py-28 sm:py-40 px-5 overflow-hidden bg-[#050507] text-white"
      style={{ fontFamily: SF }}
    >
      {/* glow */}
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, #0071e3, #6c5cff, #ff3ea5, #0071e3)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-[12px]">
            <Brain className="w-3.5 h-3.5 text-[#7aa8ff]" />
            AI-powered
          </span>
          <h2 className="mt-6 text-[40px] sm:text-[56px] lg:text-[72px] font-semibold tracking-[-0.04em] leading-[1.05]">
            Compliance, on
            <br />
            <span className="bg-gradient-to-r from-[#7aa8ff] via-[#b39dff] to-[#ff8fc8] bg-clip-text text-transparent">
              autopilot.
            </span>
          </h2>
          <p className="mt-6 text-[18px] sm:text-[20px] text-white/70 leading-relaxed">
            Our AI watches your filings, renewals, and tax deadlines — so you don't have to. Set it once. Stay compliant forever.
          </p>
        </motion.div>

        {/* Central AI orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="relative mx-auto mt-16 w-full max-w-2xl aspect-square sm:aspect-[2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
              className="absolute w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] rounded-full border border-white/5"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #ffffff 0%, #b6c8ff 25%, #6c5cff 55%, #1a1144 100%)",
                boxShadow: "0 0 80px rgba(108,92,255,0.5), inset 0 0 40px rgba(255,255,255,0.2)",
              }}
            >
              <Bot className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.4} />
            </motion.div>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease: EASE }}
                className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: "radial-gradient(circle at 50% 0%, rgba(122,168,255,0.15), transparent 60%)" }} />
                <Icon className="relative w-7 h-7 text-[#7aa8ff]" strokeWidth={1.5} />
                <h3 className="relative mt-5 text-[17px] font-semibold">{it.title}</h3>
                <p className="relative mt-1.5 text-[14px] text-white/60 leading-relaxed">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats Counter ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(() => spring.on("change", (v) => setVal(v)), [spring]);

  return (
    <span ref={ref}>
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { v: 3200, s: "+", label: "Licenses issued" },
    { v: 40, s: "+", label: "UAE freezones" },
    { v: 5, s: " days", label: "Average turnaround" },
    { v: 99, s: "%", label: "Compliance rate" },
  ];
  return (
    <section className="py-24 sm:py-32 px-5 bg-white" style={{ fontFamily: SF }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            className="text-center"
          >
            <p className="text-[44px] sm:text-[60px] font-semibold tracking-[-0.04em] text-[#1d1d1f] tabular-nums">
              <Counter to={s.v} suffix={s.s} />
            </p>
            <p className="mt-2 text-[14px] text-[#86868b] uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Big editorial section ---------------- */
interface BigSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  bg?: string;
  textColor?: string;
  eyebrowColor?: string;
  image?: string;
  reverse?: boolean;
  cta?: { label: string; to: string };
}

function BigSection({
  eyebrow,
  title,
  subtitle,
  bg = "#fbfbfd",
  textColor = "#1d1d1f",
  eyebrowColor = "#0071e3",
  image,
  reverse,
  cta,
}: BigSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5" style={{ background: bg, fontFamily: SF, color: textColor }}>
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-[14px] sm:text-[15px] font-semibold tracking-tight" style={{ color: eyebrowColor }}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-[36px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.05]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-[18px] sm:text-[20px] opacity-75 leading-relaxed max-w-xl">{subtitle}</p>
          )}
          {cta && (
            <Link
              to={cta.to}
              className="mt-7 inline-flex items-center gap-1 text-[17px] hover:underline"
              style={{ color: eyebrowColor }}
            >
              {cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="rounded-[28px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.25)]"
        >
          {image && <img src={image} alt="" className="w-full h-full object-cover" />}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Bento Feature Grid ---------------- */
function FeatureBento() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5 bg-[#fbfbfd]" style={{ fontFamily: SF }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f] text-center max-w-3xl mx-auto"
        >
          Built on the things <span className="text-[#86868b]">that matter most.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-5">
          {/* Big card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="sm:col-span-4 sm:row-span-2 rounded-[24px] p-10 bg-gradient-to-br from-[#0071e3] to-[#6c5cff] text-white min-h-[420px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <Zap className="w-9 h-9" strokeWidth={1.5} />
            <div className="relative">
              <h3 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.02em] leading-tight">
                License in 3–5 days.
              </h3>
              <p className="mt-3 text-[16px] text-white/80 max-w-md">
                Submit once. Our team and AI handle the rest end-to-end across any UAE freezone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="sm:col-span-2 rounded-[24px] p-7 bg-white border border-black/[0.06] min-h-[200px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500"
          >
            <Shield className="w-7 h-7 text-[#0071e3]" strokeWidth={1.5} />
            <div>
              <h3 className="text-[20px] font-semibold tracking-tight text-[#1d1d1f]">Transparent.</h3>
              <p className="mt-1.5 text-[14px] text-[#1d1d1f]/65">No hidden fees, ever.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="sm:col-span-2 rounded-[24px] p-7 bg-[#1d1d1f] text-white min-h-[200px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500"
          >
            <Globe2 className="w-7 h-7 text-[#7aa8ff]" strokeWidth={1.5} />
            <div>
              <h3 className="text-[20px] font-semibold tracking-tight">All UAE.</h3>
              <p className="mt-1.5 text-[14px] text-white/65">Mainland, Freezone, Offshore.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="sm:col-span-3 rounded-[24px] p-7 bg-white border border-black/[0.06] min-h-[220px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500"
          >
            <TrendingUp className="w-7 h-7 text-[#0071e3]" strokeWidth={1.5} />
            <div>
              <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f]">Live dashboard.</h3>
              <p className="mt-1.5 text-[14px] text-[#1d1d1f]/65">
                Track every application, document, and renewal in real time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="sm:col-span-3 rounded-[24px] p-7 bg-gradient-to-br from-[#fff7ed] to-[#ffe9d6] min-h-[220px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500"
          >
            <Sparkles className="w-7 h-7 text-[#ea580c]" strokeWidth={1.5} />
            <div>
              <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f]">Designed beautifully.</h3>
              <p className="mt-1.5 text-[14px] text-[#1d1d1f]/65">
                Software that feels as good as the products you love.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    { name: "Rahul K.", role: "Founder, Shopify Seller", text: "Got my e-commerce license in 4 days. Self-service portal is incredible." },
    { name: "Sara A.", role: "Investor", text: "Compliance reminders alone are worth the price. Zero stress." },
    { name: "James M.", role: "Consultant", text: "The cleanest portal I've used in the UAE. Pure clarity." },
    { name: "Priya S.", role: "Founder, Tech", text: "The AI flagged a renewal I'd forgotten about. Saved me a penalty." },
    { name: "Omar H.", role: "Trader", text: "From signup to license — under a week. Just works." },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden" style={{ fontFamily: SF }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f] text-center px-5"
      >
        Loved by founders <span className="text-[#86868b]">across the UAE.</span>
      </motion.h2>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] rounded-[22px] p-7 bg-[#f5f5f7] border border-black/[0.04]"
            >
              <div className="flex gap-0.5 text-[#0071e3]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-[16px] text-[#1d1d1f] leading-relaxed">"{r.text}"</p>
              <div className="mt-5">
                <p className="text-[14px] font-semibold text-[#1d1d1f]">{r.name}</p>
                <p className="text-[12px] text-[#86868b]">{r.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function PricingStrip() {
  const tiers = [
    { name: "Freezone", price: "4,320", desc: "Trade license. Ready in 5 days." },
    { name: "License + Visa", price: "9,720", desc: "Includes investor visa & Emirates ID.", featured: true },
    { name: "Offshore", price: "7,999", desc: "Holding companies & global structures." },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5 bg-[#fbfbfd]" style={{ fontFamily: SF }}>
      <div className="max-w-[1100px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f]"
        >
          Pick the one <span className="text-[#86868b]">that's right for you.</span>
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className={`relative rounded-[24px] p-10 text-left transition-all duration-500 hover:-translate-y-1 ${
                t.featured
                  ? "bg-[#1d1d1f] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
                  : "bg-white border border-black/[0.06] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0071e3] text-white text-[11px] font-semibold px-3 py-1 uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <p className={`text-[14px] font-semibold ${t.featured ? "text-[#7aa8ff]" : "text-[#0071e3]"}`}>
                {t.name}
              </p>
              <p className="mt-3 text-[40px] font-semibold tracking-[-0.03em]">AED {t.price}</p>
              <p className={`mt-2 text-[15px] ${t.featured ? "text-white/70" : "text-[#1d1d1f]/70"}`}>{t.desc}</p>
              <Link
                to="/campaign"
                className={`mt-8 inline-flex items-center gap-1 text-[15px] hover:underline ${
                  t.featured ? "text-white" : "text-[#0071e3]"
                }`}
              >
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "How long does it take to get my license?", a: "Most freezone licenses are issued in 3–5 working days after payment and document submission." },
    { q: "Are there any hidden fees?", a: "No. Our pricing is fully transparent. The amount you see is exactly what you pay." },
    { q: "Can I get a visa with my license?", a: "Yes — the License + Visa package includes investor visa, Emirates ID, and medical." },
    { q: "What is AI-powered compliance?", a: "Our AI monitors deadlines, renewals, VAT filings and flags risks before they become penalties." },
    { q: "Which freezones do you support?", a: "All major UAE freezones including IFZA, Meydan, DMCC, RAKEZ, SHAMS, JAFZA, ADGM and more." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 px-5 bg-white" style={{ fontFamily: SF }}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[48px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f] text-center"
        >
          Questions, <span className="text-[#86868b]">answered.</span>
        </motion.h2>
        <div className="mt-14 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[18px] font-medium text-[#1d1d1f]">{f.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#1d1d1f] border border-black/10 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-[16px] text-[#1d1d1f]/70 leading-relaxed">{f.a}</p>
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
function ClosingCTA() {
  return (
    <section className="relative py-32 sm:py-44 px-5 text-center overflow-hidden bg-white" style={{ fontFamily: SF }}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse at center, #eef3ff 0%, transparent 60%)" }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-[44px] sm:text-[68px] lg:text-[88px] font-semibold tracking-[-0.045em] leading-[1.02] text-[#1d1d1f]">
          Your company.
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#6c5cff] to-[#ff3ea5] bg-clip-text text-transparent">
            In a few clicks.
          </span>
        </h2>
        <Link
          to="/campaign"
          className="mt-10 inline-flex items-center gap-1.5 bg-[#1d1d1f] hover:bg-[#0071e3] text-white rounded-full px-8 py-4 text-[17px] transition-all shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(0,113,227,0.4)]"
        >
          Start now <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function MiniFooter() {
  return (
    <footer
      className="bg-[#f5f5f7] text-[#6e6e73] text-[12px] py-10 px-5 border-t border-black/[0.06]"
      style={{ fontFamily: SF }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between gap-3">
        <p>Copyright © {new Date().getFullYear()} CSPzone. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/terms" className="hover:underline">Terms</Link>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function NewDesign() {
  useEffect(() => {
    document.title = "CSPzone — UAE Business Setup, Effortlessly";
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]" style={{ fontFamily: SF }}>
      <TopBar />
      <main className="pt-12">
        <Hero />
        <LogoMarquee />
        <AISection />
        <Stats />
        <BigSection
          eyebrow="Mainland"
          title={<>Set up where <span className="text-[#86868b]">opportunity lives.</span></>}
          subtitle="Operate freely across the UAE with a Mainland trade license. No restrictions, full ownership."
          image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=85"
          cta={{ label: "Explore Mainland", to: "/campaign" }}
        />
        <BigSection
          bg="#0a0a0c"
          textColor="#ffffff"
          eyebrowColor="#7aa8ff"
          eyebrow="Freezone"
          title={<>100% ownership. <span className="text-white/60">Zero compromise.</span></>}
          subtitle="Choose from 40+ UAE freezones with full repatriation of profits and tax benefits."
          image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85"
          cta={{ label: "Explore Freezones", to: "/ecommerce-license" }}
          reverse
        />
        <BigSection
          eyebrow="Visas"
          title={<>Residency, <span className="text-[#86868b]">made simple.</span></>}
          subtitle="Investor visa, Emirates ID, and medical — handled end to end. Stay focused on your business."
          image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=85"
          cta={{ label: "Add a visa", to: "/business-license-visa" }}
        />
        <FeatureBento />
        <Testimonials />
        <PricingStrip />
        <FAQ />
        <ClosingCTA />
      </main>
      <MiniFooter />
    </div>
  );
}
