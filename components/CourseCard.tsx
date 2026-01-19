
import React, { useState } from 'react';
import { Course } from '../types';
import { THEME } from '../constants';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex flex-col items-center min-w-[300px] md:min-w-[400px]">
      {/* Connector Line (Horizontal) */}
      {index !== 0 && (
        <div 
          className="absolute left-[-48px] top-[44px] w-12 h-1 z-0"
          style={{ backgroundColor: THEME.accent }}
        />
      )}

      {/* Main Card Container */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: THEME.courseBg }}
        className={`z-10 w-full rounded-xl shadow-lg transition-all duration-300 transform hover:translate-y-[-4px] active:scale-95 text-left overflow-hidden border-2 border-transparent hover:border-white/50`}
      >
        <div className="p-5 flex items-center gap-4">
          <span className="text-2xl bg-white/10 p-2.5 rounded-lg backdrop-blur-sm shrink-0">
            {course.icon}
          </span>
          <div className="flex-1 min-w-0">
             <h3 className="text-white font-bold text-base md:text-lg leading-tight truncate">
               {course.title}
             </h3>
             <p className="text-white/60 text-xs mt-0.5 uppercase tracking-tighter">Detalles ↓</p>
          </div>
        </div>
      </button>

      {/* Expandable Content (Vertical relative to card) */}
      <div 
        className={`w-full mt-2 overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl border-t-4 ${
          isExpanded ? 'max-h-[500px] opacity-100 py-5 px-6 border-b' : 'max-h-0 opacity-0'
        }`}
        style={{ borderTopColor: THEME.accent }}
      >
        <div className="space-y-4 text-sm">
          {course.officialName && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">📘 Oficial</p>
              <p className="text-gray-800 font-semibold">{course.officialName}</p>
            </div>
          )}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">🛠️ Contenido</p>
            <p className="text-gray-600 leading-tight">{course.description}</p>
          </div>

          {course.certification && (
            <div className="bg-gray-50 p-2 rounded border-l-2" style={{ borderLeftColor: THEME.accent }}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">🏆 Certificación</p>
              <p className="text-gray-800 font-medium text-xs">{course.certification}</p>
            </div>
          )}

          {course.link && (
            <div className="pt-1">
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center text-[11px] py-2 rounded bg-gray-100 font-bold text-gray-700 hover:bg-gray-200 transition-colors"
              >
                🔗 VER CURSO OFICIAL
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
