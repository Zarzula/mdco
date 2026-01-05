import { Link } from "react-router-dom";
import logo from "@/assets/maraton-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        {/* Frase destacada */}
        <div className="text-center mb-12 pb-12 border-b border-primary-foreground/10">
          <p className="font-display text-2xl md:text-3xl text-primary-foreground font-medium italic max-w-2xl mx-auto">
            "Ninguna mente inquieta debería caminar sola."
          </p>
          <p className="text-primary/80 mt-3 font-medium">
            Únete al debate.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Maratón de Conocimiento" className="h-12 w-auto" />
            </Link>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Una tribu de mentes curiosas explorando el conocimiento juntos. 
              Porque aprender es mejor en comunidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              <li><Link to="/#features" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Características</Link></li>
              <li><Link to="/#placeres" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Placeres</Link></li>
              <li><Link to="/#precios" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Precios</Link></li>
              <li><Link to="/enciclopedia" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Enciclopedia</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              El Movimiento
            </h4>
            <ul className="space-y-3">
              <li><Link to="/manifiesto" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Nuestro Manifiesto</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Chispas de Sabiduría</Link></li>
              <li><Link to="/trato-justo" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Trato Justo</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 Maratón de Conocimiento. Todos los derechos reservados.
          </p>
          <a 
            href="mailto:mdco.ocean@gmail.com" 
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
          >
            mdco.ocean@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
