import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import cspLogo from "@/assets/csplogo.svg";
import isoCertified from "@/assets/iso-certified.png";


const cols = {
  Services: ["Mainland License", "Freezone License", "Offshore", "VAT", "Corporate Tax", "Accounting", "PRO", "Visa"],
  Resources: ["Blog", "Guides", "VAT Calculator", "Corporate Tax Calculator", "License Cost Estimator"],
  Company: ["About", "Careers", "Partners", "Contact", "Press"],
  Legal: ["Terms", "Privacy", "Refund Policy"],
};

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
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>

            <div className="mt-6 inline-flex items-center bg-white rounded-lg p-3">
              <img src={isoCertified} alt="ISO 9001 Certified" className="h-14 w-auto" />
            </div>
          </div>

          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <p className="font-semibold text-sm mb-4">{title}</p>
              <ul className="space-y-2.5">
                {items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/60 hover:text-primary transition-colors">{i}</a>
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
