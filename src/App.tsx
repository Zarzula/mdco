import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Encyclopedia from "./pages/Encyclopedia";
import Capsulas from "./pages/Capsulas";
import Niveles from "./pages/Niveles";
import NotFound from "./pages/NotFound";
import Manifiesto from "./pages/Manifiesto";
import TratoJusto from "./pages/TratoJusto";
import Blog from "./pages/Blog";
import PlacerDetail from "./pages/PlacerDetail";
import EnciclopediaDetalle from "./pages/EnciclopediaDetalle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enciclopedia" element={<Encyclopedia />} />
          <Route path="/capsulas" element={<Capsulas />} />
          <Route path="/niveles" element={<Niveles />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/trato-justo" element={<TratoJusto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/placer/:slug" element={<PlacerDetail />} />
          <Route path="/enciclopedia/:slug" element={<EnciclopediaDetalle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
