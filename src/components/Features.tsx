import { BookOpen, Users, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Microaprendizaje Diario",
    description: "Recibe contenido breve y valioso cada día. Aprende en solo 5 minutos sobre lo que más te interesa.",
  },
  {
    icon: Users,
    title: "Comunidad de Apasionados",
    description: "Conecta con personas que comparten tus mismos intereses. Comparte, debate y aprende juntos.",
  },
  {
    icon: Zap,
    title: "Contenido Personalizado",
    description: "Nuestro algoritmo aprende de ti. Cuanto más usas la app, más relevante es tu experiencia.",
  },
  {
    icon: Heart,
    title: "Guarda tus Favoritos",
    description: "Crea tu biblioteca personal de conocimientos. Revisa y comparte tus aprendizajes favoritos.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para{" "}
            <span className="text-gradient-warm">aprender cada día</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñado para mentes curiosas que quieren crecer sin sacrificar su tiempo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
