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
        className="flex flex-col lg:flex-row gap-4 mb-6"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by Ticket ID or title..."
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
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
            className="card-elevated p-5"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Left Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  {app.type === "Freezone Setup" ? (
                    <Building2 className="w-6 h-6 text-primary" />
                  ) : (
                    <FileText className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-muted-foreground font-mono">
                      {app.id}
                    </span>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {app.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{app.type}</span>
                    {app.freezone && (
                      <>
                        <span>•</span>
                        <span>{app.freezone}</span>
                      </>
                    )}
                    {app.activity && (
                      <>
                        <span>•</span>
                        <span>{app.activity}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {app.lastUpdated}
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  {app.paymentPending && (
                    <Button variant="hero" size="sm" className="flex-1 sm:flex-none">
                      Pay Now
                    </Button>
                  )}

                  <Link to={`/dashboard/applications/${app.id}`} className="flex-1 sm:flex-none">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4" />
                      View Ticket
                    </Button>
                  </Link>

                  {app.status === "Completed" && (
                    <Button variant="secondary" size="sm" className="flex-1 sm:flex-none">
                      <Download className="w-4 h-4" />
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
