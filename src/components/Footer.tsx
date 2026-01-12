
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          
          <div className="space-y-10">
            <h4 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Hostal Cesar Talara
            </h4>
            <div className="space-y-6 text-gray-400 text-sm">
              <div className="flex items-start gap-5 group">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <p className="leading-relaxed">
                  Av Salaverry G 9, Pariñas<br/>
                  <span className="text-white font-bold">Talara – Piura</span>
                </p>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <p>Fijo: <span className="text-white">(073) 692594</span></p>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <p>WhatsApp: <span className="text-white">989 206 171</span></p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500">Servicios Destacados</h4>
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-default">• Agua Caliente 24h</li>
              <li className="hover:text-white transition-colors cursor-default">• Cochera Privada</li>
              <li className="hover:text-white transition-colors cursor-default">• Pérgola de Trabajo</li>
              <li className="hover:text-white transition-colors cursor-default">• Aire Acondicionado</li>
              <li className="hover:text-white transition-colors cursor-default">• Restaurante/Bar</li>
              <li className="hover:text-white transition-colors cursor-default">• Wifi Fibra Óptica</li>
            </ul>
            <div className="flex gap-4 pt-4">
               <i className="fa-brands fa-cc-visa text-3xl opacity-50"></i>
               <i className="fa-brands fa-cc-mastercard text-3xl opacity-50"></i>
               <i className="fa-brands fa-whatsapp text-3xl text-green-500"></i>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end justify-start space-y-10">
            <h4 className="text-lg font-medium text-gray-400 italic">Redes Sociales</h4>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center transition-all hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110"
            >
              <i className="fa-brands fa-facebook-f text-4xl"></i>
            </a>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">@HostalCesarTalara</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase leading-loose">
            © {currentYear} Hostal Cesar - Administradora Hotelera Cesar SAC | Talara - Piura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
