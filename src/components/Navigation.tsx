import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TopPromoBar } from "@/components/TopPromoBar";
import cspLogo from "@/assets/csplogo.svg";


const serviceLinks: { label: string; href: string }[] = [
  { label: "Trade License Renewal Dubai", href: "https://cspzone.com/dubai/trade-license-renewal" },
  { label: "Company Liquidation Dubai", href: "https://cspzone.com/dubai/company-liquidation-service" },
  { label: "Market Research Services", href: "https://cspzone.com/dubai/market-research-services" },
  { label: "VAT Consultants Dubai", href: "https://cspzone.com/dubai/vat-consultants" },
  { label: "Corporate Tax Consultant", href: "https://cspzone.com/dubai/corporate-tax-consultant" },
  { label: "Legal Document Drafting", href: "https://cspzone.com/dubai/legal-documents-lawyer-drafting-service" },
  { label: "Trademark Registration UAE", href: "https://cspzone.com/dubai/trademark-registration-service" },
  { label: "Immigration Consulting", href: "https://cspzone.com/dubai/immigration-consulting-service" },
  { label: "Nominee Services Dubai", href: "https://cspzone.com/dubai/nominee-service" },
];

const navItems = [
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "/blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "https://cspzone.com/contact", external: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopPromoBar />
      <div className="bg-background/90 backdrop-blur-xl border-b border-border/60">
        <nav className="container-wide">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src={cspLogo} alt="CSPzone" className="h-9 w-auto" />
            </Link>


            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-card border border-border rounded-2xl shadow-xl p-6 grid grid-cols-3 gap-6"
                    >
                      {Object.entries(services).map(([group, items]) => (
                        <div key={group}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {group}
                          </p>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item}>
                                <Link
                                  to="#"
                                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="font-medium">Login</Button>
              </Link>
              <Link to="/dashboard">
                <Button size="sm" className="rounded-full px-5 font-semibold">Get Started</Button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-foreground rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-border/60">
                  {Object.keys(services).map((g) => (
                    <Link key={g} to="#" className="block px-3 py-2 text-sm font-medium text-foreground/80">
                      {g}
                    </Link>
                  ))}
                  {navItems.map((item) => (
                    <Link key={item.label} to={item.href} className="block px-3 py-2 text-sm font-medium text-foreground/80" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-3 flex flex-col gap-2">
                    <Link to="/login"><Button variant="outline" className="w-full">Login</Button></Link>
                    <Link to="/dashboard"><Button className="w-full rounded-full">Get Started</Button></Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
