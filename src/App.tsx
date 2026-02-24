import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocumentTitle } from "@/components/DocumentTitle";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Platform = lazy(() => import("./pages/Platform"));
const MarketingAgent = lazy(() => import("./pages/solutions/MarketingAgent"));
const LexflowAI = lazy(() => import("./pages/solutions/LexflowAI"));
const EcommerceIntelligence = lazy(() => import("./pages/solutions/EcommerceIntelligence"));
const HRBot = lazy(() => import("./pages/solutions/HRBot"));
const CustomerEmailAI = lazy(() => import("./pages/solutions/CustomerEmailAI"));
const ForecastingEngine = lazy(() => import("./pages/solutions/ForecastingEngine"));
const InsuranceFNOL = lazy(() => import("./pages/solutions/InsuranceFNOL"));
const PredictiveMaintenance = lazy(() => import("./pages/solutions/PredictiveMaintenance"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Industries = lazy(() => import("./pages/Industries"));
const Lending = lazy(() => import("./pages/industries/Lending"));
const Agriculture = lazy(() => import("./pages/industries/Agriculture"));
const SupplyChain = lazy(() => import("./pages/industries/SupplyChain"));
const Manufacturing = lazy(() => import("./pages/industries/Manufacturing"));
const Insurance = lazy(() => import("./pages/industries/Insurance"));
const Media = lazy(() => import("./pages/industries/Media"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Retail = lazy(() => import("./pages/industries/Retail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function AppRoutes() {
  return (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <BrowserRouter>
          <DocumentTitle />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
