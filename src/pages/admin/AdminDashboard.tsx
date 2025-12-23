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
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const kpiCards = [
  {
    title: "New Applications Today",
    value: 12,
    icon: FileText,
    color: "bg-primary/10 text-primary",
    href: "/admin/applications?status=new",
    change: "+3 from yesterday",
    changeType: "positive",
  },
  {
    title: "Under Processing",
    value: 45,
    icon: Clock,
    color: "bg-warning/10 text-warning",
    href: "/admin/applications?status=processing",
    change: "5 pending review",
    changeType: "neutral",
  },
  {
    title: "Awaiting Admin Reply",
    value: 8,
    icon: MessageSquare,
    color: "bg-destructive/10 text-destructive",
    href: "/admin/applications?status=awaiting-reply",
    change: "Urgent",
    changeType: "negative",
  },
  {
    title: "Documents Pending",
    value: 15,
    icon: Upload,
    color: "bg-accent text-accent-foreground",
    href: "/admin/applications?status=documents-requested",
    change: "From users",
    changeType: "neutral",
  },
  {
    title: "Payment Pending",
    value: 23,
    icon: CreditCard,
    color: "bg-warning/10 text-warning",
    href: "/admin/payments?status=pending",
    change: "AED 125,000 total",
    changeType: "neutral",
  },
  {
    title: "Completed",
    value: 156,
    icon: CheckCircle2,
    color: "bg-success/10 text-success",
    href: "/admin/applications?status=completed",
    change: "+12 this week",
    changeType: "positive",
  },
  {
    title: "Licenses Expiring Soon",
    value: 7,
    icon: AlertTriangle,
    color: "bg-destructive/10 text-destructive",
    href: "/admin/licenses?filter=expiring",
    change: "Within 30 days",
    changeType: "negative",
  },
];

const recentApplications = [
  {
    id: "TKT-001",
    user: "Ahmed Khan",
    service: "Freezone Setup",
    freezone: "DMCC",
    status: "Under Processing",
    time: "10 min ago",
  },
  {
    id: "TKT-002",
    user: "Sarah Wilson",
    service: "VAT Registration",
    freezone: null,
    status: "Documents Requested",
    time: "25 min ago",
  },
  {
    id: "TKT-003",
    user: "Mohammed Ali",
    service: "Bank Account",
    freezone: "JAFZA",
    status: "Payment Pending",
    time: "1 hour ago",
  },
  {
    id: "TKT-004",
    user: "Lisa Chen",
    service: "Visa Services",
    freezone: "IFZA",
    status: "Completed",
    time: "2 hours ago",
  },
];

const upcomingExpirations = [
  {
    company: "ABC Trading LLC",
    license: "Trade License",
    expiryDate: "2024-02-15",
    daysLeft: 23,
  },
  {
    company: "XYZ Consulting",
    license: "Trade License",
    expiryDate: "2024-02-28",
    daysLeft: 36,
  },
  {
    company: "Global Tech FZE",
    license: "Establishment Card",
    expiryDate: "2024-03-05",
    daysLeft: 42,
  },
];

const getStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    "Under Processing": "badge-processing",
    "Documents Requested": "badge-requested",
    "Payment Pending": "badge-pending",
    Completed: "badge-completed",
  };
  return styles[status] || "badge-processing";
};

export default function AdminDashboard() {
  return (
    <AdminLayout>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Admin Dashboard
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Overview of all operations and pending actions.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
      >
        {kpiCards.map((card, index) => (
          <Link key={card.title} to={card.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {card.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 line-clamp-2">
                    {card.title}
                  </p>
                  <p
                    className={`text-xs hidden sm:block ${
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="xl:col-span-2"
        >
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">
              <CardTitle className="text-base sm:text-lg">Recent Applications</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/applications" className="text-xs sm:text-sm">
                  View All
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {recentApplications.map((app) => (
                  <Link
                    key={app.id}
                    to={`/admin/applications/${app.id}`}
                    className="block p-3 sm:p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-medium text-foreground text-sm">{app.id}</span>
                          <Badge variant="outline" className={`text-xs ${getStatusBadge(app.status)}`}>
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {app.user} • {app.service}
                          {app.freezone && ` • ${app.freezone}`}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{app.time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming License Expirations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-warning" />
                <span className="truncate">Expiring Licenses</span>
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/licenses" className="text-xs sm:text-sm">
                  View All
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {upcomingExpirations.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-warning/5 border border-warning/20 rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-foreground text-sm line-clamp-1">{item.company}</p>
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20 text-xs flex-shrink-0">
                        {item.daysLeft} days
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.license}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.expiryDate}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
      >
        <Card>
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl font-bold text-foreground">248</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Users</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl font-bold text-foreground">AED 2.4M</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Revenue This Month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl font-bold text-foreground">94%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Completion Rate</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AdminLayout>
  );
}
