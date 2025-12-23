import { Search, FileCheck, LayoutDashboard, Award, Zap, Eye, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Save 10+ Hours",
    description: "Automate tracking and matching so you can focus on growing your business.",
  },
  {
    icon: Eye,
    title: "Spot Hidden Risks",
    description: "Visualize cash flow clearly and catch problems before they impact your business.",
  },
  {
    icon: BarChart3,
    title: "Decide With Data",
    description: "Use real-time insights and forecasts to make confident business decisions.",
  },
];

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
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-wide">
        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Run your business,<br />not your spreadsheets
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Track, predict, and report your business setup—without touching Excel
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Step Number */}
                <span className="text-5xl font-display font-bold text-secondary mb-4 block">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
