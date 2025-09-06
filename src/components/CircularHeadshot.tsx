import { useState } from 'react';

export default function CircularHeadshot() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-32 h-32 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        {/* Front image */}
        <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform-gpu ${isFlipped ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'}`}>
          <img 
            src="/assets/headshot/headshot1.png" 
            alt="Marlon Lopez headshot" 
            className="w-full h-full object-cover rounded-full border-2 border-slate-200 dark:border-slate-700"
          />
        </div>
        
        {/* Back image */}
        <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform-gpu ${isFlipped ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'}`}>
          <img 
            src="/assets/headshot/headshot2.png" 
            alt="Marlon Lopez alternate headshot" 
            className="w-full h-full object-cover rounded-full border-2 border-slate-200 dark:border-slate-700"
          />
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
        <span className="text-white text-xs font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
          Click to flip
        </span>
      </div>
    </div>
  );
}
