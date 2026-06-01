import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import csplogo from "@/assets/csplogo.svg";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Headphones,
  BadgePercent,
  Star,
  ArrowRight,
  MessageCircle,
  Lock,
  Sparkles,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/971500000000";
const PRICE_NEW = "AED 4,320";
const PRICE_OLD = "AED 4,800";

const includedItems = [
  "Trade License",
  "MOA (Memorandum of Association)",
  "Tenancy Contract (Address Proof)",
  "Certificate of Good Standing",
  "Certificate of Incumbency",
  "Certificate of Incorporation",
  "Bank Account Opening Letter",
  "Share Certificate",
];

const stats = [
  { value: "1,200+", label: "Companies Registered" },
  { value: "5–7 Days", label: "Average Setup Time" },
  { value: "AED 0", label: "Hidden or Consultancy Fee" },
  { value: "4.9 ★", label: "Google Rating" },
];

const steps = [
  {
    n: "01",
    title: "Make Payment",
    body: "Pay securely online in minutes. One flat fee of AED 4,320 — no surprise charges, no add-ons.",
  },
  {
    n: "02",
    title: "Submit Your Details",
    body: "Fill in your business details and upload basic documents (passport copy + KYC). Our team takes it from there.",
  },
  {
    n: "03",
    title: "License Issued",
    body: "Your Trade License and all 8 documents are processed and delivered within 5–7 working days.",
  },
];

const reviews = [
  {
    quote:
      "The fastest and most transparent way I've found to register a company in Dubai. No hidden costs, no surprises.",
    name: "Rahul Kapoor",
    meta: "India · E-commerce Founder",
  },
  {
    quote:
      "Registered my mainland LLC in just 6 days. The team was available on WhatsApp throughout.",
    name: "Sara Al-Amri",
    meta: "UAE · Consulting Firm",
  },
  {
    quote:
      "Other agencies quoted me AED 8,000+. CSPzone delivered everything for AED 4,320. Completely professional.",
    name: "James Mitchell",
    meta: "UK · Tech Startup",
  },
];

const terms = [
  "Final approval of your trade license is subject to UAE government authority review and policies.",
  "CSPzone facilitates the registration process — approval or rejection is solely at the discretion of the relevant government authority.",
  "Processing timelines of 5–7 working days are estimated and may vary based on government processing queues.",
  "All submitted documents must be accurate and valid. CSPzone is not liable for delays caused by incorrect or incomplete information.",
  "The package fee of AED 4,320 covers the services listed. Any additional government fees, if applicable, will be communicated transparently before proceeding.",
  "By proceeding with payment, you agree to CSPzone's full terms of service.",
];

export default function Campaign() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", activity: "" });
  const [formInView, setFormInView] = useState(true);

  // Hide sticky bar on mobile when form is visible
  useEffect(() => {
    const el = document.getElementById("lead-form");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast({ title: "Please fill in the required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Request received",
      description: "Our team will contact you within 10 minutes.",
    });
    setForm({ name: "", phone: "", email: "", activity: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SECTION 1 — Top Announcement Bar */}
      <div className="w-full bg-foreground text-white text-center text-xs sm:text-sm py-2.5 px-4">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <BadgePercent className="w-4 h-4 text-primary-glow" />
          <span className="font-medium">Limited Offer:</span>
          <span>Get 10% OFF — Register Your UAE Company at</span>
          <span className="line-through opacity-60">{PRICE_OLD}</span>
          <span className="font-semibold text-primary-glow">{PRICE_NEW}</span>
          <span>Only!</span>
        </span>
      </div>

      {/* SECTION 2 — Navigation */}
      <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="container-wide flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="serif-display text-2xl sm:text-3xl text-primary font-semibold tracking-tight">
            CSP<span className="text-foreground">zone</span>
          </a>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-xs font-medium text-foreground/80 border border-border">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            No Consultancy Fee · No Hidden Charges
          </div>
        </div>
      </header>

      {/* SECTION 3 — Hero */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-28 bg-secondary">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.18), transparent 70%)" }}
          />
        </div>

        <div className="container-wide relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border text-xs font-semibold tracking-wide text-foreground/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              UAE's #1 Online Business Registration Portal
            </span>

            <h1 className="serif-display mt-6 text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-foreground">
              Start Your Company in the UAE for{" "}
              <em className="italic text-primary">Just AED 4,320</em>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Register your Dubai business 100% online — no hidden fees, no consultancy charges. One flat price. Everything included.
            </p>

            {/* Price row */}
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <span className="serif-display text-4xl sm:text-5xl font-semibold text-foreground">{PRICE_NEW}</span>
              <span className="text-lg sm:text-xl text-muted-foreground line-through">{PRICE_OLD}</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold border border-success/20">
                <Sparkles className="w-3.5 h-3.5" />
                10% OFF
              </span>
            </div>

            {/* What's included */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60 mb-4">
                What's included
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full px-7 h-12 font-semibold shadow-lg shadow-primary/25"
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-7 h-12 font-semibold border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10 hover:border-[#25D366]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-foreground/70">
              {[
                { icon: CheckCircle2, label: "100% Transparent Pricing" },
                { icon: Clock, label: "5–7 Working Days" },
                { icon: Lock, label: "No Hidden Charges" },
                { icon: Headphones, label: "Dedicated Support" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Lead Capture Form */}
          <motion.div
            id="lead-form"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="absolute -top-3 left-6 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold shadow-md shadow-primary/30">
                <Clock className="w-3.5 h-3.5" />
                Free Callback in 10 Minutes
              </span>
            </div>

            <div className="bg-card rounded-3xl border border-border shadow-xl p-7 sm:p-9">
              <h2 className="serif-display text-2xl sm:text-3xl text-foreground leading-tight">
                Register Your Business in the UAE <em className="italic text-primary">Today</em>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details — our team will contact you in minutes.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs font-medium text-foreground/70">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="mt-1.5 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-medium text-foreground/70">Phone / WhatsApp Number</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="mt-1.5 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-medium text-foreground/70">Email Address</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="mt-1.5 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="activity" className="text-xs font-medium text-foreground/70">Business Activity</Label>
                  <Input
                    id="activity"
                    value={form.activity}
                    onChange={(e) => setForm({ ...form, activity: e.target.value })}
                    placeholder="e.g. Trading, Consulting, IT Services, Food & Beverage..."
                    className="mt-1.5 h-11 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl h-12 font-semibold shadow-lg shadow-primary/25 mt-2"
                >
                  Get My Free Consultation <ArrowRight className="w-4 h-4" />
                </Button>

                <p className="text-[11px] text-center text-muted-foreground inline-flex items-center justify-center gap-1.5 w-full">
                  <Lock className="w-3 h-3" />
                  No spam. Your data is 100% private &amp; secure.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Stats Bar */}
      <section className="relative overflow-hidden" style={{ background: "hsl(var(--neutral-950))" }}>
        <div className="container-wide py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="serif-display text-3xl sm:text-4xl lg:text-5xl text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-white/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — How It Works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">How It Works</p>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              3 Simple Steps to Get Your<br />
              Dubai <em className="italic text-primary">Business License</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden bg-card rounded-3xl border border-border p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div
                  aria-hidden
                  className="serif-display absolute -top-6 -right-2 text-[140px] leading-none font-semibold text-primary/[0.06] select-none"
                >
                  {step.n}
                </div>
                <div className="relative">
                  <div className="text-primary text-sm font-semibold tracking-wider mb-5">Step {step.n}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Customer Reviews */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Customer Reviews</p>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              Trusted by Entrepreneurs<br />
              Across <em className="italic text-primary">40+ Countries</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-3xl border border-border p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed mb-6">"{r.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.meta}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Terms */}
      <section className="py-20 bg-background">
        <div className="container-wide max-w-4xl">
          <h2 className="serif-display text-3xl sm:text-4xl text-foreground mb-8 text-center">
            Important Information
          </h2>
          <div className="bg-secondary rounded-3xl border border-border p-8 sm:p-10">
            <ul className="space-y-3.5">
              {terms.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <a href="/terms" className="text-xs text-primary font-medium hover:underline">
                Read Full Terms &amp; Conditions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for sticky footer */}
      <div className="h-24 lg:h-20" />

      {/* SECTION 8 — Sticky Footer CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
          formInView ? "translate-y-full lg:translate-y-0" : "translate-y-0"
        }`}
      >
        <div className="bg-foreground/95 backdrop-blur-xl border-t border-white/10">
          <div className="container-wide py-3 sm:py-4 flex items-center justify-between gap-3 flex-wrap">
            <p className="hidden sm:block text-sm sm:text-base text-white font-medium">
              Ready to register your UAE company?
            </p>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-5 sm:px-6 h-11 font-semibold flex-1 sm:flex-none shadow-lg shadow-primary/30"
              >
                Apply Now — {PRICE_NEW} <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                asChild
                className="rounded-full px-5 sm:px-6 h-11 font-semibold bg-[#25D366] text-white hover:bg-[#1faa50] flex-1 sm:flex-none"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp Us</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp bubble on mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="lg:hidden fixed bottom-24 right-4 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
