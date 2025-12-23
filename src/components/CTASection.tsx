import { ArrowRight, DollarSign, Clock, Shield } from "lucide-react";
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-transparent" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Selling Points */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-background/80 text-sm">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>Zero Consultancy Fee</span>
              </div>
              <div className="flex items-center gap-2 text-background/80 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>License in 3-7 Days</span>
              </div>
              <div className="flex items-center gap-2 text-background/80 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>15+ UAE Freezones</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-background mb-4">
              Ready to Start Your<br />UAE Freezone Business?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Join 2,400+ entrepreneurs who saved thousands in consultancy fees. Get direct Freezone rates with full transparency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/search-activity">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Search Business Activities
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-background/20 text-background hover:bg-background/10"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
