import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LucideIcon, LogIn, FileUp, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-dashboard.png";

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  shortDescription: string;
  overview: {
    whatIs: string;
    problemSolved: string;
    whyImportant: string;
  };
  benefits: ServiceBenefit[];
  targetAudience: string[];
  relatedServices: RelatedService[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 lg:pt-18">
        {/* Hero Section */}
        <section className="relative pt-28 pb-0 overflow-hidden bg-background">
          {/* Gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container-wide relative z-10">
            {/* Centered Content */}
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  {data.title}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {data.shortDescription}
                </p>
                <Link to="/login">
                  <Button size="lg" className="rounded-full px-8">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Dashboard Image - Full Width Below Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-5xl mx-auto mt-12"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl -z-10 scale-95" />
              
              {/* Main Dashboard Image */}
              <div className="relative rounded-t-2xl overflow-hidden border border-border/30 shadow-2xl shadow-primary/10">
                <img
                  src={heroImage}
                  alt={`${data.title} Dashboard`}
                  className="w-full h-auto"
                />
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
                Understanding This Service
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "What Is It?", content: data.overview.whatIs },
                { title: "Problem It Solves", content: data.overview.problemSolved },
                { title: "Why It Matters", content: data.overview.whyImportant },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                BENEFITS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Key Benefits
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages of choosing our professional service
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                TARGET AUDIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Who This Service Is For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This service is ideal for the following types of businesses and individuals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {data.targetAudience.map((audience, index) => (
                <motion.span
                  key={audience}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {audience}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple 3-step process to get started
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: LogIn,
                  title: "Login to the Portal",
                  description: "Create your account or login to the CSPzone portal using the login button above.",
                  gradient: "from-[hsl(217,91%,60%)] to-[hsl(230,80%,55%)]"
                },
                {
                  icon: FileUp,
                  title: "Submit Documents",
                  description: "Upload the required documents through your dashboard. Our team will review them promptly.",
                  gradient: "from-[hsl(220,80%,55%)] to-[hsl(200,70%,50%)]"
                },
                {
                  icon: CheckCheck,
                  title: "Finalise & Done",
                  description: "Complete the agreement, make payment, and receive your completed service deliverables.",
                  gradient: "from-[hsl(190,70%,50%)] to-[hsl(175,60%,55%)]"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1`}>
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                EXPLORE MORE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Related Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover other services that might help your business
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relatedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="block bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-foreground rounded-3xl p-8 md:p-12 lg:p-16"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-transparent" />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-background mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-background/70 mb-8 max-w-xl mx-auto">
                  Take the first step towards professional business services in Dubai. Our expert team is here to assist you every step of the way.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/login">
                    <Button 
                      size="lg" 
                      className="rounded-full px-8 bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      Get Started Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/search-activity">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full px-8 border-background/20 text-background hover:bg-background/10"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
