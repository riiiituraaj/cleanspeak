import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";
import LawsPage from "./pages/LawsPage";
import ForumPage from "./pages/ForumPage";
import ContactsPage from "./pages/ContactsPage";
import WaterQualityPage from "./pages/WaterQualityPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import HelpPage from "./pages/HelpPage";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/laws" element={<LawsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/water-quality" element={<WaterQualityPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
