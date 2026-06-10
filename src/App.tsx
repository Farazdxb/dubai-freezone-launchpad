import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SearchActivity from "./pages/SearchActivity";
import Dashboard from "./pages/Dashboard";
import MyApplications from "./pages/MyApplications";
import MyDocuments from "./pages/MyDocuments";
import TicketView from "./pages/TicketView";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Terms from "./pages/Terms";
import Campaign from "./pages/Campaign";
import CampaignBusinessLicenseVisa from "./pages/CampaignBusinessLicenseVisa";
import CampaignOffshore from "./pages/CampaignOffshore";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminTicketView from "./pages/admin/AdminTicketView";
import AdminLicenses from "./pages/admin/AdminLicenses";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminStaff from "./pages/admin/AdminStaff";
import AdminSettings from "./pages/admin/AdminSettings";

// Staff Pages
import StaffLogin from "./pages/staff/StaffLogin";
import StaffDashboard from "./pages/staff/StaffDashboard";
import StaffTickets from "./pages/staff/StaffTickets";
import StaffTicketView from "./pages/staff/StaffTicketView";
import StaffLicenses from "./pages/staff/StaffLicenses";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search-activity" element={<SearchActivity />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/applications" element={<MyApplications />} />
          <Route path="/dashboard/applications/:id" element={<TicketView />} />
          <Route path="/dashboard/documents" element={<MyDocuments />} />
          <Route path="/dashboard/licenses" element={<MyDocuments />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/business-license-visa" element={<CampaignBusinessLicenseVisa />} />
          <Route path="/offshore-company-setup" element={<CampaignOffshore />} />
          
          {/* Service Pages */}
          <Route path="/dubai/:slug" element={<ServicePage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/applications/:id" element={<AdminTicketView />} />
          <Route path="/admin/licenses" element={<AdminLicenses />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/staff" element={<AdminStaff />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Staff Routes */}
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/staff/tickets" element={<StaffTickets />} />
          <Route path="/staff/tickets/:id" element={<StaffTicketView />} />
          <Route path="/staff/licenses" element={<StaffLicenses />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
