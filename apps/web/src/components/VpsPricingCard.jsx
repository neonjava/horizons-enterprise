
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Cpu, HardDrive, Activity, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VpsPricingCard = ({ plan, processor, locationMultiplier, currency, rate, delay = 0 }) => {
  // Calculate final price based on selected parameters
  const basePrice = processor === 'Intel' ? plan.baseIntel : plan.baseAMD;
  const locationPrice = basePrice * locationMultiplier;
  
  const finalPrice = currency === 'USD' 
    ? (locationPrice * rate).toFixed(2) 
    : Math.round(locationPrice).toLocaleString('en-IN');
    
  const symbol = currency === 'USD' ? '$' : '₹';

  const features = [
    'Full Root Access',
    'KVM Virtualization',
    'NVMe SSD Storage',
    'DDoS Protection',
    '24/7 Support',
    'Uptime Guarantee'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="pricing-card group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground font-medium mb-6">{processor} Processor</p>
        
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-extrabold text-foreground tabular-nums tracking-tight">
            {symbol}{finalPrice}
          </span>
          <span className="text-muted-foreground font-medium mb-1">/mo</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1 relative z-10">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
          <Cpu className="w-5 h-5 text-primary shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{plan.cores} vCPU Cores</span>
            <span className="text-xs text-muted-foreground">{plan.ram} Dedicated RAM</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
          <HardDrive className="w-5 h-5 text-primary shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{plan.ssd} NVMe SSD</span>
            <span className="text-xs text-muted-foreground">High-speed storage</span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
          <Activity className="w-5 h-5 text-primary shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{plan.bw} Bandwidth</span>
            <span className="text-xs text-muted-foreground">1Gbps Port Speed</span>
          </div>
        </div>
      </div>

      <div className="mb-8 relative z-10">
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Included Features</h4>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto relative z-10">
        <Button className="w-full h-12 font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default VpsPricingCard;
