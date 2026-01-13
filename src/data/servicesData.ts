import { 
  Shield, 
  FileCheck, 
  Users, 
  Clock, 
  Award, 
  Globe,
  BadgeCheck,
  Scale,
  FileText,
  TrendingUp,
  Building2,
  RefreshCw,
  Briefcase,
  DollarSign,
  Search,
  Landmark,
  UserCheck,
  Plane
} from "lucide-react";
import { ServicePageData } from "@/components/services/ServicePageTemplate";

export const servicesData: Record<string, ServicePageData> = {
  "nominee-service": {
    slug: "nominee-service",
    title: "Nominee Director & Shareholder Services",
    shortDescription: "Professional nominee services to protect your privacy while maintaining full control of your business in the UAE.",
    overview: {
      whatIs: "Nominee services provide a third-party individual or entity to act as your company's director or shareholder on official records, while you retain beneficial ownership and control through legally binding agreements.",
      problemSolved: "Many business owners prefer to keep their identity private for legitimate reasons such as asset protection, privacy concerns, or strategic business considerations. Our nominee services provide a compliant solution.",
      whyImportant: "In today's business environment, protecting your identity and assets is crucial. Nominee services offer an additional layer of privacy while ensuring full compliance with UAE regulations."
    },
    benefits: [
      { icon: Shield, title: "Complete Privacy", description: "Keep your identity confidential on public records while maintaining full beneficial ownership." },
      { icon: FileCheck, title: "Legal Compliance", description: "All nominee arrangements are structured to comply with UAE corporate laws and regulations." },
      { icon: Users, title: "Experienced Nominees", description: "Our professional nominees have extensive experience in corporate governance." },
      { icon: Clock, title: "Quick Setup", description: "Get your nominee structure in place within days, not weeks." },
      { icon: Award, title: "Full Control", description: "Retain complete control through comprehensive power of attorney arrangements." },
      { icon: Globe, title: "International Recognition", description: "Our structures are recognized and respected internationally." }
    ],
    targetAudience: ["Foreign Investors", "High-Net-Worth Individuals", "Privacy-Conscious Entrepreneurs", "International Business Owners", "Real Estate Investors", "Family Offices"],
    relatedServices: [
      { title: "Company Liquidation", description: "Professional company closure and liquidation services.", href: "/dubai/company-liquidation-service" },
      { title: "Legal Document Drafting", description: "Expert legal document preparation services.", href: "/dubai/legal-documents-lawyer-drafting-service" },
      { title: "Corporate Tax Consulting", description: "Navigate UAE corporate tax requirements.", href: "/dubai/corporate-tax-consultant" }
    ]
  },
  "trademark-registration-service": {
    slug: "trademark-registration-service",
    title: "Trademark Registration UAE",
    shortDescription: "Protect your brand identity with comprehensive trademark registration services across the UAE and GCC region.",
    overview: {
      whatIs: "Trademark registration is the legal process of protecting your brand name, logo, slogan, or any distinctive sign that identifies your products or services in the UAE market.",
      problemSolved: "Without trademark protection, competitors can freely use your brand identity, leading to customer confusion, loss of revenue, and damage to your reputation. Registration gives you exclusive legal rights.",
      whyImportant: "The UAE is a competitive business hub. Trademark registration establishes your brand's legitimacy, prevents infringement, and provides legal recourse against counterfeiters."
    },
    benefits: [
      { icon: BadgeCheck, title: "Brand Protection", description: "Secure exclusive rights to your brand name and logo across the UAE." },
      { icon: Scale, title: "Legal Rights", description: "Gain the legal authority to take action against trademark infringement." },
      { icon: Globe, title: "GCC Coverage", description: "Extend protection across all GCC member countries if needed." },
      { icon: Clock, title: "Fast Processing", description: "Expedited trademark registration with typical approval in 6-8 months." },
      { icon: FileText, title: "Complete Documentation", description: "We handle all paperwork and correspondence with the trademark office." },
      { icon: Shield, title: "10-Year Protection", description: "Each registration provides protection for 10 years, renewable indefinitely." }
    ],
    targetAudience: ["Startups", "SMEs", "International Brands", "E-commerce Businesses", "Franchises", "Product Manufacturers", "Service Providers"],
    relatedServices: [
      { title: "Legal Document Drafting", description: "Expert legal document preparation services.", href: "/dubai/legal-documents-lawyer-drafting-service" },
      { title: "Market Research", description: "Comprehensive market analysis for your business.", href: "/dubai/market-research-services" },
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" }
    ]
  },
  "immigration-consulting-service": {
    slug: "immigration-consulting-service",
    title: "Immigration & Visa Consulting",
    shortDescription: "Expert immigration guidance for investors, entrepreneurs, and professionals seeking UAE residency and visa solutions.",
    overview: {
      whatIs: "Immigration consulting provides expert guidance on UAE visa categories, residency requirements, and the application process for individuals and families seeking to live and work in the UAE.",
      problemSolved: "Navigating UAE immigration laws can be complex and time-consuming. Our experts simplify the process, ensuring correct documentation and avoiding costly delays or rejections.",
      whyImportant: "The UAE offers various visa options including investor visas, golden visas, and employment visas. Expert guidance ensures you choose the right pathway and maintain valid status."
    },
    benefits: [
      { icon: Plane, title: "All Visa Types", description: "Expert assistance with investor, golden, employment, and family visas." },
      { icon: UserCheck, title: "Application Support", description: "Complete end-to-end support from documentation to approval." },
      { icon: Clock, title: "Fast Processing", description: "Expedited processing through our established government relationships." },
      { icon: Users, title: "Family Sponsorship", description: "Sponsor your spouse, children, and dependents for UAE residency." },
      { icon: Award, title: "Golden Visa Expertise", description: "Specialized knowledge in 10-year golden visa applications." },
      { icon: Globe, title: "Multi-Entry Solutions", description: "Flexible visa solutions for frequent travelers and multi-nationals." }
    ],
    targetAudience: ["Investors", "Entrepreneurs", "Skilled Professionals", "Families Relocating", "Remote Workers", "Retirees", "Students"],
    relatedServices: [
      { title: "Nominee Services", description: "Privacy protection for business ownership.", href: "/dubai/nominee-service" },
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" },
      { title: "VAT Consulting", description: "Expert VAT guidance for your business.", href: "/dubai/vat-consultants" }
    ]
  },
  "vat-consultants": {
    slug: "vat-consultants",
    title: "VAT Consulting Services",
    shortDescription: "Expert VAT advisory and compliance services to help your business navigate UAE tax regulations efficiently.",
    overview: {
      whatIs: "VAT consulting provides expert guidance on Value Added Tax compliance, registration, filing, and optimization for businesses operating in the UAE.",
      problemSolved: "VAT non-compliance can result in significant penalties and damage to your business reputation. Our consultants ensure accurate filing and identify opportunities for VAT optimization.",
      whyImportant: "Since VAT implementation in the UAE, businesses must maintain accurate records and file timely returns. Expert guidance prevents errors and maximizes legitimate VAT recovery."
    },
    benefits: [
      { icon: DollarSign, title: "VAT Registration", description: "Complete VAT registration assistance for new and existing businesses." },
      { icon: FileCheck, title: "Return Filing", description: "Accurate and timely VAT return preparation and submission." },
      { icon: TrendingUp, title: "VAT Optimization", description: "Identify opportunities to optimize your VAT position legally." },
      { icon: Shield, title: "Audit Support", description: "Full support during FTA audits and investigations." },
      { icon: Clock, title: "Deadline Management", description: "Never miss a filing deadline with our proactive monitoring." },
      { icon: Scale, title: "Dispute Resolution", description: "Expert representation in VAT disputes with authorities." }
    ],
    targetAudience: ["All UAE Businesses", "Importers & Exporters", "E-commerce Companies", "Service Providers", "Real Estate Companies", "Hospitality Businesses"],
    relatedServices: [
      { title: "Corporate Tax Consulting", description: "Navigate UAE corporate tax requirements.", href: "/dubai/corporate-tax-consultant" },
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" },
      { title: "Company Liquidation", description: "Professional company closure services.", href: "/dubai/company-liquidation-service" }
    ]
  },
  "company-liquidation-service": {
    slug: "company-liquidation-service",
    title: "Company Liquidation Services",
    shortDescription: "Professional and compliant company closure services to help you wind down business operations smoothly in the UAE.",
    overview: {
      whatIs: "Company liquidation is the formal legal process of closing a business entity, settling all debts and obligations, distributing remaining assets, and deregistering the company from relevant authorities.",
      problemSolved: "Improper company closure can result in ongoing liabilities, legal issues, and damage to your personal reputation. Our liquidation services ensure a clean, compliant exit.",
      whyImportant: "Whether you're restructuring, relocating, or simply closing down, proper liquidation protects you from future claims and ensures compliance with UAE commercial laws."
    },
    benefits: [
      { icon: FileCheck, title: "Complete Deregistration", description: "Full deregistration from all government authorities and free zones." },
      { icon: Scale, title: "Legal Compliance", description: "Ensure all legal requirements are met during the closure process." },
      { icon: DollarSign, title: "Debt Settlement", description: "Professional handling of creditor communications and settlements." },
      { icon: Clock, title: "Efficient Process", description: "Streamlined approach to minimize time and complications." },
      { icon: Shield, title: "Liability Protection", description: "Protect yourself from future claims through proper procedures." },
      { icon: FileText, title: "Documentation", description: "Complete closure certificates and documentation package." }
    ],
    targetAudience: ["Business Owners Exiting UAE", "Companies Restructuring", "Inactive Businesses", "Failed Ventures", "Merging Entities", "Foreign Subsidiaries Closing"],
    relatedServices: [
      { title: "Legal Document Drafting", description: "Expert legal document preparation services.", href: "/dubai/legal-documents-lawyer-drafting-service" },
      { title: "VAT Consulting", description: "Clear VAT obligations before closure.", href: "/dubai/vat-consultants" },
      { title: "Corporate Tax Consulting", description: "Settle tax matters before liquidation.", href: "/dubai/corporate-tax-consultant" }
    ]
  },
  "corporate-tax-consultant": {
    slug: "corporate-tax-consultant",
    title: "Corporate Tax Consulting",
    shortDescription: "Expert guidance on UAE Corporate Tax compliance, planning, and optimization for your business success.",
    overview: {
      whatIs: "Corporate tax consulting provides expert advisory services on the UAE's corporate tax regime, helping businesses understand their obligations, optimize their tax position, and ensure full compliance.",
      problemSolved: "With the introduction of corporate tax in the UAE, businesses need expert guidance to navigate the new requirements, calculate liabilities accurately, and take advantage of available exemptions.",
      whyImportant: "Proper corporate tax planning can significantly impact your bottom line. Our experts help you minimize tax burden legally while ensuring complete compliance with FTA requirements."
    },
    benefits: [
      { icon: DollarSign, title: "Tax Registration", description: "Complete assistance with corporate tax registration requirements." },
      { icon: TrendingUp, title: "Tax Planning", description: "Strategic planning to optimize your corporate tax position." },
      { icon: FileCheck, title: "Compliance Support", description: "Ensure full compliance with UAE corporate tax laws." },
      { icon: Shield, title: "Exemption Analysis", description: "Identify applicable exemptions and reliefs for your business." },
      { icon: Scale, title: "Transfer Pricing", description: "Expert guidance on transfer pricing documentation and compliance." },
      { icon: Clock, title: "Filing Support", description: "Accurate and timely corporate tax return preparation." }
    ],
    targetAudience: ["All UAE Companies", "Free Zone Entities", "Multinational Subsidiaries", "Group Companies", "High-Revenue Businesses", "Professional Service Firms"],
    relatedServices: [
      { title: "VAT Consulting", description: "Complete VAT advisory services.", href: "/dubai/vat-consultants" },
      { title: "Company Liquidation", description: "Professional company closure services.", href: "/dubai/company-liquidation-service" },
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" }
    ]
  },
  "legal-documents-lawyer-drafting-service": {
    slug: "legal-documents-lawyer-drafting-service",
    title: "Legal Document & Contract Drafting",
    shortDescription: "Professional legal document preparation and contract drafting services by experienced UAE lawyers.",
    overview: {
      whatIs: "Legal document drafting involves the professional preparation of contracts, agreements, and legal documents that protect your interests and comply with UAE law.",
      problemSolved: "Poorly drafted documents can lead to disputes, financial losses, and legal complications. Our lawyers ensure your documents are clear, enforceable, and protect your interests.",
      whyImportant: "Every business relationship should be governed by properly drafted legal documents. Professional drafting prevents misunderstandings and provides legal protection."
    },
    benefits: [
      { icon: FileText, title: "Contract Drafting", description: "Custom contracts tailored to your specific business needs." },
      { icon: Scale, title: "Legal Review", description: "Thorough review of existing contracts and agreements." },
      { icon: Shield, title: "Risk Mitigation", description: "Identify and address potential legal risks in your documents." },
      { icon: Globe, title: "Multi-Jurisdictional", description: "Documents that work across different legal jurisdictions." },
      { icon: Clock, title: "Quick Turnaround", description: "Fast delivery without compromising on quality." },
      { icon: Users, title: "Expert Lawyers", description: "Experienced UAE-licensed lawyers handle all documents." }
    ],
    targetAudience: ["All Businesses", "Startups", "Real Estate Investors", "Employers", "Partnership Ventures", "International Companies"],
    relatedServices: [
      { title: "Nominee Services", description: "Privacy protection for business ownership.", href: "/dubai/nominee-service" },
      { title: "Trademark Registration", description: "Protect your brand identity.", href: "/dubai/trademark-registration-service" },
      { title: "Company Liquidation", description: "Professional company closure services.", href: "/dubai/company-liquidation-service" }
    ]
  },
  "market-research-services": {
    slug: "market-research-services",
    title: "Market Research & Analysis",
    shortDescription: "Data-driven market insights and competitive analysis to help you make informed business decisions in the UAE.",
    overview: {
      whatIs: "Market research provides comprehensive analysis of market conditions, consumer behavior, competitive landscape, and business opportunities in the UAE and broader MENA region.",
      problemSolved: "Entering a new market or launching a product without proper research can lead to costly failures. Our research provides the insights needed for informed decision-making.",
      whyImportant: "The UAE market has unique characteristics and consumer behaviors. Localized research ensures your strategy is tailored to succeed in this dynamic market."
    },
    benefits: [
      { icon: Search, title: "Market Analysis", description: "Comprehensive analysis of market size, trends, and opportunities." },
      { icon: Users, title: "Consumer Insights", description: "Deep understanding of UAE consumer behavior and preferences." },
      { icon: TrendingUp, title: "Competitive Intelligence", description: "Detailed analysis of competitor strategies and positioning." },
      { icon: Globe, title: "Industry Reports", description: "Sector-specific reports for various industries." },
      { icon: FileText, title: "Feasibility Studies", description: "Detailed feasibility analysis for new ventures." },
      { icon: Award, title: "Strategic Recommendations", description: "Actionable recommendations based on research findings." }
    ],
    targetAudience: ["New Market Entrants", "Expanding Businesses", "Investors", "Startups", "Product Developers", "Marketing Teams"],
    relatedServices: [
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" },
      { title: "Trademark Registration", description: "Protect your brand identity.", href: "/dubai/trademark-registration-service" },
      { title: "VAT Consulting", description: "Expert VAT guidance for your business.", href: "/dubai/vat-consultants" }
    ]
  },
  "trade-license-renewal": {
    slug: "trade-license-renewal",
    title: "Trade License Renewal",
    shortDescription: "Hassle-free trade license renewal services to keep your business compliant and operational in the UAE.",
    overview: {
      whatIs: "Trade license renewal is the annual process of extending your business license validity, updating company records, and maintaining compliance with UAE commercial regulations.",
      problemSolved: "Missing renewal deadlines can result in fines, visa cancellations, and even business closure. Our service ensures timely renewal and continuous compliance.",
      whyImportant: "A valid trade license is essential for all business operations in the UAE. Timely renewal maintains your business legality and protects your visa status."
    },
    benefits: [
      { icon: RefreshCw, title: "Timely Renewal", description: "Never miss a renewal deadline with our proactive reminders." },
      { icon: FileCheck, title: "Complete Documentation", description: "We handle all paperwork and government submissions." },
      { icon: Clock, title: "Fast Processing", description: "Expedited renewal processing to minimize downtime." },
      { icon: DollarSign, title: "Fee Transparency", description: "Clear breakdown of all government and service fees." },
      { icon: Building2, title: "All Free Zones", description: "Renewal services for all UAE free zones and mainland." },
      { icon: Shield, title: "Compliance Check", description: "Ensure all compliance requirements are met during renewal." }
    ],
    targetAudience: ["All UAE Businesses", "Free Zone Companies", "Mainland Companies", "Branch Offices", "Representative Offices", "Professional Licenses"],
    relatedServices: [
      { title: "Trade License Amendment", description: "Update your license activities or details.", href: "/dubai/trade-license-amendment" },
      { title: "VAT Consulting", description: "Expert VAT guidance for your business.", href: "/dubai/vat-consultants" },
      { title: "Corporate Tax Consulting", description: "Navigate UAE corporate tax requirements.", href: "/dubai/corporate-tax-consultant" }
    ]
  },
  "trade-license-amendment": {
    slug: "trade-license-amendment",
    title: "Trade License Amendment",
    shortDescription: "Update your trade license to reflect business changes including activities, shareholders, and company details.",
    overview: {
      whatIs: "Trade license amendment is the process of updating your existing business license to reflect changes in activities, ownership structure, company name, address, or other registered details.",
      problemSolved: "Operating with outdated license information can lead to compliance issues and limit your business capabilities. Amendments ensure your license accurately reflects your current operations.",
      whyImportant: "As your business evolves, your license should too. Proper amendments ensure you can legally conduct all your business activities and maintain accurate official records."
    },
    benefits: [
      { icon: FileText, title: "Activity Changes", description: "Add, remove, or modify business activities on your license." },
      { icon: Users, title: "Ownership Updates", description: "Update shareholder or partner information accurately." },
      { icon: Building2, title: "Address Changes", description: "Reflect office relocations or additional locations." },
      { icon: Briefcase, title: "Name Changes", description: "Process trade name or legal name modifications." },
      { icon: Clock, title: "Quick Processing", description: "Efficient processing with minimal business disruption." },
      { icon: Shield, title: "Full Compliance", description: "Ensure all amendments comply with regulations." }
    ],
    targetAudience: ["Growing Businesses", "Expanding Companies", "Restructuring Entities", "Relocating Businesses", "Diversifying Operations", "Changing Ownership"],
    relatedServices: [
      { title: "Trade License Renewal", description: "Keep your business license current.", href: "/dubai/trade-license-renewal" },
      { title: "Legal Document Drafting", description: "Expert legal document preparation services.", href: "/dubai/legal-documents-lawyer-drafting-service" },
      { title: "Nominee Services", description: "Privacy protection for business ownership.", href: "/dubai/nominee-service" }
    ]
  }
};
