
import React, { useState } from 'react';
import Button from './ui/Button';
import Toast from './ui/Toast';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de envío profesional
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="contacto" className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb & Header - Sensación de Página Independiente */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">
            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="text-blue-600">Contacto</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-4 font-serif italic">Contáctanos</h1>
          <p className="text-blue-500 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Atendemos las 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Columna Izquierda: Info de Marketing & Contacto Rápido */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              <h2 className="text-3xl font-bold mb-6 font-serif">¡Reserva tus próximas vacaciones!</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Disfruta de beneficios exclusivos en todos nuestros servicios y descuentos especiales para nuestros clientes frecuentes.
              </p>
              
              <div className="space-y-6">
                <a href="https://wa.me/51989206171" target="_blank" className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                  <i className="fa-brands fa-whatsapp text-3xl text-green-400"></i>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">WhatsApp Directo</p>
                    <p className="font-bold">¡Escríbenos ahora!</p>
                  </div>
                </a>
                <div className="p-4 bg-blue-700/50 rounded-2xl border border-blue-400/20">
                  <p className="text-xs italic text-blue-100">"Hacemos que tu estadía en Talara sea inolvidable."</p>
                </div>
              </div>
            </div>

            {/* Tarjetas de Contacto Detallado */}
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <i className="fa-solid fa-map-location-dot text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ubícanos en</h4>
                  <p className="text-sm text-slate-500">Av Salaverry G 9, Pariñas<br/>Talara – Piura</p>
                  <a href="https://maps.google.com" target="_blank" className="text-blue-600 text-xs font-bold mt-2 inline-block hover:underline">Ver mapa</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                  <i className="fa-solid fa-phone-volume text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Llámanos al</h4>
                  <p className="text-sm text-slate-500">(073) 692594</p>
                  <a href="tel:073692594" className="text-green-600 text-xs font-bold mt-2 inline-block hover:underline">Llamar ahora</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                  <i className="fa-solid fa-envelope-open-text text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Envíanos un Email</h4>
                  <p className="text-sm text-slate-500">administracion@hostalcesar.com</p>
                  <a href="mailto:administracion@hostalcesar.com" className="text-purple-600 text-xs font-bold mt-2 inline-block hover:underline">Enviar Email</a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Reserva/Contacto Profesional */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitud de Reserva / Mensaje</h3>
                <p className="text-slate-500 text-sm italic">Completa el formulario y un agente te responderá en minutos.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Datos Básicos */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Tu Nombre Completo</label>
                    <input type="text" required placeholder="Ej. Juan Manuel Pérez" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Email de Contacto</label>
                    <input type="email" required placeholder="correo@ejemplo.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                  </div>
                  
                  {/* Detalles de la Estancia */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Asunto</label>
                    <input type="text" required placeholder="Ej. Reserva Corporativa" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Tipo de Habitación</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm appearance-none cursor-pointer">
                      <option>Simple</option>
                      <option>Doble</option>
                      <option>Matrimonial</option>
                      <option>Triple</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Motivo del Viaje</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm appearance-none cursor-pointer">
                      <option>Turismo</option>
                      <option>Negocios / Trabajo</option>
                      <option>Luna de miel</option>
                      <option>Familiar</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Días de estancia</label>
                      <input type="number" min="1" defaultValue="1" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Huéspedes</label>
                      <input type="number" min="1" defaultValue="1" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                    </div>
                  </div>

                  {/* Fechas */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Fecha de Ingreso</label>
                    <input type="date" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Fecha de Salida</label>
                    <input type="date" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Déjanos tu mensaje</label>
                  <textarea rows={4} placeholder="Escribe aquí cualquier requerimiento especial o consulta..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm resize-none"></textarea>
                </div>

                <Button 
                  type="submit" 
                  isLoading={isLoading} 
                  variant="secondary" 
                  className="w-full py-5 rounded-2xl text-lg shadow-xl shadow-slate-200"
                  rightIcon={<i className="fa-solid fa-paper-plane text-xs"></i>}
                >
                  Enviar Solicitud de Reserva
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toast 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
        message="¡Mensaje enviado con éxito! Nos pondremos en contacto pronto para confirmar tu reserva."
        type="success"
      />
    </section>
  );
};

export default Contact;
