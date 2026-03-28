import { useState } from "react";
import { X, Star, Flame, Droplets, Wind, Mountain, Maximize2, Minimize2 } from "lucide-react";
import { constelaciones, Constelacion } from "@/data/constelaciones-data";

const elementIcons: Record<string, JSX.Element> = {
  Fuego: <Flame className="w-4 h-4 text-orange-400" />,
  Agua: <Droplets className="w-4 h-4 text-blue-400" />,
  Aire: <Wind className="w-4 h-4 text-cyan-300" />,
  Tierra: <Mountain className="w-4 h-4 text-green-400" />,
};

const ConstellationMap = () => {
  const [selected, setSelected] = useState<Constelacion | null>(null);
  const [filter, setFilter] = useState<"todos" | "zodiaco" | "notable">("todos");
  const [skyExpanded, setSkyExpanded] = useState(false);

  const filtered = constelaciones.filter(
    (c) => filter === "todos" || c.tipo === filter
  );

  return (
    <div>
      {/* Visor del cielo en tiempo real */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">Cielo en tiempo real</h3>
            <p className="text-sm text-muted-foreground">
              Powered by <a href="https://stellarium-web.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stellarium Web</a> (open source). Arrastra para explorar, scroll para zoom.
            </p>
          </div>
          <button
            onClick={() => setSkyExpanded(!skyExpanded)}
            className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {skyExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {skyExpanded ? "Reducir" : "Ampliar"}
          </button>
        </div>
        <div className={`rounded-2xl overflow-hidden border border-border shadow-elevated transition-all duration-500 ${skyExpanded ? "h-[70vh]" : "h-[400px]"}`}>
          <iframe
            src="https://stellarium-web.org/"
            title="Stellarium Web - Mapa del cielo en tiempo real"
            className="w-full h-full border-0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </div>

      <h3 className="font-display font-bold text-foreground text-lg mb-4">Guía de Constelaciones</h3>

      {/* Filtros */}
      <div className="flex gap-2 mb-6">
        {([
          { key: "todos", label: "Todas" },
          { key: "zodiaco", label: "Zodiaco (12)" },
          { key: "notable", label: "Notables" },
        ] as const).map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f.key
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid de constelaciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c)}
            className="group relative bg-slate-900 rounded-2xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 text-left overflow-hidden"
          >
            {/* Fondo con gradiente */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${c.color}`} />

            {/* SVG de la constelación */}
            <div className="relative aspect-square mb-3">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Líneas entre estrellas */}
                {c.lineas.map((l, i) => (
                  <line
                    key={i}
                    x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]}
                    stroke="rgba(147,197,253,0.4)"
                    strokeWidth="0.8"
                    className="group-hover:stroke-blue-400 transition-all duration-500"
                  />
                ))}
                {/* Estrellas */}
                {c.estrellas.map((s, i) => (
                  <g key={i}>
                    <circle
                      cx={s[0]} cy={s[1]}
                      r={i === 0 ? 3 : 2}
                      fill={i === 0 ? "#fbbf24" : "#e2e8f0"}
                      className="group-hover:fill-blue-300 transition-colors duration-300"
                    />
                    <circle
                      cx={s[0]} cy={s[1]}
                      r={i === 0 ? 6 : 4}
                      fill={i === 0 ? "rgba(251,191,36,0.2)" : "rgba(226,232,240,0.15)"}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Info */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{c.simbolo}</span>
                <h3 className="font-display font-bold text-white text-sm">{c.nombre}</h3>
              </div>
              {c.fechas && (
                <p className="text-xs text-slate-400">{c.fechas}</p>
              )}
              {c.elemento && (
                <div className="flex items-center gap-1 mt-1">
                  {elementIcons[c.elemento]}
                  <span className="text-xs text-slate-400">{c.elemento}</span>
                </div>
              )}
              {c.tipo === "notable" && (
                <span className="text-xs text-blue-400 mt-1 block">Constelación notable</span>
              )}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </button>
        ))}
      </div>

      {/* Modal de detalle */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con SVG grande */}
            <div className={`relative p-8 bg-gradient-to-br ${selected.color} bg-opacity-20`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white bg-black/30 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-6">
                {/* SVG grande */}
                <div className="w-32 h-32 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {selected.lineas.map((l, i) => (
                      <line
                        key={i}
                        x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]}
                        stroke="rgba(147,197,253,0.6)"
                        strokeWidth="1"
                      />
                    ))}
                    {selected.estrellas.map((s, i) => (
                      <g key={i}>
                        <circle cx={s[0]} cy={s[1]} r={i === 0 ? 4 : 2.5} fill={i === 0 ? "#fbbf24" : "#e2e8f0"} />
                        <circle cx={s[0]} cy={s[1]} r={i === 0 ? 8 : 5} fill={i === 0 ? "rgba(251,191,36,0.25)" : "rgba(226,232,240,0.15)"} />
                      </g>
                    ))}
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{selected.simbolo}</span>
                    <div>
                      <h2 className="font-display text-3xl font-bold text-white">{selected.nombre}</h2>
                      <p className="text-white/60 text-sm italic">{selected.nombreLatin}</p>
                    </div>
                  </div>
                  {selected.fechas && (
                    <p className="text-white/80 text-sm mb-1">📅 {selected.fechas}</p>
                  )}
                  {selected.elemento && (
                    <div className="flex items-center gap-2">
                      {elementIcons[selected.elemento]}
                      <span className="text-white/80 text-sm">Elemento: {selected.elemento}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8 space-y-6">
              {/* Descripción */}
              <div>
                <h3 className="font-display font-semibold text-white mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" /> Descripción
                </h3>
                <p className="text-slate-300 leading-relaxed">{selected.descripcion}</p>
              </div>

              {/* Imagen */}
              <div className="rounded-xl overflow-hidden">
                <img src={selected.image} alt={selected.nombre} className="w-full h-48 object-cover" />
              </div>

              {/* Cómo encontrarla */}
              <div className="bg-blue-950/50 rounded-xl p-4 border border-blue-800/30">
                <h3 className="font-display font-semibold text-white mb-2">🧭 Cómo encontrarla</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{selected.comoEncontrarla}</p>
              </div>

              {/* Mitología */}
              <div>
                <h3 className="font-display font-semibold text-white mb-2">📜 Mitología</h3>
                <p className="text-slate-300 leading-relaxed">{selected.mitologia}</p>
              </div>

              {/* Estrellas principales */}
              <div>
                <h3 className="font-display font-semibold text-white mb-2">✨ Estrellas principales</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.estrellasPrincipales.map((e, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visibilidad */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="font-display font-semibold text-white mb-1">🔭 Cuándo observarla</h3>
                <p className="text-slate-300 text-sm">{selected.visibilidad}</p>
              </div>

              {/* Dato extra */}
              <div className="bg-amber-950/30 rounded-xl p-4 border border-amber-800/20">
                <h3 className="font-display font-semibold text-amber-200 mb-1">💡 Dato curioso</h3>
                <p className="text-slate-300 text-sm">{selected.datoExtra}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstellationMap;
