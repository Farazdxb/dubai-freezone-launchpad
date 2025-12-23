import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ChevronDown,
  Eye,
  MoreHorizontal,
  User,
  Building2,
  Calendar,
  Clock,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const applications = [
  {
    id: "TKT-001",
    user: "Ahmed Khan",
    email: "ahmed@example.com",
    service: "Freezone Setup",
    freezone: "DMCC",
    status: "Under Processing",
    lastUpdated: "2024-01-15 10:30 AM",
    assignedTo: "Sarah Admin",
    priority: "high",
  },
  {
    id: "TKT-002",
    user: "Sarah Wilson",
    email: "sarah@example.com",
    service: "VAT Registration",
    freezone: null,
    status: "Documents Requested",
    lastUpdated: "2024-01-15 09:15 AM",
    assignedTo: "Mike Staff",
    priority: "medium",
  },
  {
    id: "TKT-003",
    user: "Mohammed Ali",
    email: "mohammed@example.com",
    service: "Bank Account",
    freezone: "JAFZA",
    status: "Payment Pending",
    lastUpdated: "2024-01-14 04:45 PM",
    assignedTo: "Sarah Admin",
    priority: "high",
  },
  {
    id: "TKT-004",
    user: "Lisa Chen",
    email: "lisa@example.com",
    service: "Visa Services",
    freezone: "IFZA",
    status: "Completed",
    lastUpdated: "2024-01-14 02:00 PM",
    assignedTo: "John Admin",
    priority: "low",
  },
  {
    id: "TKT-005",
    user: "David Brown",
    email: "david@example.com",
    service: "Company Amendment",
    freezone: "RAKEZ",
    status: "Under Processing",
    lastUpdated: "2024-01-13 11:00 AM",
    assignedTo: "Mike Staff",
    priority: "medium",
  },
  {
    id: "TKT-006",
    user: "Emma Johnson",
    email: "emma@example.com",
    service: "License Renewal",
    freezone: "DMCC",
    status: "Payment Pending",
    lastUpdated: "2024-01-12 03:30 PM",
    assignedTo: "Sarah Admin",
    priority: "high",
  },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "processing", label: "Under Processing" },
  { value: "documents", label: "Documents Requested" },
  { value: "payment", label: "Payment Pending" },
  { value: "completed", label: "Completed" },
];

const serviceOptions = [
  { value: "all", label: "All Services" },
  { value: "freezone", label: "Freezone Setup" },
  { value: "vat", label: "VAT Registration" },
  { value: "bank", label: "Bank Account" },
  { value: "visa", label: "Visa Services" },
  { value: "amendment", label: "Company Amendment" },
  { value: "renewal", label: "License Renewal" },
];

const freezoneOptions = [
  { value: "all", label: "All Freezones" },
  { value: "dmcc", label: "DMCC" },
  { value: "jafza", label: "JAFZA" },
  { value: "ifza", label: "IFZA" },
  { value: "rakez", label: "RAKEZ" },
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

const getPriorityBadge = (priority: string) => {
  const styles: Record<string, string> = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-success/10 text-success border-success/20",
  };
  return styles[priority] || "";
};

export default function AdminApplications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [freezoneFilter, setFreezoneFilter] = useState("all");

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Applications / Tickets
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage all user applications and tickets.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 sm:mb-6"
      >
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Search */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by ticket ID, user name, or email..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Row - Scrollable on mobile */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-full sm:w-[160px]">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={freezoneFilter} onValueChange={setFreezoneFilter}>
                  <SelectTrigger className="w-full sm:w-[160px]">
                    <SelectValue placeholder="Freezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {freezoneOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" className="w-full sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Applications List - Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden lg:block"
      >
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Freezone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id} className="hover:bg-accent/50">
                    <TableCell>
                      <span className="font-medium">{app.id}</span>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{app.user}</p>
                        <p className="text-xs text-muted-foreground">{app.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{app.service}</TableCell>
                    <TableCell>{app.freezone || "-"}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusBadge(app.status)}>
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{app.assignedTo}</TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{app.lastUpdated}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/admin/applications/${app.id}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Assign Staff</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuItem>Add Note</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Applications List - Mobile Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:hidden space-y-3"
      >
        {applications.map((app) => (
          <Card key={app.id} className="overflow-hidden">
            <CardContent className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{app.id}</span>
                    <Badge variant="outline" className={`text-xs ${getPriorityBadge(app.priority)}`}>
                      {app.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{app.service}</p>
                </div>
                <Badge variant="outline" className={`text-xs flex-shrink-0 ${getStatusBadge(app.status)}`}>
                  {app.status}
                </Badge>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-2 mb-3 p-2 bg-secondary/50 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{app.user}</p>
                  <p className="text-xs text-muted-foreground truncate">{app.email}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                {app.freezone && (
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span className="truncate">{app.freezone}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span className="truncate">{app.lastUpdated.split(" ")[0]}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button asChild size="sm" className="w-full">
                  <Link to={`/admin/applications/${app.id}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Ticket
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Update Status
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Assign Staff
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </AdminLayout>
  );
}
