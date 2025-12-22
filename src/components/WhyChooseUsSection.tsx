import { Shield, Clock, DollarSign, Users, Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Transparent",
    description: "No hidden fees or surprise charges. See exact pricing upfront.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get your license in 3-7 working days with our streamlined process.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Direct Freezone rates without middleman commissions.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "AI-powered chatbot and dedicated team to guide you.",
  },
  {
    icon: Building2,
    title: "Multiple Freezones",
    description: "Compare 15+ Freezones and choose the best fit for your business.",
  },
  {
    icon: Globe,
    title: "Full Ownership",
    description: "100% foreign ownership with no local sponsor required.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Why CSPzone
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              The Smarter Way to Start Your Business in Dubai
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Skip the traditional consultancy route. Our platform gives you direct access to Freezone pricing, instant comparisons, and a self-service portal that puts you in control.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">No Consultancy Fees</h4>
                  <p className="text-muted-foreground text-sm">Save thousands on consultancy charges</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Real-Time Tracking</h4>
                  <p className="text-muted-foreground text-sm">Monitor your application status 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Self-Service Portal</h4>
                  <p className="text-muted-foreground text-sm">Complete everything online at your pace</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-5"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
