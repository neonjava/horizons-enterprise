
import React from 'react';

const LocationCard = ({ region, flag, details }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
      <div className="text-4xl">{flag}</div>
      <div>
        <h4 className="font-bold text-lg text-foreground">{region}</h4>
        <p className="text-sm text-muted-foreground">{details}</p>
      </div>
    </div>
  );
};

export default LocationCard;
