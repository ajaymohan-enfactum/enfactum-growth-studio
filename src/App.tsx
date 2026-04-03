import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { posthog } from "./lib/analytics";
import ConsentBanner from "./components/ConsentBanner";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import CapabilityDetail from "./pages/CapabilityDetail";
import Work from "./pages/Work";
import Brands from "./pages/Brands";
import Thinking from "./pages/Thinking";
import ThinkingArticle from "./pages/ThinkingArticle";
import Company from "./pages/Company";
import Leadership from "./pages/Leadership";
import OperatingModel from "./pages/OperatingModel";
import RegionalNodes from "./pages/RegionalNodes";
import Careers from "./pages/Careers";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageViewTracker = () => {
  const location = useLocation();
  useEffect(() => {
    posthog.capture('$pageview');
  }, [location]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Legacy URL redirects */}
          <Route path="/landing_pages.html" element={<Navigate to="/capabilities" replace />} />
          <Route path="/ecommerce_solutions.html" element={<Navigate to="/capabilities" replace />} />
          <Route path="/lead_nurturing.html" element={<Navigate to="/capabilities" replace />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/thinking/:slug" element={<ThinkingArticle />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/operating-model" element={<OperatingModel />} />
          <Route path="/company/regional-nodes" element={<RegionalNodes />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ConsentBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
