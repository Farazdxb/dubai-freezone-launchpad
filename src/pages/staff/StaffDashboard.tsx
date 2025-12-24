import { Link } from "react-router-dom";
import {
  FileText,
  Clock,
  MessageSquare,
  Upload,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaffLayout } from "@/components/staff/StaffLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const kpiCards = [
  {
    title: "Assigned to Me",
    value: 8,
    icon: FileText,
    color: "bg-primary/10 text-primary",
    href: "/staff/tickets?filter=assigned",
    change: "+2 new today",
    changeType: "positive",
  },
  {
    title: "Awaiting My Reply",
    value: 3,
    icon: MessageSquare,
    color: "bg-destructive/10 text-destructive",
    href: "/staff/tickets?filter=awaiting-reply",
    change: "Urgent",
    changeType: "negative",
  },
  {
    title: "Documents Requested",
    value: 5,
    icon: Upload,
    color: "bg-warning/10 text-warning",
    href: "/staff/tickets?filter=documents",
    change: "From users",
    changeType: "neutral",
  },
  {
    title: "Payment Pending",
    value: 4,
    icon: CreditCard,
    color: "bg-accent text-accent-foreground",
    href: "/staff/tickets?filter=payment",
    change: "View only",
    changeType: "neutral",
  },
  {
    title: "Completed This Week",
    value: 12,
    icon: CheckCircle2,
    color: "bg-success/10 text-success",
    href: "/staff/tickets?filter=completed",
    change: "+4 from last week",
    changeType: "positive",
  },
  {
    title: "Expiring Licenses",
    value: 3,
    icon: AlertTriangle,
    color: "bg-destructive/10 text-destructive",
    href: "/staff/licenses",
    change: "Within 30 days",
    changeType: "negative",
  },
];

const assignedTickets = [
  {
    id: "TKT-012",
    user: "Ahmed Khan",
    service: "Freezone Setup",
    freezone: "DMCC",
    status: "Under Processing",
    time: "10 min ago",
    priority: "high",
  },
  {
    id: "TKT-008",
    user: "Sarah Wilson",
    service: "VAT Registration",
    freezone: null,
    status: "Awaiting Reply",
    time: "25 min ago",
    priority: "medium",
  },
  {
    id: "TKT-006",
    user: "Mohammed Ali",
    service: "Bank Account",
    freezone: "JAFZA",
    status: "Documents Requested",
    time: "1 hour ago",
    priority: "low",
  },
];

const allTickets = [
  {
    id: "TKT-012",
    user: "Ahmed Khan",
    service: "Freezone Setup",
    status: "Under Processing",
    assignedTo: "Mike Staff",
    time: "10 min ago",
  },
  {
    id: "TKT-011",
    user: "Lisa Chen",
    service: "Visa Services",
    status: "Payment Pending",
    assignedTo: "Sarah Admin",
    time: "30 min ago",
  },
  {
    id: "TKT-010",
    user: "John Doe",
    service: "Bank Account",
    status: "Completed",
    assignedTo: "Mike Staff",
    time: "2 hours ago",
  },
  {
    id: "TKT-009",
    user: "Emma Brown",
    service: "VAT Registration",
    status: "Under Processing",
    assignedTo: "John Admin",
    time: "3 hours ago",
  },
];

const getStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    "Under Processing": "badge-processing",
    "Documents Requested": "badge-requested",
    "Payment Pending": "badge-pending",
    "Awaiting Reply": "bg-destructive/10 text-destructive border-destructive/20",
    Completed: "badge-completed",
  };
  return styles[status] || "badge-processing";
};

const getPriorityBadge = (priority: string) => {
  const styles: Record<string, string> = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-muted text-muted-foreground border-border",
  };
  return styles[priority] || "";
};

export default function StaffDashboard() {
  return (
    <StaffLayout>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Welcome, Mike Staff
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage assigned applications and respond to tickets.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8"
      >
        {kpiCards.map((card, index) => (
          <Link key={card.title} to={card.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {card.value}
                  </p>
                  <p className="text-xs text-muted-foreground mb-1 line-clamp-2">
                    {card.title}
                  </p>
                  <p
                    className={`text-xs hidden lg:block ${
                      card.changeType === "positive"
                        ? "text-success"
                        : card.changeType === "negative"
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }`}
                  >
                    {card.change}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Assigned Tickets Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">
            <CardTitle className="text-base sm:text-lg">New Applications Assigned to Me</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/staff/tickets?filter=assigned" className="text-xs sm:text-sm">
                View All
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {assignedTickets.map((ticket) => (
                <Link
                  key={ticket.id}
                  to={`/staff/tickets/${ticket.id}`}
                  className="block p-3 sm:p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-medium text-foreground text-sm">{ticket.id}</span>
                        <Badge variant="outline" className={`text-xs ${getStatusBadge(ticket.status)}`}>
                          {ticket.status}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getPriorityBadge(ticket.priority)}`}>
                          {ticket.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {ticket.user} • {ticket.service}
                        {ticket.freezone && ` • ${ticket.freezone}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground">{ticket.time}</span>
                      <Button variant="outline" size="sm" className="hidden sm:flex">
                        <Eye className="w-4 h-4 mr-1" />
                        Open
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* All Tickets Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">
            <CardTitle className="text-base sm:text-lg">All Applications</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/staff/tickets" className="text-xs sm:text-sm">
                View All
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Ticket ID</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Service</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Assigned To</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Last Updated</th>
                    <th className="text-right p-4 text-xs font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {allTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-accent/30 transition-colors">
                      <td className="p-4 font-medium text-sm">{ticket.id}</td>
                      <td className="p-4 text-sm text-muted-foreground">{ticket.user}</td>
                      <td className="p-4 text-sm text-muted-foreground">{ticket.service}</td>
                      <td className="p-4">
                        <Badge variant="outline" className={`text-xs ${getStatusBadge(ticket.status)}`}>
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{ticket.assignedTo}</td>
                      <td className="p-4 text-xs text-muted-foreground">{ticket.time}</td>
                      <td className="p-4 text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/staff/tickets/${ticket.id}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-border">
              {allTickets.map((ticket) => (
                <Link
                  key={ticket.id}
                  to={`/staff/tickets/${ticket.id}`}
                  className="block p-3 sm:p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground text-sm">{ticket.id}</span>
                      <Badge variant="outline" className={`text-xs ${getStatusBadge(ticket.status)}`}>
                        {ticket.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {ticket.user} • {ticket.service}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Assigned: {ticket.assignedTo}</span>
                      <span>{ticket.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </StaffLayout>
  );
}