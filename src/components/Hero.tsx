import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Microaprendizaje diario
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Aprende sobre lo que{" "}
              <span className="text-gradient-warm">te apasiona</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-body">
              Descubre conocimientos fascinantes cada día sobre tus temas favoritos. 
              Desde el arte del café hasta los secretos del vino, conecta con una 
              comunidad de apasionados como tú.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl">
                Descargar App
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explorar Temas
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Usuarios activos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Temas disponibles</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">App Store</p>
              </div>
            </div>
          </div>
          
          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-warm rounded-3xl blur-3xl opacity-20 scale-90" />
              <img 
                src={appMockup} 
                alt="Curiosa App Mockup" 
                className="relative w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
