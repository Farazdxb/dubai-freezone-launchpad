import { motion } from "framer-motion";
import { Landmark, CreditCard, Calculator, ScrollText } from "lucide-react";

const perks = [
  { icon: Landmark, title: "Banking", body: "Pre-approved intros to Emirates NBD, WIO, Mashreq Neo, RAKBANK" },
  { icon: CreditCard, title: "Payments", body: "Stripe and Telr setup credits to get you accepting payments fast" },
  { icon: Calculator, title: "Accounting", body: "Sync with Zoho Books, QuickBooks and Xero out of the box" },
  { icon: ScrollText, title: "Legal", body: "Discounted MOA, trademark protection and contract templates" },
];

export function PerksIntegrations() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Perks & integrations</p>
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Built for the UAE <em className="italic text-primary">business ecosystem</em>
          </h2>
          <p className="text-muted-foreground mt-5">
            Plug straight into the tools and partners UAE founders already trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl p-7 bg-secondary border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
