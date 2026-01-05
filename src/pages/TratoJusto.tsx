import { Link } from "react-router-dom";
import { ArrowLeft, Check, X, Mail, Shield, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hacemos = [
  { 
    titulo: "Tu email", 
    texto: "Solo para enviarte cosas que valen la pena. Cero spam. Si nos pasamos, nos dices y paramos." 
  },
  { 
    titulo: "Tu actividad", 
    texto: "Aprendemos qué te gusta para mostrarte contenido relevante. No vendemos eso a nadie." 
  },
  { 
    titulo: "Tus debates", 
    texto: "Son tuyos. Lo que escribes en la comunidad te pertenece." 
  },
];

const noHacemos = [
  "Vender tus datos a terceros",
  "Llenar tu bandeja de correos inútiles",
  "Usar trucos oscuros para que pagues",
  "Hacerte sentir mal por usar la versión gratuita",
];

const TratoJusto = () => {
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
              Trato{" "}
              <span className="text-gradient-warm">Justo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Cómo nos relacionamos contigo (sin letra pequeña trampa).
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto">
            {/* Lo que hacemos */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Lo que hacemos con tus datos
                </h2>
              </div>
              
              <div className="space-y-4">
                {hacemos.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-2xl shadow-soft"
                  >
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que NO hacemos */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Lo que NO hacemos
                </h2>
              </div>
              
              <div className="bg-muted/30 rounded-3xl p-6 md:p-8">
                <div className="space-y-4">
                  {noHacemos.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Nuestra filosofía */}
            <section className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Nuestra filosofía
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos que la confianza se construye siendo transparentes. Si algo cambia, te avisamos. 
                Si tienes dudas, nos escribes. Somos personas, no un muro de "términos y condiciones" 
                de 47 páginas.
              </p>
            </section>

            {/* ¿Quieres irte? */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  ¿Quieres irte?
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sin drama. Puedes borrar tu cuenta cuando quieras y nos llevamos tus datos con ella. 
                Aunque nos dará pena verte partir. 🥺
              </p>
            </section>

            {/* Contacto */}
            <section className="text-center p-8 bg-foreground rounded-3xl text-primary-foreground">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                ¿Preguntas?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Escríbenos y te respondemos como humanos.
              </p>
              <a
                href="mailto:mdco.ocean@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                mdco.ocean@gmail.com
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TratoJusto;
