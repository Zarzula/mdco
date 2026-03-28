import { useState } from "react";
import { X, PartyPopper } from "lucide-react";

interface FestiveDay {
  month: number;
  day: number;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const festiveDays: FestiveDay[] = [
  { month: 1, day: 1, title: "Año Nuevo", description: "Inicio de un nuevo año lleno de conocimiento por descubrir. ¡Feliz año nuevo!", emoji: "🎉", color: "from-yellow-500 to-orange-500" },
  { month: 2, day: 14, title: "Día de San Valentín", description: "El amor por el conocimiento también se celebra. Comparte lo que te apasiona con alguien especial.", emoji: "❤️", color: "from-red-500 to-pink-500" },
  { month: 3, day: 8, title: "Día Internacional de la Mujer", description: "Celebramos a las mujeres que han transformado la ciencia, el arte y el conocimiento.", emoji: "💜", color: "from-purple-500 to-violet-500" },
  { month: 3, day: 14, title: "Día de Pi (π)", description: "3.14159... Hoy celebramos las matemáticas y la constante más famosa del universo.", emoji: "🥧", color: "from-blue-500 to-indigo-500" },
  { month: 4, day: 12, title: "Día de la Cosmonáutica", description: "En 1961, Yuri Gagarin se convirtió en el primer humano en el espacio. El cosmos nos espera.", emoji: "🚀", color: "from-indigo-500 to-purple-500" },
  { month: 4, day: 22, title: "Día de la Tierra", description: "Nuestro planeta es único: el único lugar conocido con vida. Cuidémoslo.", emoji: "🌍", color: "from-green-500 to-emerald-500" },
  { month: 4, day: 23, title: "Día del Libro", description: "En honor a Cervantes y Shakespeare. El conocimiento vive en los libros.", emoji: "📚", color: "from-amber-500 to-orange-500" },
  { month: 5, day: 1, title: "Día del Trabajo", description: "Celebramos el esfuerzo humano. Hoy aprender es tu mejor herramienta.", emoji: "⚒️", color: "from-red-600 to-red-500" },
  { month: 5, day: 24, title: "Día de la Batalla de Pichincha", description: "Ecuador celebra la victoria que selló su independencia en 1822.", emoji: "🇪🇨", color: "from-yellow-400 to-blue-500" },
  { month: 6, day: 21, title: "Solsticio de Junio", description: "El día más largo del año en el hemisferio norte y el más corto en el sur. La Tierra danza.", emoji: "☀️", color: "from-yellow-400 to-orange-400" },
  { month: 7, day: 20, title: "Aniversario del Alunizaje", description: "En 1969, la humanidad pisó la Luna por primera vez. Un pequeño paso, un gran salto.", emoji: "🌙", color: "from-slate-500 to-blue-900" },
  { month: 8, day: 10, title: "Día de la Independencia de Ecuador", description: "Celebramos el Primer Grito de Independencia de 1809 en Quito.", emoji: "🇪🇨", color: "from-yellow-400 to-blue-500" },
  { month: 9, day: 21, title: "Día Internacional de la Paz", description: "El conocimiento es el mejor camino hacia la comprensión y la paz entre los pueblos.", emoji: "🕊️", color: "from-cyan-400 to-blue-400" },
  { month: 10, day: 1, title: "Día Internacional del Café", description: "Celebramos la bebida que ha impulsado la creatividad humana durante siglos.", emoji: "☕", color: "from-amber-700 to-yellow-600" },
  { month: 10, day: 4, title: "Día Mundial del Espacio", description: "Semana Mundial del Espacio. Mira al cielo, el universo te espera.", emoji: "🔭", color: "from-indigo-600 to-purple-600" },
  { month: 10, day: 31, title: "Halloween", description: "Noche de misterios. ¿Sabías que muchas tradiciones de Halloween tienen raíces celtas milenarias?", emoji: "🎃", color: "from-orange-500 to-purple-700" },
  { month: 11, day: 2, title: "Día de los Muertos", description: "Tradición latinoamericana que honra a los que ya partieron. Patrimonio Cultural de la Humanidad.", emoji: "💀", color: "from-purple-600 to-orange-500" },
  { month: 12, day: 21, title: "Solsticio de Diciembre", description: "El Sol alcanza su punto más austral. Marca el inicio del invierno en el norte y el verano en el sur.", emoji: "❄️", color: "from-blue-300 to-cyan-200" },
  { month: 12, day: 25, title: "Navidad", description: "Tiempo de unión y reflexión. El mejor regalo es el conocimiento compartido.", emoji: "🎄", color: "from-red-600 to-green-600" },
  { month: 12, day: 31, title: "Fin de Año", description: "Cerramos el año con todo lo aprendido. ¿Cuánto creciste este año?", emoji: "✨", color: "from-yellow-400 to-purple-500" },
];

function getTodayFestive(): FestiveDay | null {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return festiveDays.find((f) => f.month === month && f.day === day) || null;
}

const FestiveBanner = () => {
  const festive = getTodayFestive();
  const [dismissed, setDismissed] = useState(false);

  if (!festive || dismissed) return null;

  return (
    <div className={`relative bg-gradient-to-r ${festive.color} text-white`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{festive.emoji}</span>
          <div>
            <p className="font-display font-bold text-sm">
              {festive.title}
            </p>
            <p className="text-white/80 text-xs hidden sm:block">
              {festive.description}
            </p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/60 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FestiveBanner;
