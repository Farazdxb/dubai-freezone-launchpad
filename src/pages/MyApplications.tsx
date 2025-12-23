import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Eye,
  Download,
  Clock,
  ChevronRight,
  FileText,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "./Dashboard";
import { motion } from "framer-motion";

const applications = [
  {
    id: "TKT-2024-001",
    title: "Freezone Setup – IFZA",
    type: "Freezone Setup",
    freezone: "IFZA",
    activity: "E-Commerce Trading",
    status: "Under Processing",
    statusColor: "badge-processing",
    lastUpdated: "2 hours ago",
    paymentPending: false,
  },
  {
    id: "TKT-2024-002",
    title: "VAT Registration – New Company",
    type: "VAT Registration",
    freezone: null,
    activity: null,
    status: "Documents Requested",
    statusColor: "badge-requested",
    lastUpdated: "1 day ago",
    paymentPending: false,
  },
  {
    id: "TKT-2024-003",
    title: "Bank Account Opening Assistance",
    type: "Bank Account",
    freezone: null,
    activity: null,
    status: "Payment Pending",
    statusColor: "badge-pending",
    lastUpdated: "3 days ago",
    paymentPending: true,
  },
  {
    id: "TKT-2024-004",
    title: "Freezone Setup – RAKEZ",
    type: "Freezone Setup",
    freezone: "RAKEZ",
    activity: "IT Services",
    status: "Completed",
    statusColor: "badge-completed",
    lastUpdated: "1 week ago",
    paymentPending: false,
  },
];

const filters = [
  "All Tickets",
  "Active",
  "Completed",
  "Payment Pending",
  "Documents Requested",
];

export default function MyApplications() {
  return (
    <DashboardLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          My Applications
        </h1>
        <p className="text-muted-foreground">
          Track all your service requests and applications
        </p>
      </motion.div>

      {/* Filters & Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-3 sm:gap-4 mb-6"
      >
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by Ticket ID or title..."
            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        
        {/* Filter Tabs - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex w-max min-w-full gap-2 pb-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-colors flex-shrink-0 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Applications List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="card-elevated p-4 sm:p-5"
          >
            <div className="flex flex-col gap-4">
              {/* Top Section - Icon, Title, Status */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  {app.type === "Freezone Setup" ? (
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  ) : (
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground font-mono">
                      {app.id}
                    </span>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base truncate">
                    {app.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span>{app.type}</span>
                      {app.freezone && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span>{app.freezone}</span>
                        </>
                      )}
                      {app.activity && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline truncate">{app.activity}</span>
                        </>
                      )}
                    </div>
                    {app.activity && (
                      <div className="sm:hidden mt-0.5 truncate">{app.activity}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Section - Time and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {app.lastUpdated}
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2">
                  {app.paymentPending && (
                    <Button variant="hero" size="sm" className="text-xs sm:text-sm">
                      Pay Now
                    </Button>
                  )}

                  <Link to={`/dashboard/applications/${app.id}`} className="col-span-1">
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">View</span> Ticket
                    </Button>
                  </Link>

                  {app.status === "Completed" && (
                    <Button variant="secondary" size="sm" className="col-span-1 text-xs sm:text-sm">
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State (shown when no applications) */}
      {applications.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            No applications yet
          </h3>
          <p className="text-muted-foreground mb-6">
            Start a new service request to begin
          </p>
          <Link to="/dashboard">
            <Button variant="hero">Start New Request</Button>
          </Link>
        </div>
      )}
    </DashboardLayout>
  );
}
