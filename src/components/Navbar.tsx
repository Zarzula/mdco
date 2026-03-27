import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/maraton-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Maratón de Conocimiento" className="h-10 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Características
          </Link>
          <Link to="/#placeres" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Placeres
          </Link>
          <Link to="/#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Precios
          </Link>
        </div>
        
        <Button variant="hero" size="default" className="opacity-80 cursor-default" disabled>
          📱 App Próximamente
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
