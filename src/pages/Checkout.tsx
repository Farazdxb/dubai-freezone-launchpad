import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Briefcase,
  Info,
  FileText,
  Lock,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const included = [
  "UAE Business License",
  "Bank Account Opening Assistance",
  "VAT Registration Support",
  "Freezone Coworking Lease Agreement",
  "Company MOA",
  "Bank Letter",
  "Business Setup Assistance",
  "Visa Processing Support",
];

const importantInfo = [
  { text: "Documents and required information will be requested after payment.", isHeading: false },
  { text: "License and visa issuance are subject to approval by the relevant authority.", isHeading: false },
  { text: "Business License applications typically take 4–8 working days, subject to authority processing times.", isHeading: false },
  { text: "Business License Packages", isHeading: true },
  { text: "If you choose an installment plan (4 or 6 months), a minimum commitment period applies as per your selected package.", isHeading: false },
  { text: "Installment plans cannot be cancelled before the commitment period is completed.", isHeading: false },
  { text: "Compliance Subscription Packages", isHeading: true },
  { text: "Compliance subscriptions have no lock-in period and can be cancelled anytime.", isHeading: false },
  { text: "Business information and supporting documents must be submitted through the client dashboard after subscription activation.", isHeading: false },
  { text: "Services will commence once the required information is received.", isHeading: false },
];

const requiredDocs = [
  "Passport Copy",
  "Passport Size Photo",
  "Email Address",
  "Mobile Number",
  "Business License (if opted for Compliance Package)",
  "Emirates ID (if any)",
];

export default function Checkout() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/40">
      <Navigation />

      <main className="container-wide pt-36 sm:pt-32 pb-32 lg:pb-20">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Checkout
          </p>
          <h1 className="serif-display text-4xl sm:text-5xl text-foreground leading-tight">
            Complete your <em className="italic text-primary">subscription</em>
          </h1>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Review your package details and proceed with secure payment.
          </p>
        </div>

        <div className="grid md:grid-cols-10 gap-8">
          {/* LEFT */}
          <div className="md:col-span-7 space-y-6">
            {/* Card 1 — Package Overview */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-3xl border border-border shadow-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-xl font-semibold text-foreground">
                      Business License + Visa Package
                    </h2>
                    <Badge variant="secondary" className="rounded-full font-medium">
                      Subscription
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    UAE business license with resident visa, fully managed.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-secondary/60 p-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Monthly payment
                      </p>
                      <p className="serif-display text-3xl text-foreground">
                        AED 2,750
                        <span className="text-sm font-sans text-muted-foreground">/mo</span>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary/60 p-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Commitment
                      </p>
                      <p className="serif-display text-3xl text-foreground">4 months</p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    Minimum 4-Month Commitment
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-background rounded-3xl border border-border shadow-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-foreground mb-5">What's included</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3 — Important Information */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl bg-secondary/70 border border-border p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-background text-primary flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Important information</h3>
              </div>
              <ul className="space-y-2.5 pl-1">
                {importantInfo.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex gap-2.5">
                    <span className="text-muted-foreground/60 mt-2 w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 4 — Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-background rounded-3xl border border-border shadow-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Required documents</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {requiredDocs.map((doc) => (
                  <li key={doc} className="flex gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-5">
                You can upload documents after payment.
              </p>
            </motion.div>

            {/* Card 5 — Terms */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-background rounded-3xl border border-border shadow-card p-6 sm:p-7"
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={accepted}
                  onCheckedChange={(v) => setAccepted(!!v)}
                  className="mt-0.5"
                />
                <div className="text-sm">
                  <p className="text-foreground">
                    I accept the{" "}
                    <a
                      href="https://www.cspzone.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and subscription commitment terms.
                  </p>
                </div>
              </label>
            </motion.div>
          </div>

          {/* RIGHT — Sticky Order Summary */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-24">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-background rounded-3xl border border-border shadow-lg p-6 sm:p-7"
              >
                <h3 className="text-lg font-semibold text-foreground mb-5">Order summary</h3>

                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-1">Package</p>
                  <p className="text-base font-medium text-foreground">
                    Business License + Visa Package
                  </p>
                </div>

                <div className="py-4 space-y-3 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly payment</span>
                    <span className="text-foreground font-medium">AED 2,750</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subscription duration</span>
                    <span className="text-foreground font-medium">4 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total commitment</span>
                    <span className="text-foreground font-medium">AED 11,000</span>
                  </div>
                </div>

                <div className="py-5 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-foreground">Due today</span>
                  <span className="serif-display text-3xl text-primary">AED 2,750</span>
                </div>

                <Button
                  onClick={() => {
                    if (!accepted) {
                      toast.error("Please accept the Terms & Conditions to proceed.");
                      return;
                    }
                    toast.success("Redirecting to secure payment…");
                  }}
                  className="w-full rounded-full font-semibold h-12"
                  size="lg"
                >
                  <Lock className="w-4 h-4" />
                  Proceed to secure payment
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                  Secure payment • No hidden charges
                </div>
              </motion.div>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Cancel anytime after commitment period.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-muted-foreground">Due today</span>
          <span className="serif-display text-2xl text-primary">AED 2,750</span>
        </div>
        <Button
          onClick={() => {
            if (!accepted) {
              toast.error("Please accept the Terms & Conditions to proceed.");
              return;
            }
            toast.success("Redirecting to secure payment…");
          }}
          className="w-full rounded-full font-semibold h-12"
        >
          <Lock className="w-4 h-4" />
          Proceed to secure payment
        </Button>
      </div>

      <Footer />
    </div>
  );
}
