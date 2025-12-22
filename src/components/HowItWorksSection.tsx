import { Search, FileCheck, LayoutDashboard, Award } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Search Activity",
    description: "Find your business activity and compare Freezone prices instantly",
    step: "01",
  },
  {
    icon: FileCheck,
    title: "Submit Pre-Approval",
    description: "Fill a simple form and upload your documents securely",
    step: "02",
  },
  {
    icon: LayoutDashboard,
    title: "Track via Dashboard",
    description: "Monitor progress, chat with admin, and manage everything in one place",
    step: "03",
  },
  {
    icon: Award,
    title: "License Issued",
    description: "Receive your business license and start operating in Dubai",
    step: "04",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your business license in Dubai with our streamlined 4-step process
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="card-elevated p-6 h-full relative z-10">
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-cta rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-lg">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
