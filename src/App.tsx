import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SafetyObservation from "./pages/SafetyObservation";
import Training from "./pages/Training";
import NearMiss from "./pages/NearMiss";
import FirstAid from "./pages/FirstAid";
import StopWork from "./pages/StopWork";
import SICMeeting from "./pages/SICMeeting";
import SafetyAdvisory from "./pages/SafetyAdvisory";
import DangerousOccurrence from "./pages/DangerousOccurrence";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/safety-observation" element={<SafetyObservation />} />
          <Route path="/training" element={<Training />} />
          <Route path="/near-miss" element={<NearMiss />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/stop-work" element={<StopWork />} />
          <Route path="/sic-meeting" element={<SICMeeting />} />
          <Route path="/safety-advisory" element={<SafetyAdvisory />} />
          <Route path="/dangerous-occurrence" element={<DangerousOccurrence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
