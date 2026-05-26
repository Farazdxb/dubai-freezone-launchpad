import { Download, FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "./Dashboard";
import { motion } from "framer-motion";

const documents = [
  {
    id: 1,
    name: "Trade License",
    relatedService: "Freezone Setup – IFZA",
    issuedDate: "Dec 15, 2024",
    expiryDate: "Dec 14, 2025",
    status: "Active",
    type: "License",
  },
  {
    id: 2,
    name: "Memorandum of Association",
    relatedService: "Freezone Setup – IFZA",
    issuedDate: "Dec 15, 2024",
    expiryDate: null,
    status: "Active",
    type: "Certificate",
  },
  {
    id: 3,
    name: "Establishment Card",
    relatedService: "Freezone Setup – IFZA",
    issuedDate: "Dec 18, 2024",
    expiryDate: "Dec 17, 2026",
    status: "Active",
    type: "Certificate",
  },
  {
    id: 4,
    name: "VAT Certificate",
    relatedService: "VAT Registration",
    issuedDate: "Dec 20, 2024",
    expiryDate: null,
    status: "Active",
    type: "Certificate",
  },
  {
    id: 5,
    name: "Visa Copy - John Doe",
    relatedService: "Visa Services",
    issuedDate: "Dec 22, 2024",
    expiryDate: "Dec 21, 2026",
    status: "Active",
    type: "Visa",
  },
];

const tabs = ["All Documents", "Licenses", "Certificates", "Visas"];

export default function MyDocuments() {
  return (
    <DashboardLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          My Documents & Issued Licenses
        </h1>
        <p className="text-muted-foreground">
          View and download all your issued documents in one place
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 overflow-x-auto pb-2 mb-6"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors ${
              index === 0
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Documents Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card-elevated overflow-hidden"
      >
        {/* Table Header - Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-4 px-6 py-4 bg-secondary/50 border-b border-border text-sm font-medium text-muted-foreground">
          <div className="col-span-2">Document Name</div>
          <div>Related Service</div>
          <div>Issued Date</div>
          <div>Expiry Date</div>
          <div className="text-right">Action</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="p-6"
            >
              {/* Mobile Layout */}
              <div className="lg:hidden space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">{doc.relatedService}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full badge-completed">
                    {doc.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Issued: {doc.issuedDate}
                  </span>
                  {doc.expiryDate && (
                    <span className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Expires: {doc.expiryDate}
                    </span>
                  )}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-6 gap-4 items-center">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                      {doc.type}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{doc.relatedService}</div>
                <div className="text-sm text-foreground">{doc.issuedDate}</div>
                <div className="text-sm">
                  {doc.expiryDate ? (
                    <span className="text-foreground">{doc.expiryDate}</span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Empty State */}
      {documents.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            No documents issued yet
          </h3>
          <p className="text-muted-foreground">
            Documents will appear here once your applications are completed
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}
