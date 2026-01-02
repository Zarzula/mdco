import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-warm rounded-3xl p-12 md:p-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Disponible en iOS y Android
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Empieza a aprender hoy
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Únete a miles de curiosos que ya están descubriendo algo nuevo cada día. 
              Tu próximo tema favorito te está esperando.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 shadow-elevated"
              >
                Descargar Gratis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60 mt-6">
              Sin compromisos. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
