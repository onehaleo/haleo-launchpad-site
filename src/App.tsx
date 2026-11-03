import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollRestoration from "./components/ScrollRestoration";
import { trackSpaPageView } from "./lib/gtag";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import SafetyCheck from "./pages/SafetyCheck";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Internal from "./pages/Internal";

const queryClient = new QueryClient();

/** Sends GA4 page_view on in-app route changes (first load is covered by gtag config in index.html). */
function GtagSpaPageViews() {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackSpaPageView(path);
  }, [location.pathname, location.search, location.hash]);

  return null;
}

const AppContent = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/safety-check" element={<SafetyCheck />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/internal" element={<Internal />} />
    {/* Old Haleo 1.0 addresses send visitors somewhere useful instead of a dead end */}
    <Route path="/workflow-review" element={<Navigate to="/safety-check" replace />} />
    <Route path="/why-haleo" element={<Navigate to="/about" replace />} />
    <Route path="/templates" element={<Navigate to="/services" replace />} />
    <Route path="/license" element={<Navigate to="/terms" replace />} />
    <Route path="/demos/*" element={<Navigate to="/" replace />} />
    <Route path="/demo/*" element={<Navigate to="/" replace />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollRestoration />
        <GtagSpaPageViews />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
