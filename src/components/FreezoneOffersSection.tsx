import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NewCompanySetupForm } from "@/components/NewCompanySetupForm";

const licensePackages = [
  {
    name: "License Only",
    price: "AED 1,250",
    period: "/month × 4 months",
    total: "Total AED 4,800",
    description: "For founders who need a UAE license without a visa.",
    features: ["UAE Business License", "License processing support", "Basic setup assistance", "Dashboard access"],
    cta: "Get License",
    featured: false,
  },
  {
    name: "License + Resident Visa",
    price: "AED 2,750",
    period: "/month × 4 months",
    total: "Total AED 10,800",
    description: "The complete starter — license + UAE residency in one.",
    features: ["UAE Business License", "UAE Resident Visa", "Visa processing support", "Business setup assistance", "Dashboard access"],
    cta: "Get License + Visa",
    featured: true,
  },
  {
    name: "2-Year License",
    price: "AED 7,200",
    period: "without visa",
    total: "AED 16,200 with visa — save AED 5,400",
    description: "For founders ready to commit and save big.",
    features: ["2-Year UAE Business License", "Long-term continuity", "Reduced renewal hassle", "Visa included (optional)", "Dashboard access"],
    cta: "Get 2-Year License",
    featured: false,
  },
];

const complianceSubs = [
  {
    name: "Compliance Starter",
    price: "AED 180",
    period: "/month",
    sub: "~ USD 49/month",
    description: "Everything you need to stay compliant.",
    features: ["Compliance Calendar", "Secure Document Vault", "Deadline Alerts", "Priority Support", "VAT Registration", "Corporate Tax Registration"],
    cta: "Start Compliance",
    featured: false,
  },
  {
    name: "Compliance Plus + Dubai Address",
    price: "AED 365",
    period: "/month",
    sub: "~ USD 99/month",
    description: "Compliance + a premium Dubai business address.",
    features: ["Everything in Starter", "Premium Dubai Business Address", "Dedicated Account Support"],
    cta: "Get Compliance Plus",
    featured: true,
  },
];

export function FreezoneOffersSection() {
  return (
    <>
      {/* License pricing on dark */}
      <section id="pricing" className="section-padding" style={{ background: "hsl(var(--neutral-950))" }}>
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold mb-4">Pricing</p>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-white">
              Simple pricing for your <em className="italic text-primary-glow">UAE license</em>
            </h2>
            <p className="text-white/60 mt-5">Choose the package that fits your stage. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {licensePackages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  pkg.featured
                    ? "bg-primary text-white shadow-2xl shadow-primary/30 lg:-translate-y-3"
                    : "bg-white text-foreground border border-white/10"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${pkg.featured ? "text-white" : ""}`}>{pkg.name}</h3>
                <div className="mb-1">
                  <span className={`serif-display text-5xl ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.price}</span>
                </div>
                <p className={`text-sm mb-1 ${pkg.featured ? "text-white/85" : "text-muted-foreground"}`}>{pkg.period}</p>
                <p className={`text-xs font-medium mb-5 ${pkg.featured ? "text-white/70" : "text-muted-foreground"}`}>{pkg.total}</p>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-white/85" : "text-muted-foreground"}`}>{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.featured ? "text-white" : "text-primary"}`} />
                      <span className={pkg.featured ? "text-white" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <NewCompanySetupForm
                  trigger={
                    <Button
                      className={`w-full rounded-full font-semibold ${
                        pkg.featured ? "bg-white text-primary hover:bg-white/90" : ""
                      }`}
                      variant={pkg.featured ? "secondary" : "default"}
                    >
                      {pkg.cta}
                    </Button>
                  }
                />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-white/40 mt-10">
            All prices in AED. Government fees included. No hidden charges.
          </p>
        </div>
      </section>

      {/* Compliance subscriptions on light */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Compliance subscriptions</p>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              Stay compliant. <em className="italic text-primary">Pay monthly.</em>
            </h2>
            <p className="text-muted-foreground mt-5">
              Add compliance to your license, or subscribe standalone if you already have one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceSubs.map((pkg) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  pkg.featured ? "bg-foreground text-white shadow-xl" : "bg-secondary border border-border"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${pkg.featured ? "text-white" : ""}`}>{pkg.name}</h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className={`serif-display text-5xl ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.price}</span>
                  <span className={`${pkg.featured ? "text-white/70" : "text-muted-foreground"} text-sm`}>{pkg.period}</span>
                </div>
                <p className={`text-xs mb-5 ${pkg.featured ? "text-white/60" : "text-muted-foreground"}`}>{pkg.sub}</p>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-white/80" : "text-muted-foreground"}`}>{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.featured ? "text-primary-glow" : "text-primary"}`} />
                      <span className={pkg.featured ? "text-white" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-semibold ${
                    pkg.featured ? "bg-primary hover:bg-primary-hover text-white" : ""
                  }`}
                  variant={pkg.featured ? "default" : "outline"}
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
