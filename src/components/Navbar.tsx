
import React, { useState, useEffect } from 'react';

type ViewType = 'home' | 'about' | 'contact' | 'rooms' | 'services' | 'location';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenReservation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', view: 'home' },
    { name: 'Nosotros', view: 'about' },
    { name: 'Habitaciones', view: 'rooms' },
    { name: 'Servicios', view: 'services' },
    { name: 'Ubicación', view: 'location' },
    { name: 'Contacto', view: 'contact' },
  ];

  const isTransparent = !isScrolled && currentView === 'home';

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center"
          aria-label="Ir al inicio"
        >
          {/* Logo en WebP con dimensiones explícitas */}
          <img 
            src="/assets/img/logo-cesar.webp" 
            alt="Logo Hostal Cesar Talara" 
            width="180" 
            height="48"
            className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${isTransparent ? 'brightness-0 invert' : ''}`}
            onError={(e) => {
              // Fallback por si la imagen no existe aún
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className={`hidden text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-blue-900'}`}>
            HOSTAL <span className="font-serif italic font-normal text-blue-500">CESAR</span>
          </span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.view as ViewType)}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold hover:text-blue-500 transition-colors ${isTransparent ? 'text-white/90' : 'text-slate-600'} ${currentView === item.view ? 'text-blue-500' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={onOpenReservation}
            className={`px-6 py-2 rounded-full border text-[11px] uppercase tracking-widest font-bold transition-all ${
              isTransparent 
                ? 'border-white/30 text-white hover:bg-white hover:text-blue-900 hover:border-white' 
                : 'border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
            }`}
          >
            Reservar
          </button>
        </div>

        <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`${isTransparent ? 'text-white' : 'text-blue-900'} p-2`}
              aria-label="Abrir menú"
            >
              <i className="fa-solid fa-bars-staggered text-2xl"></i>
            </button>
        </div>
      </div>

      {/* Sidebar Móvil */}
      <div className={`fixed inset-0 z-[110] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-slate-900 shadow-2xl flex flex-col transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex justify-between items-center border-b border-white/10">
            <span className="text-white font-bold text-lg">Menú</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2"><i className="fa-solid fa-xmark text-2xl"></i></button>
          </div>
          <nav className="flex-1 overflow-y-auto py-8 px-8 flex flex-col space-y-6">
            {menuItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => {
                  onNavigate(item.view as ViewType);
                  setIsMobileMenuOpen(false);
                }} 
                className="text-white text-xl font-medium text-left hover:text-blue-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
