import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Agreement",
    body: "By purchasing a package on CSPzone you agree to these Terms & Conditions and to the subscription commitment associated with the package you select.",
  },
  {
    title: "2. Subscription Commitment",
    body: "Subscription packages require completion of the minimum commitment period. Monthly payments will continue throughout the commitment period and cannot be cancelled before completion.",
  },
  {
    title: "3. Payments",
    body: "All payments are processed through secure third-party providers. Prices are quoted in AED unless otherwise stated and are exclusive of any applicable government fees not listed in the package.",
  },
  {
    title: "4. Government Approvals",
    body: "License issuance, visa processing and related approvals are subject to the relevant UAE authority. Timelines indicated on the platform are estimates and may vary.",
  },
  {
    title: "5. Refunds",
    body: "Payments made for government fees, license issuance, visa stamping and third-party services are non-refundable once submitted to the respective authority.",
  },
  {
    title: "6. Documents",
    body: "You are responsible for the accuracy of documents and information submitted. Any delay caused by incorrect or incomplete information is excluded from our service timelines.",
  },
  {
    title: "7. Cancellation",
    body: "You may cancel renewal of any subscription package after completion of the committed period. Standard notice requirements apply as detailed in your package agreement.",
  },
  {
    title: "8. Contact",
    body: "For any questions about these terms, contact support through your CSPzone dashboard.",
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-secondary/40">
      <Navigation />

      <main className="container-wide pt-36 sm:pt-32 pb-24">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Legal
          </p>
          <h1 className="serif-display text-4xl sm:text-5xl text-foreground leading-tight">
            Terms & <em className="italic text-primary">Conditions</em>
          </h1>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Please read these terms carefully before purchasing a package.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="bg-background rounded-3xl border border-border shadow-card p-6 sm:p-8"
            >
              <h2 className="text-lg font-semibold text-foreground mb-2">{s.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
