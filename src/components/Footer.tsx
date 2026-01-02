import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Curiosa
              </span>
            </a>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Microaprendizaje diario sobre los temas que te apasionan. 
              Conecta con una comunidad de mentes curiosas.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Características</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Temas</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Precios</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Para empresas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Compañía
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Sobre nosotros</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Privacidad</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 Curiosa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
