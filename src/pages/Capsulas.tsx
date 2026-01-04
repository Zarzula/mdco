import { Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Sparkles, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ejemplosCapsulas = [
  {
    titulo: "La campana que nunca sonó",
    contenido: "El Tsar Kolokol en Moscú pesa 200 toneladas y es la campana más grande del mundo. Irónicamente, nunca ha sonado: se agrietó durante un incendio en 1737 antes de ser instalada. Un fragmento que se desprendió pesa 11 toneladas.",
    imagen: "https://images.unsplash.com/photo-1548445929-4f60a497f851?w=600&q=80",
    categoria: "Campanas del Mundo",
    tiempo: "2 min",
  },
  {
    titulo: "El ajuste fino del universo",
    contenido: "Si la fuerza de gravedad variara en 1 parte en 10^60, no existiríamos. Las constantes físicas del universo están calibradas con una precisión tan extraordinaria que cualquier variación mínima haría imposible la vida.",
    imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
    categoria: "Astronomía",
    tiempo: "3 min",
  },
  {
    titulo: "El secreto del color del vino",
    contenido: "El color del vino tinto no viene de la pulpa de la uva, sino de la piel. La pulpa de casi todas las uvas es transparente. El tiempo de contacto con la piel durante la fermentación determina la intensidad del color.",
    imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    categoria: "El Mundo del Vino",
    tiempo: "2 min",
  },
  {
    titulo: "108 campanadas en Japón",
    contenido: "En Japón, los templos budistas tocan 108 campanadas en Año Nuevo. Cada campanada representa uno de los 108 deseos mundanos (bonnō) que, según el budismo, causan sufrimiento humano.",
    imagen: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80",
    categoria: "Cultura y Tradiciones",
    tiempo: "2 min",
  },
  {
    titulo: "La Gran Muralla no es continua",
    contenido: "Contrario a la creencia popular, la Gran Muralla China no es una estructura continua. Son múltiples muros construidos por diferentes dinastías que, sumados, alcanzan más de 21,000 km. Muchas secciones están separadas por montañas y ríos.",
    imagen: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    categoria: "Historia",
    tiempo: "3 min",
  },
];

const componentes = [
  {
    icon: Sparkles,
    titulo: "Título llamativo",
    descripcion: "Un gancho que despierta curiosidad en máximo 60 caracteres.",
  },
  {
    icon: BookOpen,
    titulo: "Contenido breve",
    descripcion: "2-3 párrafos con el dato principal, fácil de leer y recordar.",
  },
  {
    icon: Clock,
    titulo: "Lectura rápida",
    descripcion: "Diseñadas para aprender en 2-3 minutos de forma entretenida.",
  },
  {
    icon: Share2,
    titulo: "Para compartir",
    descripcion: "Datos perfectos para sorprender en una conversación.",
  },
];

const Capsulas = () => {
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
              Cápsulas{" "}
              <span className="text-gradient-warm">Diarias</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Datos curiosos breves cada día. Aprende algo nuevo en solo minutos 
              de forma entretenida y sorprende en tu próxima conversación.
            </p>
          </div>

          {/* ¿Qué son las cápsulas? */}
          <div className="mb-16 p-8 bg-muted/30 rounded-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué son las Cápsulas?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Las cápsulas son píldoras de conocimiento diseñadas para el aprendizaje rápido. 
              Cada día recibes un dato curioso, fascinante y verificado sobre temas diversos: 
              desde astronomía hasta gastronomía, pasando por historia y ciencia.
            </p>
            
            {/* Componentes de una cápsula */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {componentes.map((comp) => (
                <div key={comp.titulo} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <comp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{comp.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{comp.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ejemplos de cápsulas */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Ejemplos de Cápsulas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ejemplosCapsulas.map((capsula) => (
                <div
                  key={capsula.titulo}
                  className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={capsula.imagen} 
                      alt={capsula.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {capsula.categoria}
                      </span>
                      <span className="text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {capsula.tiempo}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      {capsula.titulo}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm line-clamp-3">
                      {capsula.contenido}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              ¿Listo para aprender algo nuevo cada día?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Descarga la app y recibe una cápsula de conocimiento diaria. 
              Con el plan Premium, accede al archivo completo de cápsulas.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Descargar App
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Capsulas;
