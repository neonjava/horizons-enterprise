import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const HostingPlanCard = ({ plan, index, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`gaming-card flex flex-col h-full ${
        featured ? 'ring-2 ring-primary scale-105' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`w-full transition-all duration-200 ${
          featured 
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default HostingPlanCard;