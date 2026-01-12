
import React from 'react';

const mainServices = [
  { name: 'Friobar', icon: 'fa-solid fa-snowflake' },
  { name: 'TV con Cable', icon: 'fa-solid fa-tv' },
  { name: 'Aire Acondicionado', icon: 'fa-solid fa-wind' },
  { name: 'Agua Caliente', icon: 'fa-solid fa-droplet' },
  { name: 'Cochera Propia', icon: 'fa-solid fa-car-side' },
  { name: 'Wifi Fibra Óptica', icon: 'fa-solid fa-wifi' },
  { name: 'Camas Amplias', icon: 'fa-solid fa-bed' },
  { name: 'Seguridad 24h', icon: 'fa-solid fa-shield-halved' },
];

const extraServices = [
  {
    title: 'Comedor & Bar',
    desc: 'Espacios acogedores para disfrutar de sus desayunos y momentos de relajo con atención cálida.',
    img: '/assets/img/service-dining.webp'
  },
  {
    title: 'Alquiler de Cochera',
    desc: 'Contamos con espacios amplios y seguros para vehículos externos bajo vigilancia permanente.',
    img: '/assets/img/service-parking.webp'
  },
  {
    title: 'Eventos y Reuniones',
    desc: 'Instalaciones equipadas para sus sesiones corporativas, capacitaciones o eventos especiales.',
    img: '/assets/img/service-events.webp'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Experiencia Hostal Cesar</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif italic text-slate-900">Nuestros Servicios</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Harán grata tu estadía con detalles pensados en tu tranquilidad y comodidad absoluta.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {mainServices.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <p className="font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wide">{service.name}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {extraServices.map((item, i) => (
            <div key={i} className="relative group rounded-[2.5rem] overflow-hidden h-[450px] shadow-xl">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h4 className="text-2xl font-bold font-serif mb-2">{item.title}</h4>
                <p className="text-sm text-blue-100/90 leading-relaxed mb-6">{item.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors cursor-pointer">
                  Consultar Disponibilidad <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
