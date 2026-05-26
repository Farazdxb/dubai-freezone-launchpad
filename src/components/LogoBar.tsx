import { motion } from "framer-motion";

const logos = ["DED", "IFZA", "Meydan", "RAKEZ", "SHAMS", "Emirates NBD", "WIO", "Mashreq Neo", "Stripe", "DMCC"];

export function LogoBar() {
  return (
    <section className="bg-background border-y border-border py-12">
      <div className="container-wide">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by businesses across the UAE
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -800] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="shrink-0 text-xl md:text-2xl font-serif text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
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
