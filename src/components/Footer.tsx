import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

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
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                <span className="text-foreground font-serif text-xl leading-none -mt-1">C</span>
              </div>
              <span className="font-display font-bold text-lg">CSPzone</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              The elegant way to start and run your UAE business. License, compliance, accounting — one dashboard.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><Youtube className="w-4 h-4" /></a>
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
          <p className="text-xs text-white/50">© {new Date().getFullYear()} CSPzone. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
            <span>DED registered</span><span>·</span>
            <span>IFZA approved</span><span>·</span>
            <span>FTA tax agent</span><span>·</span>
            <span>ISO certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
