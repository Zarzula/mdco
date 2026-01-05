import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Sparkles, Coffee, Wine, Star, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articulos = [
  {
    id: 1,
    titulo: "¿Por qué el café de la mañana sabe mejor?",
    extracto: "No es solo el sueño. Tu cerebro tiene receptores de adenosina que se 'resetean' durante la noche, haciendo que la cafeína sea más efectiva al despertar.",
    categoria: "Café",
    icono: Coffee,
    color: "from-amber-500 to-orange-500",
    minutos: 3,
    fecha: "15 Ene 2025",
  },
  {
    id: 2,
    titulo: "El vino tinto no es rojo por la uva",
    extracto: "La pulpa de casi todas las uvas es transparente. El color viene de la piel, que libera sus pigmentos durante la fermentación. Por eso existe el champagne de uvas tintas.",
    categoria: "Vino",
    icono: Wine,
    color: "from-red-500 to-purple-500",
    minutos: 2,
    fecha: "12 Ene 2025",
  },
  {
    id: 3,
    titulo: "La campana que nunca sonó",
    extracto: "El Tsar Kolokol en Moscú pesa 200 toneladas y nunca ha sido tocada. Se agrietó durante un incendio antes de ser colgada. Un fragmento que se desprendió pesa 11 toneladas.",
    categoria: "Campanas",
    icono: Bell,
    color: "from-yellow-500 to-amber-500",
    minutos: 2,
    fecha: "10 Ene 2025",
  },
  {
    id: 4,
    titulo: "Estás hecho de estrellas (literalmente)",
    extracto: "El hierro en tu sangre, el calcio en tus huesos y el oxígeno que respiras fueron forjados en el núcleo de estrellas que explotaron hace miles de millones de años.",
    categoria: "Astronomía",
    icono: Star,
    color: "from-blue-500 to-indigo-500",
    minutos: 3,
    fecha: "8 Ene 2025",
  },
  {
    id: 5,
    titulo: "Por qué 108 campanadas en Año Nuevo japonés",
    extracto: "En Japón, los templos budistas tocan 108 campanadas para purificar los 108 deseos mundanos (bonnō) que causan sufrimiento humano según la tradición.",
    categoria: "Campanas",
    icono: Bell,
    color: "from-yellow-500 to-amber-500",
    minutos: 2,
    fecha: "5 Ene 2025",
  },
  {
    id: 6,
    titulo: "El universo tiene un 'ajuste fino' inexplicable",
    extracto: "Si la fuerza de gravedad variara en 1 parte en 10^60, no existirían estrellas, planetas ni vida. Nadie sabe por qué las constantes del universo son tan precisas.",
    categoria: "Astronomía",
    icono: Star,
    color: "from-blue-500 to-indigo-500",
    minutos: 4,
    fecha: "3 Ene 2025",
  },
];

const Blog = () => {
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

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Chispas de{" "}
                <span className="text-gradient-warm">Sabiduría</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Pequeñas dosis de conocimiento que encienden grandes ideas. 
              Datos curiosos, conexiones inesperadas y esos "¡wow!" que dan ganas de contarle a alguien.
            </p>
          </div>

          {/* Grid de artículos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {articulos.map((articulo) => (
              <article
                key={articulo.id}
                className="group bg-card rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
              >
                {/* Header del artículo */}
                <div className={`p-6 bg-gradient-to-r ${articulo.color}`}>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {articulo.categoria}
                    </span>
                    <articulo.icono className="w-6 h-6 opacity-80" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {articulo.titulo}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {articulo.extracto}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{articulo.minutos} min</span>
                    </div>
                    <span>{articulo.fecha}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA - Más chispas pronto */}
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-3xl">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Más chispas cada semana
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estamos preparando más datos curiosos y conexiones fascinantes. 
              Descarga la app para recibir una cápsula diaria de conocimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#precios"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Descargar App
              </Link>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScIY7PdmDJSxRs15FTWuLxNbyD_u2ybiuwQr55O_4dpGueqxg/viewform', '_blank')}
                className="inline-flex items-center justify-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-full font-medium hover:bg-foreground/20 transition-colors"
              >
                Sugerir un tema
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
