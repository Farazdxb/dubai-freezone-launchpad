import { Link } from "react-router-dom";
import {
  Award,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaffLayout } from "@/components/staff/StaffLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const licenses = [
  {
    id: "LIC-001",
    company: "ABC Trading LLC",
    type: "Trade License",
    freezone: "DMCC",
    issueDate: "2023-02-15",
    expiryDate: "2024-02-15",
    daysLeft: 23,
    status: "expiring",
    ticketId: "TKT-001",
  },
  {
    id: "LIC-002",
    company: "XYZ Consulting FZE",
    type: "Trade License",
    freezone: "JAFZA",
    issueDate: "2023-03-01",
    expiryDate: "2024-02-28",
    daysLeft: 36,
    status: "expiring",
    ticketId: "TKT-002",
  },
  {
    id: "LIC-003",
    company: "Global Tech Solutions",
    type: "Establishment Card",
    freezone: "IFZA",
    issueDate: "2023-03-05",
    expiryDate: "2024-03-05",
    daysLeft: 42,
    status: "expiring",
    ticketId: "TKT-003",
  },
  {
    id: "LIC-004",
    company: "Emirates Ventures",
    type: "Trade License",
    freezone: "RAKEZ",
    issueDate: "2023-06-10",
    expiryDate: "2024-06-10",
    daysLeft: 139,
    status: "active",
    ticketId: "TKT-004",
  },
  {
    id: "LIC-005",
    company: "Dubai Imports LLC",
    type: "Trade License",
    freezone: "DMCC",
    issueDate: "2023-08-20",
    expiryDate: "2024-08-20",
    daysLeft: 210,
    status: "active",
    ticketId: "TKT-005",
  },
];

const getExpiryBadge = (daysLeft: number) => {
  if (daysLeft <= 30) {
    return "bg-destructive/10 text-destructive border-destructive/20";
  } else if (daysLeft <= 60) {
    return "bg-warning/10 text-warning border-warning/20";
  } else if (daysLeft <= 90) {
    return "bg-accent text-accent-foreground border-accent";
  }
  return "bg-success/10 text-success border-success/20";
};

const getExpiryText = (daysLeft: number) => {
  if (daysLeft <= 0) return "Expired";
  if (daysLeft <= 30) return `${daysLeft} days left`;
  if (daysLeft <= 60) return `${daysLeft} days left`;
  if (daysLeft <= 90) return `${daysLeft} days left`;
  return "Active";
};

export default function StaffLicenses() {
  const expiringCount = licenses.filter(l => l.daysLeft <= 30).length;
  const warningCount = licenses.filter(l => l.daysLeft > 30 && l.daysLeft <= 60).length;
  const activeCount = licenses.filter(l => l.daysLeft > 90).length;

  return (
    <StaffLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Licenses & Expiry
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View license expiry dates and renewal status.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
      >
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">{expiringCount}</p>
                <p className="text-xs text-muted-foreground">Expiring ≤30d</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">{warningCount}</p>
                <p className="text-xs text-muted-foreground">Expiring ≤60d</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">{activeCount}</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">{licenses.length}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Licenses List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-base sm:text-lg">All Licenses</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">License ID</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Company</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Freezone</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Issue Date</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Expiry Date</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-right p-4 text-xs font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {licenses.map((license) => (
                    <tr key={license.id} className="hover:bg-accent/30 transition-colors">
                      <td className="p-4 font-medium text-sm">{license.id}</td>
                      <td className="p-4 text-sm">{license.company}</td>
                      <td className="p-4 text-sm text-muted-foreground">{license.type}</td>
                      <td className="p-4 text-sm text-muted-foreground">{license.freezone}</td>
                      <td className="p-4 text-sm text-muted-foreground">{license.issueDate}</td>
                      <td className="p-4 text-sm text-muted-foreground">{license.expiryDate}</td>
                      <td className="p-4">
                        <Badge variant="outline" className={`text-xs ${getExpiryBadge(license.daysLeft)}`}>
                          {getExpiryText(license.daysLeft)}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/staff/tickets/${license.ticketId}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            View Ticket
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
              {licenses.map((license) => (
                <div
                  key={license.id}
                  className="p-3 sm:p-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground text-sm">{license.id}</span>
                      <Badge variant="outline" className={`text-xs ${getExpiryBadge(license.daysLeft)}`}>
                        {getExpiryText(license.daysLeft)}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{license.company}</p>
                    <p className="text-xs text-muted-foreground">
                      {license.type} • {license.freezone}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Issue: {license.issueDate}</span>
                      <span>Expiry: {license.expiryDate}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                      <Link to={`/staff/tickets/${license.ticketId}`}>
                        <Eye className="w-4 h-4 mr-1" />
                        View Ticket
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </StaffLayout>
  );
}