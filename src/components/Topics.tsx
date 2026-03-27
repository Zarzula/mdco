import { MessageSquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
import placerCafe from "@/assets/placer-cafe.jpg";
import placerVino from "@/assets/placer-vino.jpg";
import placerAstronomia from "@/assets/placer-astronomia.jpg";
import placerChocolate from "@/assets/placer-chocolate.jpg";
import placerCampanas from "@/assets/placer-campanas.jpg";

export const placeres = [
  {
    title: "El Mundo del Vino",
    slug: "vino",
    description: "Cepas, regiones vinícolas, cata y maridaje perfecto. Conviértete en un verdadero sommelier.",
    image: placerVino,
    status: "activo",
  },
  {
    title: "Café de Especialidad",
    slug: "cafe",
    description: "Orígenes, métodos de tueste, preparación y arte del barismo. Cada taza cuenta una historia.",
    image: placerCafe,
    status: "activo",
  },
  {
    title: "Campanas del Mundo",
    slug: "campanas",
    description: "Historia, acústica, fundición y campanas famosas. Un tema único y fascinante.",
    image: placerCampanas,
    status: "activo",
  },
  {
    title: "Astronomía Amateur",
    slug: "astronomia",
    description: "Observación del cielo, equipos, astrofotografía y cosmología para apasionados.",
    image: placerAstronomia,
    status: "activo",
  },
  {
    title: "Chocolate y Cacao",
    slug: "chocolate",
    description: "Del árbol a la barra: bean to bar, orígenes del cacao y el arte del chocolatero.",
    image: placerChocolate,
    status: "activo",
  },
  {
    title: "Destilados y Coctelería",
    slug: "destilados",
    description: "Whisky, ron, gin, vodka y el arte de la mixología. Cócteles clásicos y modernos.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Quesos del Mundo",
    slug: "quesos",
    description: "Tipos, maduración, maridaje y la ciencia detrás de cada queso artesanal.",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Cultura del Té",
    slug: "te",
    description: "Variedades, ceremonias, preparación y la filosofía detrás de cada infusión.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Cerveza Artesanal",
    slug: "cerveza",
    description: "Estilos, lúpulos, maltas y el arte del brewing. De la cebada al vaso.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Música y Audio",
    slug: "musica",
    description: "Teoría musical, géneros, producción, hi-fi y la ciencia del sonido.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Fotografía",
    slug: "fotografia",
    description: "Técnica, composición, edición y el arte de capturar momentos únicos.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Relojería",
    slug: "relojeria",
    description: "Mecanismos, historia, coleccionismo y el arte de medir el tiempo.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Perfumería",
    slug: "perfumeria",
    description: "Notas olfativas, familias, creación y el arte de los aromas.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    status: "proximamente",
  },
  {
    title: "Arquitectura",
    slug: "arquitectura",
    description: "Estilos, estructuras, grandes obras y la historia de los espacios.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80",
    status: "proximamente",
  },
];

const Topics = () => {
  const handleSuggestTopic = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScIY7PdmDJSxRs15FTWuLxNbyD_u2ybiuwQr55O_4dpGueqxg/viewform', '_blank');
  };

  return (
    <section id="placeres" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Placeres del{" "}
            <span className="text-gradient-warm">Conocimiento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comunidades especializadas para apasionados. Enciclopedia, debates, encuestas y galería en cada Placer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeres.map((placer) => {
            const isActive = placer.status === "activo";
            const cardContent = (
              <div
                key={placer.title}
                className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 ${isActive ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={placer.image}
                    alt={placer.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'group-hover:scale-110' : 'opacity-70'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                </div>

                {/* Badge de estado */}
                <div className="absolute top-4 right-4">
                  {isActive ? (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Explorar
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      Próximamente
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {placer.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-2 line-clamp-2">
                    {placer.description}
                  </p>
                  {isActive && (
                    <span className="inline-flex items-center gap-1 text-sm text-primary-foreground/90 font-medium group-hover:underline">
                      Ver comunidad →
                    </span>
                  )}
                </div>
              </div>
            );

            if (isActive) {
              return (
                <Link to={`/placer/${placer.slug}`} key={placer.title}>
                  {cardContent}
                </Link>
              );
            }
            return <div key={placer.title}>{cardContent}</div>;
          })}

          {/* Tarjeta: Sugerir nuevo tema */}
          <div
            onClick={handleSuggestTopic}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-primary/30 hover:border-primary/60 shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer flex items-center justify-center"
          >
            <div className="aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquarePlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                ¿Tienes una pasión?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sugiere un nuevo Placer y ayúdanos a crecer la comunidad.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:underline underline-offset-4">
                Sugerir tema
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">5 Placeres activos</span> · más comunidades próximamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Topics;
