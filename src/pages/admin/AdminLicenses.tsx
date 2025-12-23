import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Building2,
  FileText,
  Download,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const licenses = [
  {
    id: 1,
    company: "ABC Trading LLC",
    licenseType: "Trade License",
    licenseNumber: "TL-2024-001",
    freezone: "DMCC",
    issueDate: "2023-02-15",
    expiryDate: "2024-02-15",
    daysLeft: 23,
    status: "expiring",
    ticketId: "TKT-001",
  },
  {
    id: 2,
    company: "XYZ Consulting FZE",
    licenseType: "Trade License",
    licenseNumber: "TL-2024-002",
    freezone: "JAFZA",
    issueDate: "2023-02-28",
    expiryDate: "2024-02-28",
    daysLeft: 36,
    status: "expiring",
    ticketId: "TKT-002",
  },
  {
    id: 3,
    company: "Global Tech FZE",
    licenseType: "Establishment Card",
    licenseNumber: "EC-2024-001",
    freezone: "IFZA",
    issueDate: "2023-03-05",
    expiryDate: "2024-03-05",
    daysLeft: 42,
    status: "expiring",
    ticketId: "TKT-003",
  },
  {
    id: 4,
    company: "Tech Solutions LLC",
    licenseType: "Trade License",
    licenseNumber: "TL-2024-003",
    freezone: "DMCC",
    issueDate: "2023-06-15",
    expiryDate: "2024-06-15",
    daysLeft: 143,
    status: "active",
    ticketId: "TKT-004",
  },
  {
    id: 5,
    company: "Express Logistics",
    licenseType: "Trade License",
    licenseNumber: "TL-2023-010",
    freezone: "RAKEZ",
    issueDate: "2022-12-01",
    expiryDate: "2023-12-01",
    daysLeft: -53,
    status: "expired",
    ticketId: "TKT-005",
  },
];

const summaryCards = [
  {
    title: "Expiring in 30 Days",
    count: 2,
    icon: AlertTriangle,
    color: "bg-destructive/10 text-destructive",
    filter: "30",
  },
  {
    title: "Expiring in 60 Days",
    count: 3,
    icon: Clock,
    color: "bg-warning/10 text-warning",
    filter: "60",
  },
  {
    title: "Expiring in 90 Days",
    count: 4,
    icon: Calendar,
    color: "bg-accent text-accent-foreground",
    filter: "90",
  },
  {
    title: "Already Expired",
    count: 1,
    icon: AlertTriangle,
    color: "bg-destructive text-destructive-foreground",
    filter: "expired",
  },
];

const getExpiryBadge = (daysLeft: number) => {
  if (daysLeft < 0) {
    return { text: "Expired", className: "bg-destructive text-destructive-foreground" };
  } else if (daysLeft <= 30) {
    return { text: `${daysLeft} days`, className: "bg-destructive/10 text-destructive border-destructive/20" };
  } else if (daysLeft <= 60) {
    return { text: `${daysLeft} days`, className: "bg-warning/10 text-warning border-warning/20" };
  } else if (daysLeft <= 90) {
    return { text: `${daysLeft} days`, className: "bg-accent text-accent-foreground" };
  } else {
    return { text: `${daysLeft} days`, className: "bg-success/10 text-success border-success/20" };
  }
};

export default function AdminLicenses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expiryFilter, setExpiryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredLicenses = licenses.filter((license) => {
    if (activeTab === "expiring") return license.daysLeft > 0 && license.daysLeft <= 90;
    if (activeTab === "expired") return license.daysLeft < 0;
    if (activeTab === "active") return license.daysLeft > 90;
    return true;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Licenses & Expiry Management
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Track and manage all license expiration dates.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6"
      >
        {summaryCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      {card.count}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {card.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by company or license number..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={expiryFilter} onValueChange={setExpiryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Expiry Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Licenses</SelectItem>
                  <SelectItem value="30">Within 30 days</SelectItem>
                  <SelectItem value="60">Within 60 days</SelectItem>
                  <SelectItem value="90">Within 90 days</SelectItem>
                  <SelectItem value="expired">Already Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Licenses Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <CardHeader className="pb-0">
              <TabsList className="w-full grid grid-cols-4 h-auto">
                <TabsTrigger value="all" className="text-xs sm:text-sm py-2">All</TabsTrigger>
                <TabsTrigger value="expiring" className="text-xs sm:text-sm py-2">
                  <span className="hidden sm:inline">Expiring</span>
                  <span className="sm:hidden">Exp.</span>
                </TabsTrigger>
                <TabsTrigger value="expired" className="text-xs sm:text-sm py-2">Expired</TabsTrigger>
                <TabsTrigger value="active" className="text-xs sm:text-sm py-2">Active</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-4 sm:pt-6">
              <div className="space-y-3">
                {filteredLicenses.map((license) => {
                  const badge = getExpiryBadge(license.daysLeft);
                  return (
                    <div
                      key={license.id}
                      className="p-3 sm:p-4 border border-border rounded-xl hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                        {/* License Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="font-semibold text-foreground text-sm sm:text-base truncate">
                              {license.company}
                            </span>
                            <Badge variant="outline" className={badge.className}>
                              {badge.text}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <FileText className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">{license.licenseType}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">{license.freezone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">Issue: {license.issueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">Exp: {license.expiryDate}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            License #: {license.licenseNumber}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
                          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                            <Link to={`/admin/applications/${license.ticketId}`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Ticket
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Tabs>
        </Card>
      </motion.div>
    </AdminLayout>
  );
}
