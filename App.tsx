
import React, { useState } from 'react';
import { COURSES, CHECKPOINT, THEME } from './constants';
import RoadPath from './components/RoadPath';
import CourseFlag from './components/CourseFlag';
import { Course } from './types';
import ActiveCourseCard from './components/ActiveCourseCard';

const App: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [isFinalActive, setIsFinalActive] = useState(false);

  const toggleCourse = (course: Course) => {
    setIsFinalActive(false);
    setActiveCourse(activeCourse?.id === course.id ? null : course);
  };

  const toggleFinal = () => {
    setActiveCourse(null);
    setIsFinalActive(!isFinalActive);
  };

  const closeAll = () => {
    setActiveCourse(null);
    setIsFinalActive(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-[#ab022f] selection:text-white bg-[#F3EDE4] overflow-x-hidden">
      {/* Header - Mucho más ordenado en móvil */}
      <header className="pt-8 pb-4 md:py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center z-40 shrink-0 relative gap-4">
        <div className="text-left">
          <h1 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
            REDES <span style={{ color: THEME.accent }}>C6</span>
          </h1>
          <p className="text-gray-500 font-bold text-[9px] md:text-[14px] uppercase tracking-[0.4em] mt-1 md:mt-2 ml-1">Ruta de Especialización</p>
        </div>
        <div className="w-full md:w-auto">
          <div className="px-4 py-2 md:px-6 md:py-3 bg-white shadow-sm border border-gray-100 rounded-full inline-block">
            <p className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">Tecsup 2026</p>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {(activeCourse || isFinalActive) && (
        <div 
          className="fixed inset-0 bg-black/85 z-[100] animate-in fade-in duration-300"
          onClick={closeAll}
        />
      )}

      {/* Contenedor de la Ruta - Altura aumentada en móvil para orden visual */}
      <main className="flex-1 relative w-full flex flex-col items-center overflow-x-hidden overflow-y-auto scrolling-touch pb-40">
        <div className="relative w-full max-w-4xl min-h-[1300px] md:min-h-[1000px]">
          
          <div className="absolute inset-0 z-10">
            <RoadPath />
          </div>

          {/* Marcadores - Coordenadas refinadas para evitar el "desorden" visual */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Módulo 1 */}
            <CourseFlag 
              course={COURSES[0]} 
              position={{ top: '10%', left: '15%' }} 
              isActive={activeCourse?.id === COURSES[0].id} 
              onToggle={() => toggleCourse(COURSES[0])} 
            />
            {/* Módulo 2 */}
            <CourseFlag 
              course={COURSES[1]} 
              position={{ top: '28%', right: '12%' }} 
              isActive={activeCourse?.id === COURSES[1].id} 
              onToggle={() => toggleCourse(COURSES[1])} 
            />
            {/* Módulo 3 */}
            <CourseFlag 
              course={COURSES[2]} 
              position={{ top: '48%', left: '18%' }} 
              isActive={activeCourse?.id === COURSES[2].id} 
              onToggle={() => toggleCourse(COURSES[2])} 
            />
            {/* Módulo 4 */}
            <CourseFlag 
              course={COURSES[3]} 
              position={{ top: '68%', right: '12%' }} 
              isActive={activeCourse?.id === COURSES[3].id} 
              onToggle={() => toggleCourse(COURSES[3])} 
            />
            {/* Módulo 5 */}
            <CourseFlag 
              course={COURSES[4]} 
              position={{ top: '86%', left: '22%' }} 
              isActive={activeCourse?.id === COURSES[4].id} 
              onToggle={() => toggleCourse(COURSES[4])} 
            />

            {/* Hito Final Titulación */}
            <div className="absolute top-[94%] right-[10%] pointer-events-auto">
              <button 
                onClick={toggleFinal}
                className="bg-[#ab022f] text-white px-5 py-3 md:px-8 md:py-5 rounded-xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white font-black text-xs md:text-xl hover:scale-105 active:scale-95 transition-transform"
              >
                🎓 TITULACIÓN
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Tarjeta de Curso Activa */}
      {activeCourse && (
        <ActiveCourseCard course={activeCourse} onClose={closeAll} />
      )}

      {/* Tarjeta de Titulación Activa */}
      {isFinalActive && (
        <div className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[200] w-full md:w-[500px] p-0 md:p-0 animate-in slide-in-from-bottom duration-300 pointer-events-none">
           <div className="bg-white rounded-t-[2.5rem] md:rounded-[3rem] border-t-4 md:border-[5px] border-[#ab022f] shadow-[0_-20px_100px_rgba(0,0,0,0.8)] md:shadow-[0_50px_150px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-5xl md:text-6xl bg-red-50 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-red-100 shrink-0">🚀</span>
                  <div>
                    <h4 className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">FINAL DE CARRERA</h4>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">Misión Cumplida</h3>
                  </div>
                </div>
                <div className="max-h-[35vh] overflow-y-auto pr-2 md:pr-4 custom-scrollbar mb-8">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic font-medium">{CHECKPOINT.description}</p>
                </div>
                <button onClick={closeAll} className="w-full py-5 bg-[#ab022f] text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest shadow-xl active:bg-black transition-colors text-xs md:text-sm">¡A CONQUISTAR EL MUNDO!</button>
              </div>
           </div>
        </div>
      )}

      {/* Badge inferior fijo */}
      <footer className="fixed bottom-6 left-0 w-full flex justify-center z-40 pointer-events-none px-4">
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-gray-200 shadow-xl pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <p className="text-[9px] md:text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">Tecsup 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
