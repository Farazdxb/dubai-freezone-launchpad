import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  { n: "01", title: "Choose your package", body: "Pick a 4-month, 1-year, or 2-year license — with or without a UAE resident visa." },
  { n: "02", title: "Subscribe & complete checkout", body: "Pay monthly or upfront. Transparent pricing, no hidden fees." },
  { n: "03", title: "Get your license", body: "Our licensed agents file your paperwork — license, MOA, Emirates ID, visa and bank intro." },
  { n: "04", title: "Manage from your dashboard", body: "Add Compliance for VAT, corporate tax, deadlines and a Dubai address — all in one login." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">How it works</p>
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Launch your UAE business<br />in <em className="italic text-primary">4 simple steps</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative bg-card rounded-3xl border border-border p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-500"
            >
              <div className="text-primary text-sm font-semibold tracking-wider mb-6">{step.n}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#pricing">Browse packages</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
