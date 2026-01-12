
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-slate-900 pt-40 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
              src="/assets/img/about-legacy.webp" 
              className="w-full h-full object-cover" 
              alt="Historia Hostal Cesar" 
              width="1000"
              height="1200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <nav className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-8 flex items-center justify-center md:justify-start gap-4">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-white/60">Quiénes Somos</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-8 leading-tight">40 Años de <br/><span className="italic font-normal text-blue-400">Tradición</span></h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed font-light">
            Desde 1982, Hostal Cesar ha sido el hogar fuera de casa para miles de viajeros en Talara, Piura.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-4xl font-bold text-slate-900 font-serif italic mb-10">Legado y Evolución Corporativa</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Somos la <strong>Administradora Hotelera Cesar SAC</strong>, una institución dedicada a la excelencia en el servicio de hotelería, avalada por el Ministerio de Industria y Turismo.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Nuestras puertas abrieron en <strong>1982</strong> con 18 habitaciones originales. Gracias a la confianza depositada por empresas líderes de la región, crecimos hasta consolidar nuestras actuales <strong>22 habitaciones premium</strong>, manteniendo siempre el compromiso con la higiene y la atención personalizada.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Hoy, bajo una nueva constitución legal desde 2019, seguimos liderando la hospitalidad en el corazón de Pariñas, integrando tecnologías de seguridad y confort para el viajero moderno.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 bg-blue-50 rounded-[3rem] border border-blue-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 font-serif mb-4 italic">Nuestra Misión</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Brindar un refugio de calidad con atención personalizada, garantizando la seguridad y optimizando servicios de cafetería, bar y cochera 24/7.
                </p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4 italic">Nuestra Visión</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consolidarnos como el referente de hospitalidad en Piura, elevando progresivamente la calidad humana de nuestro equipo y la modernidad de nuestra infraestructura.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="/assets/img/service-events.webp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Instalaciones Hostal Cesar" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50 hidden md:block">
                <p className="text-5xl font-bold text-blue-600 font-serif italic">40+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-2">Años de Confianza</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white shadow-2xl">
              <h3 className="text-3xl font-bold font-serif mb-10 text-blue-400 italic">Valores Fundamentales</h3>
              <ul className="space-y-10">
                {[
                  { icon: "fa-shield-heart", title: "Buen Trato", desc: "Capacitación constante para que se sienta como en casa." },
                  { icon: "fa-bolt", title: "Seguridad Activa", desc: "Iluminación inteligente y vigilancia permanente 24h." },
                  { icon: "fa-broom", title: "Limpieza Superior", desc: "Protocolos diarios de desinfección profunda." }
                ].map((val, i) => (
                  <li key={i} className="flex gap-8">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center shrink-0 border border-blue-600/30">
                      <i className={`fa-solid ${val.icon} text-blue-400 text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 font-serif">{val.title}</h4>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">{val.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
