import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  CreditCard,
  CheckCircle2,
  Clock,
  DollarSign,
  Eye,
  Download,
  TrendingUp,
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const payments = [
  {
    id: "PAY-001",
    ticketId: "TKT-001",
    user: "Ahmed Khan",
    service: "Freezone Setup",
    amount: 15000,
    status: "pending",
    requestedDate: "2024-01-15",
    paidDate: null,
    reference: null,
  },
  {
    id: "PAY-002",
    ticketId: "TKT-002",
    user: "Sarah Wilson",
    service: "VAT Registration",
    amount: 3500,
    status: "completed",
    requestedDate: "2024-01-10",
    paidDate: "2024-01-12",
    reference: "REF-2024-001",
  },
  {
    id: "PAY-003",
    ticketId: "TKT-003",
    user: "Mohammed Ali",
    service: "Bank Account",
    amount: 5000,
    status: "pending",
    requestedDate: "2024-01-14",
    paidDate: null,
    reference: null,
  },
  {
    id: "PAY-004",
    ticketId: "TKT-004",
    user: "Lisa Chen",
    service: "Visa Services",
    amount: 8500,
    status: "completed",
    requestedDate: "2024-01-08",
    paidDate: "2024-01-09",
    reference: "REF-2024-002",
  },
  {
    id: "PAY-005",
    ticketId: "TKT-005",
    user: "David Brown",
    service: "Company Amendment",
    amount: 2500,
    status: "pending",
    requestedDate: "2024-01-13",
    paidDate: null,
    reference: null,
  },
];

const summaryCards = [
  {
    title: "Total Pending",
    value: "AED 22,500",
    count: 3,
    icon: Clock,
    color: "bg-warning/10 text-warning",
  },
  {
    title: "Received This Month",
    value: "AED 156,000",
    count: 23,
    icon: CheckCircle2,
    color: "bg-success/10 text-success",
  },
  {
    title: "Total Revenue",
    value: "AED 2.4M",
    count: 248,
    icon: TrendingUp,
    color: "bg-primary/10 text-primary",
  },
];

export default function AdminPayments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    if (activeTab === "pending") return payment.status === "pending";
    if (activeTab === "completed") return payment.status === "completed";
    return true;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
          Payments Management
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Track and manage all payment requests and receipts.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6"
      >
        {summaryCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card>
              <CardContent className="p-4 sm:p-6 flex items-center gap-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <card.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                    {card.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {card.title} ({card.count})
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <Card>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by ticket ID, user, or reference..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payments Table/Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <CardHeader className="pb-0">
              <TabsList className="w-full grid grid-cols-3 h-auto">
                <TabsTrigger value="all" className="text-xs sm:text-sm py-2">All</TabsTrigger>
                <TabsTrigger value="pending" className="text-xs sm:text-sm py-2">Pending</TabsTrigger>
                <TabsTrigger value="completed" className="text-xs sm:text-sm py-2">Completed</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-4 sm:pt-6">
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Ticket</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>
                          <Link to={`/admin/applications/${payment.ticketId}`} className="text-primary hover:underline">
                            {payment.ticketId}
                          </Link>
                        </TableCell>
                        <TableCell>{payment.user}</TableCell>
                        <TableCell>{payment.service}</TableCell>
                        <TableCell className="font-semibold">
                          AED {payment.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              payment.status === "completed"
                                ? "badge-completed"
                                : "badge-pending"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {payment.paidDate || payment.requestedDate}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/admin/applications/${payment.ticketId}`}>
                                <Eye className="w-4 h-4" />
                              </Link>
                            </Button>
                            {payment.status === "pending" && (
                              <Button variant="outline" size="sm">
                                Mark Received
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-3">
                {filteredPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="p-4 border border-border rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{payment.id}</span>
                          <Badge
                            variant="outline"
                            className={
                              payment.status === "completed"
                                ? "badge-completed"
                                : "badge-pending"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </div>
                        <Link
                          to={`/admin/applications/${payment.ticketId}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {payment.ticketId}
                        </Link>
                      </div>
                      <p className="text-lg font-bold text-foreground flex-shrink-0">
                        AED {payment.amount.toLocaleString()}
                      </p>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <p>{payment.user}</p>
                      <p>{payment.service}</p>
                      <p className="flex items-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        {payment.paidDate || payment.requestedDate}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={`/admin/applications/${payment.ticketId}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Ticket
                        </Link>
                      </Button>
                      {payment.status === "pending" && (
                        <Button size="sm" className="w-full">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Mark as Received
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Tabs>
        </Card>
      </motion.div>
    </AdminLayout>
  );
}
