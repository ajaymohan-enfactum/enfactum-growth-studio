import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import CapabilityDetail from "./pages/CapabilityDetail";
import Work from "./pages/Work";
import Brands from "./pages/Brands";
import Thinking from "./pages/Thinking";
import Company from "./pages/Company";
import Leadership from "./pages/Leadership";
import OperatingModel from "./pages/OperatingModel";
import RegionalNodes from "./pages/RegionalNodes";
import Careers from "./pages/Careers";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/operating-model" element={<OperatingModel />} />
          <Route path="/company/regional-nodes" element={<RegionalNodes />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
