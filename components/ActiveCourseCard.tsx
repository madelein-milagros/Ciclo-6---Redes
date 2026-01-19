
import React from 'react';
import { Course } from '../types';
import { THEME } from '../constants';

interface ActiveCourseCardProps {
  course: Course;
  onClose: () => void;
}

const ActiveCourseCard: React.FC<ActiveCourseCardProps> = ({ course, onClose }) => {
  
  const handleLinkedInShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const careerTag = "Administración de Redes y Comunicaciones";
    const text = encodeURIComponent(`¡Módulo "${course.title}" completado en @Tecsup! 🚀 #${careerTag.replace(/\s+/g, '')} #Redes #Ciclo6`);
    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
    window.open(url, '_blank');
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (course.videoUrl) {
      window.open(course.videoUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col justify-end md:justify-center items-center p-0 md:p-4 pointer-events-none">
      <div className="w-full md:w-[500px] pointer-events-auto animate-in slide-in-from-bottom md:zoom-in duration-300">
        {/* Contenedor Blanco Sólido - Estilo Bottom Sheet en móvil */}
        <div className="bg-white rounded-t-[2.5rem] md:rounded-[3rem] border-t-4 md:border-[5px] border-[#ab022f] shadow-[0_-20px_100px_rgba(0,0,0,0.8)] md:shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden">
          
          <div className="p-7 md:p-10 max-h-[80vh] md:max-h-[85vh] overflow-y-auto custom-scrollbar">
            {/* Header de la tarjeta */}
            <div className="flex items-start gap-5 md:gap-6 mb-8">
              <span className="text-5xl md:text-6xl shrink-0 bg-red-50 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-red-100">{course.icon}</span>
              <div className="flex-1 pt-1 md:pt-2">
                <h4 className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 md:mb-2">
                  MÓDULO 0{course.id}
                </h4>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                  {course.title}
                </h3>
              </div>
            </div>
            
            {/* Descripción */}
            <div className="mb-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                {course.description}
              </p>
            </div>
            
            {/* Certificación */}
            {course.certification && (
              <div className="p-5 md:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-200 flex items-start gap-4 md:gap-5 mb-8">
                 <span className="text-3xl md:text-4xl">🏆</span>
                 <div className="flex-1">
                   <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1 md:mb-2">Certificación Sugerida</p>
                   <p className="text-sm md:text-base font-bold text-gray-800 leading-tight">{course.certification}</p>
                 </div>
              </div>
            )}

            {/* Botones de acción */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-0">
              <button 
                onClick={handleVideoClick}
                className="py-4 md:py-5 px-3 md:px-4 bg-red-50 text-[#ab022f] rounded-xl md:rounded-2xl text-[10px] md:text-[12px] font-black uppercase tracking-widest border border-red-100 active:bg-red-200 transition-colors"
              >
                Ver Tutorial
              </button>

              <button 
                onClick={handleLinkedInShare}
                className="py-4 md:py-5 px-3 md:px-4 bg-[#0077b5] text-white rounded-xl md:rounded-2xl text-[10px] md:text-[12px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Publicar Logro
              </button>
            </div>
            
            {/* Botón Cerrar (Mobile Only) - Más amigable */}
            <button 
              onClick={onClose}
              className="md:hidden w-full mt-4 py-5 bg-gray-900 text-white rounded-xl font-black text-[12px] uppercase tracking-widest shadow-xl active:bg-black transition-colors"
            >
              Cerrar Módulo
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ab022f; }
      `}} />
    </div>
  );
};

export default ActiveCourseCard;
