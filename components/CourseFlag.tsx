
import React from 'react';
import { Course } from '../types';
import { THEME } from '../constants';

interface CourseFlagProps {
  course: Course;
  position: React.CSSProperties;
  isActive: boolean;
  onToggle: () => void;
}

const CourseFlag: React.FC<CourseFlagProps> = ({ 
  course, 
  position, 
  isActive, 
  onToggle
}) => {
  return (
    <div 
      className={`absolute flex flex-col items-center pointer-events-auto transition-all duration-300 ${isActive ? 'z-[50]' : 'z-20'}`}
      style={position}
    >
      {/* Pin del Mapa - Ajustado para ser menos invasivo en móvil */}
      <button 
        onClick={onToggle}
        className="group relative flex flex-col items-center outline-none p-2 md:p-3 pointer-events-auto active:scale-90 transition-transform"
      >
        <div className={`relative transition-all duration-300 ${isActive ? 'scale-[1.4] md:scale-[1.6]' : 'scale-90 md:scale-110 hover:scale-125'}`}>
          <svg width="40" height="46" md:width="46" md:height="52" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-2xl">
            <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill={isActive ? THEME.accent : "#FFFFFF"} />
            <path d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z" fill={isActive ? "#FFFFFF" : THEME.accent} fillOpacity="0.4" />
            <circle cx="20" cy="20" r="8" fill={isActive ? "white" : THEME.accent} />
          </svg>
        </div>
        
        <span className={`mt-3 md:mt-4 bg-gray-900 text-white text-[8px] md:text-[10px] px-2.5 md:px-4 py-1 rounded-full font-black tracking-tighter shadow-xl border border-white/20 transition-all duration-300 ${isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
          MOD 0{course.id}
        </span>
      </button>
    </div>
  );
};

export default CourseFlag;
