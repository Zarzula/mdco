import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Manifestation from "@/components/Manifestation";
import Topics from "@/components/Topics";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import DailyWords from "@/components/DailyWords";
import DailyCapsule from "@/components/DailyCapsule";
import FestiveBanner from "@/components/FestiveBanner";
import RadialMenu from "@/components/RadialMenu";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash]);

  return (
    <div className="min-h-screen font-body">
      <FestiveBanner />
      <Navbar />
      <Hero />
      <DailyCapsule />
      <Features />
      <Manifestation />
      <Topics />
      <Pricing />
      <Footer />
      <DailyWords />
      <RadialMenu />
    </div>
  );
};

export default Index;
