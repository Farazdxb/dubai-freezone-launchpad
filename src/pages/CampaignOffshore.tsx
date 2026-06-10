import { CampaignTemplate, CampaignConfig } from "@/components/CampaignTemplate";

const config: CampaignConfig = {
  promo: {
    text: "Global Holding Offshore Package — Annual Setup at",
    priceNew: "AED 7,999",
  },
  hero: {
    eyebrow: "Offshore Company Setup · Global Holding Package",
    title: (
      <>
        Launch Your{" "}
        <em className="italic text-primary">Offshore Company</em> in the UAE
      </>
    ),
    subtitle:
      "A premium offshore structure for holding companies, investors and international entrepreneurs — fully compliant, fully transparent.",
    priceNew: "AED 7,999",
    includedLabel: "Everything included",
    includedItems: [
      "Company Incorporation",
      "Certificate of Incorporation",
      "Share Certificate",
      "Registered Office Address",
      "Corporate Tax Registration",
      "Compliance Monitoring",
      "CSPZone Dashboard Access",
      "Document Vault",
      "Annual Compliance Reminders",
      "Dedicated Relationship Manager",
    ],
    timeline: "8–10 Working Days",
    bestFor: "Holding companies, investors, international entrepreneurs, and asset holding structures.",
  },
  stats: [
    { value: "8–10 Days", label: "Average Setup Time" },
    { value: "40+", label: "Countries Served" },
    { value: "AED 0", label: "Hidden Charges" },
    { value: "4.9 ★", label: "Client Rating" },
  ],
  steps: [
    { n: "01", title: "Share Structure", body: "Tell us about your shareholders and intended holding structure — we'll guide you through KYC." },
    { n: "02", title: "Incorporation", body: "We file your offshore incorporation, issue your certificates and register your office address." },
    { n: "03", title: "Compliance & Handover", body: "Get corporate tax registration, your document vault, and a dedicated relationship manager." },
  ],
  stepsTitle: (
    <>Your Offshore Company,<br /><em className="italic text-primary">Set Up Right</em></>
  ),
  reviewsTitle: (
    <>Trusted by Investors &<br /><em className="italic text-primary">Holding Companies</em></>
  ),
  reviews: [
    { quote: "Perfect structure for our family holding. CSPZone handled the entire incorporation and tax registration smoothly.", name: "Mohammed Al-Rashid", meta: "KSA · Family Office" },
    { quote: "Clean process, premium documentation, and a real relationship manager who actually picks up the phone.", name: "Elena Petrova", meta: "Cyprus · Investor" },
    { quote: "Set up my offshore holding in under two weeks. The dashboard and document vault are genuinely useful.", name: "Liam Carter", meta: "UK · Asset Holding" },
  ],
  videoTitle: (<>Offshore, done<br /><em className="italic text-white/80">the premium way.</em></>),
  videoSubtitle: "Watch how CSPZone delivers a fully compliant offshore structure with zero consultancy fees.",
  terms: [
    "Final approval of your offshore incorporation is subject to the relevant jurisdiction's authority review and policies.",
    "CSPzone facilitates incorporation and compliance — approval or rejection is solely at the discretion of the relevant authority.",
    "Estimated processing timeline of 8–10 working days may vary based on KYC completeness and authority queues.",
    "All shareholders and beneficial owners must complete KYC with accurate, valid documentation.",
    "The annual package fee of AED 7,999 covers the services listed. Any additional government or third-party fees, if applicable, will be communicated transparently before proceeding.",
    "By proceeding with payment, you agree to CSPzone's full terms of service.",
  ],
  formTitle: (<>Set Up Your <em className="italic text-primary">Offshore Company</em></>),
  ctaApplyText: "Apply Now — AED 7,999",
  stickyCtaText: "Ready to launch your offshore company?",
};

export default function CampaignOffshore() {
  return <CampaignTemplate config={config} />;
}
