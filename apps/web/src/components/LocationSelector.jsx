
import React from 'react';

const LocationSelector = ({ selectedLocation, onSelect }) => {
  return (
    <select 
      value={selectedLocation}
      onChange={(e) => onSelect(e.target.value)}
      className="bg-card border border-border text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
    >
      <option value="India">India 🇮🇳</option>
      <option value="Singapore">Singapore 🇸🇬</option>
    </select>
  );
};

export default LocationSelector;
