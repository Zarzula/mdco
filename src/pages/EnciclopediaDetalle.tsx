import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { enciclopediaContent, EncArticle } from "@/data/enciclopedia-content";

const EnciclopediaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedArticle, setSelectedArticle] = useState<EncArticle | null>(null);

  const content = slug ? enciclopediaContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-display text-3xl font-bold mb-2">Contenido en construcción</h1>
          <p className="text-muted-foreground mb-6">
            Este tema de la Enciclopedia estará disponible próximamente.
          </p>
          <Link to="/enciclopedia" className="text-primary hover:underline font-medium">
            ← Volver a la Enciclopedia
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[40vh] min-h-[320px] overflow-hidden">
          <img src={content.heroImage} alt={content.titulo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <Link to="/enciclopedia" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" /> {content.categoriaNombre}
              </Link>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{content.titulo}</h1>
              <p className="text-white/70 text-base md:text-lg max-w-2xl">{content.descripcion}</p>
              <p className="text-white/50 text-sm mt-3">{content.articles.length} artículos disponibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">

          {/* Lista de artículos */}
          {!selectedArticle && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.articles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{article.tag}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Artículo completo */}
          {selectedArticle && (
            <div className="max-w-3xl mx-auto">
              <button onClick={() => setSelectedArticle(null)} className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm">
                <ArrowLeft className="w-4 h-4" /> Volver a artículos
              </button>

              <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
                <div className="aspect-[21/9] overflow-hidden">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{selectedArticle.tag}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {selectedArticle.readTime}
                    </span>
                  </div>

                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{selectedArticle.title}</h1>

                  <div className="prose prose-lg max-w-none">
                    {selectedArticle.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed text-lg mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Navegación entre artículos */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="font-display font-semibold text-foreground mb-4">Sigue explorando</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {content.articles
                        .filter((a) => a.id !== selectedArticle.id)
                        .slice(0, 4)
                        .map((a) => (
                          <button
                            key={a.id}
                            onClick={() => { setSelectedArticle(a); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="text-left p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <span className="text-xs text-primary font-medium">{a.tag}</span>
                            <p className="text-sm font-medium text-foreground line-clamp-2 mt-1">{a.title}</p>
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnciclopediaDetalle;
