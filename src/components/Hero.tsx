
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
          aria-label="Habitación de lujo en Hostal Cesar Talara"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/40 to-blue-950/95"></div>
      </div>

      <div className="h-40 md:h-52 shrink-0"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full flex-grow flex flex-col justify-start pt-10 pb-48 md:pb-56">
        <div className="mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-xl border border-blue-400/30 text-blue-200 px-6 py-2.5 rounded-full font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs shadow-2xl">
            <i className="fa-solid fa-star text-blue-400 text-[10px]"></i> 
            Líder en Talara desde 1982
          </span>
        </div>
        
        <h1 className="flex flex-col gap-2 mb-10 md:mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[1] tracking-tighter">Tu mejor</span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-normal text-blue-400 leading-[1]">descanso en Talara</span>
        </h1>
        
        <p className="text-sm md:text-lg lg:text-xl text-white/70 mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Hospitalidad de primer nivel en el corazón de Pariñas. Descubra la combinación perfecta de seguridad, confort y tradición corporativa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => onNavigate && onNavigate('rooms')}
            className="w-full sm:w-auto group bg-blue-600 text-white px-12 py-5 rounded-full font-bold transition-all shadow-2xl hover:bg-blue-500 flex items-center justify-center gap-3 hover:scale-105"
          >
            Ver Habitaciones <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
          <a 
            href="https://wa.me/51989206171" 
            target="_blank"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-950 text-white px-12 py-5 rounded-full font-bold transition-all text-center flex items-center justify-center gap-3 hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i> Consultar Disponibilidad
          </a>
        </div>
      </div>

      <div className="relative z-20 w-full bg-white/5 backdrop-blur-2xl border-t border-white/10 py-12 hidden md:block mt-auto">
        <div className="max-w-7xl mx-auto px-8 flex justify-around items-center text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-shield-check text-blue-400 text-lg"></i> SEGURIDAD ACTIVA</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-wind text-blue-400 text-lg"></i> CLIMATIZADO</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-tower-broadcast text-blue-400 text-lg"></i> WIFI 6G</div>
          <div className="flex items-center gap-4 hover:text-white transition-colors"><i className="fa-solid fa-car-rear text-blue-400 text-lg"></i> PARKING EXCLUSIVO</div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
