import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import isoCertified from "@/assets/iso-certified.png";
import { scrollToPricing } from "@/components/Navigation";

type FooterLink = { label: string; href: string; external?: boolean; anchor?: boolean };

const serviceLinks: FooterLink[] = [
  { label: "Company Formation", href: "#pricing", anchor: true },
  { label: "Company Liquidation", href: "https://www.cspzone.com/dubai/company-liquidation-service", external: true },
  { label: "VAT and CT", href: "https://www.cspzone.com/dubai/vat-consultants", external: true },
  { label: "Nominee Services", href: "https://www.cspzone.com/dubai/nominee-service", external: true },
  { label: "PRO Services", href: "https://www.cspzone.com/dubai/pro-services", external: true },
];

const resourceLinks: FooterLink[] = [
  { label: "Blogs", href: "https://www.cspzone.com/article", external: true },
  { label: "How to Videos", href: "https://www.cspzone.com/how-to-videos", external: true },
  { label: "Documents", href: "https://www.cspzone.com/documents", external: true },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "https://www.cspzone.com/about", external: true },
  { label: "Careers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Contact", href: "https://www.cspzone.com/contact", external: true },
  { label: "Press", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Terms", href: "https://www.cspzone.com/terms", external: true },
  { label: "Privacy", href: "https://www.cspzone.com/privacy", external: true },
  { label: "Refund Policy", href: "https://www.cspzone.com/refund", external: true },
];

const cols: { title: string; items: FooterLink[] }[] = [
  { title: "Services", items: serviceLinks },
  { title: "Resources", items: resourceLinks },
  { title: "Company", items: companyLinks },
  { title: "Legal", items: legalLinks },
];

export function Footer() {
  return (
    <footer style={{ background: "hsl(var(--neutral-950))" }} className="text-white">
      <div className="container-wide py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-5">
              <img src={cspLogo} alt="CSPzone" className="h-10 w-auto brightness-0 invert" />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed">
              The elegant way to start and run your UAE business. License, compliance, accounting - one dashboard.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" rel="nofollow noopener" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" rel="nofollow noopener" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" rel="nofollow noopener" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>

            <div className="mt-6 inline-flex items-center bg-white rounded-lg p-3">
              <img src={isoCertified} alt="ISO 9001 Certified" className="h-14 w-auto" />
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a href={item.href} rel="noopener" className="text-sm text-white/60 hover:text-primary transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <a href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} CSPzone by RAS Corporate Advisor, Dubai, UAE</p>
          <p className="text-xs text-white/50">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
