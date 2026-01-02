import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    description: "Perfecto para empezar a explorar",
    features: [
      { text: "Enciclopedia básica", included: true },
      { text: "1 cápsula del día", included: true },
      { text: "Leer y participar en debates", included: true },
      { text: "Votar en encuestas", included: true },
      { text: "Ver galería", included: true },
      { text: "Perfil básico", included: true },
      { text: "Enciclopedia completa", included: false },
      { text: "Archivo de cápsulas", included: false },
      { text: "Crear debates y encuestas", included: false },
      { text: "Subir a galería", included: false },
      { text: "Niveles e insignias", included: false },
      { text: "Sin anuncios", included: false },
    ],
    cta: "Descargar Gratis",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/mes",
    description: "Acceso completo sin límites",
    features: [
      { text: "Enciclopedia completa", included: true },
      { text: "Archivo de cápsulas ilimitado", included: true },
      { text: "Crear debates y encuestas", included: true },
      { text: "Subir fotos a galería", included: true },
      { text: "Sistema de niveles e insignias", included: true },
      { text: "Contenido offline", included: true },
      { text: "Sin anuncios", included: true },
      { text: "Destacar respuestas", included: true },
      { text: "Guardar favoritos ilimitados", included: true },
      { text: "Acceso prioritario a nuevos Placeres", included: true },
    ],
    cta: "Comenzar Premium",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elige tu{" "}
            <span className="text-gradient-warm">plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empieza gratis y mejora cuando quieras. Sin compromisos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-warm shadow-elevated scale-105' 
                  : 'bg-card shadow-soft hover:shadow-elevated'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background rounded-full text-sm font-medium text-foreground shadow-soft">
                  Más popular
                </div>
              )}
              
              <div className={plan.popular ? 'text-primary-foreground' : ''}>
                <h3 className={`font-display text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`font-display text-4xl font-bold ${
                    plan.popular ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                      {plan.period}
                    </span>
                  )}
                </div>
                
                <p className={`mb-6 ${
                  plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 ${
                          plan.popular ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                      ) : (
                        <X className="w-5 h-5 flex-shrink-0 text-muted-foreground/50" />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? (plan.popular ? 'text-primary-foreground' : 'text-foreground')
                          : 'text-muted-foreground/50'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-background text-foreground hover:bg-background/90' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'hero'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;