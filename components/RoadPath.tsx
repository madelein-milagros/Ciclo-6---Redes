
import React from 'react';

const RoadPath: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 1000 1000" 
      className="absolute inset-0 w-full h-full"
      fill="none" 
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3D Depth Shadow */}
      <path 
        d="M150 100 L850 100 C950 100 950 300 850 300 L150 300 C50 300 50 500 150 500 L850 500 C950 500 950 700 850 700 L150 700 C50 700 50 900 150 900 L850 900" 
        stroke="rgba(0,0,0,0.1)" 
        strokeWidth="90" 
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(10, 15)"
      />

      {/* Carretera Principal */}
      <path 
        d="M150 100 L850 100 C950 100 950 300 850 300 L150 300 C50 300 50 500 150 500 L850 500 C950 500 950 700 850 700 L150 700 C50 700 50 900 150 900 L850 900" 
        stroke="#2D2D2D" 
        strokeWidth="85" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Líneas Blancas Centrales */}
      <path 
        d="M150 100 L850 100 C950 100 950 300 850 300 L150 300 C50 300 50 500 150 500 L850 500 C950 500 950 700 850 700 L150 700 C50 700 50 900 150 900 L850 900" 
        stroke="#FFFFFF" 
        strokeWidth="3" 
        strokeDasharray="20 30"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RoadPath;
