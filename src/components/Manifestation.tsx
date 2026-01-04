import { Sparkles, BookOpen, Download } from "lucide-react";

const Manifestation = () => {
  const handleDownload = () => {
    // Opción 1: PDF en tu proyecto (public/cuaderno-manifestacion.pdf)
    window.open('/cuaderno-manifestacion.pdf', '_blank');
    
    // Opción 2: Link externo (Google Drive, Dropbox, etc.)
    // window.open('https://drive.google.com/file/d/TU_ID/view', '_blank');
    
    // Opción 3: Link de pago (Gumroad, PayPal, etc.)
    // window.open('https://tuusuario.gumroad.com/l/cuaderno', '_blank');
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
                🔥 70% OFF
              </span>
