import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ctaBg =
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24" style={{ background: "hsl(var(--neutral-950))" }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] min-h-[440px] lg:min-h-[560px] flex items-center justify-center"
        >
          {/* Background image */}
          <img
            src={ctaBg}
            alt="Founder building her UAE business"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/75" />

          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 text-center flex flex-col items-center">
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] max-w-4xl mx-auto">
              Turn your <span className="italic">'someday'</span> goal into{" "}
              <span className="italic">today's success</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Launch your UAE freezone company with zero consultancy fees — fast, transparent, and fully online.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="rounded-full h-14 px-10 bg-primary hover:bg-primary-hover text-white font-semibold text-base shadow-xl shadow-primary/30"
              >
                Get started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/services")}
                className="rounded-full h-14 px-10 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-foreground font-semibold text-base"
              >
                Explore services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
