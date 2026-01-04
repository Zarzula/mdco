import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Star, Award, Crown, Gem, Rocket, BookOpen, MessageSquare, ThumbsUp, Vote, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const niveles = [
  {
    nombre: "Novato",
    puntos: "0 - 100",
    icon: Star,
    color: "from-gray-400 to-gray-500",
    descripcion: "Estás comenzando tu viaje de aprendizaje.",
  },
  {
    nombre: "Aficionado",
    puntos: "101 - 500",
    icon: BookOpen,
    color: "from-green-400 to-green-600",
    descripcion: "Ya muestras interés constante en aprender.",
  },
  {
    nombre: "Intermedio",
    puntos: "501 - 1,500",
    icon: Award,
    color: "from-blue-400 to-blue-600",
    descripcion: "Tu conocimiento crece día a día.",
  },
  {
    nombre: "Avanzado",
    puntos: "1,501 - 5,000",
    icon: Rocket,
    color: "from-purple-400 to-purple-600",
    descripcion: "Eres un aprendiz dedicado y constante.",
  },
  {
    nombre: "Experto",
    puntos: "5,001 - 15,000",
    icon: Gem,
    color: "from-amber-400 to-amber-600",
    descripcion: "Dominas múltiples temas con profundidad.",
  },
  {
    nombre: "Maestro",
    puntos: "15,000+",
    icon: Crown,
    color: "from-yellow-400 to-yellow-600",
    descripcion: "Has alcanzado la cima del conocimiento.",
  },
];

const formasGanarPuntos = [
  {
    icon: BookOpen,
    accion: "Leer una cápsula",
    puntos: "+5",
    descripcion: "Cada cápsula diaria que leas suma puntos.",
  },
  {
    icon: GraduationCap,
    accion: "Completar tema de enciclopedia",
    puntos: "+10",
    descripcion: "Termina de leer un artículo completo.",
  },
  {
    icon: MessageSquare,
    accion: "Participar en debate",
    puntos: "+15",
    descripcion: "Comparte tu opinión en las discusiones.",
  },
  {
    icon: Vote,
    accion: "Votar en encuesta",
    puntos: "+5",
    descripcion: "Participa en las encuestas de la comunidad.",
  },
  {
    icon: ThumbsUp,
    accion: "Respuesta con 10+ likes",
    puntos: "+25",
    descripcion: "Cuando tu aporte es valorado por otros.",
  },
];

const insignias = [
  {
    nombre: "Lector Curioso",
    descripcion: "Leíste 10 cápsulas",
    imagen: "📚",
  },
  {
    nombre: "Debatidor",
    descripcion: "Participaste en 5 debates",
    imagen: "💬",
  },
  {
    nombre: "Explorador",
    descripcion: "Visitaste todos los Placeres",
    imagen: "🧭",
  },
  {
    nombre: "Madrugador",
    descripcion: "Leíste 7 cápsulas antes de las 8am",
    imagen: "🌅",
  },
  {
    nombre: "Influencer",
    descripcion: "Recibiste 50 likes en tus respuestas",
    imagen: "⭐",
  },
  {
    nombre: "Enciclopedista",
    descripcion: "Completaste 20 temas",
    imagen: "🎓",
  },
];

const Niveles = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sistema de{" "}
              <span className="text-gradient-warm">Niveles</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Gana puntos, sube de nivel y obtén insignias mientras aprendes. 
              Tu progreso refleja tu dedicación al conocimiento.
            </p>
          </div>

          {/* ¿Cómo funciona? */}
          <div className="mb-16 p-8 bg-muted/30 rounded-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Cada acción que realizas en la app te otorga puntos. Al acumular puntos, 
              subes de nivel automáticamente. Los niveles reflejan tu compromiso con el 
              aprendizaje y desbloquean insignias exclusivas.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                Funcionalidad Premium
              </span>
              <span className="text-muted-foreground">
                Sistema completo disponible con plan Premium
              </span>
            </div>
          </div>

          {/* Niveles */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Los 6 Niveles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {niveles.map((nivel, index) => (
                <div
                  key={nivel.nombre}
                  className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${nivel.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <nivel.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {nivel.nombre}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {nivel.puntos} pts
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {nivel.descripcion}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Nivel {index + 1} de 6
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cómo ganar puntos */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              ¿Cómo ganar puntos?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formasGanarPuntos.map((forma) => (
                <div
                  key={forma.accion}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <forma.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {forma.accion}
                      </h3>
                      <span className="text-lg font-bold text-primary">
                        {forma.puntos}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {forma.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insignias */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Insignias
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Además de los niveles, puedes desbloquear insignias especiales al completar 
              logros específicos. ¡Colecciónalas todas!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {insignias.map((insignia) => (
                <div
                  key={insignia.nombre}
                  className="p-4 bg-card rounded-2xl shadow-soft text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">
                    {insignia.imagen}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {insignia.nombre}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {insignia.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabla resumen */}
          <div className="p-8 bg-muted/30 rounded-3xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Resumen de Puntos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Acción</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Leer cápsula diaria</td>
                    <td className="py-3 px-4 text-right font-medium text-primary">+5</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Votar en encuesta</td>
                    <td className="py-3 px-4 text-right font-medium text-primary">+5</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Completar tema de enciclopedia</td>
                    <td className="py-3 px-4 text-right font-medium text-primary">+10</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Participar en debate</td>
                    <td className="py-3 px-4 text-right font-medium text-primary">+15</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Respuesta con 10+ likes</td>
                    <td className="py-3 px-4 text-right font-medium text-primary">+25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Niveles;
