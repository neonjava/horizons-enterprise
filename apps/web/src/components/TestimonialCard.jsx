
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, rating }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
        ))}
      </div>
      <p className="text-muted-foreground italic mb-6 flex-grow">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
