
import React from 'react';
import Rooms from '../components/Rooms';

const RoomsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Independiente */}
      <div className="bg-slate-900 pt-40 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/assets/img/hero-home.webp" className="w-full h-full object-cover" alt="Ambiente Hotel Cesar" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-6 flex items-center gap-4">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-white/60">Nuestras Habitaciones</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 leading-tight">Espacios de <br/><span className="italic font-normal text-blue-400">bienestar</span></h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-light">
            Desde estancias corporativas hasta escapadas familiares, cada una de nuestras habitaciones ha sido diseñada para ofrecer la máxima tranquilidad en el corazón de Talara.
          </p>
        </div>
      </div>

      {/* Grid de Habitaciones */}
      <div className="relative -mt-12 md:-mt-20 z-20 pb-24">
        <Rooms />
      </div>

      {/* Sección Extra: Garantías de Estancia */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                        <i className="fa-solid fa-broom"></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Limpieza Rigurosa</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Protocolos diarios de desinfección y mantenimiento para garantizar un ambiente impecable en cada rincón.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                        <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Seguridad Total</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Contamos con vigilancia las 24 horas y sistemas de iluminación inteligente para su tranquilidad absoluta.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Atención 24/7</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Nuestro equipo de recepción está siempre disponible para asistirle en cualquier requerimiento especial.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">Información Útil</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 font-serif italic">Preguntas Frecuentes</h2>
            </div>
            
            <div className="space-y-6">
                {[
                    { q: "¿Cuál es el horario de Check-in y Check-out?", a: "El ingreso (Check-in) es a partir de las 12:00 PM y la salida (Check-out) es hasta las 11:00 AM del día siguiente." },
                    { q: "¿Cuentan con cochera privada?", a: "Sí, disponemos de una amplia cochera propia y segura con vigilancia permanente para todos nuestros huéspedes." },
                    { q: "¿Las habitaciones tienen aire acondicionado?", a: "Sí, contamos con habitaciones climatizadas diseñadas para ofrecer el mayor confort frente al clima de Talara." }
                ].map((faq, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-blue-50 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {faq.q}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed pl-5">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
