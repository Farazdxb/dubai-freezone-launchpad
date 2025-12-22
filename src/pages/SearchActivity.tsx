import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Building2,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { motion, AnimatePresence } from "framer-motion";

// Sample business activities data
const businessActivities = [
  { name: "Marketing Consultancy", category: "Professional", price: "AED 11,900", freezone: "IFZA" },
  { name: "E-Commerce Trading", category: "Commercial", price: "AED 12,500", freezone: "IFZA" },
  { name: "IT Services", category: "Professional", price: "AED 7,500", freezone: "RAKEZ" },
  { name: "General Trading", category: "Commercial", price: "AED 14,500", freezone: "Meydan" },
  { name: "Food & Beverages Trading", category: "Commercial", price: "AED 8,200", freezone: "AJMAN" },
  { name: "Management Consultancy", category: "Professional", price: "AED 11,900", freezone: "IFZA" },
  { name: "Real Estate Brokerage", category: "Professional", price: "AED 18,000", freezone: "DMCC" },
  { name: "Event Management", category: "Professional", price: "AED 5,750", freezone: "SHAMS" },
  { name: "Media Production", category: "Professional", price: "AED 12,900", freezone: "IFZA" },
  { name: "Software Development", category: "Professional", price: "AED 11,900", freezone: "IFZA" },
  { name: "Digital Marketing", category: "Professional", price: "AED 7,500", freezone: "RAKEZ" },
  { name: "Financial Consultancy", category: "Professional", price: "AED 18,000", freezone: "DMCC" },
  { name: "Import & Export", category: "Commercial", price: "AED 8,200", freezone: "AJMAN" },
  { name: "Business Consultancy", category: "Professional", price: "AED 11,900", freezone: "IFZA" },
  { name: "Web Design Services", category: "Professional", price: "AED 5,750", freezone: "SHAMS" },
];

const popularActivities = [
  "E-Commerce Trading",
  "IT Services",
  "General Trading",
  "Marketing Consultancy",
  "Real Estate Brokerage",
  "Software Development",
];

const freezoneDetails = [
  {
    name: "IFZA",
    location: "Dubai",
    price: "AED 11,900",
    timeline: "3-5 working days",
    visas: "1 visa included",
    features: ["Flexi-Desk", "1 Business Activity", "License Certificate"],
  },
  {
    name: "RAKEZ",
    location: "Ras Al Khaimah",
    price: "AED 7,500",
    timeline: "5-7 working days",
    visas: "0 visas included",
    features: ["Virtual Office", "3 Business Activities", "License Certificate"],
  },
  {
    name: "Meydan",
    location: "Dubai",
    price: "AED 14,500",
    timeline: "3-5 working days",
    visas: "2 visas included",
    features: ["Flexi-Desk", "5 Business Activities", "License Certificate"],
  },
  {
    name: "SHAMS",
    location: "Sharjah",
    price: "AED 5,750",
    timeline: "5-7 working days",
    visas: "0 visas included",
    features: ["Virtual Office", "1 Business Activity", "License Certificate"],
  },
];

export default function SearchActivity() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredActivities = useMemo(() => {
    if (!searchQuery) return [];
    return businessActivities.filter((activity) =>
      activity.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelectActivity = (activityName: string) => {
    setSelectedActivity(activityName);
    setSearchQuery(activityName);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Search Business Activity
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Type an activity to see available Freezones and estimated setup cost
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto mb-8 relative"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                  if (!e.target.value) setSelectedActivity(null);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Start typing an activity..."
                className="search-input pl-14"
              />
            </div>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && filteredActivities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-20"
                >
                  {filteredActivities.slice(0, 6).map((activity) => (
                    <button
                      key={activity.name}
                      onClick={() => handleSelectActivity(activity.name)}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-accent transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">
                          {activity.name}
                        </span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                        {activity.category}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Popular Activities */}
          {!selectedActivity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Popular activities
              </p>
              <div className="flex flex-wrap gap-2">
                {popularActivities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => handleSelectActivity(activity)}
                    className="px-4 py-2 bg-secondary hover:bg-accent text-secondary-foreground text-sm font-medium rounded-full transition-colors"
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Selected Activity Summary */}
          {selectedActivity && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto mb-10"
            >
              <div className="card-elevated p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Selected Activity</p>
                  <p className="font-display font-semibold text-foreground">
                    {selectedActivity}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    setSearchQuery("");
                  }}
                  className="text-primary hover:text-primary-hover text-sm font-medium"
                >
                  Change
                </button>
              </div>
            </motion.div>
          )}

          {/* Freezone Results */}
          {selectedActivity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                Available Freezones for "{selectedActivity}"
              </h2>

              <div className="grid gap-4">
                {freezoneDetails.map((freezone, index) => (
                  <motion.div
                    key={freezone.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-elevated p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Freezone Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-display font-semibold text-lg text-foreground">
                              {freezone.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {freezone.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {freezone.timeline}
                          </span>
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {freezone.visas}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {freezone.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col items-start lg:items-end gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            Starting from
                          </p>
                          <p className="text-2xl font-display font-bold text-foreground">
                            {freezone.price}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            View Breakdown
                          </Button>
                          <Link to="/dashboard">
                            <Button variant="hero" size="sm">
                              Get Pre-Approval
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Empty State */}
          {!selectedActivity && !searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Start typing to search activities
              </h3>
              <p className="text-muted-foreground">
                We'll show you available Freezones and pricing instantly
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
