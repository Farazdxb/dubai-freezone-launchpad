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
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaffLayout } from "@/components/staff/StaffLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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
  id: "TKT-012",
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
  assignedTo: "Mike Staff",
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
    sender: "staff",
    name: "Mike Staff",
    message: "Documents received. I'm processing your application now. Will update you shortly.",
    timestamp: "2024-01-12 02:30 PM",
    attachments: [],
  },
];

const uploadedDocuments = [
  { name: "Passport Copy", file: "passport_copy.pdf", uploadedBy: "User", date: "2024-01-11" },
  { name: "Visa Copy", file: "visa_copy.pdf", uploadedBy: "User", date: "2024-01-11" },
];

const statusOptions = [
  { value: "processing", label: "Under Processing" },
  { value: "documents", label: "Documents Requested" },
  { value: "payment", label: "Payment Pending" },
  { value: "completed", label: "Completed" },
];

// Mock staff permissions
const permissions = {
  canReply: true,
  canUpload: true,
  canChangeStatus: true,
  canRequestDocuments: true,
  canMarkPayment: false, // Staff cannot mark payment as received
};

export default function StaffTicketView() {
  const [newMessage, setNewMessage] = useState("");
  const [status, setStatus] = useState("processing");
  const [activeTab, setActiveTab] = useState("conversation");

  const getSenderStyle = (sender: string) => {
    switch (sender) {
      case "admin":
        return "bg-primary text-primary-foreground";
      case "staff":
        return "bg-success text-success-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <StaffLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
          <Button variant="ghost" size="sm" asChild className="w-fit">
            <Link to="/staff/tickets">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tickets
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
                      <p className="text-xs text-muted-foreground">Assigned To</p>
                      <p className="font-medium text-sm truncate">{ticketData.assignedTo}</p>
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
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <CardHeader className="pb-0">
                  <TabsList className="w-full grid grid-cols-2 h-auto">
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
                  </TabsList>
                </CardHeader>

                {/* Conversation Tab */}
                <TabsContent value="conversation" className="mt-0">
                  <CardContent className="p-3 sm:p-6">
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-3 ${msg.sender !== "user" ? "flex-row-reverse" : ""}`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getSenderStyle(msg.sender)}`}>
                            <span className="text-xs font-semibold">
                              {msg.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <div className={`flex-1 max-w-[85%] ${msg.sender !== "user" ? "text-right" : ""}`}>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{msg.name}</span>
                              {msg.sender === "staff" && (
                                <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                                  Staff
                                </Badge>
                              )}
                              {msg.sender === "admin" && (
                                <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                                  Admin
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                            </div>
                            <div className={`p-3 rounded-xl text-sm ${
                              msg.sender !== "user"
                                ? msg.sender === "staff"
                                  ? "bg-success text-success-foreground ml-auto"
                                  : "bg-primary text-primary-foreground ml-auto"
                                : "bg-secondary text-secondary-foreground"
                            }`}>
                              {msg.message}
                            </div>
                            {msg.attachments.length > 0 && (
                              <div className="mt-2 space-y-1">
                                {msg.attachments.map((att, i) => (
                                  <div key={i} className={`flex items-center gap-2 text-xs p-2 bg-secondary/50 rounded-lg ${
                                    msg.sender !== "user" ? "justify-end" : ""
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
                    {permissions.canReply && (
                      <div className="space-y-3">
                        <Textarea
                          placeholder="Type your reply..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="min-h-[100px]"
                        />
                        <div className="flex flex-col sm:flex-row gap-2">
                          {permissions.canUpload && (
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              <Upload className="w-4 h-4 mr-2" />
                              Attach File
                            </Button>
                          )}
                          <Button size="sm" className="w-full sm:w-auto sm:ml-auto">
                            <Send className="w-4 h-4 mr-2" />
                            Send Reply
                          </Button>
                        </div>
                      </div>
                    )}
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

                    {permissions.canUpload && (
                      <>
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
                        </div>
                      </>
                    )}
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* User Details - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden xl:block"
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">User Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <User className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-medium text-sm truncate">{ticketData.user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-sm truncate">{ticketData.user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-sm truncate">{ticketData.user.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {permissions.canChangeStatus && (
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Update Status</label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button size="sm" className="w-full">
                      Update Status
                    </Button>
                  </div>
                )}

                {permissions.canRequestDocuments && (
                  <>
                    <Separator />
                    <Button variant="outline" size="sm" className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Request Documents
                    </Button>
                  </>
                )}

                {!permissions.canMarkPayment && (
                  <p className="text-xs text-muted-foreground text-center p-2 bg-warning/10 rounded-lg">
                    Payment actions require admin privileges
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Attached Documents - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden xl:block"
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Attached Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {uploadedDocuments.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm truncate">{doc.file}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile: User Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="xl:hidden"
          >
            <Card>
              <Tabs defaultValue="details" className="w-full">
                <CardHeader className="pb-0">
                  <TabsList className="w-full grid grid-cols-2 h-auto">
                    <TabsTrigger value="details" className="text-xs sm:text-sm py-2">
                      <User className="w-4 h-4 mr-1 sm:mr-2" />
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="docs" className="text-xs sm:text-sm py-2">
                      <FileText className="w-4 h-4 mr-1 sm:mr-2" />
                      Documents
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                <TabsContent value="details" className="mt-0">
                  <CardContent className="p-3 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <User className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="font-medium text-sm truncate">{ticketData.user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium text-sm truncate">{ticketData.user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="font-medium text-sm truncate">{ticketData.user.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent value="docs" className="mt-0">
                  <CardContent className="p-3 sm:p-6">
                    <div className="space-y-2">
                      {uploadedDocuments.map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm truncate">{doc.file}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </div>
    </StaffLayout>
  );
}