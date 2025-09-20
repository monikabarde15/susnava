import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import PowerSystemStudies from "./pages/services/PowerSystemStudies";
import PowerEngineering from "./pages/services/PowerEngineering";
import Electrifications from "./pages/services/Electrifications";
import IndustrialPlantDesign from "./pages/services/IndustrialPlantDesign";
import SustainabilitySolutions from "./pages/services/SustainabilitySolutions";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import SubServoces from "./pages/services/Electrifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services/power-system-studies" element={<PowerSystemStudies />} />
          <Route path="/services/power-engineering" element={<PowerEngineering />} />
          <Route path="/services/electrifications" element={<Electrifications />} />
          <Route path="/services/industrial-plant-design" element={<IndustrialPlantDesign />} />
          <Route path="/services/sustainability-solutions" element={<SustainabilitySolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
