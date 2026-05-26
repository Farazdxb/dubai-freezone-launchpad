import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-7xl text-white mb-6">
            Your UAE business is<br /><em className="italic">one click away.</em>
          </h2>
          <p className="text-white/85 text-lg mb-9 max-w-xl mx-auto">
            Register, stay compliant and manage everything from one elegant dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/dashboard">
              <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                Get my license <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link to="#pricing">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold">
                View pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
