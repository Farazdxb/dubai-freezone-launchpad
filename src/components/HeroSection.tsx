import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Sparkles, CheckCircle2, Bell } from "lucide-react";

const heroLeft =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80";
const heroRight =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80";

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-20 lg:pb-28 overflow-hidden bg-secondary">
      {/* Soft radial accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.15), transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-8 items-center">
          {/* Left floating photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <img src={heroLeft} alt="UAE entrepreneur with new license" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 left-4 right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
            >
              <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">
                Your license is officially approved
              </span>
            </motion.div>
          </motion.div>

          {/* Center column */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-5"
            >
              Every business starts somewhere
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="serif-display text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] text-foreground"
            >
              Start your UAE
              <br />
              business <em className="italic text-primary">here</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed"
            >
              Business license, VAT, corporate tax and accounting - handled by experts,
              managed from one elegant dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link to="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-full px-8 w-full sm:w-auto font-semibold shadow-lg shadow-primary/25">
                  Get my license
                </Button>
              </Link>
              <Link to="#pricing" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto font-semibold border-border bg-background">
                  View pricing
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9</span>
              <span>·</span>
              <span>2,000+ businesses launched</span>
            </motion.div>
          </div>

          {/* Right floating photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <img src={heroRight} alt="Founder running her UAE business" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-2 -left-6 right-2 bg-background border border-border rounded-2xl p-3 shadow-lg space-y-2"
            >
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-foreground/10 shrink-0" />
                <span className="text-xs text-foreground">Hi, when is my VAT due?</span>
              </div>
              <div className="flex items-center gap-2 bg-accent rounded-xl px-3 py-2">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-xs text-primary font-medium">Filed 12 days ahead</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-24 max-w-3xl mx-auto bg-background border border-border rounded-2xl px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 shadow-sm"
        >
          {[
            { icon: CheckCircle2, label: "100% accuracy guaranteed" },
            { icon: Bell, label: "Deadline reminders built-in" },
            { icon: Sparkles, label: "FTA & Freezone approved" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <Icon className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
