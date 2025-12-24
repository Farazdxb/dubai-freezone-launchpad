import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Eye,
  ChevronDown,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaffLayout } from "@/components/staff/StaffLayout";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tickets = [
  {
    id: "TKT-012",
    user: "Ahmed Khan",
    email: "ahmed@example.com",
    service: "Freezone Setup",
    freezone: "DMCC",
    status: "Under Processing",
    assignedTo: "Mike Staff",
    lastUpdated: "2024-01-15",
    createdAt: "2024-01-10",
    priority: "high",
  },
  {
    id: "TKT-011",
    user: "Lisa Chen",
    email: "lisa@example.com",
    service: "Visa Services",
    freezone: "IFZA",
    status: "Payment Pending",
    assignedTo: "Sarah Admin",
    lastUpdated: "2024-01-14",
    createdAt: "2024-01-08",
    priority: "medium",
  },
  {
    id: "TKT-010",
    user: "John Doe",
    email: "john@example.com",
    service: "Bank Account",
    freezone: "JAFZA",
    status: "Completed",
    assignedTo: "Mike Staff",
    lastUpdated: "2024-01-13",
    createdAt: "2024-01-05",
    priority: "low",
  },
  {
    id: "TKT-009",
    user: "Emma Brown",
    email: "emma@example.com",
    service: "VAT Registration",
    freezone: null,
    status: "Documents Requested",
    assignedTo: "John Admin",
    lastUpdated: "2024-01-12",
    createdAt: "2024-01-04",
    priority: "medium",
  },
  {
    id: "TKT-008",
    user: "Mohammed Ali",
    email: "mohammed@example.com",
    service: "Freezone Setup",
    freezone: "RAKEZ",
    status: "Under Processing",
    assignedTo: "Mike Staff",
    lastUpdated: "2024-01-11",
    createdAt: "2024-01-03",
    priority: "high",
  },
  {
    id: "TKT-007",
    user: "Sarah Wilson",
    email: "sarah@example.com",
    service: "Bank Account",
    freezone: "DMCC",
    status: "Completed",
    assignedTo: "Sarah Admin",
    lastUpdated: "2024-01-10",
    createdAt: "2024-01-02",
    priority: "low",
  },
];

const statusOptions = [
  { value: "all", label: "All Statuses" },
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
];

const assignedOptions = [
  { value: "all", label: "All Staff" },
  { value: "mike", label: "Mike Staff" },
  { value: "sarah", label: "Sarah Admin" },
  { value: "john", label: "John Admin" },
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
    low: "bg-muted text-muted-foreground border-border",
  };
  return styles[priority] || "";
};

export default function StaffTickets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [assignedFilter, setAssignedFilter] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeFiltersCount = [statusFilter, serviceFilter, assignedFilter].filter(
    (f) => f !== "all"
  ).length;

  const clearFilters = () => {
    setStatusFilter("all");
    setServiceFilter("all");
    setAssignedFilter("all");
  };

  return (
    <StaffLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          All Applications
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View and manage all tickets in the system.
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
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by ticket ID, user name, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-3">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={assignedFilter} onValueChange={setAssignedFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Assigned To" />
                  </SelectTrigger>
                  <SelectContent>
                    {assignedOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Mobile Filter Button */}
              <div className="lg:hidden">
                <DropdownMenu open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {activeFiltersCount}
                        </Badge>
                      )}
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-sm p-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Status</label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Service</label>
                      <Select value={serviceFilter} onValueChange={setServiceFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Assigned To</label>
                      <Select value={assignedFilter} onValueChange={setAssignedFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Assigned To" />
                        </SelectTrigger>
                        <SelectContent>
                          {assignedOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1" onClick={clearFilters}>
                        Clear All
                      </Button>
                      <Button size="sm" className="flex-1" onClick={() => setShowMobileFilters(false)}>
                        Apply
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tickets List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-base sm:text-lg">
              Tickets ({tickets.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Ticket ID</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Service / Freezone</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Priority</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Assigned To</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Last Updated</th>
                    <th className="text-right p-4 text-xs font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-accent/30 transition-colors">
                      <td className="p-4 font-medium text-sm">{ticket.id}</td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm font-medium">{ticket.user}</p>
                          <p className="text-xs text-muted-foreground">{ticket.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm">{ticket.service}</p>
                          {ticket.freezone && (
                            <p className="text-xs text-muted-foreground">{ticket.freezone}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className={`text-xs ${getStatusBadge(ticket.status)}`}>
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className={`text-xs capitalize ${getPriorityBadge(ticket.priority)}`}>
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{ticket.assignedTo}</td>
                      <td className="p-4 text-xs text-muted-foreground">{ticket.lastUpdated}</td>
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

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden divide-y divide-border">
              {tickets.map((ticket) => (
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
                      <Badge variant="outline" className={`text-xs capitalize ${getPriorityBadge(ticket.priority)}`}>
                        {ticket.priority}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{ticket.user}</p>
                      <p className="text-xs text-muted-foreground">{ticket.email}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {ticket.service}
                      {ticket.freezone && ` • ${ticket.freezone}`}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Assigned: {ticket.assignedTo}</span>
                      <span>{ticket.lastUpdated}</span>
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