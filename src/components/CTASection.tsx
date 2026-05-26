import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ctaBg =
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80";

export function CTASection() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24" style={{ background: "hsl(var(--neutral-950))" }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] min-h-[440px] lg:min-h-[520px] flex items-center"
        >
          {/* Background image */}
          <img
            src={ctaBg}
            alt="Founder building her UAE business"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-transparent" />

          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-14 lg:py-20 max-w-2xl">
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05]">
              Turn your <span className="italic">'someday'</span>
              <br />
              goal into <span className="italic">today's success</span>
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
              className="mt-9 space-y-4 max-w-md"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your business name"
                className="w-full h-14 rounded-full bg-white px-6 text-base text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary shadow-xl"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full h-14 px-10 bg-primary hover:bg-primary-hover text-white font-semibold text-base shadow-xl shadow-primary/30"
              >
                Get started
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
