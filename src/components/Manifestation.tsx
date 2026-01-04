import { Sparkles, BookOpen, Download } from "lucide-react";

const Manifestation = () => {
  const handleDownload = () => {
    window.open('https://pay.hotmart.com/Y103666', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Frase inspiracional */}
        <div className="text-center mb-12">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/80 italic max-w-3xl mx-auto leading-relaxed">
            "Tu mente tiene espacios vacíos.{" "}
            <span className="text-gradient-warm font-semibold not-italic">
              Es hora de llenarlos con algo extraordinario.
            </span>
            "
          </p>
        </div>

        {/* Card del cuaderno */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 p-8 md:p-12 shadow-elevated">
            {/* Badge de descuento */}
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                🔥 80% OFF
              </span>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Imagen del cuaderno */}
              <div className="flex-shrink-0">
                <div className="w-48 h-60 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-12 h-12 text-yellow-300 mb-4" />
                  <BookOpen className="w-16 h-16 text-white/90 mb-2" />
                  <p className="text-white/80 text-xs text-center mt-2">Cuaderno Digital</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm mb-4">
                  <Sparkles className="w-4 h-4" />
                  Nuevo recurso
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Manifiesta tu Realidad
                </h3>
                
                <p className="text-white/80 mb-6 max-w-lg">
                  Un cuaderno interactivo para diseñar la vida que deseas. Ejercicios de 
                  visualización, gratitud y establecimiento de intenciones. Transforma tus 
                  pensamientos en acciones.
                </p>

                <ul className="text-white/70 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
                    30 ejercicios de manifestación guiados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
                    Plantillas de visualización y metas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
                    Diario de gratitud incluido
                  </li>
                </ul>

                {/* Precio y botón */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-yellow-300">
                      $4.50
                    </span>
                    <span className="text-xl text-white/50 line-through">
                      $22
                    </span>
                    <span className="text-white/60 text-sm">
                      USD
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Obtener Cuaderno
                  </button>
                </div>

                <p className="text-white/50 text-xs mt-3">
                  Descarga inmediata • PDF interactivo • Acceso de por vida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifestation;
