import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Dashboard demo", href: "/dashboard" },
    { label: "Freezone search", href: "/search-activity" },
  ],
  "Use Cases": [
    { label: "SMEs & startups", href: "#" },
    { label: "Agencies", href: "#" },
    { label: "E-commerce", href: "#" },
    { label: "Freelancers", href: "#" },
    { label: "Consultants", href: "#" },
  ],
  Company: [
    { label: "About us", href: "#" },
    { label: "Our mission", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Help center", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Webinars", href: "#" },
    { label: "Release notes", href: "#" },
    { label: "Integrations", href: "#" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-wide py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                CSPzone
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The smarter way to start your business in Dubai. Compare Freezones, track applications, get licensed.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CSPzone. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
