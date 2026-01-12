
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
              <img 
                src="/assets/img/about-legacy.webp" 
                alt="Legado Hostal Cesar Talara" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                width="1000"
                height="1200"
              />
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            
            {/* Medalla de Trayectoria - Ubicada abajo para visibilidad */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] z-20 border border-blue-50 animate-fade-in-up">
              <div className="text-center">
                <p className="text-blue-600 font-bold text-6xl font-serif leading-none">40+</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">Años de Tradición</p>
              </div>
            </div>

            {/* Decoración de Fondo */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-50 rounded-full -z-10 opacity-50 blur-3xl"></div>
          </div>
          
          <div className="space-y-10">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block underline underline-offset-8 decoration-blue-100">Nuestra Trayectoria</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 mb-8 leading-[1.1] text-slate-900 font-serif italic">Hospitalidad con Historia</h2>
              <div className="w-24 h-1.5 bg-blue-500 rounded-full mb-10"></div>
            </div>

            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Desde su apertura en <span className="font-bold text-blue-900">1982</span>, Hostal Cesar ha sido el referente de descanso y seguridad para el sector industrial y turístico de Talara.
              </p>
              <p>
                Lo que comenzó como un proyecto familiar, hoy es la <span className="italic font-normal">Administradora Hotelera Cesar SAC</span>, una empresa que combina la calidez tradicional con estándares modernos de servicio corporativo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 font-serif text-xl italic">Misión</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Garantizar una estancia segura y reconfortante a través de un servicio personalizado disponible las 24 horas del día.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 font-serif text-xl italic">Visión</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Ser el hotel líder en Piura, reconocidos por nuestra integridad, higiene impecable y compromiso humano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
