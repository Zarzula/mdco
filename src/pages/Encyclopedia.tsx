import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categorias = [
  {
    title: "Ciencias Naturales",
    description: "Astronomía, Física, Química, Biología, Geología y Fenómenos Naturales.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
    temas: 156,
  },
  {
    title: "Ciencias Formales",
    description: "Matemáticas, Lógica, Computación y Metodología de Investigación.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    temas: 89,
  },
  {
    title: "Ciencias Aplicadas",
    description: "Ingenierías, Ciencias de la Salud, Tecnología y Comunicación.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    temas: 124,
  },
  {
    title: "Ciencias Sociales",
    description: "Antropología, Economía, Derecho, Política, Sociología y Geopolítica.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    temas: 178,
  },
  {
    title: "Humanidades",
    description: "Arte, Filosofía, Religión, Literatura, Música e Historia.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=600&q=80",
    temas: 203,
  },
  {
    title: "Gran Historia (Big History)",
    description: "Del Big Bang a las civilizaciones. El relato completo del cosmos y la humanidad.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    temas: 45,
  },
  {
    title: "Mente y Aprendizaje",
    description: "Neurociencia, metacognición, tipos de inteligencia y técnicas de estudio.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
    temas: 67,
  },
  {
    title: "Pensamiento Crítico",
    description: "Pseudociencias, conspiraciones, sesgos cognitivos y falacias lógicas.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
    temas: 52,
  },
];

const Encyclopedia = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Enciclopedia del{" "}
              <span className="text-gradient-warm">Conocimiento</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Conocimiento organizado por categorías científicas y humanísticas. 
              Explora desde el origen del universo hasta las complejidades de la mente humana.
            </p>
          </div>

          {/* Grid con imágenes como Placeres */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((categoria) => (
              <div
                key={categoria.title}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={categoria.image} 
                    alt={categoria.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {categoria.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                    {categoria.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {categoria.temas} temas
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="mt-16 p-8 bg-muted/30 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-display text-4xl font-bold text-foreground">914</p>
                <p className="text-muted-foreground">Temas totales</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground">8</p>
                <p className="text-muted-foreground">Categorías</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground">50+</p>
                <p className="text-muted-foreground">Subcategorías</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground">∞</p>
                <p className="text-muted-foreground">Por aprender</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Encyclopedia;
