import { motion } from "framer-motion";

const logos = ["IFZA", "Meydan", "RAKEZ", "SHAMS", "Ajman NuVentures", "WIO", "Mashreq Neo", "DMCC"];

export function LogoBar() {
  return (
    <section className="border-y border-white/10 py-12" style={{ background: "hsl(var(--neutral-950))" }}>
      <div className="container-wide">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
          Trusted by businesses across the UAE
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, hsl(var(--neutral-950)), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, hsl(var(--neutral-950)), transparent)" }} />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -800] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="shrink-0 text-xl md:text-2xl font-serif text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
