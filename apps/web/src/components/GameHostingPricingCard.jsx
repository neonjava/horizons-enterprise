
import React from 'react';
import { Check } from 'lucide-react';

const GameHostingPricingCard = ({ ram, processor, location, price, currencySymbol, specs }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(0,102,255,0.3)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-1">{ram} RAM</h3>
        <p className="text-sm text-muted-foreground">{processor} • {location}</p>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-foreground">{currencySymbol}{price}</span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>{spec}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full py-3 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors mt-auto">
        Get Started
      </button>
    </div>
  );
};

export default GameHostingPricingCard;
