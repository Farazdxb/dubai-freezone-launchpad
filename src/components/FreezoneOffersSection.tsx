import { ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const freezonePackages = [
  {
    name: "IFZA",
    location: "Dubai",
    startingPrice: "AED 11,900",
    features: ["1 Visa Included", "Flexi-Desk", "1 Activity"],
    popular: true,
    tag: "Most Popular",
  },
  {
    name: "RAKEZ",
    location: "Ras Al Khaimah",
    startingPrice: "AED 7,500",
    features: ["0 Visa Included", "Virtual Office", "3 Activities"],
    popular: false,
    tag: "Best Value",
  },
  {
    name: "Meydan",
    location: "Dubai",
    startingPrice: "AED 14,500",
    features: ["2 Visas Included", "Flexi-Desk", "5 Activities"],
    popular: false,
    tag: null,
  },
  {
    name: "DMCC",
    location: "Dubai",
    startingPrice: "AED 18,000",
    features: ["1 Visa Included", "Flexi-Desk", "1 Activity"],
    popular: false,
    tag: "Premium",
  },
  {
    name: "SHAMS",
    location: "Sharjah",
    startingPrice: "AED 5,750",
    features: ["0 Visa Included", "Virtual Office", "1 Activity"],
    popular: false,
    tag: "Budget Friendly",
  },
  {
    name: "AJMAN",
    location: "Ajman",
    startingPrice: "AED 8,200",
    features: ["1 Visa Included", "Flexi-Desk", "3 Activities"],
    popular: false,
    tag: null,
  },
];

export function FreezoneOffersSection() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            <Zap className="inline w-4 h-4 mr-1" />
            Latest Offers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Freezone Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare packages from top UAE Freezones. All prices are transparent with no hidden fees.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freezonePackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-elevated p-6 relative ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Tag */}
              {pkg.tag && (
                <span
                  className={`absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full ${
                    pkg.popular
                      ? "bg-gradient-cta text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {pkg.popular && <Star className="inline w-3 h-3 mr-1" />}
                  {pkg.tag}
                </span>
              )}

              {/* Header */}
              <div className="mb-4 pt-2">
                <h3 className="text-xl font-display font-bold text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.location}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <div className="text-3xl font-display font-bold text-foreground">
                  {pkg.startingPrice}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-success flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/search-activity">
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Request Pre-Approval
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/search-activity">
            <Button variant="secondary" size="lg">
              View All Freezones
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
