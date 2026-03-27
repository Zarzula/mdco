import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Clock, Globe, BookOpen, Camera, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { placeresContent, Article } from "@/data/placeres-content";
import { placeres } from "@/components/Topics";

const PlacerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeTab, setActiveTab] = useState<"articulos" | "galeria">("articulos");

  const content = slug ? placeresContent[slug] : null;
  const placerInfo = placeres.find((p) => p.slug === slug);

  if (!content || !placerInfo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Placer no encontrado</h1>
          <Link to="/#placeres" className="text-primary hover:underline">
            ← Volver a Placeres
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero del Placer */}
      <section className="relative pt-16">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={content.heroImage}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <Link
                to="/#placeres"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a Placeres
              </Link>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
                {content.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción + Dato curioso */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.intro}
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">¿Sabías que...?</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {content.curiosity}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Artículos / Galería */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => { setActiveTab("articulos"); setSelectedArticle(null); }}
              className={`pb-3 px-4 font-medium text-sm transition-colors flex items-center gap-2 ${
                activeTab === "articulos"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Artículos ({content.articles.length})
            </button>
            <button
              onClick={() => { setActiveTab("galeria"); setSelectedArticle(null); }}
              className={`pb-3 px-4 font-medium text-sm transition-colors flex items-center gap-2 ${
                activeTab === "galeria"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera className="w-4 h-4" />
              Galería ({content.gallery.length})
            </button>
          </div>

          {/* Contenido de Artículos */}
          {activeTab === "articulos" && !selectedArticle && (
            <div className="grid md:grid-cols-2 gap-6">
              {content.articles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg">{article.countryFlag}</span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Artículo seleccionado (lectura completa) */}
          {activeTab === "articulos" && selectedArticle && (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a artículos
              </button>

              <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{selectedArticle.countryFlag}</span>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selectedArticle.category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {selectedArticle.country}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {selectedArticle.title}
                  </h1>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedArticle.content}
                    </p>
                  </div>

                  {/* Sección de comentarios placeholder */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <h3 className="font-display font-semibold text-foreground">
                        Comentarios de la comunidad
                      </h3>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <p className="text-muted-foreground mb-3">
                        ¿Conoces más sobre este tema? ¡Comparte tu experiencia!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Los comentarios estarán disponibles próximamente. Mientras tanto, puedes sugerir contenido desde la sección de contacto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido de Galería */}
          {activeTab === "galeria" && (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{item.caption}</p>
                      <p className="text-xs text-white/70">{item.author}</p>
                    </div>
                  </div>
                ))}

                {/* Placeholder para subir fotos */}
                <div className="aspect-square rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default">
                  <Camera className="w-8 h-8 text-primary/50" />
                  <p className="text-sm text-muted-foreground text-center px-4">
                    Subida de fotos próximamente
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Otros Placeres */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Explora otros Placeres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {placeres
              .filter((p) => p.slug !== slug && p.status === "activo")
              .map((p) => (
                <Link
                  to={`/placer/${p.slug}`}
                  key={p.slug}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-display font-bold text-sm md:text-base">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlacerDetail;
