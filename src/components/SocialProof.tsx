import { motion } from "framer-motion";

const stats = [
  { n: "2,000+", l: "Businesses launched" },
  { n: "AED 500M+", l: "Revenue managed" },
  { n: "4.9★", l: "Google rating" },
  { n: "99%", l: "On-time filing" },
];

const testimonials = [
  {
    q: "CSPzone replaced our PRO, accountant and consultant. The dashboard alone is worth it - I never miss a deadline.",
    name: "Ahmed Hassan",
    role: "Founder, TechVentures Dubai",
  },
  {
    q: "Transparent pricing, no surprises, no agents calling at 9pm. Got my license in 5 days and my visa in 12.",
    name: "Sarah Chen",
    role: "CEO, Digital Solutions FZE",
  },
  {
    q: "The compliance team is sharp. They flagged a corporate tax issue before it cost us a fine. Worth every dirham.",
    name: "Rohan Mehta",
    role: "Director, Mehta Trading LLC",
  },
];

export function SocialProof() {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--neutral-700))" }}>
      <div className="container-wide">

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 bg-background rounded-3xl border border-border p-8 lg:p-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center"
            >
              <p className="serif-display text-4xl lg:text-5xl text-primary mb-1">{s.n}</p>
              <p className="text-sm text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Loved by founders</p>
          <h2 className="serif-display text-4xl sm:text-5xl text-foreground">
            Real stories. <em className="italic text-primary">Real results.</em>
          </h2>
        </div>

        {/* Mobile: swipeable carousel | Desktop: grid */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pb-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="snap-center shrink-0 w-[85%] bg-card rounded-3xl border border-border p-7"
              >
                <p className="text-base text-foreground leading-relaxed mb-6">
                  &ldquo;{t.q}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-card rounded-3xl border border-border p-7 hover:shadow-lg transition-all"
            >
              <p className="text-base text-foreground leading-relaxed mb-6">
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
