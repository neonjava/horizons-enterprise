
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Cpu, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/hooks/useCurrency.jsx';

const PricingCard = ({ title, basePriceUSD, isPopular, features, delay = 0 }) => {
  const { getCurrencySymbol, convertPrice } = useCurrency();
  const displayPrice = convertPrice(basePriceUSD);
  const symbol = getCurrencySymbol();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative flex flex-col glass-card rounded-2xl p-8 transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-primary shadow-primary/20 scale-105 z-10' 
          : 'hover:border-primary/50 hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-end justify-center gap-1 mt-4">
          <span className="text-4xl font-extrabold text-foreground">{symbol}{displayPrice}</span>
          <span className="text-muted-foreground font-medium mb-1">/mo</span>
        </div>
      </div>

      <div className="w-full h-px bg-border my-6"></div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/90 font-medium text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full h-12 font-bold transition-all duration-200 active:scale-[0.98] ${
          isPopular 
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
            : 'bg-card border border-border hover:bg-secondary text-foreground'
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default PricingCard;
