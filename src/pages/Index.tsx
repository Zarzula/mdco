import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Manifestation from "@/components/Manifestation";
import Topics from "@/components/Topics";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <Features />
      <Manifestation />
      <Topics />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
