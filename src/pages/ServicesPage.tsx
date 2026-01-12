
import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Independiente */}
      <div className="bg-slate-900 pt-40 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/assets/img/service-dining.webp" className="w-full h-full object-cover" alt="Servicios Hostal Cesar" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-6 flex items-center gap-4">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-white/60">Nuestros Servicios</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 leading-tight">Más que un <br/><span className="italic font-normal text-blue-400">hospedaje</span></h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-light">
            Complementamos su estancia con una selección de servicios diseñados para que no le falte nada durante su visita a Talara.
          </p>
        </div>
      </div>

      <div className="relative -mt-12 md:-mt-20 z-20">
        <Services />
      </div>

      {/* Sección Corporativa Adicional */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                
                <div className="flex-1 space-y-8 relative z-10">
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Atención a Empresas</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">Convenios Corporativos</h2>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                        Ofrecemos tarifas preferenciales y facturación directa para delegaciones de trabajadores, ingenieros y equipos técnicos en la zona industrial de Talara.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                            <i className="fa-solid fa-file-invoice-dollar text-blue-400"></i>
                            <span className="text-sm font-bold">Facturación Inmediata</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                            <i className="fa-solid fa-user-tie text-blue-400"></i>
                            <span className="text-sm font-bold">Atención Personalizada</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full relative z-10">
                    <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                        <img src="/assets/img/og-image.webp" className="w-full h-full object-cover" alt="Empresas en Talara" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
