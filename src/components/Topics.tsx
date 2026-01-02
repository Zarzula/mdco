import placerCafe from "@/assets/placer-cafe.jpg";
import placerVino from "@/assets/placer-vino.jpg";
import placerAstronomia from "@/assets/placer-astronomia.jpg";
import placerChocolate from "@/assets/placer-chocolate.jpg";
import placerCampanas from "@/assets/placer-campanas.jpg";

const placeres = [
  {
    title: "El Mundo del Vino",
    description: "Cepas, regiones vinícolas, cata y maridaje perfecto. Conviértete en un verdadero sommelier.",
    image: placerVino,
    members: "8.3K",
    articles: 142,
  },
  {
    title: "Café de Especialidad",
    description: "Orígenes, métodos de tueste, preparación y arte del barismo. Cada taza cuenta una historia.",
    image: placerCafe,
    members: "12.5K",
    articles: 156,
  },
  {
    title: "Campanas del Mundo",
    description: "Historia, acústica, fundición y campanas famosas. Un tema único y fascinante.",
    image: placerCampanas,
    members: "2.1K",
    articles: 89,
  },
  {
    title: "Astronomía Amateur",
    description: "Observación del cielo, equipos, astrofotografía y cosmología para apasionados.",
    image: placerAstronomia,
    members: "15.2K",
    articles: 203,
  },
  {
    title: "Chocolate y Cacao",
    description: "Del árbol a la barra: bean to bar, orígenes del cacao y el arte del chocolatero.",
    image: placerChocolate,
    members: "6.8K",
    articles: 98,
  },
];

const Topics = () => {
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
          {placeres.map((placer, index) => (
            <div 
              key={placer.title}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 ${
                index >= 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={placer.image} 
                  alt={placer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-2">
                  {placer.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {placer.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">{placer.members}</span> miembros
                  </span>
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                  <span>{placer.articles} artículos</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Y muchos más: Destilados, Quesos, Té, Cerveza Artesanal, Fotografía, Relojería, Perfumería...
          </p>
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all">
            Ver todos los Placeres
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topics;