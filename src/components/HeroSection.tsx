import { useState, useEffect, useRef } from "react";
import { Search, Check, TrendingUp, Users, FileText, Building2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const businessActivities = [
  "Marketing Consultancy",
  "E-Commerce Trading",
  "IT Services",
  "General Trading",
  "Food & Beverages Trading",
  "Management Consultancy",
  "Real Estate Brokerage",
  "Event Management",
  "Media Production",
  "Software Development",
  "Digital Marketing",
  "Financial Consultancy",
  "Import & Export",
  "Business Consultancy",
  "Web Design Services",
];

const freezoneLogos = [
  { name: "IFZA", color: "hsl(var(--primary))" },
  { name: "RAKEZ", color: "hsl(var(--primary))" },
  { name: "Meydan", color: "hsl(var(--primary))" },
  { name: "DMCC", color: "hsl(var(--primary))" },
  { name: "SHAMS", color: "hsl(var(--primary))" },
  { name: "AJMAN", color: "hsl(var(--primary))" },
  { name: "JAFZA", color: "hsl(var(--primary))" },
  { name: "DWC", color: "hsl(var(--primary))" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = businessActivities.filter((activity) =>
        activity.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    navigate(`/search-activity?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleSuggestionClick = (activity: string) => {
    setSearchQuery(activity);
    setShowSuggestions(false);
    navigate(`/search-activity?q=${encodeURIComponent(activity)}`);
  };

  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.15] mb-6"
          >
            Start Your Business in Dubai.
            <br />
            <span className="text-primary">No Hidden Fees.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            One search. One dashboard. Everything you need to compare
            <br className="hidden sm:block" />
            Freezones, get instant pricing, and launch your company.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-2xl mx-auto mb-6"
          >
            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-2 py-2 shadow-lg shadow-primary/10">
              <div className="flex items-center flex-1 pl-4">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Search business activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-base"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="rounded-full px-6 py-2.5 font-medium"
              >
                Search Activities
              </Button>
            </div>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl overflow-hidden z-50"
                >
                  {suggestions.map((activity, index) => (
                    <button
                      key={activity}
                      onClick={() => handleSuggestionClick(activity)}
                      className="w-full px-6 py-3 text-left hover:bg-secondary/50 transition-colors flex items-center gap-3 text-foreground"
                    >
                      <Search className="w-4 h-4 text-muted-foreground" />
                      {activity}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span>No consultancy charges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span>Direct Freezone rates</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup - Overlapping into next section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-t-3xl blur-2xl -z-10" />
          
          {/* Main Dashboard Card */}
          <div className="relative bg-card border border-border/50 rounded-t-2xl shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/50 rounded-full px-4 py-1 text-xs text-muted-foreground flex items-center gap-2">
                  <Search className="w-3 h-3" />
                  app.cspzone.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 flex gap-6">
              {/* Sidebar */}
              <div className="w-48 shrink-0 hidden lg:block">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">CSPzone</span>
                </div>
                <nav className="space-y-1">
                  {["Overview", "Applications", "Documents", "Licenses"].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Dashboard Overview</h3>
                  <Button size="sm" variant="outline" className="text-xs">
                    Export
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Applications", value: "12", icon: FileText, trend: "+2 this week" },
                    { label: "Approved", value: "8", icon: Check, trend: "67% rate" },
                    { label: "Processing", value: "3", icon: Activity, trend: "Est. 5 days" },
                    { label: "Licenses", value: "5", icon: Building2, trend: "Active" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-secondary/30 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-secondary/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Monthly Activity</span>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[30, 50, 40, 70, 55, 80, 65, 90, 75, 85, 60, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-48 shrink-0 space-y-4 hidden xl:block">
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-xs text-muted-foreground">Success Rate</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">98.5%</p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">Active Clients</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">2,400+</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Freezone Logo Slider - Positioned to overlap */}
      <div className="relative bg-background pt-24 pb-16 -mt-8">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            Helping <span className="font-semibold text-foreground">2,400+</span> companies launch their business in Dubai
          </motion.p>

          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -800] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...freezoneLogos, ...freezoneLogos, ...freezoneLogos].map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center px-6 py-3 bg-secondary/30 rounded-xl border border-border/50"
                >
                  <span className="text-lg font-display font-semibold text-muted-foreground whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
