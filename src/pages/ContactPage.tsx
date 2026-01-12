
import React, { useState, useMemo } from 'react';
import Button from '../components/ui/Button';
import Toast from '../components/ui/Toast';
import Modal from '../components/ui/Modal';

interface FormErrors {
  nombre?: string;
  email?: string;
  fechas?: string;
}

const ContactPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: 'Reserva Online',
    habitacion: 'Simple (S/ 80)',
    motivo: 'Negocios',
    huespedes: '2',
    fechaIngreso: '',
    fechaSalida: '',
    mensaje: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tempRange, setTempRange] = useState<{ start: Date | null, end: Date | null }>({
    start: null,
    end: null
  });

  const estanciaDias = useMemo(() => {
    if (formData.fechaIngreso && formData.fechaSalida) {
      const parts1 = formData.fechaIngreso.split('/');
      const parts2 = formData.fechaSalida.split('/');
      if (parts1.length === 3 && parts2.length === 3) {
        const d1 = parseInt(parts1[0], 10);
        const m1 = parseInt(parts1[1], 10) - 1;
        const y1 = parseInt(parts1[2], 10);
        const d2 = parseInt(parts2[0], 10);
        const m2 = parseInt(parts2[1], 10) - 1;
        const y2 = parseInt(parts2[2], 10);
        const ingreso = new Date(y1, m1, d1);
        const salida = new Date(y2, m2, d2);
        const diff = salida.getTime() - ingreso.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
      }
    }
    return 0;
  }, [formData.fechaIngreso, formData.fechaSalida]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre requerido";
    if (!formData.email.trim()) newErrors.email = "Email requerido";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.fechaIngreso) newErrors.fechas = "Selecciona fechas";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);

    const lines = [
      "*SOLICITUD DE RESERVA*",
      "--------------------------",
      `*Cliente:* ${formData.nombre.trim()}`,
      `*Habitacion:* ${formData.habitacion}`,
      `*Huespedes:* ${formData.huespedes}`,
      "",
      "*ESTANCIA:*",
      `*Entrada:* ${formData.fechaIngreso}`,
      `*Salida:* ${formData.fechaSalida}`,
      `*Total:* ${estanciaDias} noches`,
      "",
      `*Email:* ${formData.email.trim()}`,
      `*Mensaje:* ${formData.mensaje.trim() || 'Sin comentarios'}`,
      "--------------------------",
      "Enviado desde el Sitio Web"
    ];

    const textMessage = lines.join('\n');

    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      const whatsappUrl = `https://wa.me/51989206171?text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const firstDay = (y: number, m: number) => new Date(y, m, 1).getDay();

  const calendarDays = useMemo(() => {
    const y = currentMonth.getFullYear();
    const m = currentMonth.getMonth();
    const days = [];
    for (let i = 0; i < firstDay(y, m); i++) days.push(null);
    for (let i = 1; i <= daysInMonth(y, m); i++) days.push(new Date(y, m, i));
    return days;
  }, [currentMonth]);

  const handleDateSelect = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return;
    if (!tempRange.start || (tempRange.start && tempRange.end)) {
      setTempRange({ start: date, end: null });
    } else if (date < tempRange.start) {
      setTempRange({ start: date, end: null });
    } else {
      setTempRange({ ...tempRange, end: date });
    }
  };

  const confirmDates = () => {
    if (tempRange.start && tempRange.end) {
      setFormData({
        ...formData,
        fechaIngreso: tempRange.start.toLocaleDateString('es-ES'),
        fechaSalida: tempRange.end.toLocaleDateString('es-ES')
      });
      setErrors(prev => ({ ...prev, fechas: undefined }));
      setIsCalendarOpen(false);
    }
  };

  const isSelected = (d: Date) => d.toDateString() === tempRange.start?.toDateString() || d.toDateString() === tempRange.end?.toDateString();
  const isInRange = (d: Date) => tempRange.start && tempRange.end && d > tempRange.start && d < tempRange.end;

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif italic mb-4">Solicitud de Reserva</h1>
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Atención inmediata en Talara</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-serif mb-4">¿Por qué reservar?</h3>
                  <ul className="space-y-4 text-sm opacity-90">
                    <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1"></i> Sin cargos de gestión</li>
                    <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1"></i> Trato directo con el hotel</li>
                    <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1"></i> Descuento corporativo</li>
                  </ul>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Información Rápida</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-phone text-blue-600"></i>
                    <span className="text-sm font-medium text-slate-700">(073) 692594</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-brands fa-whatsapp text-green-500"></i>
                    <span className="text-sm font-medium text-slate-700">989 206 171</span>
                  </div>
                </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 tracking-widest">Nombre Completo</label>
                    <input 
                      type="text" name="nombre" value={formData.nombre} onChange={handleChange} 
                      className={`w-full px-6 py-4 rounded-2xl transition-all text-sm border ${errors.nombre ? 'bg-red-50 border-red-200 focus:ring-red-500' : 'bg-slate-50 border-transparent focus:ring-2 focus:ring-blue-500 focus:bg-white'}`} 
                      placeholder="Ej. Juan Pérez" 
                    />
                    {errors.nombre && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 tracking-widest">Correo Electrónico</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} 
                      className={`w-full px-6 py-4 rounded-2xl transition-all text-sm border ${errors.email ? 'bg-red-50 border-red-200 focus:ring-red-500' : 'bg-slate-50 border-transparent focus:ring-2 focus:ring-blue-500 focus:bg-white'}`} 
                      placeholder="correo@ejemplo.com" 
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 tracking-widest">Periodo de Estancia</label>
                  <button 
                    type="button" 
                    onClick={() => setIsCalendarOpen(true)}
                    className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all text-left border-2 border-dashed ${errors.fechas ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-blue-50'}`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-[9px] uppercase font-bold text-slate-400">Ingreso</p>
                        <p className={`font-bold ${formData.fechaIngreso ? 'text-blue-900' : 'text-slate-300'}`}>{formData.fechaIngreso || '-- / -- / --'}</p>
                      </div>
                      <i className="fa-solid fa-arrow-right text-slate-300"></i>
                      <div className="text-center">
                        <p className="text-[9px] uppercase font-bold text-slate-400">Salida</p>
                        <p className={`font-bold ${formData.fechaSalida ? 'text-blue-900' : 'text-slate-300'}`}>{formData.fechaSalida || '-- / -- / --'}</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl shadow-lg ${errors.fechas ? 'bg-red-500' : 'bg-blue-600'} text-white`}>
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                  </button>
                  {errors.fechas && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.fechas}</p>}
                  {estanciaDias > 0 && !errors.fechas && <p className="text-right text-xs font-bold text-blue-600 px-2 uppercase mt-1 tracking-widest">Total: {estanciaDias} noches</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 tracking-widest">Habitación</label>
                        <select name="habitacion" value={formData.habitacion} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                            <option>Simple (S/ 80)</option>
                            <option>Doble (S/ 120)</option>
                            <option>Matrimonial (S/ 130)</option>
                            <option>Triple (S/ 150)</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 tracking-widest">Huéspedes</label>
                        <input type="number" name="huespedes" min="1" value={formData.huespedes} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                </div>

                <Button type="submit" isLoading={isLoading} className="w-full py-5 rounded-2xl shadow-xl" rightIcon={<i className="fa-brands fa-whatsapp"></i>}>Enviar Solicitud de Reserva</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} title="Selecciona tus fechas">
        <div className="p-2">
          <div className="flex justify-between items-center mb-6">
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()-1))} className="p-2 hover:bg-slate-100 rounded-lg"><i className="fa-solid fa-chevron-left"></i></button>
            <h4 className="font-bold uppercase text-sm tracking-widest">{currentMonth.toLocaleString('es-ES', {month: 'long', year: 'numeric'})}</h4>
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1))} className="p-2 hover:bg-slate-100 rounded-lg"><i className="fa-solid fa-chevron-right"></i></button>
          </div>
          <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-300 mb-2">
            {['D','L','M','X','J','V','S'].map(d=><div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, i) => {
              if (!date) return <div key={i} className="h-10"></div>;
              const today = new Date();
              today.setHours(0,0,0,0);
              const past = date < today;
              const sel = isSelected(date);
              const rang = isInRange(date);
              return (
                <button
                  key={i} type="button" disabled={past}
                  onClick={() => handleDateSelect(date)}
                  className={`h-10 w-full rounded-lg text-sm font-bold transition-all ${past ? 'text-slate-200' : 'hover:bg-blue-50 text-slate-700'} ${rang ? 'bg-blue-50 text-blue-600' : ''} ${sel ? 'bg-blue-600 text-white shadow-lg scale-110' : ''}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex gap-4">
            <Button variant="ghost" className="flex-1" onClick={() => setIsCalendarOpen(false)}>Cancelar</Button>
            <Button variant="primary" className="flex-1" disabled={!tempRange.end} onClick={confirmDates}>Aplicar</Button>
          </div>
        </div>
      </Modal>

      <Toast isVisible={showToast} onClose={() => setShowToast(false)} message="Redirigiendo a WhatsApp..." type="info" />
    </div>
  );
};

export default ContactPage;
