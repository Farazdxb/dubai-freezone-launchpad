import { CampaignTemplate, CampaignConfig } from "@/components/CampaignTemplate";

const config: CampaignConfig = {
  promo: {
    text: "E-Commerce License Special — Start Selling on Amazon, Noon & Shopify in the UAE at",
    priceOld: "AED 4,800",
    priceNew: "AED 4,320 Only!",
  },
  hero: {
    eyebrow: "UAE E-Commerce License · Sell on Amazon, Noon & Shopify",
    title: (
      <>
        Get Your UAE{" "}
        <em className="italic text-primary">E-Commerce License</em> Today
      </>
    ),
    subtitle:
      "Start selling on Amazon.ae, Noon.com and Shopify from the UAE — 100% online registration, zero consultancy fees, one flat price.",
    priceNew: "AED 4,320",
    priceOld: "AED 4,800",
    discountLabel: "10% OFF",
    includedItems: [
      "E-Commerce Trade License",
      "MOA (Memorandum of Association)",
      "Tenancy Contract (Address Proof)",
      "Amazon / Noon Seller Support",
      "Shopify Store Setup Guidance",
      "Certificate of Incorporation",
      "Bank Account Opening Letter",
      "Share Certificate",
    ],
  },
  stats: [
    { value: "3,200+", label: "E-Commerce Licenses Issued" },
    { value: "5–7 Days", label: "License Setup Time" },
    { value: "AED 0", label: "Hidden or Consultancy Fee" },
    { value: "4.9 ★", label: "Seller Rating" },
  ],
  steps: [
    { n: "01", title: "Make Payment", body: "Pay securely online in minutes. One flat fee of AED 4,320 — no surprise charges, no add-ons." },
    { n: "02", title: "Submit Your Details", body: "Fill in your business details and upload basic documents (passport copy + KYC). We guide you through Amazon, Noon and Shopify seller requirements." },
    { n: "03", title: "Start Selling", body: "Your E-Commerce Trade License and all documents are delivered within 5–7 working days. Start listing on Amazon.ae, Noon.com and Shopify right away." },
  ],
  stepsTitle: (
    <>3 Simple Steps to Start<br />Selling on <em className="italic text-primary">Amazon, Noon & Shopify</em></>
  ),
  reviewsTitle: (
    <>Trusted by E-Commerce<br />Sellers Across <em className="italic text-primary">40+ Countries</em></>
  ),
  reviews: [
    { quote: "Got my e-commerce license in 5 days and was listing on Amazon.ae the same week. CSPZone made it incredibly simple.", name: "Rahul Kapoor", meta: "India · Amazon FBA Seller" },
    { quote: "I wanted to sell on Noon and Shopify from Dubai. CSPZone handled the license and even guided me through the seller onboarding.", name: "Sara Al-Amri", meta: "UAE · Multi-Channel Seller" },
    { quote: "The team knew exactly what Amazon and Noon require. My store was live in under a week — professional from start to finish.", name: "James Mitchell", meta: "UK · Shopify Entrepreneur" },
  ],
  videoTitle: (<>Your e-commerce store,<br /><em className="italic text-white/80">live in days.</em></>),
  videoSubtitle: "Watch how CSPZone gets e-commerce sellers licensed and selling on Amazon, Noon & Shopify — zero consultancy fee.",
  terms: [
    "Final approval of your e-commerce trade license is subject to UAE government authority review and policies.",
    "CSPzone facilitates the registration process — approval or rejection is solely at the discretion of the relevant government authority.",
    "Processing timelines of 5–7 working days are estimated and may vary based on government processing queues.",
    "All submitted documents must be accurate and valid. CSPzone is not liable for delays caused by incorrect or incomplete information.",
    "The package fee of AED 4,320 covers the services listed. Any additional government fees, if applicable, will be communicated transparently before proceeding.",
    "By proceeding with payment, you agree to CSPzone's full terms of service.",
  ],
  formTitle: (<>Get Your E-Commerce License &<br />Start Selling in the <em className="italic text-primary">UAE</em></>),
  ctaApplyText: "Apply Now — AED 4,320",
  stickyCtaText: "Ready to sell on Amazon, Noon & Shopify?",
};

export default function CampaignEcommerce() {
  return <CampaignTemplate config={config} />;
}
