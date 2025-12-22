import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Paperclip, Download, Clock, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "./Dashboard";
import { motion } from "framer-motion";

const ticketData = {
  id: "TKT-2024-001",
  title: "Freezone Setup – IFZA",
  type: "Freezone Setup",
  freezone: "IFZA",
  activity: "E-Commerce Trading",
  status: "Under Processing",
  createdAt: "Dec 15, 2024",
};

const messages = [
  {
    id: 1,
    sender: "admin",
    name: "CSPzone Team",
    message: "Thank you for submitting your pre-approval request for IFZA Freezone. We have received your application and are currently reviewing it.",
    timestamp: "Dec 15, 2024 - 10:30 AM",
    attachments: [],
  },
  {
    id: 2,
    sender: "admin",
    name: "CSPzone Team",
    message: "Your application has been reviewed. Please upload the following additional documents:\n\n1. Passport copy (colored scan)\n2. UAE Entry Stamp or Visit Visa\n3. Passport-size photograph with white background",
    timestamp: "Dec 16, 2024 - 2:15 PM",
    attachments: [],
  },
  {
    id: 3,
    sender: "user",
    name: "John Doe",
    message: "I have uploaded the requested documents. Please let me know if you need anything else.",
    timestamp: "Dec 17, 2024 - 9:45 AM",
    attachments: [
      { name: "passport_john_doe.pdf", size: "2.4 MB" },
      { name: "visa_copy.pdf", size: "1.1 MB" },
      { name: "photo.jpg", size: "524 KB" },
    ],
  },
  {
    id: 4,
    sender: "admin",
    name: "CSPzone Team",
    message: "Documents received. Your application is now under processing. We will update you once the license is ready. Estimated timeline: 3-5 working days.",
    timestamp: "Dec 17, 2024 - 11:20 AM",
    attachments: [],
  },
];

export default function TicketView() {
  const [newMessage, setNewMessage] = useState("");

  return (
    <DashboardLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Link
          to="/dashboard/applications"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Applications
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm text-muted-foreground font-mono">
                {ticketData.id}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full badge-processing">
                {ticketData.status}
              </span>
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              {ticketData.title}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            Created on {ticketData.createdAt}
          </div>
        </div>
      </motion.div>

      {/* Ticket Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-elevated p-5 mb-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Service Type</p>
            <p className="font-medium text-foreground">{ticketData.type}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Freezone</p>
            <p className="font-medium text-foreground">{ticketData.freezone}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Business Activity</p>
            <p className="font-medium text-foreground">{ticketData.activity}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Status</p>
            <p className="font-medium text-primary">{ticketData.status}</p>
          </div>
        </div>
      </motion.div>

      {/* Conversation Thread */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card-elevated overflow-hidden"
      >
        {/* Messages */}
        <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`flex gap-4 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === "admin"
                    ? "bg-primary/10"
                    : "bg-gradient-cta"
                }`}
              >
                {msg.sender === "admin" ? (
                  <Bot className="w-5 h-5 text-primary" />
                ) : (
                  <User className="w-5 h-5 text-primary-foreground" />
                )}
              </div>

              <div
                className={`flex-1 max-w-[80%] ${
                  msg.sender === "user" ? "text-right" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-foreground">
                    {msg.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {msg.timestamp}
                  </span>
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    msg.sender === "admin"
                      ? "bg-secondary rounded-tl-none"
                      : "bg-primary/10 rounded-tr-none"
                  }`}
                >
                  <p className="text-sm text-foreground whitespace-pre-line">
                    {msg.message}
                  </p>

                  {msg.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.attachments.map((attachment) => (
                        <div
                          key={attachment.name}
                          className="flex items-center gap-2 p-2 bg-card rounded-lg"
                        >
                          <Paperclip className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground flex-1 truncate">
                            {attachment.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {attachment.size}
                          </span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-secondary/30">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                rows={2}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="hero">
                <Send className="w-4 h-4" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
