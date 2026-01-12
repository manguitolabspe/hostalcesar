
import React, { useState } from 'react';
import { RoomType } from '../types';
import Button from './ui/Button';
import Modal from './ui/Modal';

const rooms: RoomType[] = [
  {
    id: 'simple',
    name: 'Habitación Simple Corporativa',
    price: 80,
    description: 'La opción ideal para el profesional moderno. Espacio diseñado para la concentración con wifi de alta velocidad y escritorio ergonómico.',
    image: '/assets/img/room-simple.webp',
    features: ['Cama de 1.5 plazas', 'TV Cable HD', 'Escritorio de trabajo']
  },
  {
    id: 'doble',
    name: 'Habitación Doble Superior',
    price: 120,
    description: 'Espacio y versatilidad. Perfecta para equipos de trabajo o viajes familiares que requieren el máximo confort en Talara.',
    image: '/assets/img/room-double.webp',
    features: ['2 Camas de 1.5 plazas', 'Frigobar', 'Aire Acondicionado']
  },
  {
    id: 'matrimonial',
    name: 'Habitación Matrimonial Deluxe',
    price: 130,
    description: 'Nuestra habitación insignia. Disfrute de una cama King-Size y un ambiente climatizado diseñado para un descanso sin interrupciones.',
    image: '/assets/img/room-matrimonial.webp',
    features: ['Cama Matrimonial King', 'Sillón Confort', 'Ambiente Premium']
  }
];

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const confirmBooking = () => {
    if (selectedRoom) {
      const msg = `Hola, quisiera reservar la ${selectedRoom.name} en Hostal Cesar Talara.`;
      window.open(`https://wa.me/51989206171?text=${encodeURIComponent(msg)}`, '_blank');
      setSelectedRoom(null);
    }
  };

  return (
    <section id="habitaciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline underline-offset-8 decoration-blue-200">Alojamiento en Talara</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif italic text-slate-900 leading-tight">Nuestras Habitaciones</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada espacio ha sido renovado para ofrecer el mejor estándar de limpieza y confort de la ciudad petrolera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
          {rooms.map((room) => (
            <article key={room.id} className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col min-h-[720px]">
              <div className="h-64 overflow-hidden relative shrink-0">
                <img 
                  src={room.image} 
                  alt={`${room.name} en Hostal Cesar Talara`} 
                  width="800" 
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-2xl font-bold shadow-lg text-sm z-10">
                  Desde S/ {room.price}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-5 font-serif text-slate-900">{room.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{room.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="pt-8 border-t border-slate-100 mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Equipamiento:</p>
                    <div className="grid grid-cols-1 gap-4">
                      {room.features.map((f, idx) => (
                        <div key={idx} className="flex items-center text-xs font-semibold text-slate-600">
                          <i className="fa-solid fa-check text-blue-500 mr-4 shrink-0"></i>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button onClick={() => setSelectedRoom(room)} className="w-full py-5 rounded-2xl" variant="primary">
                    Reservar Esta Habitación
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedRoom} onClose={() => setSelectedRoom(null)} title="Confirmar Interés">
        {selectedRoom && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100">
               <p className="text-[10px] font-bold uppercase text-blue-400 mb-1">Solicitando:</p>
               <h4 className="text-xl font-bold text-blue-900">{selectedRoom.name}</h4>
               <p className="text-lg font-serif italic text-blue-800 mt-1">Tarifa: S/ {selectedRoom.price}.00</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Se le redirigirá a WhatsApp para coordinar disponibilidad inmediata con recepción.</p>
            <Button onClick={confirmBooking} className="w-full py-5 rounded-2xl" rightIcon={<i className="fa-brands fa-whatsapp text-xl"></i>}>Contactar vía WhatsApp</Button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Rooms;
