import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const freezonePackages = [{
  name: "Ecommerce License",
  freezone: "SHAMS",
  price: "AED 5,750",
  period: "/ year",
  description: "Perfect for solo entrepreneurs starting small",
  features: ["Virtual office included", "1 business activity", "No visa allocation", "Basic support"],
  popular: false,
  buttonText: "Choose This Plan",
  buttonVariant: "outline" as const
}, {
  name: "Premium",
  freezone: "IFZA",
  price: "AED 11,900",
  period: "/ year",
  description: "Most popular choice for growing businesses",
  features: ["Flexi-desk included", "Multiple activities", "1 visa allocation", "Priority support", "Bank account assistance", "Free consultation"],
  popular: true,
  tag: "Popular Freezones",
  buttonText: "Choose This Plan",
  buttonVariant: "default" as const
}, {
  name: "Enterprise",
  freezone: "DMCC",
  price: "AED 18,000",
  period: "/ year",
  description: "For established businesses needing premium setup",
  features: ["Physical office options", "Unlimited activities", "Multiple visa allocations", "Dedicated account manager", "Premium banking support", "Legal consultation"],
  popular: false,
  buttonText: "Choose This Plan",
  buttonVariant: "outline" as const
}];
export function FreezoneOffersSection() {
  return <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start free. Upgrade<br />when you're ready.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ​Low Cost Freezone License Offers from all across the UAE           
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-12">
          {freezonePackages.map((pkg, index) => <motion.div key={pkg.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`relative bg-card rounded-2xl border ${pkg.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"} p-6 lg:p-8 flex flex-col`}>
              {/* Popular Badge */}
              {pkg.tag && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full whitespace-nowrap">
                  {pkg.tag}
                </span>}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.freezone}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              {/* CTA */}
              <Link to="/search-activity" className="mt-auto">
                <Button variant={pkg.buttonVariant} className={`w-full rounded-lg ${pkg.popular ? "bg-primary hover:bg-primary-hover" : ""}`}>
                  {pkg.buttonText}
                </Button>
              </Link>
            </motion.div>)}
        </div>

        {/* Bottom Note */}
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="text-center text-sm text-muted-foreground mt-10">
          All plans include: License registration • Document processing • Government fees • Basic support
        </motion.p>
      </div>
    </section>;
}