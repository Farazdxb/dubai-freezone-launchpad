import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  ["One platform for license, VAT, tax, accounting", "Juggle a PRO, accountant, lawyer, typing center"],
  ["Transparent fixed pricing - no hidden fees", "Surprise charges and shifting quotes"],
  ["Deadline reminders + auto-filing", "Miss a VAT deadline = AED 10,000 fine"],
  ["Dashboard access 24/7", "WhatsApp follow-ups and lost email threads"],
  ["Licensed agents + expert tax team", "Generic consultant with no tax background"],
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--neutral-950))" }}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold mb-4">Why founders switch</p>
          <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl text-white">
            CSPzone vs <em className="italic text-primary-glow">the old way</em>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="grid grid-cols-2 text-sm">
            <div className="bg-primary p-5">
              <p className="text-white font-semibold text-base">With CSPzone</p>
            </div>
            <div className="bg-white/[0.04] p-5">
              <p className="text-white/70 font-medium text-base">Doing it yourself / typical consultant</p>
            </div>
          </div>
          {rows.map(([yes, no], i) => (
            <div key={i} className="grid grid-cols-2 border-t border-white/10">
              <div className="p-5 flex gap-3 items-start bg-primary/10">
                <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
                <span className="text-white text-sm">{yes}</span>
              </div>
              <div className="p-5 flex gap-3 items-start">
                <X className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{no}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
