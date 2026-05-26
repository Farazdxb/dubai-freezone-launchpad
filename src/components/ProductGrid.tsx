import { motion } from "framer-motion";
import { Building2, Receipt, TrendingUp } from "lucide-react";

const columns = [
  {
    icon: Building2,
    label: "Start your business",
    items: ["Register your business", "Visa & Residency", "Bank Account Opening", "Office & Address Solutions"],
  },
  {
    icon: Receipt,
    label: "Stay compliant",
    items: ["VAT Registration", "VAT Filing (Quarterly)", "Corporate Tax Filing", "ESR Reporting", "UBO Filing"],
  },
  {
    icon: TrendingUp,
    label: "Run & grow",
    items: ["Accounting & Bookkeeping", "PRO Services", "Payroll", "Trademark & Legal"],
  },
];

export function ProductGrid() {
  return (
    <section className="section-padding bg-[hsl(var(--neutral-300))]/30">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">What we do</p>
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Everything you need to run a{" "}
            <em className="italic text-primary">UAE business</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, idx) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <col.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-5">{col.label}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
