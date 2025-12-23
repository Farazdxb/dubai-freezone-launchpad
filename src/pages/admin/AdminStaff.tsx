import { useState } from "react";
import {
  Search,
  UserCog,
  Plus,
  Mail,
  Shield,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Checkbox } from "@/components/ui/checkbox";

const staffMembers = [
  {
    id: 1,
    name: "Sarah Admin",
    email: "sarah@cspzone.com",
    role: "Super Admin",
    permissions: ["all"],
    assignedTickets: 12,
    status: "active",
  },
  {
    id: 2,
    name: "Mike Staff",
    email: "mike@cspzone.com",
    role: "Operations Staff",
    permissions: ["view_tickets", "reply_tickets", "upload_documents"],
    assignedTickets: 8,
    status: "active",
  },
  {
    id: 3,
    name: "John Admin",
    email: "john@cspzone.com",
    role: "Sales / Support",
    permissions: ["view_tickets", "reply_tickets"],
    assignedTickets: 15,
    status: "active",
  },
  {
    id: 4,
    name: "Emma Finance",
    email: "emma@cspzone.com",
    role: "Finance",
    permissions: ["view_tickets", "manage_payments"],
    assignedTickets: 0,
    status: "active",
  },
];

const roles = [
  { value: "super_admin", label: "Super Admin", description: "Full access to all features" },
  { value: "operations", label: "Operations Staff", description: "Manage tickets and documents" },
  { value: "sales", label: "Sales / Support", description: "View and reply to tickets" },
  { value: "finance", label: "Finance", description: "Manage payments and invoices" },
];

const permissions = [
  { id: "view_tickets", label: "View Tickets" },
  { id: "reply_tickets", label: "Reply to Tickets" },
  { id: "upload_documents", label: "Upload Documents" },
  { id: "manage_payments", label: "Manage Payments" },
  { id: "delete_tickets", label: "Delete Tickets" },
  { id: "manage_settings", label: "Manage Settings" },
];

const getRoleBadgeColor = (role: string) => {
  const colors: Record<string, string> = {
    "Super Admin": "bg-primary/10 text-primary border-primary/20",
    "Operations Staff": "bg-success/10 text-success border-success/20",
    "Sales / Support": "bg-accent text-accent-foreground",
    Finance: "bg-warning/10 text-warning border-warning/20",
  };
  return colors[role] || "bg-secondary text-secondary-foreground";
};

export default function AdminStaff() {
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
              Staff Management
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Manage staff members and their permissions.
            </p>
          </div>
          <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add Staff Member</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="email@cspzone.com" />
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          <div>
                            <p className="font-medium">{role.label}</p>
                            <p className="text-xs text-muted-foreground">{role.description}</p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Permissions</Label>
                  <div className="space-y-2">
                    {permissions.map((permission) => (
                      <div key={permission.id} className="flex items-center gap-2">
                        <Checkbox id={permission.id} />
                        <label htmlFor={permission.id} className="text-sm">
                          {permission.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setAddDialogOpen(false)}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button className="w-full sm:flex-1">Add Staff Member</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6"
      >
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserCog className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-foreground">4</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Staff</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-foreground">4</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-foreground">1</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Super Admin</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warning/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-foreground">35</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Assigned Tickets</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search staff by name or email..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Staff List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3 sm:space-y-4"
      >
        {filteredStaff.map((staff) => (
          <Card key={staff.id}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Staff Info */}
                <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-base sm:text-lg">
                      {staff.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{staff.name}</h3>
                      <Badge variant="outline" className={getRoleBadgeColor(staff.role)}>
                        {staff.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{staff.email}</p>
                    <div className="flex flex-wrap gap-1">
                      {staff.permissions.includes("all") ? (
                        <Badge variant="secondary" className="text-xs">
                          Full Access
                        </Badge>
                      ) : (
                        staff.permissions.slice(0, 3).map((perm) => (
                          <Badge key={perm} variant="secondary" className="text-xs">
                            {permissions.find((p) => p.id === perm)?.label || perm}
                          </Badge>
                        ))
                      )}
                      {staff.permissions.length > 3 && !staff.permissions.includes("all") && (
                        <Badge variant="secondary" className="text-xs">
                          +{staff.permissions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="text-center sm:text-right">
                    <p className="text-xl sm:text-2xl font-bold text-foreground">
                      {staff.assignedTickets}
                    </p>
                    <p className="text-xs text-muted-foreground">Assigned Tickets</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Edit className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Edit</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Shield className="w-4 h-4 mr-2" />
                          Change Role
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove Staff
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </AdminLayout>
  );
}
