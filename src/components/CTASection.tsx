import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-background mb-4">
              All your business insights,<br />beautifully organized in one tool.
            </h2>
            <p className="text-background/70 mb-8">
              Track cash flow, forecast growth, and share reports—all in one simple dashboard.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/search-activity">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Start Managing
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-background/20 text-background hover:bg-background/10"
                >
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
