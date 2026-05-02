import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import WhyHaleo from "./pages/WhyHaleo";
import About from "./pages/About";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import DemoDetail from "./pages/DemoDetail";
import WorkflowReview from "./pages/WorkflowReview";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import License from "./pages/License";
import { DemoShell } from "./components/demo/DemoShell";
import DemoDashboardPage from "./pages/demo/DemoDashboardPage";
import DemoClientsPage from "./pages/demo/DemoClientsPage";
import DemoClientDetailPage from "./pages/demo/DemoClientDetailPage";
import DemoProjectsPage from "./pages/demo/DemoProjectsPage";
import DemoDeliverablesPage from "./pages/demo/DemoDeliverablesPage";
import DemoApprovalsPage from "./pages/demo/DemoApprovalsPage";

const queryClient = new QueryClient();

const AppContent = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<Services />} />
    <Route path="/why-haleo" element={<WhyHaleo />} />
    <Route path="/about" element={<About />} />
    <Route path="/templates" element={<Templates />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/license" element={<License />} />
    <Route path="/demos/marketing-agency" element={<DemoDetail slug="marketing-agency" />} />
    <Route path="/demos/construction-office" element={<DemoDetail slug="construction-office" />} />
    <Route path="/demos/pr-studio" element={<DemoShell />}>
      <Route index element={<Navigate to="/demos/pr-studio/dashboard" replace />} />
      <Route path="dashboard" element={<DemoDashboardPage />} />
      <Route path="clients" element={<DemoClientsPage />} />
      <Route path="clients/:id" element={<DemoClientDetailPage />} />
      <Route path="projects" element={<DemoProjectsPage />} />
      <Route path="deliverables" element={<DemoDeliverablesPage />} />
      <Route path="approvals" element={<DemoApprovalsPage />} />
    </Route>
    <Route path="/workflow-review" element={<WorkflowReview />} />
    <Route path="/demo/*" element={<Navigate to="/demos/pr-studio" replace />} />
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
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
