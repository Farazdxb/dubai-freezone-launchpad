import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Award,
  CreditCard,
  Users,
  UserCog,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronDown,
  Search,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: FileText, label: "Applications", href: "/admin/applications" },
  { icon: Award, label: "Licenses & Expiry", href: "/admin/licenses" },
  { icon: CreditCard, label: "Payments", href: "/admin/payments" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: UserCog, label: "Staff", href: "/admin/staff" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const notifications = [
  {
    id: 1,
    type: "new_application",
    message: "New application submitted by Ahmed Khan",
    time: "2 min ago",
    read: false,
    ticketId: "TKT-001",
  },
  {
    id: 2,
    type: "user_reply",
    message: "User replied to ticket TKT-005",
    time: "15 min ago",
    read: false,
    ticketId: "TKT-005",
  },
  {
    id: 3,
    type: "document_upload",
    message: "Documents uploaded for TKT-003",
    time: "1 hour ago",
    read: true,
    ticketId: "TKT-003",
  },
  {
    id: 4,
    type: "payment",
    message: "Payment received for TKT-002",
    time: "2 hours ago",
    read: true,
    ticketId: "TKT-002",
  },
  {
    id: 5,
    type: "license_expiry",
    message: "License expiring in 30 days - ABC Trading LLC",
    time: "3 hours ago",
    read: false,
    ticketId: null,
  },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-secondary/30 flex max-w-full overflow-x-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-300 flex-shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 sm:p-6 border-b border-border">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg text-foreground leading-tight">
                  CSP<span className="text-primary">zone</span>
                </span>
                <span className="text-xs text-muted-foreground">Admin Panel</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
            <ul className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href !== "/admin" && location.pathname.startsWith(item.href));
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom */}
          <div className="p-3 sm:p-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-8 h-14 sm:h-16 gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-foreground flex-shrink-0"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Search - Hidden on mobile */}
              <div className="hidden md:flex relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tickets, users..."
                  className="pl-10 bg-secondary/50 border-0"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Mobile Search Button */}
              <button className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground text-xs font-semibold rounded-full flex items-center justify-center px-1">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[280px] sm:w-80">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                    <span className="font-semibold text-sm">Notifications</span>
                    <Button variant="ghost" size="sm" className="text-xs h-auto py-1">
                      Mark all read
                    </Button>
                  </div>
                  <ScrollArea className="h-[300px] sm:h-80">
                    {notifications.map((notification) => (
                      <Link
                        key={notification.id}
                        to={notification.ticketId ? `/admin/applications/${notification.ticketId}` : "/admin/licenses"}
                        onClick={() => setNotificationsOpen(false)}
                      >
                        <div
                          className={`px-4 py-3 hover:bg-accent/50 transition-colors border-b border-border/50 ${
                            !notification.read ? "bg-primary/5" : ""
                          }`}
                        >
                          <p className="text-sm text-foreground line-clamp-2">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </Link>
                    ))}
                  </ScrollArea>
                  <div className="p-2 border-t border-border">
                    <Button variant="ghost" size="sm" className="w-full text-xs">
                      View all notifications
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Admin Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-1 sm:p-1.5 rounded-xl hover:bg-accent transition-colors">
                    <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">AD</span>
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-foreground">Admin</p>
                      <p className="text-xs text-muted-foreground">Super Admin</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings">Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="text-destructive">
                    <Link to="/">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-8 max-w-full overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
