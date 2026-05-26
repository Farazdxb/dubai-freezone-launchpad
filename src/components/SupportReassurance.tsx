import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare, Globe2, Clock } from "lucide-react";

export function SupportReassurance() {
  return (
    <section className="section-padding bg-[hsl(var(--neutral-300))]/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex w-14 h-14 rounded-2xl bg-background items-center justify-center mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Real people. <em className="italic text-primary">Real support.</em>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Chat with a licensed UAE business advisor in English, Arabic or Hindi. Mon – Sat, 9 AM – 7 PM GST.
          </p>
          <Button size="lg" className="rounded-full px-8 font-semibold">Start chat</Button>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-foreground/70">
            <span className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary" /> EN · AR · HI</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon – Sat, 9–7 GST</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
