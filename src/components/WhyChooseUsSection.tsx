import { Shield, Clock, DollarSign, Users, Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I saved over AED 15,000 in consultancy fees! The entire process was transparent — I could see exactly what I was paying for. Got my trading license in just 5 days.",
    author: "Ahmed Hassan",
    role: "Founder, TechVentures Dubai",
    avatar: "AH",
  },
  {
    quote: "As a first-time entrepreneur in Dubai, I was worried about hidden charges. CSPzone showed me upfront pricing and helped me choose the right Freezone for my IT business.",
    author: "Sarah Chen",
    role: "CEO, Digital Solutions FZE",
    avatar: "SC",
  },
];

const features = [
  {
    icon: DollarSign,
    title: "Zero Consultancy Fee",
    description: "No agent commissions. Pay only the actual Freezone charges — nothing more.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get your UAE business license in 3-7 working days with our streamlined process.",
  },
  {
    icon: Shield,
    title: "100% Transparent",
    description: "See complete pricing breakdown before you pay. No hidden fees or surprises.",
  },
  {
    icon: Users,
    title: "Self-Service Portal",
    description: "Track your application, upload documents, and chat with support — all online.",
  },
  {
    icon: Building2,
    title: "15+ Freezones",
    description: "Compare IFZA, RAKEZ, DMCC, Meydan, SHAMS and more in one place.",
  },
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Full ownership with no local sponsor required in any UAE Freezone.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            WHY CSPZONE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Skip the Middlemen.<br />Setup Directly.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Traditional business setup consultants charge AED 5,000-20,000 in fees. We connect you directly with Freezones — at their actual rates.
          </p>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-left"
              >
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
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
    </section>
  );
}
