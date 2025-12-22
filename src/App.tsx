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
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

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
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
