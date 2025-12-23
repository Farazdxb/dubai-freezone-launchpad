import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  FileText,
  Award,
  Building2,
  Receipt,
  CreditCard,
  Users,
  FileEdit,
  RefreshCw,
  Stamp,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatBot } from "@/components/ChatBot";
import { motion, AnimatePresence } from "framer-motion";
import { NewCompanySetupForm } from "@/components/NewCompanySetupForm";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "My Applications", href: "/dashboard/applications" },
  { icon: Search, label: "Search Activity", href: "/search-activity" },
  { icon: FileText, label: "My Documents", href: "/dashboard/documents" },
  { icon: Award, label: "Issued Licenses", href: "/dashboard/licenses" },
];

const serviceCards = [
  {
    icon: Building2,
    title: "Start New Freezone Company",
    description: "Register a new company in any UAE Freezone",
    href: "/dashboard/new-company",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Receipt,
    title: "VAT Registration",
    description: "Register for VAT with FTA",
    href: "/dashboard/vat",
    color: "bg-success/10 text-success",
  },
  {
    icon: CreditCard,
    title: "Bank Account Opening",
    description: "Open a business bank account",
    href: "/dashboard/bank",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: Users,
    title: "Visa Services",
    description: "Apply for employee visas",
    href: "/dashboard/visas",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: FileEdit,
    title: "Company Amendment",
    description: "Update company details or activities",
    href: "/dashboard/amendment",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: RefreshCw,
    title: "Renewal Services",
    description: "Renew your trade license",
    href: "/dashboard/renewal",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stamp,
    title: "Document Attestation",
    description: "Get documents attested officially",
    href: "/dashboard/attestation",
    color: "bg-success/10 text-success",
  },
];

const quickAccessCards = [
  {
    icon: FileText,
    title: "My Applications",
    count: 3,
    href: "/dashboard/applications",
    gradient: "from-primary via-primary/80 to-primary/60",
  },
  {
    icon: Search,
    title: "Search Activity",
    count: null,
    href: "/search-activity",
    gradient: "from-[hsl(200,80%,50%)] via-[hsl(210,70%,55%)] to-primary",
  },
  {
    icon: FileText,
    title: "My Documents",
    count: 5,
    href: "/dashboard/documents",
    gradient: "from-[hsl(180,60%,45%)] via-[hsl(190,65%,50%)] to-[hsl(200,70%,55%)]",
  },
  {
    icon: Award,
    title: "Issued Licenses",
    count: 1,
    href: "/dashboard/licenses",
    gradient: "from-[hsl(220,70%,55%)] via-primary to-[hsl(200,65%,50%)]",
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary/30 flex max-w-full overflow-x-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">C</span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                CSP<span className="text-primary">zone</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Services
              </p>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/dashboard/new-company"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Building2 className="w-5 h-5" />
                    New Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/vat"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Receipt className="w-5 h-5" />
                    VAT Services
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t border-border">
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex-1" />

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </button>
              <div className="w-9 h-9 bg-gradient-cta rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-full overflow-x-hidden">{children}</main>
      </div>

      <ChatBot />
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Welcome back, Faraz! 👋
        </h1>
        <p className="text-muted-foreground">
          Manage all your business setup requests from here.
        </p>
      </motion.div>

      {/* Quick Access Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
      >
        {quickAccessCards.map((card, index) => (
          <Link key={card.title} to={card.href}>
            <div className={`bg-gradient-to-br ${card.gradient} p-5 h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                {card.count !== null && (
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {card.count}
                  </span>
                )}
              </div>
              <h3 className="font-medium text-white text-sm">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">
          Start New Service Request
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {serviceCards.map((card, index) => {
            const isNewCompany = card.title === "Start New Freezone Company";
            
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="card-elevated p-5 h-full group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {card.description}
                </p>
                <Button size="sm" className="w-full">
                  Submit Request
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            );

            if (isNewCompany) {
              return (
                <NewCompanySetupForm
                  key={card.title}
                  trigger={cardContent}
                />
              );
            }

            return (
              <Link key={card.title} to={card.href}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Footer Spacer */}
      <div className="mt-12 mb-4 py-8 px-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10">
        <p className="text-center text-sm text-muted-foreground">
          Need help? Contact our support team for assistance with your business setup.
        </p>
      </div>
    </DashboardLayout>
  );
}
