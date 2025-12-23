import { useState } from "react";
import {
  Settings,
  FileText,
  Bell,
  Mail,
  Save,
  Plus,
  Trash2,
  Edit,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const services = [
  { id: 1, name: "Freezone Setup", active: true, requiredDocs: 5 },
  { id: 2, name: "VAT Registration", active: true, requiredDocs: 3 },
  { id: 3, name: "Bank Account Assistance", active: true, requiredDocs: 4 },
  { id: 4, name: "Visa Services", active: true, requiredDocs: 6 },
  { id: 5, name: "Company Amendment", active: true, requiredDocs: 3 },
  { id: 6, name: "License Renewal", active: true, requiredDocs: 2 },
];

const ticketStatuses = [
  { id: 1, name: "Under Processing", color: "bg-primary/10 text-primary" },
  { id: 2, name: "Documents Requested", color: "bg-accent text-accent-foreground" },
  { id: 3, name: "Payment Pending", color: "bg-warning/10 text-warning" },
  { id: 4, name: "Completed", color: "bg-success/10 text-success" },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Settings
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Configure services, notifications, and system settings.
        </p>
      </motion.div>

      {/* Settings Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <CardHeader className="pb-0">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 h-auto">
                <TabsTrigger value="services" className="text-xs sm:text-sm py-2">
                  <FileText className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Services</span>
                  <span className="sm:hidden">Svc</span>
                </TabsTrigger>
                <TabsTrigger value="statuses" className="text-xs sm:text-sm py-2">
                  <Settings className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Statuses</span>
                  <span className="sm:hidden">Status</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-xs sm:text-sm py-2">
                  <Bell className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Notifications</span>
                  <span className="sm:hidden">Notif</span>
                </TabsTrigger>
                <TabsTrigger value="email" className="text-xs sm:text-sm py-2">
                  <Mail className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Email Templates</span>
                  <span className="sm:hidden">Email</span>
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            {/* Services Tab */}
            <TabsContent value="services" className="mt-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Service Types</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage available services and required documents.
                    </p>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </div>

                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 border border-border rounded-xl"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Switch checked={service.active} />
                        <div className="min-w-0">
                          <p className="font-medium text-foreground">{service.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {service.requiredDocs} required documents
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </TabsContent>

            {/* Statuses Tab */}
            <TabsContent value="statuses" className="mt-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Ticket Statuses</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure available ticket status options.
                    </p>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Status
                  </Button>
                </div>

                <div className="space-y-3">
                  {ticketStatuses.map((status) => (
                    <div
                      key={status.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 border border-border rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={status.color}>
                          {status.name}
                        </Badge>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="mt-0">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-foreground mb-1">Notification Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure when and how notifications are sent.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">New Application Alert</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified when a new application is submitted.
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">User Reply Alert</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified when a user replies to a ticket.
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">Payment Received Alert</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified when a payment is received.
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">License Expiry Reminder</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified before licenses expire (30, 60, 90 days).
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">License Expiry Reminder Days</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm">First Reminder (days before)</Label>
                        <Input type="number" defaultValue={90} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Second Reminder (days before)</Label>
                        <Input type="number" defaultValue={60} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Final Reminder (days before)</Label>
                        <Input type="number" defaultValue={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            {/* Email Templates Tab */}
            <TabsContent value="email" className="mt-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Email Templates</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize email notification templates.
                    </p>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Template
                  </Button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 border border-border rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h4 className="font-medium text-foreground">Welcome Email</h4>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-sm">Subject</Label>
                        <Input defaultValue="Welcome to CSPzone - Your Account is Ready!" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Body Preview</Label>
                        <Textarea
                          className="min-h-[100px]"
                          defaultValue="Dear {{user_name}},\n\nWelcome to CSPzone! Your account has been created successfully.\n\nBest regards,\nCSPzone Team"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h4 className="font-medium text-foreground">License Expiry Reminder</h4>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-sm">Subject</Label>
                        <Input defaultValue="Important: Your License Expires in {{days}} Days" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Body Preview</Label>
                        <Textarea
                          className="min-h-[100px]"
                          defaultValue="Dear {{user_name}},\n\nThis is a reminder that your {{license_type}} for {{company_name}} will expire on {{expiry_date}}.\n\nPlease contact us to initiate the renewal process.\n\nBest regards,\nCSPzone Team"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button className="w-full sm:w-auto">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </motion.div>
    </AdminLayout>
  );
}
