
import React, { useState, useMemo } from 'react';
import Button from './ui/Button';
import Modal from './ui/Modal';

interface ReservationFormProps {
  onSuccess: () => void;
}

interface FormErrors {
  nombre?: string;
  fechas?: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState({
    nombre: '',
    habitacion: 'Simple (S/ 80)',
    huespedes: '1',
    fechaIngreso: '',
    fechaSalida: '',
    mensaje: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tempRange, setTempRange] = useState<{ start: Date | null, end: Date | null }>({
    start: null,
    end: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const estanciaDias = useMemo(() => {
    if (formData.fechaIngreso && formData.fechaSalida) {
      const parseDate = (dateStr: string) => {
        const [d, m, y] = dateStr.split('/').map(Number);
        return new Date(y, m - 1, d);
      };
      const ingreso = parseDate(formData.fechaIngreso);
      const salida = parseDate(formData.fechaSalida);
      const diff = salida.getTime() - ingreso.getTime();
      const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  }, [formData.fechaIngreso, formData.fechaSalida]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Por favor, ingresa tu nombre completo";
    if (!formData.fechaIngreso || !formData.fechaSalida) newErrors.fechas = "Debes seleccionar tus fechas de estancia";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Formato Ultra-Limpio para WhatsApp para evitar simbolos raros
    const lines = [
      "*RESERVA WEB - HOSTAL CESAR*",
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
      `*Nota:* ${formData.mensaje.trim() || 'Ninguna'}`,
      "--------------------------",
      "Enviado desde la Web Oficial"
    ];

    const textMessage = lines.join('\n');

    setTimeout(() => {
      setIsLoading(false);
      const whatsappUrl = `https://wa.me/51989206171?text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, '_blank');
      onSuccess();
    }, 800);
  };

  const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const firstDay = (y: number, m: number) => new Date(y, m, 1).getDay();

  const calendarDays = useMemo(() => {
    const y = currentMonth.getFullYear();
    const m = currentMonth.getMonth();
    const days = [];
    const totalDays = daysInMonth(y, m);
    const startOffset = firstDay(y, m);
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) days.push(new Date(y, m, i));
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
    } else if (date.getTime() === tempRange.start.getTime()) {
      setTempRange({ start: null, end: null });
    } else {
      setTempRange({ ...tempRange, end: date });
    }
  };

  const confirmDates = () => {
    if (tempRange.start && tempRange.end) {
      setFormData(prev => ({
        ...prev,
        fechaIngreso: tempRange.start!.toLocaleDateString('es-ES'),
        fechaSalida: tempRange.end!.toLocaleDateString('es-ES')
      }));
      setErrors(prev => ({ ...prev, fechas: undefined }));
      setIsCalendarOpen(false);
    }
  };

  const isSelected = (d: Date) => 
    (tempRange.start && d.toDateString() === tempRange.start.toDateString()) || 
    (tempRange.end && d.toDateString() === tempRange.end.toDateString());

  const isInRange = (d: Date) => 
    tempRange.start && tempRange.end && d > tempRange.start && d < tempRange.end;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Nombre Completo</label>
            <input 
              type="text" name="nombre" value={formData.nombre} onChange={handleChange}
              className={`w-full px-5 py-3.5 rounded-xl transition-all text-sm outline-none border ${errors.nombre ? 'bg-red-50 border-red-200 focus:ring-red-500' : 'bg-slate-50 border-slate-100 focus:ring-blue-500 focus:bg-white'}`} 
              placeholder="Ej. Pedro Pérez" 
            />
            {errors.nombre && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.nombre}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Tipo de Habitación</label>
            <select 
              name="habitacion" value={formData.habitacion} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none cursor-pointer"
            >
              <option>Simple (S/ 80)</option>
              <option>Doble (S/ 120)</option>
              <option>Matrimonial (S/ 130)</option>
              <option>Triple (S/ 150)</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Fechas de Estancia</label>
          <button 
            type="button" 
            onClick={() => setIsCalendarOpen(true)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left group border ${errors.fechas ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-100 hover:border-blue-400 hover:bg-blue-50'}`}
          >
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold text-slate-400 mb-0.5">Entrada</span>
                <span className={`font-bold text-sm ${formData.fechaIngreso ? 'text-blue-900' : 'text-slate-300'}`}>
                  {formData.fechaIngreso || 'dd / mm / aaaa'}
                </span>
              </div>
              <i className="fa-solid fa-arrow-right text-slate-200"></i>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold text-slate-400 mb-0.5">Salida</span>
                <span className={`font-bold text-sm ${formData.fechaSalida ? 'text-blue-900' : 'text-slate-300'}`}>
                  {formData.fechaSalida || 'dd / mm / aaaa'}
                </span>
              </div>
            </div>
            <div className={`p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform ${errors.fechas ? 'bg-red-500' : 'bg-blue-600'} text-white`}>
              <i className="fa-solid fa-calendar-day text-sm"></i>
            </div>
          </button>
          {errors.fechas && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.fechas}</p>}
          {estanciaDias > 0 && !errors.fechas && (
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest text-right mt-2 pr-1">
               {estanciaDias} {estanciaDias === 1 ? 'noche' : 'noches'} de estadía
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Huéspedes</label>
            <input 
              type="number" name="huespedes" min="1" max="10" value={formData.huespedes} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Motivo</label>
            <select className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none cursor-pointer">
              <option>Trabajo / Negocios</option>
              <option>Turismo / Placer</option>
              <option>Familiar</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Mensaje Adicional</label>
          <textarea 
            name="mensaje" rows={2} value={formData.mensaje} onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none resize-none"
            placeholder="Ej. Requiero cochera..."
          ></textarea>
        </div>

        <Button 
          type="submit" 
          isLoading={isLoading} 
          className="w-full py-5 rounded-2xl shadow-xl shadow-blue-100"
          rightIcon={<i className="fa-brands fa-whatsapp text-lg"></i>}
        >
          Confirmar Reserva por WhatsApp
        </Button>
      </form>

      <Modal 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
        title="Selecciona tus fechas"
      >
        <div className="select-none">
          <div className="flex justify-between items-center mb-6">
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-xl transition-colors"><i className="fa-solid fa-chevron-left"></i></button>
            <h4 className="font-bold text-slate-800 capitalize text-sm">{currentMonth.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</h4>
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-xl transition-colors"><i className="fa-solid fa-chevron-right"></i></button>
          </div>

          <div className="grid grid-cols-7 text-center text-[9px] font-bold text-slate-400 uppercase mb-4 tracking-widest">
            {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(d => <div key={d}>{d}</div>)}
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
                  className={`h-10 w-full rounded-lg text-xs font-bold transition-all relative
                    ${past ? 'text-slate-200 cursor-not-allowed' : 'hover:bg-blue-50 text-slate-700'}
                    ${rang ? 'bg-blue-50 text-blue-700 rounded-none' : ''}
                    ${sel ? 'bg-blue-600 text-white shadow-lg scale-110 z-10' : ''}
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="ghost" className="flex-1 text-xs" onClick={() => setIsCalendarOpen(false)}>Cancelar</Button>
            <Button variant="primary" className="flex-1 text-xs" disabled={!tempRange.end} onClick={confirmDates}>Aplicar Fechas</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReservationForm;
