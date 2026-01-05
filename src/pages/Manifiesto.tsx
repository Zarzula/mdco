import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Lightbulb, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const creencias = [
  { icon: Heart, texto: "Que aprender es un placer, no un castigo." },
  { icon: Users, texto: "Que una comunidad de mentes curiosas es más poderosa que mil algoritmos." },
  { icon: Globe, texto: "Que cada persona tiene derecho a entender el mundo donde vive." },
  { icon: Lightbulb, texto: "Que el conocimiento conecta, no divide." },
  { icon: Sparkles, texto: "Que nunca es tarde para despertar la curiosidad." },
];

const Manifiesto = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestro{" "}
              <span className="text-gradient-warm">Manifiesto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Por qué existe Maratón de Conocimiento
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto">
            {/* El problema */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                El problema que vimos
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  Vivimos en la era de más información de la historia, pero nunca hemos estado más confundidos. 
                  Scroll infinito, videos de 15 segundos, titulares que gritan. Todo compite por tu atención, 
                  pero casi nada alimenta tu mente.
                </p>
                <p className="text-lg leading-relaxed">
                  El conocimiento real —ese que te cambia, que te hace ver el mundo diferente— está 
                  enterrado bajo montañas de ruido.
                </p>
              </div>
            </section>

            {/* La chispa */}
            <section className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                La chispa que nos encendió
              </h2>
              <div className="text-muted-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  Un día nos preguntamos: <span className="text-foreground font-medium">¿Por qué es tan fácil encontrar 
                  el último meme viral, pero tan difícil entender cómo funciona el universo?</span>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  ¿Por qué sabemos más de la vida de los famosos que de las ideas que moldearon la humanidad?
                </p>
                <p className="text-lg leading-relaxed font-medium text-foreground">
                  No era justo. El conocimiento profundo no debería ser aburrido, ni exclusivo, ni inaccesible.
                </p>
              </div>
            </section>

            {/* Lo que creemos */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Lo que creemos
              </h2>
              <div className="space-y-4">
                {creencias.map((creencia, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <creencia.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground text-lg pt-2">
                      {creencia.texto}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que construimos */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Lo que estamos construyendo
              </h2>
              <div className="text-muted-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  Un lugar donde el vino, las estrellas, la filosofía y las campanas tienen el mismo valor. 
                  Donde puedes debatir si el Cabernet supera al Malbec con la misma pasión que discutes 
                  el origen del universo.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  No somos una escuela. No somos una enciclopedia fría.
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  Somos una tribu de mentes inquietas.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-foreground/80">
                  Y si llegaste hasta aquí, probablemente ya eres parte de ella.
                </p>
              </div>
            </section>

            {/* Nuestra promesa */}
            <section className="mb-16 p-8 bg-foreground rounded-3xl text-primary-foreground">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Nuestra promesa
              </h2>
              <p className="text-lg leading-relaxed text-primary-foreground/80 mb-6">
                Cada cápsula, cada debate, cada Placer del Conocimiento está diseñado para hacerte 
                sentir algo que el scroll infinito nunca podrá darte:
              </p>
              <p className="text-xl md:text-2xl font-display font-medium italic">
                "Esa sensación de que el mundo es más fascinante de lo que pensabas."
              </p>
            </section>

            {/* Frase final */}
            <section className="text-center py-12 border-t border-border">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground italic mb-6">
                "Ninguna mente inquieta debería caminar sola."
              </p>
              <Link
                to="/#precios"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                Únete a la tribu
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Manifiesto;
