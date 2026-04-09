
import React from 'react';

const GameSelector = ({ selectedGame, onSelect }) => {
  return (
    <div className="flex p-1 bg-muted rounded-xl w-full max-w-md mx-auto">
      {['Minecraft', 'Palworld'].map((game) => (
        <button
          key={game}
          onClick={() => onSelect(game)}
          className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm transition-all ${
            selectedGame === game 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {game}
        </button>
      ))}
    </div>
  );
};

export default GameSelector;
