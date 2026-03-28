import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Lightbulb, MessageSquare, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Enciclopedia",
    description: "Conocimiento organizado por categorías científicas y humanísticas.",
    link: "/enciclopedia",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Users,
    title: "Placeres",
    description: "Comunidades para apasionados: vino, café, astronomía y más.",
    scrollTo: "placeres",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Lightbulb,
    title: "Cápsulas",
    description: "Datos curiosos breves cada día. Aprende algo nuevo en minutos.",
    link: "/capsulas",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Debates",
    description: "Discusiones tipo VS, opinión o ranking con otros apasionados.",
    link: null,
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Trophy,
    title: "Niveles",
    description: "Gana puntos y sube de nivel mientras aprendes. De Novato a Maestro.",
    link: "/niveles",
    color: "from-yellow-400 to-amber-500",
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
    <section id="features" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(0,240,255,0.3) 0%, transparent 50%)"
      }} />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Todo lo que necesitas para </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              aprender cada día
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            5 componentes diseñados para mentes curiosas que quieren crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onClick={() => handleClick(feature)}
              className={`group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                feature.link || feature.scrollTo ? 'cursor-pointer' : ''
              } bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient glow */}
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              {/* Hover glow line at bottom */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
