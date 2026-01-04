import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Lightbulb, MessageSquare, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Enciclopedia",
    description: "Conocimiento organizado por categorías científicas y humanísticas. Desde astronomía hasta filosofía.",
    link: "/enciclopedia",
  },
  {
    icon: Users,
    title: "Placeres del Conocimiento",
    description: "Comunidades especializadas para apasionados: vino, café, campanas, astronomía y más.",
    scrollTo: "placeres",
  },
  {
    icon: Lightbulb,
    title: "Cápsulas Diarias",
    description: "Datos curiosos breves cada día. Aprende algo nuevo en solo minutos de forma entretenida.",
    scrollTo: null,
  },
  {
    icon: MessageSquare,
    title: "Debates",
    description: "Participa en discusiones tipo VS, opinión o ranking con otros apasionados de tu tema.",
    scrollTo: null,
  },
  {
    icon: Trophy,
    title: "Sistema de Niveles",
    description: "Gana puntos, sube de nivel y obtén insignias mientras aprendes. De Novato a Maestro.",
    scrollTo: null,
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handleClick = (feature: typeof features[0]) => {
    if (feature.link) {
      navigate(feature.link);
    } else if (feature.scrollTo) {
      document.getElementById(feature.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para{" "}
            <span className="text-gradient-warm">aprender cada día</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            5 componentes diseñados para mentes curiosas que quieren crecer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              onClick={() => handleClick(feature)}
              className={`group p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                feature.link || feature.scrollTo ? 'cursor-pointer' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
