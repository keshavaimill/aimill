import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import MarketingAgent from "./pages/solutions/MarketingAgent";
import LexflowAI from "./pages/solutions/LexflowAI";
import EcommerceIntelligence from "./pages/solutions/EcommerceIntelligence";
import HRBot from "./pages/solutions/HRBot";
import CustomerEmailAI from "./pages/solutions/CustomerEmailAI";
import ForecastingEngine from "./pages/solutions/ForecastingEngine";
import InsuranceFNOL from "./pages/solutions/InsuranceFNOL";
import PredictiveMaintenance from "./pages/solutions/PredictiveMaintenance";
import Solutions from "./pages/Solutions";
import Consulting from "./pages/Consulting";
import Industries from "./pages/Industries";
import Lending from "./pages/industries/Lending";
import Agriculture from "./pages/industries/Agriculture";
import SupplyChain from "./pages/industries/SupplyChain";
import Manufacturing from "./pages/industries/Manufacturing";
import Insurance from "./pages/industries/Insurance";
import Media from "./pages/industries/Media";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import About from "./pages/About";
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
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/marketing-agent" element={<MarketingAgent />} />
          <Route path="/solutions/lexflow-ai" element={<LexflowAI />} />
          <Route path="/solutions/ecommerce-intelligence" element={<EcommerceIntelligence />} />
          <Route path="/solutions/hr-bot" element={<HRBot />} />
          <Route path="/solutions/customer-email-ai" element={<CustomerEmailAI />} />
          <Route path="/solutions/forecasting-engine" element={<ForecastingEngine />} />
          <Route path="/solutions/insurance-fnol" element={<InsuranceFNOL />} />
          <Route path="/solutions/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/lending" element={<Lending />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/supply-chain" element={<SupplyChain />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/media" element={<Media />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
