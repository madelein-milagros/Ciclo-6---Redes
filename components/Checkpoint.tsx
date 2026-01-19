
import React from 'react';
import { THEME } from '../constants';
import { CheckpointData } from '../types';

interface CheckpointProps {
  data: CheckpointData;
}

const Checkpoint: React.FC<CheckpointProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center min-w-[350px] md:min-w-[500px]">
      {/* Connector from last course */}
      <div 
        className="absolute left-[-48px] top-[44px] w-12 h-1"
        style={{ backgroundColor: THEME.accent }}
      />
      
      {/* Checkpoint Card */}
      <div 
        style={{ borderColor: THEME.accent, backgroundColor: THEME.checkpointBg }}
        className="w-full rounded-2xl shadow-2xl p-6 border-2 text-white relative overflow-hidden group h-[88px] flex items-center transition-all hover:scale-[1.02]"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
        
        <div className="flex gap-4 items-center w-full">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md shrink-0">
             <span className="text-2xl">🏁</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-black uppercase tracking-tight truncate">
              PROYECTO FINAL
            </h2>
            <p className="text-white/80 text-[10px] font-medium leading-none truncate">
              Hito Final de Carrera • Ciclo 6
            </p>
          </div>
          
          <div className="hidden md:block">
            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Detalle del Checkpoint debajo (opcional) */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 italic text-sm text-gray-500 text-center">
        "{data.description}"
      </div>
    </div>
  );
};

export default Checkpoint;
