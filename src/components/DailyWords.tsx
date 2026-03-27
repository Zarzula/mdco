import { useState } from "react";
import { BookText, X, ChevronRight } from "lucide-react";

const words = [
  { word: "Serendipia", definition: "Hallazgo valioso que se produce de manera accidental o casual.", example: "Descubrir este café fue pura serendipia." },
  { word: "Efímero", definition: "Que dura poco tiempo, pasajero.", example: "La belleza de las flores es efímera." },
  { word: "Resiliencia", definition: "Capacidad de adaptarse y superar situaciones adversas.", example: "Su resiliencia le permitió salir adelante." },
  { word: "Paradigma", definition: "Modelo o ejemplo que sirve como referencia en un campo.", example: "Internet cambió el paradigma de la comunicación." },
  { word: "Ubicuo", definition: "Que está presente en todas partes al mismo tiempo.", example: "La tecnología se ha vuelto ubicua." },
  { word: "Epifanía", definition: "Momento de revelación o comprensión súbita.", example: "Tuvo una epifanía mientras observaba las estrellas." },
  { word: "Diáfano", definition: "Claro, transparente, que deja pasar la luz.", example: "Un cielo diáfano perfecto para observar estrellas." },
  { word: "Elocuente", definition: "Que tiene la capacidad de expresarse de manera persuasiva.", example: "Su discurso fue elocuente y conmovedor." },
  { word: "Quimera", definition: "Ilusión o fantasía que se imagina como posible pero no lo es.", example: "Viajar a Marte ya no es una quimera." },
  { word: "Acervo", definition: "Conjunto de bienes, conocimientos o tradiciones acumulados.", example: "El acervo cultural de México es inmenso." },
  { word: "Sinergia", definition: "Acción conjunta que produce un efecto mayor que la suma individual.", example: "La sinergia del equipo fue clave para el éxito." },
  { word: "Pragmático", definition: "Que se orienta hacia la práctica y la utilidad.", example: "Tomó una decisión pragmática ante la situación." },
  { word: "Etéreo", definition: "Extremadamente delicado, sutil, casi celestial.", example: "La música tenía una cualidad etérea." },
  { word: "Empírico", definition: "Basado en la experiencia y la observación, no en la teoría.", example: "El conocimiento empírico es la base de la ciencia." },
  { word: "Prodigioso", definition: "Extraordinario, que causa asombro por su magnitud.", example: "El universo es de una complejidad prodigiosa." },
  { word: "Cenit", definition: "Punto más alto o momento de mayor esplendor.", example: "El artista alcanzó el cenit de su carrera." },
  { word: "Diacrónico", definition: "Que estudia la evolución de algo a lo largo del tiempo.", example: "Un análisis diacrónico del idioma español." },
  { word: "Vernáculo", definition: "Propio del lugar, doméstico, nativo.", example: "La arquitectura vernácula refleja la cultura local." },
  { word: "Cosmopolita", definition: "Que se siente ciudadano del mundo, abierto a todas las culturas.", example: "Buenos Aires es una ciudad cosmopolita." },
  { word: "Axioma", definition: "Proposición tan evidente que se acepta sin necesidad de demostración.", example: "Es un axioma que el todo es mayor que la parte." },
  { word: "Holístico", definition: "Que considera algo como un todo, no solo sus partes.", example: "Un enfoque holístico de la salud." },
  { word: "Enigmático", definition: "Misterioso, difícil de interpretar o comprender.", example: "La Mona Lisa tiene una sonrisa enigmática." },
  { word: "Prolífico", definition: "Que produce abundantemente, muy fértil en su actividad.", example: "Fue un autor prolífico con más de 50 novelas." },
  { word: "Simbiosis", definition: "Relación de beneficio mutuo entre dos organismos o entidades.", example: "El café y el chocolate tienen una simbiosis perfecta." },
  { word: "Catarsis", definition: "Liberación emocional o purificación interior.", example: "Escribir fue su catarsis después de la pérdida." },
  { word: "Magnánimo", definition: "Generoso, noble de espíritu, que perdona fácilmente.", example: "Fue magnánimo al aceptar la disculpa." },
  { word: "Onírico", definition: "Relativo a los sueños o que tiene cualidad de sueño.", example: "La película tenía una atmósfera onírica." },
  { word: "Idiosincrasia", definition: "Conjunto de rasgos propios que caracterizan a una persona o grupo.", example: "La idiosincrasia latina se refleja en su hospitalidad." },
  { word: "Dicotomía", definition: "División en dos partes opuestas o contradictorias.", example: "La dicotomía entre ciencia y arte es falsa." },
  { word: "Perspicaz", definition: "Que tiene agudeza mental para percibir y comprender las cosas.", example: "Una observación perspicaz sobre la naturaleza humana." },
];

function getDailyWords(): [typeof words[0], typeof words[0]] {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const idx1 = (dayOfYear * 2) % words.length;
  const idx2 = (dayOfYear * 2 + 1) % words.length;
  return [words[idx1], words[idx2]];
}

const DailyWords = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [dailyWords] = useState(getDailyWords);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        title="Palabras del día"
      >
        <BookText className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 w-80 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden animate-fade-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-white" />
          <h3 className="text-white font-display font-semibold text-sm">
            Palabras para ser más culto
          </h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Words */}
      <div className="p-4 space-y-3">
        {dailyWords.map((w, i) => (
          <div
            key={i}
            className="bg-muted/50 rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-foreground text-base">
                  {w.word}
                </span>
                <span className="text-xs text-muted-foreground ml-2">
                  #{i + 1} hoy
                </span>
              </div>
              <ChevronRight
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  expanded === i ? "rotate-90" : ""
                }`}
              />
            </div>
            {expanded === i && (
              <div className="mt-2 space-y-1.5 animate-fade-up">
                <p className="text-sm text-foreground/80">
                  {w.definition}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "{w.example}"
                </p>
              </div>
            )}
          </div>
        ))}

        <p className="text-xs text-muted-foreground text-center pt-1">
          Dos palabras nuevas cada día
        </p>
      </div>
    </div>
  );
};

export default DailyWords;
