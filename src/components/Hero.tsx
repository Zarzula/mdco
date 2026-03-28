import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX, Zap } from "lucide-react";
import logo from "@/assets/maraton-logo.png";
import appDemo from "@/assets/app-demo.mp4";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Glow orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.02] to-transparent h-[200%] animate-[scanline_8s_linear_infinite]" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Plataforma de conocimiento
              </span>
            </div>

            {/* Main title - BIG and BOLD */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              <span className="text-white">MARATÓN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500">
                DE CONOCIMIENTO
              </span>
            </h1>

            {/* Subtitle with glow */}
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400/90 tracking-wide">
              APRENDE · CONECTA · CRECE
            </h2>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Aprende sobre tus pasiones cada día y conecta con comunidades de apasionados.
              Enciclopedia, debates, cápsulas diarias y mucho más.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('placeres')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-[#0a0e1a] font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explorar Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all duration-300"
              >
                Ver Características
              </button>
            </div>

            {/* Stats with glow borders */}
            <div className="flex items-center gap-6 pt-6">
              {[
                { value: "6+", label: "Placeres" },
                { value: "40+", label: "Artículos" },
                { value: "∞", label: "Debates" },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4 py-3 bg-white/[0.03] border border-cyan-500/10 rounded-xl backdrop-blur-sm">
                  <p className="font-display text-2xl font-bold text-cyan-300">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Demo with futuristic frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-teal-500/20 rounded-3xl blur-2xl" />
              {/* Video frame */}
              <div className="relative border-2 border-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <video
                  src={appDemo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full max-w-lg rounded-2xl"
                />
                {/* Sound button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 p-3 bg-[#0a0e1a]/70 border border-cyan-500/30 rounded-full text-cyan-300 hover:bg-cyan-500/20 transition-colors backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  );
};

export default Hero;
