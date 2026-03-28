import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, BookOpen, MessageSquarePlus, Send, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { enciclopediaContent } from "@/data/enciclopedia-content";

function toSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface Subtema {
  titulo: string;
  descripcion: string;
  temas: number;
}

interface Categoria {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  subtemas: Subtema[];
}

const categorias: Categoria[] = [
  {
    id: "ciencias-naturales",
    title: "Ciencias Naturales",
    description: "Astronomía, Física, Química, Biología, Geología y Fenómenos Naturales.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
    color: "from-blue-500 to-cyan-500",
    subtemas: [
      { titulo: "Astronomía y Cosmología", descripcion: "Big Bang, galaxias, agujeros negros, sistema solar", temas: 28 },
      { titulo: "Física", descripcion: "Mecánica, termodinámica, cuántica, relatividad", temas: 34 },
      { titulo: "Química", descripcion: "Elementos, reacciones, química orgánica, bioquímica", temas: 26 },
      { titulo: "Biología", descripcion: "Evolución, genética, ecología, anatomía", temas: 38 },
      { titulo: "Geología", descripcion: "Tectónica, minerales, eras geológicas, vulcanismo", temas: 18 },
      { titulo: "Fenómenos Naturales", descripcion: "Clima, desastres, ciclos naturales", temas: 12 },
    ],
  },
  {
    id: "ciencias-formales",
    title: "Ciencias Formales",
    description: "Matemáticas, Lógica, Computación y Metodología de Investigación.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    color: "from-purple-500 to-pink-500",
    subtemas: [
      { titulo: "Matemáticas", descripcion: "Álgebra, geometría, cálculo, estadística", temas: 42 },
      { titulo: "Lógica", descripcion: "Lógica formal, falacias, argumentación", temas: 18 },
      { titulo: "Ciencias de la Computación", descripcion: "Algoritmos, programación, IA, redes", temas: 35 },
      { titulo: "Metodología e Investigación", descripcion: "Método científico, epistemología", temas: 14 },
    ],
  },
  {
    id: "ciencias-aplicadas",
    title: "Ciencias Aplicadas",
    description: "Ingenierías, Ciencias de la Salud, Tecnología y Comunicación.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    color: "from-orange-500 to-red-500",
    subtemas: [
      { titulo: "Ingenierías", descripcion: "Civil, mecánica, eléctrica, sistemas", temas: 38 },
      { titulo: "Ciencias de la Salud", descripcion: "Medicina, nutrición, farmacología", temas: 45 },
      { titulo: "Información y Comunicación", descripcion: "Periodismo, medios, telecomunicaciones", temas: 22 },
      { titulo: "Tecnología", descripcion: "Inventos, innovación, historia tecnológica", temas: 28 },
    ],
  },
  {
    id: "ciencias-sociales",
    title: "Ciencias Sociales",
    description: "Antropología, Economía, Derecho, Política, Sociología y Geopolítica.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80",
    color: "from-green-500 to-teal-500",
    subtemas: [
      { titulo: "Antropología", descripcion: "Culturas, etnografía, evolución humana", temas: 24 },
      { titulo: "Economía", descripcion: "Micro, macro, finanzas, comercio", temas: 32 },
      { titulo: "Derecho", descripcion: "Sistemas legales, derechos humanos", temas: 28 },
      { titulo: "Política y Sociología", descripcion: "Sistemas políticos, movimientos sociales", temas: 35 },
      { titulo: "Geopolítica", descripcion: "Relaciones internacionales, conflictos", temas: 22 },
      { titulo: "Ecología Social", descripcion: "Medio ambiente, sostenibilidad", temas: 18 },
    ],
  },
  {
    id: "humanidades",
    title: "Humanidades",
    description: "Arte, Filosofía, Religión, Literatura, Música e Historia.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    color: "from-amber-500 to-yellow-500",
    subtemas: [
      { titulo: "Arte y Cultura", descripcion: "Movimientos artísticos, técnicas, museos", temas: 38 },
      { titulo: "Filosofía", descripcion: "Escuelas filosóficas, ética, metafísica", temas: 32 },
      { titulo: "Religión y Mitología", descripcion: "Religiones comparadas, mitos, rituales", temas: 28 },
      { titulo: "Filología y Letras", descripcion: "Literatura, lingüística, etimología", temas: 24 },
      { titulo: "Música", descripcion: "Historia, teoría, géneros, instrumentos", temas: 22 },
      { titulo: "Historia", descripcion: "Civilizaciones, eventos, personajes", temas: 45 },
    ],
  },
  {
    id: "gran-historia",
    title: "Gran Historia (Big History)",
    description: "Del Big Bang a las civilizaciones. El relato completo del cosmos y la humanidad.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    color: "from-indigo-500 to-violet-500",
    subtemas: [
      { titulo: "Origen del Cosmos", descripcion: "Big Bang, formación del universo", temas: 12 },
      { titulo: "Formación Estelar", descripcion: "Nacimiento de estrellas, supernovas", temas: 10 },
      { titulo: "La Tierra", descripcion: "Formación planetaria, atmósfera, océanos", temas: 14 },
      { titulo: "Origen de la Vida", descripcion: "Primeras células, evolución", temas: 16 },
      { titulo: "Humanidad", descripcion: "Evolución humana, migraciones", temas: 18 },
      { titulo: "Civilizaciones", descripcion: "Agricultura, ciudades, imperios", temas: 22 },
    ],
  },
  {
    id: "mente-aprendizaje",
    title: "Mente y Aprendizaje",
    description: "Neurociencia, metacognición, tipos de inteligencia y técnicas de estudio.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    color: "from-rose-500 to-pink-500",
    subtemas: [
      { titulo: "Neurociencia", descripcion: "Cerebro, neuronas, plasticidad, memoria", temas: 24 },
      { titulo: "Metacognición", descripcion: "Aprender a aprender, autoconocimiento", temas: 12 },
      { titulo: "Tipos de Inteligencia", descripcion: "Múltiples inteligencias, emocional", temas: 16 },
      { titulo: "Técnicas de Estudio", descripcion: "Métodos efectivos, concentración", temas: 14 },
    ],
  },
  {
    id: "pensamiento-critico",
    title: "Pensamiento Crítico",
    description: "Pseudociencias, conspiraciones, sesgos cognitivos y falacias lógicas.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
    color: "from-slate-500 to-gray-600",
    subtemas: [
      { titulo: "Pseudociencias", descripcion: "Astrología, teorías sin evidencia", temas: 18 },
      { titulo: "Conspiraciones", descripcion: "Análisis crítico de teorías", temas: 14 },
      { titulo: "Sesgos Cognitivos", descripcion: "Errores de pensamiento, prejuicios", temas: 22 },
      { titulo: "Falacias Lógicas", descripcion: "Errores argumentativos, retórica", temas: 16 },
    ],
  },
];

const Encyclopedia = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSuggestTopic = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScIY7PdmDJSxRs15FTWuLxNbyD_u2ybiuwQr55O_4dpGueqxg/viewform', '_blank');
  };

  const totalTemas = categorias.reduce(
    (acc, cat) => acc + cat.subtemas.reduce((a, s) => a + s.temas, 0),
    0
  );

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
              Árbol del{" "}
              <span className="text-gradient-warm">Conocimiento</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Haz clic en cualquier categoría para explorar sus temas. 
              El conocimiento está organizado como un árbol que puedes expandir.
            </p>
          </div>

          {/* Grid de categorías expandibles */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="rounded-3xl overflow-hidden bg-card shadow-soft transition-all duration-500"
              >
                {/* Card principal (clickeable) */}
                <div
                  onClick={() => toggleCategory(categoria.id)}
                  className="relative cursor-pointer group"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={categoria.image} 
                      alt={categoria.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                          {categoria.title}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm mb-3 line-clamp-2">
                          {categoria.description}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          <span>{categoria.subtemas.length} subcategorías</span>
                          <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                          <span>{categoria.subtemas.reduce((a, s) => a + s.temas, 0)} temas</span>
                        </div>
                      </div>
                      
                      {/* Botón expandir */}
                      <div
                        className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ${
                          expandedId === categoria.id ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtemas expandibles */}
                {expandedId === categoria.id && (
                  <div className="p-6 bg-muted/30 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Explora los temas:
                    </h4>
                    <div className="grid gap-3">
                      {categoria.subtemas.map((subtema) => {
                        const subtemaSlug = toSlug(subtema.titulo);
                        const hasContent = !!enciclopediaContent[subtemaSlug];
                        const Wrapper = hasContent ? Link : "div";
                        const wrapperProps = hasContent ? { to: `/enciclopedia/${subtemaSlug}` } : {};

                        return (
                          <Wrapper
                            key={subtema.titulo}
                            {...(wrapperProps as any)}
                            className="group/item p-4 bg-background rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoria.color} mt-1.5 flex-shrink-0`}
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h5 className="font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                    {subtema.titulo}
                                  </h5>
                                  <div className="flex items-center gap-2">
                                    {hasContent ? (
                                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                                        Explorar <ArrowRight className="w-3 h-3" />
                                      </span>
                                    ) : (
                                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                        Próximamente
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-muted-foreground text-sm mt-1">
                                  {subtema.descripcion}
                                </p>
                              </div>
                            </div>
                          </Wrapper>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sección: Sugerir tema */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-3xl border-2 border-dashed border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquarePlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                ¿Falta algún tema?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                El conocimiento es infinito. Si crees que debería existir un tema que no está aquí, ¡cuéntanos!
              </p>
              <button
                onClick={handleSuggestTopic}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Sugerir un tema
              </button>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="p-8 bg-muted/30 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-display text-4xl font-bold text-foreground">{totalTemas}</p>
                <p className="text-muted-foreground">Temas totales</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground">8</p>
                <p className="text-muted-foreground">Categorías</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground">
                  {categorias.reduce((a, c) => a + c.subtemas.length, 0)}
                </p>
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
