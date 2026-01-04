import { Check, X, Sparkles, BookOpen } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    period: "",
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
    buttonText: "Descargar Gratis",
    popular: false,
  },
  {
    name: "Premium",
    price: "$5",
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
    buttonText: "Comenzar Premium",
    popular: true,
  },
];

const Pricing = () => {
  const handleBuyBook = () => {
    window.open('https://pay.hotmart.com/Y103666198P', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elige tu{" "}
            <span className="text-gradient-warm">plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comienza gratis y mejora cuando estés listo para más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plans */}
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary via-primary to-blue-700 text-primary-foreground shadow-elevated scale-105"
                  : "bg-card shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-background text-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-medium mb-2 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-green-300" : "text-primary"}`} />
                    ) : (
                      <X className="w-5 h-5 flex-shrink-0 text-muted-foreground/50" />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? (plan.popular ? "text-primary-foreground" : "text-foreground")
                        : "text-muted-foreground/50"
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}

          {/* Libro de Manifestación */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white shadow-elevated">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                🔥 80% OFF
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <p className="text-sm font-medium text-white/80">
                  Recurso Digital
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Cuaderno de Manifestación
              </h3>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-yellow-300">
                  $4.50
                </span>
                <span className="text-lg text-white/50 line-through">
                  $22
                </span>
                <span className="text-white/70 text-sm">
                  pago único
                </span>
              </div>
              <p className="mt-2 text-sm text-white/80">
                Transforma tus pensamientos en realidad
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">30 ejercicios de manifestación</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">Plantillas de visualización</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">Diario de gratitud</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">Ejercicios de metas SMART</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">Afirmaciones personalizables</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-yellow-300" />
                <span className="text-sm text-white">Formato PDF interactivo</span>
              </li>
            </ul>

            <button 
              onClick={handleBuyBook}
              className="w-full py-3 rounded-full font-medium bg-yellow-400 text-yellow-900 hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Obtener Cuaderno
            </button>

            <p className="text-center text-xs text-white/60 mt-3">
              Descarga inmediata • Acceso de por vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
