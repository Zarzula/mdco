import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, X, UserCircle } from "lucide-react";
import logo from "@/assets/maraton-logo.png";
import { placeres } from "@/components/Topics";
import { placeresContent } from "@/data/placeres-content";
import { enciclopediaContent } from "@/data/enciclopedia-content";

interface SearchResult {
  title: string;
  type: string;
  link: string;
}

function getAllSearchableItems(): SearchResult[] {
  const items: SearchResult[] = [];

  // Placeres activos
  placeres.filter(p => p.status === "activo").forEach(p => {
    items.push({ title: p.title, type: "Placer", link: `/placer/${p.slug}` });
  });

  // Artículos de cada placer
  Object.values(placeresContent).forEach(p => {
    p.articles.forEach(a => {
      items.push({ title: a.title, type: p.title, link: `/placer/${p.slug}` });
    });
  });

  // Artículos de la enciclopedia
  Object.values(enciclopediaContent).forEach(s => {
    items.push({ title: s.titulo, type: "Enciclopedia", link: `/enciclopedia/${s.slug}` });
    s.articles.forEach(a => {
      items.push({ title: a.title, type: s.titulo, link: `/enciclopedia/${s.slug}` });
    });
  });

  return items;
}

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const allItems = getAllSearchableItems();

  const results = query.length >= 2
    ? allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSelect = (link: string) => {
    setSearchOpen(false);
    setQuery("");
    navigate(link);
  };

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

        <div className="flex items-center gap-3">
          {/* Botón de búsqueda */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Search className="w-5 h-5" />
          </button>

          <Button variant="hero" size="default" onClick={() => setShowLogin(true)}>
            <UserCircle className="w-4 h-4" />
            Ingresar
          </Button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => { setSearchOpen(false); setQuery(""); }}>
          <div className="container mx-auto px-6 pt-20" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar temas, artículos, placeres..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                />
                <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Resultados */}
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto">
                  {results.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(r.link)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left"
                    >
                      <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                        <p className="text-xs text-muted-foreground">{r.type}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-muted-foreground text-sm">No se encontraron resultados para "{query}"</p>
                </div>
              )}

              {query.length < 2 && (
                <div className="p-6 text-center">
                  <p className="text-muted-foreground text-sm">Escribe al menos 2 caracteres para buscar</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Modal de Login/Registro */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowLogin(false)}>
          <div className="bg-card rounded-3xl max-w-md w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Bienvenido a MDCO</h2>
              <p className="text-muted-foreground text-sm">Regístrate gratis para participar en debates, votar en encuestas y ser parte de la comunidad.</p>
            </div>

            <div className="space-y-3 mb-6">
              <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="email" placeholder="Tu email" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="password" placeholder="Contraseña" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <Button variant="hero" size="xl" className="w-full mb-3" onClick={() => setShowLogin(false)}>
              Crear cuenta gratis
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-3">¿Ya tienes cuenta?</p>
              <button className="text-sm text-primary font-medium hover:underline">Iniciar sesión</button>
            </div>

            <button onClick={() => setShowLogin(false)} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2 mt-3">
              Seguir explorando sin cuenta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
