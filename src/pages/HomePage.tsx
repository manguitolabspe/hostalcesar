
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
      
      {/* 1. Vista Previa Habitaciones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Descanso de Clase Mundial</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900">Nuestras <br/>Habitaciones</h2>
                </div>
                <Button 
                    variant="outline" 
                    onClick={() => onNavigate('rooms')}
                    className="md:mb-2 border-slate-200 text-slate-700 hover:border-blue-600"
                >
                    Ver Todas las Habitaciones
                </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div 
                    onClick={() => onNavigate('rooms')}
                    className="h-[500px] rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-xl"
                >
                    <img src="/assets/img/room-matrimonial.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Matrimonial Hostal Cesar" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-blue-400 mb-2">Más Popular</p>
                        <h3 className="text-3xl font-bold font-serif">Matrimonial Superior</h3>
                    </div>
                </div>
                <div className="grid gap-8">
                    <div 
                        onClick={() => onNavigate('rooms')}
                        className="h-[235px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg"
                    >
                        <img src="/assets/img/room-simple.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Simple Hostal Cesar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold font-serif">Simple Corporativa</h3>
                        </div>
                    </div>
                    <div 
                        onClick={() => onNavigate('rooms')}
                        className="h-[235px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg"
                    >
                        <img src="/assets/img/room-double.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Habitación Doble Hostal Cesar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold font-serif">Doble Superior</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Vista Previa Servicios */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img src="/assets/img/service-dining.webp" className="w-full h-full object-cover" alt="Comedor Hostal Cesar Talara" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                        <i className="fa-solid fa-wifi text-blue-600 text-5xl mb-4"></i>
                        <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">Fibra Óptica en<br/>todo el hotel</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Confort Total</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900 leading-tight">Servicios Pensados <br/>en Usted</h2>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                        Contamos con cochera privada, aire acondicionado, bar-comedor y atención las 24 horas para que su única preocupación sea descansar.
                    </p>
                    <div className="pt-6">
                        <Button variant="secondary" onClick={() => onNavigate('services')}>Explorar Servicios</Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Vista Previa Ubicación */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Ubicación Estratégica</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-slate-900 leading-tight">En el Corazón <br/>de Talara</h2>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                        Situados a solo minutos del aeropuerto y de los principales centros corporativos de Pariñas.
                    </p>
                    <div className="pt-6">
                        <Button variant="outline" onClick={() => onNavigate('location')}>Ver Mapa y Distancias</Button>
                    </div>
                </div>
                <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" onClick={() => onNavigate('location')}>
                    <img src="/assets/img/location-map-bg.webp" className="w-full h-full object-cover" alt="Ubicación Hostal Cesar Talara" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full font-bold shadow-xl border border-blue-100 flex items-center gap-3">
                            <i className="fa-solid fa-location-dot text-blue-600"></i>
                            Explorar Ubicación
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif italic">Haga su reserva hoy</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 font-light">
            Sienta la calidez y seguridad que solo Hostal Cesar le ofrece en Talara.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/51989206171" 
              target="_blank"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i> Reservar por WhatsApp
            </a>
            <Button 
              variant="secondary"
              onClick={() => onNavigate('contact')}
              className="bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition-all text-center"
            >
              Ir a Contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
