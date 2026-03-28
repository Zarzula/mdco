import { Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const capsulas = [
  { title: "La campana que nunca sonó", content: "La Campana del Zar en Moscú pesa 216 toneladas y nunca ha sido colgada ni tocada. Un fragmento de 11 toneladas se desprendió durante un incendio en 1737.", category: "Campanas del Mundo", slug: "campanas", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { title: "El color del vino tinto es un engaño", content: "El color del vino tinto viene de la piel de la uva, no de la pulpa. La pulpa de casi todas las uvas es transparente. Por eso existe el champagne rosado hecho con uvas tintas.", category: "El Mundo del Vino", slug: "vino", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80" },
  { title: "El café más caro del mundo pasa por un animal", content: "El Kopi Luwak de Indonesia se produce a partir de granos digeridos por la civeta. Puede costar más de $600 USD por kilo, aunque su producción ética es muy cuestionada.", category: "Café de Especialidad", slug: "cafe", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80" },
  { title: "Saturno flotaría en una bañera gigante", content: "Saturno tiene una densidad menor que el agua. Si existiera una bañera lo suficientemente grande, Saturno flotaría en ella como un pato de goma cósmico.", category: "Astronomía y Astrología", slug: "astronomia", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80" },
  { title: "El chocolate fue moneda de cambio", content: "Los mayas y aztecas usaban granos de cacao como moneda. Un conejo costaba 10 granos, un esclavo 100. El emperador Moctezuma bebía 50 tazas de chocolate al día.", category: "Chocolate y Cacao", slug: "chocolate", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80" },
  { title: "108 campanadas para purificar el alma", content: "En Japón, las campanas de los templos budistas se tocan 108 veces en Año Nuevo, una por cada deseo mundano que causa sufrimiento según el budismo.", category: "Campanas del Mundo", slug: "campanas", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80" },
  { title: "Tu café cambia según la altitud", content: "El café cultivado a mayor altitud (1,500-2,000m) desarrolla más acidez y complejidad. La intensa radiación solar produce granos más densos y sabores más complejos.", category: "Café de Especialidad", slug: "cafe", image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80" },
  { title: "Betelgeuse podría explotar mañana", content: "La supergigante roja Betelgeuse en Orión podría explotar como supernova en cualquier momento (astronómicamente: dentro de 100,000 años). Brillaría como la Luna durante semanas.", category: "Astronomía y Astrología", slug: "astronomia", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80" },
  { title: "El vino más antiguo tiene 1,700 años", content: "La botella de vino más antigua data del año 325 d.C., encontrada en una tumba romana en Speyer, Alemania. Aún contiene líquido, pero los expertos no recomiendan beberlo.", category: "El Mundo del Vino", slug: "vino", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80" },
  { title: "Una cucharadita de estrella muerta pesa 5 toneladas", content: "Sirio B, la compañera enana blanca de la estrella más brillante del cielo, tiene el tamaño de la Tierra pero la masa del Sol. Su materia es increíblemente densa.", category: "Astronomía y Astrología", slug: "astronomia", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&q=80" },
  { title: "El chocolate tiene más aromas que el vino", content: "El chocolate contiene más de 600 compuestos aromáticos, mientras que el vino tiene alrededor de 200. Por eso una cata de chocolate fino puede ser tan compleja como una de vino.", category: "Chocolate y Cacao", slug: "chocolate", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80" },
  { title: "Big Ben no es la torre, es la campana", content: "El nombre Big Ben se refiere a la campana de 13.7 toneladas, no a la torre. La torre se llama oficialmente Torre Isabel. La campana produce la nota Mi natural.", category: "Campanas del Mundo", slug: "campanas", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80" },
  { title: "Las constelaciones tienen más de 3,000 años", content: "Los babilonios definieron las 12 constelaciones del zodiaco alrededor del 1000 a.C. siguiendo el camino del Sol. Debido a la precesión terrestre, las fechas ya no coinciden.", category: "Astronomía y Astrología", slug: "astronomia", image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80" },
  { title: "Etiopía es la cuna del café", content: "Según la leyenda, un pastor llamado Kaldi descubrió el café en el siglo IX cuando notó que sus cabras se ponían energéticas después de comer las cerezas de cierto arbusto.", category: "Café de Especialidad", slug: "cafe", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" },
  { title: "El Malbec renació en Argentina", content: "El Malbec llegó a Argentina en 1853 desde Francia, donde la filoxera casi lo extinguió. En Mendoza encontró condiciones ideales y hoy Argentina es el mayor productor mundial.", category: "El Mundo del Vino", slug: "vino", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80" },
];

function getDailyCapsule() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return capsulas[dayOfYear % capsulas.length];
}

const DailyCapsule = () => {
  const capsule = getDailyCapsule();

  return (
    <section className="py-8 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        <Link
          to={`/placer/${capsule.slug}`}
          className="group block relative overflow-hidden rounded-3xl bg-white/[0.03] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
            {/* Imagen */}
            <div className="w-full md:w-48 h-32 md:h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={capsule.image}
                alt={capsule.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Cápsula del día
                </span>
                <span className="text-xs text-slate-500">· {capsule.category}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {capsule.title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {capsule.content}
              </p>
            </div>

            {/* Flecha */}
            <div className="flex-shrink-0 hidden md:block">
              <ArrowRight className="w-6 h-6 text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default DailyCapsule;
