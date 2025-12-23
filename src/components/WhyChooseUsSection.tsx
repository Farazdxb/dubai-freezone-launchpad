import { Shield, Clock, DollarSign, Users, Building2, Globe, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "As a founder, I wear too many hats. This tool took financial tracking off my plate and gave me instant clarity I didn't know I needed.",
    author: "Ricky Charlie",
    role: "Founder at Vento",
    avatar: "RC",
  },
];

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
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Discover what makes CSPzone<br />different
          </h2>
          <p className="text-muted-foreground mb-8">
            See how CSPzone is changing the way entrepreneurs launch in Dubai
          </p>

          {/* Avatar Stack */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-primary-foreground text-xs font-medium ${
                  i > 1 ? "-ml-3" : ""
                }`}
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    ← Prev
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    Next →
                  </button>
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
