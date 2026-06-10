import { CampaignTemplate, CampaignConfig } from "@/components/CampaignTemplate";

const config: CampaignConfig = {
  promo: {
    text: "Limited Offer: Get 10% OFF — Register Your UAE Company at",
    priceOld: "AED 4,800",
    priceNew: "AED 4,320 Only!",
  },
  hero: {
    eyebrow: "UAE's #1 Online Business Registration Portal",
    title: (
      <>
        Start Your Company in the UAE for{" "}
        <em className="italic text-primary">Just AED 4,320</em>
      </>
    ),
    subtitle:
      "Register your UAE business 100% online — no hidden fees, no consultancy charges. One flat price. Everything included.",
    priceNew: "AED 4,320",
    priceOld: "AED 4,800",
    discountLabel: "10% OFF",
    includedItems: [
      "Trade License",
      "MOA (Memorandum of Association)",
      "Tenancy Contract (Address Proof)",
      "Certificate of Good Standing",
      "Certificate of Incumbency",
      "Certificate of Incorporation",
      "Bank Account Opening Letter",
      "Share Certificate",
    ],
  },
  stats: [
    { value: "1,200+", label: "Companies Registered" },
    { value: "5–7 Days", label: "Average Setup Time" },
    { value: "AED 0", label: "Hidden or Consultancy Fee" },
    { value: "4.9 ★", label: "Google Rating" },
  ],
  steps: [
    { n: "01", title: "Make Payment", body: "Pay securely online in minutes. One flat fee of AED 4,320 — no surprise charges, no add-ons." },
    { n: "02", title: "Submit Your Details", body: "Fill in your business details and upload basic documents (passport copy + KYC). Our team takes it from there." },
    { n: "03", title: "License Issued", body: "Your Trade License and all 8 documents are processed and delivered within 5–7 working days." },
  ],
  stepsTitle: (
    <>3 Simple Steps to Get Your<br />UAE <em className="italic text-primary">Business License</em></>
  ),
  reviewsTitle: (
    <>Trusted by Entrepreneurs<br />Across <em className="italic text-primary">40+ Countries</em></>
  ),
  reviews: [
    { quote: "The fastest and most transparent way I've found to register a company in the UAE. No hidden costs, no surprises.", name: "Rahul Kapoor", meta: "India · E-commerce Founder" },
    { quote: "Registered my Freezone ecommerce in just 4 days. Self service portal is really good. Thanks", name: "Sara Al-Amri", meta: "UAE · Consulting Firm" },
    { quote: "The team guided me through every step of the process. From documentation to license approval — seamless and professional.", name: "James Mitchell", meta: "UK · Tech Startup" },
  ],
  videoTitle: (<>Your UAE company,<br /><em className="italic text-white/80">beautifully simple.</em></>),
  videoSubtitle: "Watch how CSPZone gets you set up in just a few days — zero consultancy fee, zero hidden charges.",
  terms: [
    "Final approval of your trade license is subject to UAE government authority review and policies.",
    "CSPzone facilitates the registration process — approval or rejection is solely at the discretion of the relevant government authority.",
    "Processing timelines of 5–7 working days are estimated and may vary based on government processing queues.",
    "All submitted documents must be accurate and valid. CSPzone is not liable for delays caused by incorrect or incomplete information.",
    "The package fee of AED 4,320 covers the services listed. Any additional government fees, if applicable, will be communicated transparently before proceeding.",
    "By proceeding with payment, you agree to CSPzone's full terms of service.",
  ],
  formTitle: (<>Register Your Business in the UAE <em className="italic text-primary">Today</em></>),
  ctaApplyText: "Apply Now — AED 4,320",
  stickyCtaText: "Ready to register your UAE company?",
};

export default function Campaign() {
  return <CampaignTemplate config={config} />;
}
