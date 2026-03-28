import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, BookOpen, Compass, Lightbulb, Search, User, X, Menu } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Inicio", path: "/", angle: 0 },
  { icon: Compass, label: "Placeres", path: "/#placeres", angle: 60 },
  { icon: BookOpen, label: "Enciclopedia", path: "/enciclopedia", angle: 120 },
  { icon: Lightbulb, label: "Cápsulas", path: "/capsulas", angle: 180 },
  { icon: Search, label: "Blog", path: "/blog", angle: 240 },
  { icon: User, label: "Niveles", path: "/niveles", angle: 300 },
];

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const radius = 90;

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const id = path.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu items */}
      <div className="relative z-50">
        {menuItems.map((item, index) => {
          const angleRad = ((item.angle - 90) * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="absolute flex items-center justify-center group"
              style={{
                width: 48,
                height: 48,
                left: "50%",
                top: "50%",
                transform: isOpen
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : "translate(-50%, -50%) scale(0)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${index * 0.05}s`,
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0f1729]/90 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-200">
                <item.icon className="w-5 h-5 text-cyan-300" />
              </div>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0f1729] border border-cyan-500/30 rounded text-[10px] text-cyan-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Center button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-red-500/20 border-red-400/50 hover:bg-red-500/30 rotate-180"
              : "bg-[#0f1729]/90 border-cyan-400/50 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          } border-2 backdrop-blur-md`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-red-300" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-300" />
          )}
          {/* Pulse ring when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" />
          )}
        </button>
      </div>
    </div>
  );
};

export default RadialMenu;
