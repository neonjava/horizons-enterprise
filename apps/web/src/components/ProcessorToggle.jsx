
import React from 'react';

const ProcessorToggle = ({ selectedProcessor, onSelect }) => {
  return (
    <div className="flex p-1 bg-muted rounded-xl w-full max-w-sm mx-auto">
      {['AMD EPYC', 'Intel'].map((proc) => (
        <button
          key={proc}
          onClick={() => onSelect(proc)}
          className={`flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all ${
            selectedProcessor === proc 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {proc}
        </button>
      ))}
    </div>
  );
};

export default ProcessorToggle;
