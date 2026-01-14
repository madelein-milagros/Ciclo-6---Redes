
import React from 'react';
import { COURSES, CHECKPOINT, THEME } from './constants';
import CourseCard from './components/CourseCard';
import Checkpoint from './components/Checkpoint';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 selection:bg-[#ab022f] selection:text-white">
      {/* Header Section */}
      <header className="py-20 px-4 text-center bg-white border-b-4" style={{ borderBottomColor: THEME.accent }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm border" style={{ backgroundColor: THEME.courseBg, color: '#fff', borderColor: THEME.accent }}>
            Nivel Profesional
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to bottom right, ${THEME.courseBg}, ${THEME.accent})` }}>
              Carrera de Redes
            </span>
            <br />
            <span className="text-gray-800 text-4xl md:text-5xl">Ciclo 6</span>
          </h1>
          <div className="w-24 h-1.5 mx-auto mb-8 rounded-full" style={{ backgroundColor: THEME.accent }} />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Domina las infraestructuras críticas, seguridad avanzada y tecnologías disruptivas en el último tramo de tu formación.
          </p>
        </div>
      </header>

      {/* Roadmap Canvas */}
      <main className="max-w-4xl mx-auto px-4 pt-16 relative">
        {/* Background Vertical Line */}
        <div 
          className="absolute top-16 bottom-20 left-1/2 w-1 -translate-x-1/2 opacity-20 hidden md:block"
          style={{ backgroundColor: THEME.accent }}
        />

        {/* Course List */}
        <div className="flex flex-col items-center">
          {COURSES.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              index={index} 
            />
          ))}

          {/* Final Checkpoint */}
          <Checkpoint data={CHECKPOINT} />
        </div>
      </main>

      {/* Footer Info */}
      <footer className="text-center py-10 px-4 mt-10">
        <p className="text-gray-400 text-sm font-medium">
          Guía de especialización interactiva diseñada para estudiantes de Redes.
        </p>
        <div className="mt-6 flex justify-center gap-4">
           <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: THEME.courseBg }} />
           <div className="w-3 h-3 rounded-full animate-pulse delay-75" style={{ backgroundColor: THEME.checkpointBg }} />
           <div className="w-3 h-3 rounded-full animate-pulse delay-150" style={{ backgroundColor: THEME.accent }} />
        </div>
      </footer>
    </div>
  );
};

export default App;
