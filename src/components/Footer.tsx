import logo from "@/assets/maraton-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Maratón de Conocimiento" className="h-12 w-auto" />
            </a>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Aprende sobre diversos temas de manera entretenida y conecta con otros 
              apasionados a través de debates y comunidades.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Características</a></li>
              <li><a href="#placeres" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Placeres</a></li>
              <li><a href="#precios" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Precios</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Enciclopedia</a></li>
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
            © 2025 Maratón de Conocimiento. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
