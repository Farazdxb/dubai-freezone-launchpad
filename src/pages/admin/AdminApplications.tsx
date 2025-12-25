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
  UserPlus,
  RefreshCw,
  Check,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Mock staff data
const staffMembers = [
  { id: "1", name: "Sarah Admin", email: "sarah@company.com", role: "Super Admin", avatar: "" },
  { id: "2", name: "Mike Staff", email: "mike@company.com", role: "Operations", avatar: "" },
  { id: "3", name: "John Admin", email: "john@company.com", role: "Support", avatar: "" },
  { id: "4", name: "Emily Wilson", email: "emily@company.com", role: "Finance", avatar: "" },
  { id: "5", name: "David Lee", email: "david@company.com", role: "Operations", avatar: "" },
];

const ticketStatusOptions = [
  { value: "Under Processing", label: "Under Processing", color: "bg-blue-500" },
  { value: "Documents Requested", label: "Documents Requested", color: "bg-amber-500" },
  { value: "Payment Pending", label: "Payment Pending", color: "bg-orange-500" },
  { value: "Completed", label: "Completed", color: "bg-green-500" },
];

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
  
  // Dialog states
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<typeof applications[0] | null>(null);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  
  const { toast } = useToast();

  const handleOpenAssignDialog = (app: typeof applications[0]) => {
    setSelectedTicket(app);
    setSelectedStaff("");
    setAssignDialogOpen(true);
  };

  const handleOpenStatusDialog = (app: typeof applications[0]) => {
    setSelectedTicket(app);
    setSelectedStatus(app.status);
    setStatusDialogOpen(true);
  };

  const handleAssignStaff = () => {
    if (!selectedStaff) return;
    const staff = staffMembers.find(s => s.id === selectedStaff);
    toast({
      title: "Staff Assigned",
      description: `${selectedTicket?.id} has been assigned to ${staff?.name}.`,
    });
    setAssignDialogOpen(false);
  };

  const handleUpdateStatus = () => {
    if (!selectedStatus) return;
    toast({
      title: "Status Updated",
      description: `${selectedTicket?.id} status changed to "${selectedStatus}".`,
    });
    setStatusDialogOpen(false);
  };

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
                          <DropdownMenuContent align="end" className="bg-background border">
                            <DropdownMenuItem onClick={() => handleOpenAssignDialog(app)}>
                              <UserPlus className="w-4 h-4 mr-2" />
                              Assign Staff
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleOpenStatusDialog(app)}>
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Update Status
                            </DropdownMenuItem>
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => handleOpenStatusDialog(app)}
                  >
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Update Status
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => handleOpenAssignDialog(app)}
                  >
                    <UserPlus className="w-3 h-3 mr-1" />
                    Assign Staff
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Assign Staff Dialog */}
      <Dialog open={assignDialogOpen} onOpenChange={setAssignDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Assign Staff Member</DialogTitle>
            <DialogDescription>
              Select a staff member to assign to ticket {selectedTicket?.id}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <RadioGroup value={selectedStaff} onValueChange={setSelectedStaff}>
              <div className="space-y-3">
                {staffMembers.map((staff) => (
                  <div
                    key={staff.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedStaff === staff.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-accent/50"
                    }`}
                    onClick={() => setSelectedStaff(staff.id)}
                  >
                    <RadioGroupItem value={staff.id} id={staff.id} />
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={staff.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {staff.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <Label htmlFor={staff.id} className="font-medium cursor-pointer">
                        {staff.name}
                      </Label>
                      <p className="text-xs text-muted-foreground">{staff.role}</p>
                    </div>
                    {selectedTicket?.assignedTo === staff.name && (
                      <Badge variant="outline" className="text-xs">Current</Badge>
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setAssignDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleAssignStaff} disabled={!selectedStaff} className="w-full sm:w-auto">
              <Check className="w-4 h-4 mr-2" />
              Assign Staff
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Update Status Dialog */}
      <Dialog open={statusDialogOpen} onOpenChange={setStatusDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Ticket Status</DialogTitle>
            <DialogDescription>
              Change the status of ticket {selectedTicket?.id}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <RadioGroup value={selectedStatus} onValueChange={setSelectedStatus}>
              <div className="space-y-3">
                {ticketStatusOptions.map((status) => (
                  <div
                    key={status.value}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedStatus === status.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-accent/50"
                    }`}
                    onClick={() => setSelectedStatus(status.value)}
                  >
                    <RadioGroupItem value={status.value} id={status.value} />
                    <div className={`w-3 h-3 rounded-full ${status.color}`} />
                    <Label htmlFor={status.value} className="flex-1 cursor-pointer">
                      {status.label}
                    </Label>
                    {selectedTicket?.status === status.value && (
                      <Badge variant="outline" className="text-xs">Current</Badge>
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setStatusDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleUpdateStatus} disabled={!selectedStatus} className="w-full sm:w-auto">
              <Check className="w-4 h-4 mr-2" />
              Update Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
