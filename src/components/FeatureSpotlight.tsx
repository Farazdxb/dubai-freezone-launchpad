import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, FileCheck2, AlertCircle, ArrowRight } from "lucide-react";

export function FeatureSpotlight() {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--neutral-700))" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-4">The dashboard</p>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              One dashboard.<br />
              Every deadline. <em className="italic text-primary-glow">Zero surprises.</em>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Track your license renewal, VAT filing dates, corporate tax deadlines and visa expiries
              in one place. Get reminders before anything is due. Pay and file directly from the platform.
            </p>
            <Button size="lg" className="rounded-full px-7 bg-white text-primary hover:bg-white/90">
              See it in action <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl p-6 shadow-2xl border border-white/10" style={{ background: "hsl(var(--neutral-950))" }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="text-xs text-white/40 ml-2">cspzone.app</span>
              </div>

              <p className="text-white/50 text-xs mb-4">Welcome back, Sarah</p>
              <h3 className="text-white text-2xl font-display font-semibold mb-6">Your business pulse</h3>

              <div className="space-y-3">
                {[
                  { icon: FileCheck2, label: "Trade License", status: "Active · Renews Mar 2027", tone: "ok" },
                  { icon: Calendar, label: "VAT Filing Q1", status: "Due in 12 days", tone: "warn" },
                  { icon: AlertCircle, label: "Corporate Tax", status: "Filed Feb 14", tone: "ok" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                        <row.icon className="w-4 h-4 text-primary-glow" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{row.label}</p>
                        <p className="text-white/50 text-xs">{row.status}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${row.tone === "warn" ? "bg-primary text-white" : "bg-white/10 text-white/70"}`}>
                      {row.tone === "warn" ? "Action" : "OK"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-8 -z-10 bg-primary/30 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
