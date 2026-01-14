
import React from 'react';
import { THEME } from '../constants';
// Fix: Import CheckpointData from types.ts instead of constants.ts
import { CheckpointData } from '../types';

interface CheckpointProps {
  data: CheckpointData;
}

const Checkpoint: React.FC<CheckpointProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center w-full mt-12 mb-20">
      {/* Connector from last course */}
      <div 
        className="absolute -top-12 left-1/2 w-1 h-12 -translate-x-1/2"
        style={{ backgroundColor: THEME.accent }}
      />
      
      {/* Checkpoint Card */}
      <div 
        // Fix: Consolidated duplicate style attributes into a single object
        style={{ borderColor: THEME.accent, backgroundColor: THEME.checkpointBg }}
        className="w-full max-w-2xl rounded-2xl shadow-2xl p-8 border-4 text-white relative overflow-hidden group"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shrink-0">
             <span className="text-4xl">🏁</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              {data.title}
            </h2>
            <div className="h-1 w-20 bg-white/30 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed italic">
              “{data.description}”
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest text-white/60">
            Hito Final de Carrera
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkpoint;
