import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Zap, Shield, Globe2 } from "lucide-react";

/**
 * /new-design — Apple-inspired premium homepage.
 * Light theme, generous spacing, large typography, smooth scroll animations.
 * Does NOT replace the existing homepage at "/".
 */

const SF_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

function TopBar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/[0.06]"
      style={{ fontFamily: SF_STACK }}
    >
      <div className="max-w-[980px] mx-auto px-5 h-11 flex items-center justify-between text-[12px] text-[#1d1d1f]/90">
        <Link to="/" className="font-semibold tracking-tight">CSPzone</Link>
        <nav className="hidden md:flex items-center gap-7 opacity-90">
          {["Licenses", "Freezones", "Visas", "Pricing", "Support"].map((l) => (
            <a key={l} href="#" className="hover:opacity-60 transition-opacity">{l}</a>
          ))}
        </nav>
        <Link to="/campaign" className="hover:opacity-60 transition-opacity">Get started ›</Link>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="pt-24 pb-10 text-center" style={{ fontFamily: SF_STACK }}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="px-5"
      >
        <p className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f]">Business Setup</p>
        <h1 className="mt-1 text-[44px] sm:text-[64px] lg:text-[80px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1d1d1f]">
          Start your UAE company.
          <br />
          <span className="text-[#86868b]">Effortlessly.</span>
        </h1>
        <p className="mt-5 text-[19px] sm:text-[21px] text-[#1d1d1f]/80 max-w-2xl mx-auto">
          From <span className="font-semibold">AED 4,320</span>. Zero consultancy fees.
          <br className="hidden sm:block" />
          Designed to feel as effortless as the products we love.
        </p>

        <div className="mt-7 flex items-center justify-center gap-6 text-[17px]">
          <Link
            to="/campaign"
            className="inline-flex items-center gap-1 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-6 py-3 transition-colors"
          >
            Get my license
          </Link>
          <a href="#features" className="text-[#0071e3] hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ y, scale, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mt-16 sm:mt-24 px-5"
      >
        <div className="mx-auto max-w-5xl aspect-[16/10] rounded-[28px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai skyline"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

interface BigSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  bg?: string;
  image?: string;
  reverse?: boolean;
  cta?: { label: string; to: string };
}

function BigSection({ eyebrow, title, subtitle, bg = "#fbfbfd", image, reverse, cta }: BigSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="py-20 sm:py-28 lg:py-40 px-5" style={{ background: bg, fontFamily: SF_STACK }}>
      <div
        ref={ref}
        className={`max-w-[1024px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[15px] sm:text-[17px] font-semibold text-[#0071e3] tracking-tight">{eyebrow}</p>
          <h2 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-[18px] sm:text-[20px] text-[#1d1d1f]/75 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          {cta && (
            <Link
              to={cta.to}
              className="mt-7 inline-flex items-center gap-1 text-[#0071e3] text-[17px] hover:underline"
            >
              {cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="rounded-[28px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]"
        >
          {image && <img src={image} alt="" className="w-full h-full object-cover" />}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const items = [
    { icon: Zap, title: "Lightning fast.", body: "License issued in 3–5 working days. No paperwork chases." },
    { icon: Shield, title: "Fully transparent.", body: "No hidden fees. What you see is exactly what you pay." },
    { icon: Globe2, title: "Across the UAE.", body: "Mainland, Freezone & Offshore — handled in one platform." },
    { icon: Sparkles, title: "Designed beautifully.", body: "An experience that feels as good as the products you love." },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5 bg-white" style={{ fontFamily: SF_STACK }}>
      <div className="max-w-[1024px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f] text-center max-w-3xl mx-auto"
        >
          Built on the things <span className="text-[#86868b]">that matter most.</span>
        </motion.h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[22px] bg-[#f5f5f7] p-10 sm:p-12 min-h-[340px] flex flex-col justify-between hover:bg-[#eeeef1] transition-colors"
              >
                <Icon className="w-9 h-9 text-[#0071e3]" strokeWidth={1.5} />
                <div>
                  <h3 className="text-[26px] sm:text-[30px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[17px] text-[#1d1d1f]/70 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingStrip() {
  const tiers = [
    { name: "Freezone", price: "4,320", desc: "Trade license. Ready in 5 days." },
    { name: "License + Visa", price: "9,720", desc: "Includes investor visa & Emirates ID." },
    { name: "Offshore", price: "7,999", desc: "Holding companies & global structures." },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5 bg-[#fbfbfd]" style={{ fontFamily: SF_STACK }}>
      <div className="max-w-[1024px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f]"
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
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[22px] p-10 text-left border border-black/[0.06] hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              <p className="text-[15px] font-semibold text-[#0071e3]">{t.name}</p>
              <p className="mt-3 text-[40px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">
                AED {t.price}
              </p>
              <p className="mt-2 text-[16px] text-[#1d1d1f]/70">{t.desc}</p>
              <Link
                to="/campaign"
                className="mt-8 inline-flex items-center gap-1 text-[#0071e3] text-[15px] hover:underline"
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

function ClosingCTA() {
  return (
    <section className="py-28 sm:py-40 px-5 bg-white text-center" style={{ fontFamily: SF_STACK }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1d1d1f]">
          Your company.
          <br />
          <span className="text-[#86868b]">In a few clicks.</span>
        </h2>
        <Link
          to="/campaign"
          className="mt-10 inline-flex items-center gap-1 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 py-4 text-[17px] transition-colors"
        >
          Start now
        </Link>
      </motion.div>
    </section>
  );
}

function MiniFooter() {
  return (
    <footer
      className="bg-[#f5f5f7] text-[#6e6e73] text-[12px] py-8 px-5 border-t border-black/[0.06]"
      style={{ fontFamily: SF_STACK }}
    >
      <div className="max-w-[1024px] mx-auto flex flex-col sm:flex-row justify-between gap-3">
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
    <div className="min-h-screen bg-white text-[#1d1d1f]" style={{ fontFamily: SF_STACK }}>
      <TopBar />
      <main className="pt-11">
        <Hero />
        <section id="features">
          <BigSection
            eyebrow="Mainland"
            title={<>Set up where <span className="text-[#86868b]">opportunity lives.</span></>}
            subtitle="Operate freely across the UAE with a Mainland trade license. No restrictions, full ownership."
            image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=85"
            cta={{ label: "Explore Mainland", to: "/campaign" }}
          />
          <BigSection
            bg="#000"
            eyebrow="Freezone"
            title={<span className="text-white">100% ownership. <span className="text-white/60">Zero compromise.</span></span>}
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
        </section>
        <FeatureGrid />
        <PricingStrip />
        <ClosingCTA />
      </main>
      <MiniFooter />
    </div>
  );
}
