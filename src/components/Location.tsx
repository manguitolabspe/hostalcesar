
import React from 'react';

const Location: React.FC = () => {
  // URL de navegación directa a Hotel Cesar en Talara
  const googleMapsRouteUrl = "https://www.google.com/maps/dir/?api=1&destination=Hotel+Cesar+Talara&destination_place_id=ChIJc1cpHxdENpAR5N1JzNLFH28";

  return (
    <section id="ubicacion" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full translate-x-1/2 -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm flex items-center gap-3">
              <i className="fa-solid fa-location-dot"></i> Ubicación Estratégica
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 font-serif italic text-slate-900 leading-tight">En el corazón de Talara</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Encuéntrenos en la zona más dinámica y accesible de Pariñas. Nuestra ubicación privilegiada le permite estar a pocos minutos de los centros corporativos, comerciales y recreativos más importantes.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md shrink-0">
                  <i className="fa-solid fa-map-pin text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl font-serif">Nuestra Dirección</h4>
                  <p className="text-slate-500 mt-1">Av. Salaverry G 9, Pariñas - Talara, Piura</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md shrink-0">
                  <i className="fa-solid fa-compass text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl font-serif">Puntos de Interés</h4>
                  <ul className="text-slate-500 mt-3 space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <i className="fa-solid fa-plane text-blue-400 text-xs"></i> 
                      Aeropuerto Víctor Montes Arias (05 min)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <i className="fa-solid fa-umbrella-beach text-blue-400 text-xs"></i> 
                      Playas Lobitos y Negritos (15 min)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <i className="fa-solid fa-building-columns text-blue-400 text-xs"></i> 
                      Plaza de Armas de Talara (03 min)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href={googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-full font-bold shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
              >
                <i className="fa-solid fa-route text-xl"></i> Cómo llegar (Ruta)
              </a>
              <a 
                href="tel:073692594"
                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-5 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                <i className="fa-solid fa-phone"></i> Llamar al Hotel
              </a>
            </div>
          </div>

          <div className="h-[450px] md:h-[650px] rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white bg-slate-100 group">
            {/* Google Maps Real Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0461879788643!2d-81.2764877241284!3d-4.58079374765664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90364417fc295773%3A0x6f1fc5d2cc49dde4!2sHotel%20Cesar!5e0!3m2!1ses-419!2spe!4v1715870000000!5m2!1ses-419!2spe" 
              className="w-full h-full border-0 group-hover:opacity-80 transition-opacity duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Hostal Cesar"
            ></iframe>
            
            {/* Overlay Principal con Botón de Trazar Ruta */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
               <a 
                href={googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-5 rounded-full font-bold shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 border-2 border-blue-50"
               >
                 <i className="fa-solid fa-diamond-turn-right text-2xl text-blue-500 group-hover:text-white"></i>
                 <div className="text-left">
                   <p className="text-[10px] uppercase tracking-widest font-black opacity-60">Generar Ruta</p>
                   <p className="text-lg">Trazar Ruta en Google Maps</p>
                 </div>
               </a>
            </div>

            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-100 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <i className="fa-solid fa-hotel"></i>
                </div>
                <div>
                  <p className="text-blue-950 font-bold text-sm">Hostal Cesar</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Talara - Piura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
