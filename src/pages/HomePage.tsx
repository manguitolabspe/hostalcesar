
import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/ui/Button';

interface HomePageProps {
  onNavigate: (view: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      <Hero onNavigate={onNavigate} />
      
      {/* 1. SECCIÓN DE MARKETING: EL HUB DEL NORTE (Captura de Leads Turísticos) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">Punto Estratégico</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900 leading-[1.1]">Tu base para <br/><span className="text-blue-600">explorar el Norte</span></h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">
                        ¿Llegas al Aeropuerto de Talara? Hostal Cesar es el punto de conexión ideal. Ubicados en el corazón de Pariñas, te ofrecemos la seguridad y el confort necesario antes de aventurarte a los distritos mágicos de Piura.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                <i className="fa-solid fa-water"></i>
                            </div>
                            <span className="text-sm font-bold text-slate-700">Lobitos (15 min)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                <i className="fa-solid fa-umbrella-beach"></i>
                            </div>
                            <span className="text-sm font-bold text-slate-700">Máncora (1h 15min)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                <i className="fa-solid fa-fire-burner"></i>
                            </div>
                            <span className="text-sm font-bold text-slate-700">La Brea (20 min)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                <i className="fa-solid fa-van-shuttle"></i>
                            </div>
                            <span className="text-sm font-bold text-slate-700">El Alto / Órganos</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button 
                            variant="primary" 
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-5 shadow-2xl hover:scale-105 transition-transform"
                            rightIcon={<i className="fa-solid fa-arrow-right"></i>}
                        >
                            Consultar Tarifas para Turistas
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                        <img src="/assets/img/tourism-hub.webp" className="w-full h-full object-cover" alt="Turismo en Talara" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10">
                            <p className="text-white text-xl font-serif italic">"El descanso perfecto después del surf y el sol."</p>
                        </div>
                    </div>
                    {/* Elemento de diseño decorativo */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full -z-0 opacity-10 blur-3xl"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. HABITACIONES (Con enfoque en valor) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block underline underline-offset-8 decoration-blue-200">Alojamiento Premium</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900">Confort <br/>Garantizado</h2>
                </div>
                <Button 
                    variant="outline" 
                    onClick={() => onNavigate('rooms')}
                    className="md:mb-2 border-slate-200 text-slate-700 hover:border-blue-600"
                >
                    Ver Todas las Opciones
                </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div 
                    onClick={() => onNavigate('rooms')}
                    className="h-[500px] rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-xl border border-white"
                >
                    <img src="/assets/img/room-matrimonial.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Matrimonial Hostal Cesar" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                        <div className="flex gap-2 mb-3">
                            <span className="bg-blue-600 text-white text-[8px] font-black uppercase px-2 py-1 rounded">Top Choice</span>
                            <span className="bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase px-2 py-1 rounded">King Size</span>
                        </div>
                        <h3 className="text-3xl font-bold font-serif">Matrimonial Superior</h3>
                        <p className="text-blue-200 text-sm mt-2 font-light">Ideal para parejas en ruta al norte.</p>
                    </div>
                </div>
                <div className="grid gap-8">
                    <div 
                        onClick={() => onNavigate('rooms')}
                        className="h-[235px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg border border-white"
                    >
                        <img src="/assets/img/room-simple.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Simple Hostal Cesar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold font-serif">Simple Corporativa</h3>
                            <p className="text-blue-200 text-[10px] mt-1">Con escritorio y Wifi de alta velocidad.</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => onNavigate('rooms')}
                        className="h-[235px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg border border-white"
                    >
                        <img src="/assets/img/room-double.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Doble Hostal Cesar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold font-serif">Doble Superior</h3>
                            <p className="text-blue-200 text-[10px] mt-1">Perfecta para amigos o colegas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. SERVICIOS (Enfoque en Seguridad y Conveniencia) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                        <img src="/assets/img/service-dining.webp" className="w-full h-full object-cover" alt="Comedor Hostal Cesar Talara" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-[3rem] shadow-2xl hidden md:block text-white">
                        <i className="fa-solid fa-car-shield text-4xl mb-4"></i>
                        <p className="font-bold uppercase tracking-widest text-[10px]">Cochera Privada<br/>Seguridad 24/7</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Más que Dormir</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900 leading-tight">Servicios de <br/>Clase Ejecutiva</h2>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                        Entendemos las necesidades del viajero de hoy. Ofrecemos cochera amplia para camionetas, aire acondicionado para el calor del norte y un bar-comedor para cerrar el día con broce de oro.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-5 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                            <i className="fa-solid fa-wifi text-blue-500"></i> Wifi Fibra Óptica
                        </span>
                        <span className="px-5 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                            <i className="fa-solid fa-snowflake text-blue-500"></i> Aire Acondicionado
                        </span>
                        <span className="px-5 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                            <i className="fa-solid fa-mug-hot text-blue-500"></i> Desayunos
                        </span>
                    </div>
                    <div className="pt-6">
                        <Button variant="secondary" onClick={() => onNavigate('services')}>Explorar Servicios</Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FINAL CTA: CAPTURA DE LEADS AGRESIVA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600 skew-x-12"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Tarifas Especiales</span>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-serif italic">¿Vienes en Grupo o <br/>por Trabajo?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
            Ofrecemos convenios corporativos y descuentos especiales para delegaciones turísticas. Contáctanos y obtén una cotización personalizada en menos de 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/51989206171?text=Hola,%20quisiera%20una%20cotizacion%20para%20un%20grupo/empresa" 
              target="_blank"
              className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i> Cotizar por WhatsApp
            </a>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white/20 text-white hover:bg-white hover:text-slate-900 px-12 py-5 rounded-full font-bold text-lg transition-all"
            >
              Formulario de Reserva
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 opacity-40 grayscale">
            <i className="fa-brands fa-cc-visa text-4xl"></i>
            <i className="fa-brands fa-cc-mastercard text-4xl"></i>
            <i className="fa-brands fa-cc-diners-club text-4xl"></i>
            <i className="fa-solid fa-file-invoice text-4xl"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
