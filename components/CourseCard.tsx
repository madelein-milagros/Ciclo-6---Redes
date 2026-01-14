
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
    <div className="relative flex flex-col items-center w-full mb-12">
      {/* Connector Line */}
      {index !== 0 && (
        <div 
          className="absolute -top-12 left-1/2 w-1 h-12 -translate-x-1/2 z-0"
          style={{ backgroundColor: THEME.accent }}
        />
      )}

      {/* Main Card Container */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: THEME.courseBg }}
        className={`z-10 w-full max-w-2xl rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-left overflow-hidden border-2 border-transparent hover:border-[#ab022f]`}
      >
        <div className="p-6 flex items-center gap-4">
          <span className="text-3xl bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            {course.icon}
          </span>
          <div className="flex-1">
             <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
               {course.title}
             </h3>
             <p className="text-white/70 text-sm mt-1">Haga clic para ver detalles</p>
          </div>
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div 
        className={`w-full max-w-2xl overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-b-xl border-x-2 border-b-2 shadow-inner ${
          isExpanded ? 'max-h-[800px] opacity-100 py-6 px-8' : 'max-h-0 opacity-0'
        }`}
        style={{ borderColor: THEME.accent }}
      >
        <div className="space-y-4">
          {course.officialName && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">📘 Nombre Oficial</p>
              <p className="text-gray-800 font-medium text-lg">{course.officialName}</p>
            </div>
          )}

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">🛠️ Descripción del Contenido</p>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
          </div>

          {course.certification && (
            <div className="bg-gray-50 p-3 rounded-lg border-l-4" style={{ borderLeftColor: THEME.accent }}>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">🏆 Certificación Asociada</p>
              <p className="text-gray-800 font-semibold">{course.certification}</p>
            </div>
          )}

          {course.link && (
            <div className="pt-2">
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium transition-all hover:brightness-110 active:brightness-90 shadow-md"
                style={{ backgroundColor: THEME.accent }}
              >
                🔗 Ver curso oficial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
