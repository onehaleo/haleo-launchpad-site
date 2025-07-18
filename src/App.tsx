import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import WhyHaleo from "./pages/WhyHaleo";
import About from "./pages/About";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import { useNavigationLoading } from "./hooks/useNavigation";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading } = useNavigationLoading();
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-haleo" element={<WhyHaleo />} />
        <Route path="/about" element={<About />} />
        <Route path="/templates" element={<Templates />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
