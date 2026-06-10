import { CampaignTemplate, CampaignConfig } from "@/components/CampaignTemplate";

const config: CampaignConfig = {
  promo: {
    text: "Complete UAE Setup with Residency — Annual Package at",
    priceNew: "AED 9,720",
  },
  hero: {
    eyebrow: "Business License + Resident Visa · 100% Online",
    title: (
      <>
        UAE Business License{" "}
        <em className="italic text-primary">+ One Resident Visa</em>
      </>
    ),
    subtitle:
      "Everything required to establish and operate your UAE business with full residency — one transparent annual fee, zero consultancy charges.",
    priceNew: "AED 9,720",
    includedLabel: "Everything included",
    includedItems: [
      "Trade License",
      "Investor / Manager Visa",
      "Emirates ID",
      "Medical Fitness Test",
      "Tenancy Contract (Address Proof)",
      "Certificate of Incorporation",
      "Bank Account Opening Letter",
      "Share Certificate",
      "Up to 10 Business Activities",
      "CSPZone Dashboard Access",
      "Document Tracking",
      "Compliance Reminders",
    ],
    bestFor: "Business owners relocating to the UAE.",
  },
  stats: [
    { value: "3,200+", label: "Founders Onboarded" },
    { value: "10–14 Days", label: "Average Setup + Visa" },
    { value: "AED 0", label: "Consultancy Fee" },
    { value: "4.9 ★", label: "Customer Rating" },
  ],
  steps: [
    { n: "01", title: "Submit & Pay", body: "Share your details and pay the flat annual fee online — no hidden charges, no add-ons." },
    { n: "02", title: "Documents & Approvals", body: "We process your trade license, tenancy, and incorporation paperwork end-to-end." },
    { n: "03", title: "Visa & Emirates ID", body: "Complete your medical, biometrics and receive your Resident Visa and Emirates ID." },
  ],
  stepsTitle: (
    <>From Application to <em className="italic text-primary">UAE Residency</em><br />in 3 Simple Steps</>
  ),
  reviewsTitle: (
    <>Built for Founders<br />Relocating to the <em className="italic text-primary">UAE</em></>
  ),
  reviews: [
    { quote: "Got my license and visa sorted in under two weeks. The dashboard kept me updated at every step.", name: "Ahmed Farouk", meta: "Egypt · SaaS Founder" },
    { quote: "Moved to Dubai with my family. CSPZone handled the trade license, Emirates ID and visa — all online.", name: "Priya Menon", meta: "India · Consultancy Owner" },
    { quote: "Transparent pricing and a smooth process from start to finish. Highly recommended for founders relocating.", name: "Daniel O'Connor", meta: "Ireland · E-commerce" },
  ],
  videoTitle: (<>License, visa, residency.<br /><em className="italic text-white/80">All in one place.</em></>),
  videoSubtitle: "See how CSPZone delivers your UAE company setup with full residency — start to finish, fully online.",
  terms: [
    "Final approval of your trade license and visa is subject to UAE government authority review and policies.",
    "CSPzone facilitates the registration and visa process — approval or rejection is solely at the discretion of the relevant authority.",
    "Estimated processing timelines may vary based on government queues and applicant document readiness.",
    "Medical fitness test and biometrics require in-person attendance in the UAE.",
    "The annual package fee of AED 9,720 covers the services listed. Any additional government or third-party fees, if applicable, will be communicated transparently before proceeding.",
    "By proceeding with payment, you agree to CSPzone's full terms of service.",
  ],
  formTitle: (<>Apply for License <em className="italic text-primary">+ Visa</em></>),
  ctaApplyText: "Apply Now — AED 9,720",
  stickyCtaText: "Ready to set up your UAE business with residency?",
};

export default function CampaignBusinessLicenseVisa() {
  return <CampaignTemplate config={config} />;
}
