
import React from 'react';
import Location from '../components/Location';

const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Independiente */}
      <div className="bg-slate-900 pt-40 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Talara City" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-6 flex items-center gap-4">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-white/60">Ubicación</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 leading-tight">Cerca de <br/><span className="italic font-normal text-blue-400">todo</span></h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-light">
            Estratégicamente situados en Pariñas para facilitar sus desplazamientos corporativos o turísticos en la ciudad petrolera.
          </p>
        </div>
      </div>

      <div className="relative -mt-12 md:-mt-20 z-20 pb-24">
        <Location />
      </div>

      {/* Sección Informativa: Distancias */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Guía de Viaje</span>
                <h2 className="text-4xl font-bold font-serif italic text-slate-900 mt-4">Tiempos Estimados</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { place: "Plaza de Armas", time: "3 min", icon: "fa-solid fa-archway" },
                    { place: "Aeropuerto", time: "5 min", icon: "fa-solid fa-plane-up" },
                    { place: "Refinería Talara", time: "8 min", icon: "fa-solid fa-industry" },
                    { place: "Playa Lobitos", time: "15 min", icon: "fa-solid fa-water" }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center group hover:bg-blue-600 transition-all duration-500">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                            <i className={`${item.icon} text-2xl`}></i>
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-white transition-colors">{item.place}</h4>
                        <p className="text-blue-600 font-black text-xl mt-2 group-hover:text-blue-200 transition-colors">{item.time}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
