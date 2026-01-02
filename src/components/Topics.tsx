import topicCoffee from "@/assets/topic-coffee.jpg";
import topicWine from "@/assets/topic-wine.jpg";
import topicNature from "@/assets/topic-nature.jpg";

const topics = [
  {
    title: "Café",
    description: "Desde el origen del grano hasta el arte del barista. Descubre los secretos detrás de cada taza.",
    image: topicCoffee,
    subscribers: "12.5K",
    lessons: 156,
  },
  {
    title: "Vino",
    description: "Aprende a catar, maridaje perfecto y la historia de las mejores regiones vinícolas del mundo.",
    image: topicWine,
    subscribers: "8.3K",
    lessons: 142,
  },
  {
    title: "Naturaleza",
    description: "Biodiversidad, ecosistemas y la maravilla del mundo natural. Reconecta con la Tierra.",
    image: topicNature,
    subscribers: "15.2K",
    lessons: 203,
  },
];

const Topics = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explora temas que{" "}
            <span className="text-gradient-warm">despiertan tu curiosidad</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 200 temas curados por expertos. Encuentra tu próxima pasión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div 
              key={topic.title}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {topic.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {topic.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">{topic.subscribers}</span> apasionados
                  </span>
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                  <span>{topic.lessons} lecciones</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all">
            Ver todos los temas
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
