import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  Upload,
  Paperclip,
  Calendar,
  User,
  Building2,
  Clock,
  FileText,
  Download,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ticketData = {
  id: "TKT-001",
  title: "New Freezone Company Setup - DMCC",
  user: {
    name: "Ahmed Khan",
    email: "ahmed@example.com",
    phone: "+971 50 123 4567",
  },
  service: "Freezone Setup",
  freezone: "DMCC",
  businessActivity: "General Trading",
  status: "Under Processing",
  createdAt: "2024-01-10",
  lastUpdated: "2024-01-15",
  assignedTo: "Sarah Admin",
  priority: "high",
};

const messages = [
  {
    id: 1,
    sender: "user",
    name: "Ahmed Khan",
    message: "Hello, I would like to set up a new company in DMCC freezone. I'm interested in general trading license.",
    timestamp: "2024-01-10 10:30 AM",
    attachments: [],
  },
  {
    id: 2,
    sender: "admin",
    name: "Sarah Admin",
    message: "Thank you for reaching out. We'd be happy to help you with DMCC company setup. Please upload your passport copy and visa (if available).",
    timestamp: "2024-01-10 11:45 AM",
    attachments: [],
  },
  {
    id: 3,
    sender: "user",
    name: "Ahmed Khan",
    message: "Here are the documents you requested.",
    timestamp: "2024-01-11 09:15 AM",
    attachments: [
      { name: "passport_copy.pdf", size: "2.1 MB" },
      { name: "visa_copy.pdf", size: "1.8 MB" },
    ],
  },
  {
    id: 4,
    sender: "admin",
    name: "Sarah Admin",
    message: "Documents received. We are processing your application. We'll update you on the next steps shortly.",
    timestamp: "2024-01-11 02:30 PM",
    attachments: [],
  },
];

const uploadedDocuments = [
  { name: "Passport Copy", file: "passport_copy.pdf", uploadedBy: "User", date: "2024-01-11" },
  { name: "Visa Copy", file: "visa_copy.pdf", uploadedBy: "User", date: "2024-01-11" },
];

const internalNotes = [
  { id: 1, note: "User is UAE resident with valid visa.", author: "Sarah Admin", date: "2024-01-11" },
  { id: 2, note: "DMCC registration form submitted.", author: "Sarah Admin", date: "2024-01-12" },
];

const statusOptions = [
  { value: "processing", label: "Under Processing" },
  { value: "documents", label: "Documents Requested" },
  { value: "payment", label: "Payment Pending" },
  { value: "completed", label: "Completed" },
];

const staffOptions = [
  { value: "sarah", label: "Sarah Admin" },
  { value: "mike", label: "Mike Staff" },
  { value: "john", label: "John Admin" },
];

export default function AdminTicketView() {
  const [newMessage, setNewMessage] = useState("");
  const [internalNote, setInternalNote] = useState("");
  const [status, setStatus] = useState("processing");
  const [assignedTo, setAssignedTo] = useState("sarah");
  const [licenseIssueDate, setLicenseIssueDate] = useState("");
  const [licenseExpiryDate, setLicenseExpiryDate] = useState("");

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
          <Button variant="ghost" size="sm" asChild className="w-fit">
            <Link to="/admin/applications">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applications
            </Link>
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground">
                {ticketData.id}
              </h1>
              <Badge variant="outline" className="badge-processing">
                {ticketData.status}
              </Badge>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                {ticketData.priority}
              </Badge>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">{ticketData.title}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          {/* Ticket Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Ticket Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <User className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">User</p>
                      <p className="font-medium text-sm truncate">{ticketData.user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{ticketData.user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Service / Freezone</p>
                      <p className="font-medium text-sm truncate">{ticketData.service}</p>
                      <p className="text-xs text-muted-foreground truncate">{ticketData.freezone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Created</p>
                      <p className="font-medium text-sm">{ticketData.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Last Updated</p>
                      <p className="font-medium text-sm">{ticketData.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conversation & Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <Tabs defaultValue="conversation" className="w-full">
                <CardHeader className="pb-0">
                  <TabsList className="w-full grid grid-cols-3 h-auto">
                    <TabsTrigger value="conversation" className="text-xs sm:text-sm py-2">
                      <MessageSquare className="w-4 h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Conversation</span>
                      <span className="sm:hidden">Chat</span>
                    </TabsTrigger>
                    <TabsTrigger value="documents" className="text-xs sm:text-sm py-2">
                      <FileText className="w-4 h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Documents</span>
                      <span className="sm:hidden">Docs</span>
                    </TabsTrigger>
                    <TabsTrigger value="notes" className="text-xs sm:text-sm py-2">
                      <AlertCircle className="w-4 h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Internal Notes</span>
                      <span className="sm:hidden">Notes</span>
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                {/* Conversation Tab */}
                <TabsContent value="conversation" className="mt-0">
                  <CardContent className="p-3 sm:p-6">
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-3 ${msg.sender === "admin" ? "flex-row-reverse" : ""}`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            msg.sender === "admin" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-secondary text-secondary-foreground"
                          }`}>
                            <span className="text-xs font-semibold">
                              {msg.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <div className={`flex-1 max-w-[85%] ${msg.sender === "admin" ? "text-right" : ""}`}>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{msg.name}</span>
                              <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                            </div>
                            <div className={`p-3 rounded-xl text-sm ${
                              msg.sender === "admin"
                                ? "bg-primary text-primary-foreground ml-auto"
                                : "bg-secondary text-secondary-foreground"
                            }`}>
                              {msg.message}
                            </div>
                            {msg.attachments.length > 0 && (
                              <div className="mt-2 space-y-1">
                                {msg.attachments.map((att, i) => (
                                  <div key={i} className={`flex items-center gap-2 text-xs p-2 bg-secondary/50 rounded-lg ${
                                    msg.sender === "admin" ? "justify-end" : ""
                                  }`}>
                                    <Paperclip className="w-3 h-3" />
                                    <span className="truncate max-w-[150px]">{att.name}</span>
                                    <span className="text-muted-foreground">({att.size})</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    {/* Reply Form */}
                    <div className="space-y-3">
                      <Textarea
                        placeholder="Type your reply..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          <Upload className="w-4 h-4 mr-2" />
                          Attach File
                        </Button>
                        <Button size="sm" className="w-full sm:w-auto sm:ml-auto">
                          <Send className="w-4 h-4 mr-2" />
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents" className="mt-0">
                  <CardContent className="p-3 sm:p-6">
                    <div className="space-y-3 mb-6">
                      {uploadedDocuments.map((doc, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-secondary/50 rounded-lg">
                          <div className="flex items-center gap-3 min-w-0">
                            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-medium text-sm truncate">{doc.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Uploaded by {doc.uploadedBy} • {doc.date}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="flex-shrink-0">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    {/* Upload Documents */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm">Upload Documents</h4>
                      <div className="border-2 border-dashed border-border rounded-xl p-4 sm:p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag & drop files or click to browse
                        </p>
                        <Button variant="outline" size="sm">
                          Choose Files
                        </Button>
                      </div>

                      {/* License Upload with Dates */}
                      <div className="p-4 bg-accent/50 rounded-xl space-y-4">
                        <h5 className="font-medium text-sm">Upload Trade License</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs">Issue Date</Label>
                            <Input
                              type="date"
                              value={licenseIssueDate}
                              onChange={(e) => setLicenseIssueDate(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Expiry Date</Label>
                            <Input
                              type="date"
                              value={licenseExpiryDate}
                              onChange={(e) => setLicenseExpiryDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <Button size="sm" className="w-full sm:w-auto">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload License
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                {/* Internal Notes Tab */}
                <TabsContent value="notes" className="mt-0">
                  <CardContent className="p-3 sm:p-6">
                    <div className="space-y-3 mb-6">
                      {internalNotes.map((note) => (
                        <div key={note.id} className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                          <p className="text-sm text-foreground mb-2">{note.note}</p>
                          <p className="text-xs text-muted-foreground">
                            {note.author} • {note.date}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <Textarea
                        placeholder="Add internal note (not visible to user)..."
                        value={internalNote}
                        onChange={(e) => setInternalNote(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <Button size="sm" variant="secondary" className="w-full sm:w-auto">
                        Add Note
                      </Button>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Actions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Update Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Assign To</Label>
                  <Select value={assignedTo} onValueChange={setAssignedTo}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {staffOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <Button className="w-full" size="sm">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Request Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Amount (AED)</Label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Reference</Label>
                  <Input placeholder="Payment reference" />
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Request Payment
                </Button>
                <Button variant="secondary" className="w-full" size="sm">
                  Mark as Received
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Documents
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload License
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  View User Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
