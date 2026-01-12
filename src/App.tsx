
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RoomsPage from './pages/RoomsPage';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import Modal from './components/ui/Modal';
import ReservationForm from './components/ReservationForm';

export type ViewType = 'home' | 'about' | 'contact' | 'rooms' | 'services' | 'location';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenReservation={() => setIsReservationOpen(true)} 
      />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentView === 'rooms' && <RoomsPage />}
        {currentView === 'services' && <ServicesPage />}
        {currentView === 'location' && <LocationPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
      </main>

      <Footer />
      
      {/* Botón Flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/51989206171" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <i className="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¡Reserva por WhatsApp!
          </span>
        </a>
      </div>

      {/* Modal Global de Reserva */}
      <Modal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
        title="Inicia tu Reserva"
      >
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-4 rounded-2xl flex items-center gap-4 border border-blue-100/50">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
              <i className="fa-solid fa-bell-concierge"></i>
            </div>
            <p className="text-xs text-blue-900 leading-relaxed">
              Completa los datos y te contactaremos por <span className="font-bold">WhatsApp</span> para confirmar disponibilidad de inmediato.
            </p>
          </div>
          <ReservationForm onSuccess={() => setIsReservationOpen(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default App;
