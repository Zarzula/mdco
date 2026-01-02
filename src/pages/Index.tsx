import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Topics from "@/components/Topics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <Features />
      <Topics />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
