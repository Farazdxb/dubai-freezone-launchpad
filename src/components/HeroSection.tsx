import { useState, useEffect, useRef } from "react";
import { Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

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
  { name: "IFZA" },
  { name: "RAKEZ" },
  { name: "Meydan" },
  { name: "DMCC" },
  { name: "SHAMS" },
  { name: "AJMAN" },
  { name: "JAFZA" },
  { name: "DWC" },
  { name: "DAFZA" },
  { name: "SPC" },
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
    <section className="relative pt-28 pb-0 overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Zero Consultancy Fee — Direct Freezone Rates</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6"
          >
            Setup Your UAE Freezone
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Business in Minutes
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Self-service portal for Dubai & UAE Freezone company formation.
            <br className="hidden sm:block" />
            <span className="font-semibold text-foreground">No agents. No hidden fees. 100% transparent pricing.</span>
          </motion.p>

          {/* Search Bar */}
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-6"
          >
            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-2 py-2 shadow-xl shadow-primary/5">
              <div className="flex items-center flex-1 pl-4">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Search your business activity (e.g. IT Services, Trading...)"
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
                  {suggestions.map((activity) => (
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span>No consultancy charges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span>100% transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span>15+ UAE Freezones</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Image - Overlapping into next section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl -z-10 scale-95" />
          
          {/* Main Dashboard Image */}
          <div className="relative rounded-t-2xl overflow-hidden border border-border/30 shadow-2xl shadow-primary/10">
            <img
              src={heroDashboard}
              alt="CSPzone Freezone Business Registration Dashboard - Analytics, License Status, Company Formation Progress"
              className="w-full h-auto"
            />
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Freezone Logo Slider */}
      <div className="relative bg-background pt-16 pb-12 -mt-8">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            Trusted by <span className="font-semibold text-foreground">2,400+</span> entrepreneurs across <span className="font-semibold text-foreground">15+ UAE Freezones</span>
          </motion.p>

          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: [0, -600] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...freezoneLogos, ...freezoneLogos, ...freezoneLogos].map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center px-8 py-3 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-colors"
                >
                  <span className="text-base font-display font-semibold text-muted-foreground whitespace-nowrap">
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
