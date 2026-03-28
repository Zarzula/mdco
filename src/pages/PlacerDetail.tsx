import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Clock, Globe, BookOpen, Camera, MessageCircle, Lightbulb, MessageSquare, BarChart3, ThumbsUp, User, Map, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { placeresContent, Article } from "@/data/placeres-content";
import { placeres } from "@/components/Topics";
import ConstellationMap from "@/components/ConstellationMap";
import { useAuth } from "@/hooks/use-auth";

type TabType = "articulos" | "debates" | "encuestas" | "galeria" | "mapa";

const PlacerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("articulos");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [participated, setParticipated] = useState<string[]>([]);
  const { user, isLoggedIn, addPoints, incrementStat } = useAuth();

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

  const typeColors: Record<string, string> = {
    VS: "bg-red-100 text-red-700",
    Opinion: "bg-blue-100 text-blue-700",
    Ranking: "bg-yellow-100 text-yellow-700",
    Mitos: "bg-purple-100 text-purple-700",
    Recomendacion: "bg-green-100 text-green-700",
  };

  const isSpace = slug === "astronomia";

  return (
    <div className={`min-h-screen ${isSpace ? "bg-[#2d2154] text-white" : "bg-background"}`}>
      <Navbar />

      {/* Hero del Placer */}
      <section className="relative pt-16">
        <div className={`relative h-[50vh] min-h-[400px] overflow-hidden ${isSpace ? "" : ""}`}>
          <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isSpace ? "bg-gradient-to-t from-[#2d2154] via-[#2d2154]/60 to-purple-900/30" : "bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10"}`} />
          {isSpace && (
            <>
              <div className="absolute top-24 right-10 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl animate-float" />
              <div className="absolute top-40 left-20 w-12 h-12 bg-blue-400/15 rounded-full blur-xl" />
              <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-violet-300/10 rounded-full blur-2xl" />
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <Link to="/#placeres" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Volver a Placeres
              </Link>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">{content.title}</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">{content.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción + Dato curioso */}
      <section className={`py-12 ${isSpace ? "bg-[#2d2154]" : "bg-background"}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className={`text-lg leading-relaxed ${isSpace ? "text-purple-200" : "text-muted-foreground"}`}>{content.intro}</p>
            </div>
            <div className={`rounded-2xl p-6 ${isSpace ? "bg-purple-500/15 border border-purple-400/30" : "bg-primary/5 border border-primary/20"}`}>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">¿Sabías que...?</h3>
              </div>
              <p className={`text-sm leading-relaxed ${isSpace ? "text-purple-200" : "text-muted-foreground"}`}>{content.curiosity}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Tabs: Artículos / Debates / Encuestas / Galería */}
      <section className={`py-8 ${isSpace ? "bg-[#251d47]" : "bg-muted/30"}`}>
        <div className="container mx-auto px-6">
          <div className="flex gap-2 md:gap-4 mb-8 border-b border-border overflow-x-auto">
            {([
              { key: "articulos" as TabType, icon: BookOpen, label: "Artículos", count: content.articles.length },
              { key: "debates" as TabType, icon: MessageSquare, label: "Debates", count: content.debates.length },
              { key: "encuestas" as TabType, icon: BarChart3, label: "Encuestas", count: content.encuestas.length },
              { key: "galeria" as TabType, icon: Camera, label: "Galería", count: content.gallery.length },
              ...(slug === "astronomia" ? [{ key: "mapa" as TabType, icon: Map, label: "Mapa Estelar", count: 19 }] : []),
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setSelectedArticle(null); }}
                className={`pb-3 px-3 md:px-4 font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* ===== TAB: ARTÍCULOS ===== */}
          {activeTab === "articulos" && !selectedArticle && (
            <div className="grid md:grid-cols-2 gap-6">
              {content.articles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`group rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer ${isSpace ? "bg-purple-900/40 border border-purple-500/20 hover:border-purple-400/40" : "bg-card"}`}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg">{article.countryFlag}</span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Artículo seleccionado */}
          {activeTab === "articulos" && selectedArticle && (
            <div className="max-w-3xl mx-auto">
              <button onClick={() => setSelectedArticle(null)} className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm">
                <ArrowLeft className="w-4 h-4" /> Volver a artículos
              </button>
              <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
                <div className="aspect-[21/9] overflow-hidden">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-2xl">{selectedArticle.countryFlag}</span>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{selectedArticle.category}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><Globe className="w-4 h-4" />{selectedArticle.country}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" />{selectedArticle.readTime}</span>
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{selectedArticle.title}</h1>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">{selectedArticle.content}</p>
                  </div>
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <h3 className="font-display font-semibold text-foreground">Comentarios de la comunidad</h3>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <p className="text-muted-foreground mb-2">¿Conoces más sobre este tema? ¡Comparte tu experiencia!</p>
                      <p className="text-sm text-muted-foreground">Regístrate gratis para dejar comentarios y participar en la comunidad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== TAB: DEBATES ===== */}
          {activeTab === "debates" && (
            <div className="max-w-3xl mx-auto space-y-4">
              {content.debates.map((debate) => (
                <div key={debate.id} className={`rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 ${isSpace ? "bg-purple-900/40 border border-purple-500/20" : "bg-card"}`}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeColors[debate.type] || "bg-gray-100 text-gray-700"}`}>
                      {debate.type}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" /> {debate.author}
                    </span>
                    <span className="text-xs text-muted-foreground">{debate.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{debate.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{debate.description}</p>

                  {/* Barra VS */}
                  {debate.type === "VS" && debate.optionA && debate.optionB && debate.votesA != null && debate.votesB != null && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span className="text-blue-600">{debate.optionA}</span>
                        <span className="text-red-600">{debate.optionB}</span>
                      </div>
                      <div className="flex h-3 rounded-full overflow-hidden bg-muted">
                        <div
                          className="bg-blue-500 transition-all duration-500"
                          style={{ width: `${(debate.votesA / (debate.votesA + debate.votesB)) * 100}%` }}
                        />
                        <div
                          className="bg-red-500 transition-all duration-500"
                          style={{ width: `${(debate.votesB / (debate.votesA + debate.votesB)) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{debate.votesA} votos</span>
                        <span>{debate.votesB} votos</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {debate.responses} respuestas</span>
                    {participated.includes(debate.id) ? (
                      <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> Participaste (+15 pts)</span>
                    ) : (
                      <button onClick={() => {
                        if (!isLoggedIn) { setShowRegisterModal(true); return; }
                        addPoints(15);
                        incrementStat("debatesParticipados");
                        setParticipated([...participated, debate.id]);
                      }} className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                        <ThumbsUp className="w-4 h-4" /> Participar
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-muted-foreground text-sm font-medium">
                  {isLoggedIn
                    ? `¡Hola ${user?.name}! Haz clic en "Participar" para ganar +15 puntos por cada debate.`
                    : "Puedes leer todos los debates libremente. Regístrate gratis para participar y ganar puntos."
                  }
                </p>
              </div>
            </div>
          )}

          {/* ===== TAB: ENCUESTAS ===== */}
          {activeTab === "encuestas" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {content.encuestas.map((encuesta) => (
                <div key={encuesta.id} className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" /> {encuesta.author}
                    </span>
                    <span className="text-xs text-muted-foreground">{encuesta.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-4">{encuesta.question}</h3>

                  <div className="space-y-3">
                    {encuesta.options.map((option, idx) => {
                      const percentage = encuesta.totalVotes > 0 ? Math.round((option.votes / encuesta.totalVotes) * 100) : 0;
                      return (
                        <div key={idx} className="relative">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">{option.text}</span>
                            <span className="text-sm text-muted-foreground">{percentage}%</span>
                          </div>
                          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary/70 rounded-full transition-all duration-700"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs text-muted-foreground mt-3">{encuesta.totalVotes} votos totales</p>
                </div>
              ))}

              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-muted-foreground text-sm font-medium">Puedes ver los resultados libremente. Regístrate gratis para votar en las encuestas.</p>
              </div>
            </div>
          )}

          {/* ===== TAB: GALERÍA ===== */}
          {activeTab === "galeria" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.gallery.map((item, index) => (
                <div key={index} className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300">
                  <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{item.caption}</p>
                    <p className="text-xs text-white/70">{item.author}</p>
                  </div>
                </div>
              ))}
              <div className="aspect-square rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default">
                <Camera className="w-8 h-8 text-primary/50" />
                <p className="text-sm text-muted-foreground text-center px-4">Subida de fotos próximamente</p>
              </div>
            </div>
          )}

          {/* ===== TAB: MAPA ESTELAR (solo astrología) ===== */}
          {activeTab === "mapa" && slug === "astronomia" && (
            <div>
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Mapa Interactivo de Constelaciones
                </h3>
                <p className="text-muted-foreground">
                  Haz clic en cualquier constelación para conocer su historia, mitología y cómo encontrarla en el cielo.
                </p>
              </div>
              <ConstellationMap />
            </div>
          )}
        </div>
      </section>

      {/* Otros Placeres */}
      <section className={`py-16 ${isSpace ? "bg-[#2d2154]" : "bg-background"}`}>
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Explora otros Placeres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {placeres
              .filter((p) => p.slug !== slug && p.status === "activo")
              .map((p) => (
                <Link to={`/placer/${p.slug}`} key={p.slug} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-display font-bold text-xs md:text-sm">{p.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal de registro */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowRegisterModal(false)}>
          <div className="bg-card rounded-3xl max-w-md w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Únete a la comunidad</h2>
              <p className="text-muted-foreground text-sm">Regístrate gratis para participar en debates, votar en encuestas y compartir tu conocimiento.</p>
            </div>

            <div className="space-y-3 mb-6">
              <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="email" placeholder="Tu email" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <Button variant="hero" size="xl" className="w-full mb-3" onClick={() => setShowRegisterModal(false)}>
              Registrarme gratis
            </Button>
            <button onClick={() => setShowRegisterModal(false)} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Ahora no, seguir explorando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacerDetail;
