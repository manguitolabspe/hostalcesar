
import React from 'react';

interface HeroProps {
  onNavigate?: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <header id="inicio" className="relative min-h-[900px] h-[100dvh] flex flex-col overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: 'url("/assets/img/hero-home.webp")' }}
          role="img"
          aria-label="Hostal Cesar Talara - Entrada al Norte Peruano"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/40 to-blue-950/95"></div>
      </div>

      <div className="h-40 md:h-52 shrink-0"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full flex-grow flex flex-col justify-start pt-10 pb-48 md:pb-56">
        <div className="mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-xl border border-blue-400/30 text-blue-200 px-6 py-2.5 rounded-full font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs shadow-2xl">
            <i className="fa-solid fa-location-crosshairs text-blue-400 text-[10px]"></i> 
            A 5 MINUTOS DEL AEROPUERTO DE TALARA
          </span>
        </div>
        
        <h1 className="flex flex-col gap-2 mb-10 md:mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[1] tracking-tighter">La puerta de</span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-normal text-blue-400 leading-[1]">entrada al norte</span>
        </h1>
        
        <p className="text-sm md:text-lg lg:text-xl text-white/70 mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Desde 1982, el hogar de viajeros corporativos y turistas que buscan seguridad, confort y la mejor ubicación en Talara antes de llegar al paraíso.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => onNavigate && onNavigate('rooms')}
            className="w-full sm:w-auto group bg-blue-600 text-white px-12 py-5 rounded-full font-bold transition-all shadow-2xl hover:bg-blue-500 flex items-center justify-center gap-3 hover:scale-105"
          >
            Ver Habitaciones <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
          <a 
            href="https://wa.me/51989206171?text=Hola,%20vengo%20de%20la%20web%20y%20quisiera%20consultar%20disponibilidad" 
            target="_blank"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-950 text-white px-12 py-5 rounded-full font-bold transition-all text-center flex items-center justify-center gap-3 hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i> Reservar Ahora
          </a>
        </div>
      </div>

      <div className="relative z-20 w-full bg-white/5 backdrop-blur-2xl border-t border-white/10 py-12 hidden md:block mt-auto">
        <div className="max-w-7xl mx-auto px-8 flex justify-around items-center text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-plane-arrival text-blue-400 text-lg"></i> RECOJO AEROPUERTO</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-shield-halved text-blue-400 text-lg"></i> COCHERA SEGURA</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-utensils text-blue-400 text-lg"></i> BAR - COMEDOR</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-wifi text-blue-400 text-lg"></i> FIBRA ÓPTICA</div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
