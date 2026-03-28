import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, X, UserCircle, LogOut, Star, Trophy } from "lucide-react";
import logo from "@/assets/maraton-logo.png";
import { placeres } from "@/components/Topics";
import { placeresContent } from "@/data/placeres-content";
import { enciclopediaContent } from "@/data/enciclopedia-content";
import { useAuth } from "@/hooks/use-auth";

interface SearchResult {
  title: string;
  type: string;
  link: string;
}

function getAllSearchableItems(): SearchResult[] {
  const items: SearchResult[] = [];
  placeres.filter(p => p.status === "activo").forEach(p => {
    items.push({ title: p.title, type: "Placer", link: `/placer/${p.slug}` });
  });
  Object.values(placeresContent).forEach(p => {
    p.articles.forEach(a => {
      items.push({ title: a.title, type: p.title, link: `/placer/${p.slug}` });
    });
  });
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
  const [showProfile, setShowProfile] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formError, setFormError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { user, isLoggedIn, register, logout } = useAuth();
  const allItems = getAllSearchableItems();

  const results = query.length >= 2
    ? allItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  const handleSelect = (link: string) => {
    setSearchOpen(false);
    setQuery("");
    navigate(link);
  };

  const handleRegister = () => {
    if (!formName.trim() || !formEmail.trim() || !formPassword.trim()) {
      setFormError("Completa todos los campos");
      return;
    }
    if (formPassword.length < 4) {
      setFormError("La contraseña debe tener al menos 4 caracteres");
      return;
    }
    register(formName.trim(), formEmail.trim());
    setShowLogin(false);
    setFormName("");
    setFormEmail("");
    setFormPassword("");
    setFormError("");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Maratón de Conocimiento" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Características</Link>
          <Link to="/#placeres" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Placeres</Link>
          <Link to="/#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Precios</Link>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setSearchOpen(true)} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Search className="w-5 h-5" />
          </button>

          {isLoggedIn && user ? (
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">{user.name.split(" ")[0]}</span>
              <span className="text-xs text-primary font-semibold hidden sm:block">{user.points} pts</span>
            </button>
          ) : (
            <Button variant="hero" size="default" onClick={() => setShowLogin(true)}>
              <UserCircle className="w-4 h-4" />
              Ingresar
            </Button>
          )}
        </div>
      </div>

      {/* Dropdown de perfil */}
      {showProfile && user && (
        <div className="absolute right-6 top-16 mt-1 w-72 bg-card rounded-2xl shadow-2xl border border-border p-5 z-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-display font-bold text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-muted/50 rounded-xl p-3 text-center">
              <Star className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{user.points}</p>
              <p className="text-xs text-muted-foreground">Puntos</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3 text-center">
              <Trophy className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">{user.level}</p>
              <p className="text-xs text-muted-foreground">Nivel</p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mb-4 space-y-1">
            <p>Plan: <span className="font-medium text-foreground capitalize">{user.plan}</span></p>
            <p>Cápsulas leídas: <span className="font-medium text-foreground">{user.capsulasLeidas}</span></p>
            <p>Debates participados: <span className="font-medium text-foreground">{user.debatesParticipados}</span></p>
          </div>

          <button
            onClick={() => { logout(); setShowProfile(false); }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      )}

      {/* Click outside to close profile */}
      {showProfile && <div className="fixed inset-0 z-40" onClick={() => setShowProfile(false)} />}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => { setSearchOpen(false); setQuery(""); }}>
          <div className="container mx-auto px-6 pt-20" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar temas, artículos, placeres..." className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base" />
                <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
              </div>
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto">
                  {results.map((r, i) => (
                    <button key={i} onClick={() => handleSelect(r.link)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left">
                      <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                        <p className="text-xs text-muted-foreground">{r.type}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {query.length >= 2 && results.length === 0 && (<div className="p-6 text-center"><p className="text-muted-foreground text-sm">No se encontraron resultados para "{query}"</p></div>)}
              {query.length < 2 && (<div className="p-6 text-center"><p className="text-muted-foreground text-sm">Escribe al menos 2 caracteres para buscar</p></div>)}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Login/Registro */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => { setShowLogin(false); setFormError(""); }}>
          <div className="bg-card rounded-3xl max-w-md w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Bienvenido a MDCO</h2>
              <p className="text-muted-foreground text-sm">Regístrate gratis para participar en debates, votar y ganar puntos.</p>
            </div>

            {formError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                {formError}
              </div>
            )}

            <div className="space-y-3 mb-6">
              <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="¿Cómo te gustaría que te llamemos?" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} placeholder="Tu email" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="password" value={formPassword} onChange={(e) => setFormPassword(e.target.value)} placeholder="Crea una contraseña" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <Button variant="hero" size="xl" className="w-full mb-3" onClick={handleRegister}>
              Crear cuenta gratis
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-2">
              Al registrarte ganas <span className="font-semibold text-primary">+10 puntos</span> de bienvenida
            </p>

            <button onClick={() => { setShowLogin(false); setFormError(""); }} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2 mt-3">
              Seguir explorando sin cuenta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
