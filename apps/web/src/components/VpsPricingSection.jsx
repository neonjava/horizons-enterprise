
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cpu, DollarSign, Server } from 'lucide-react';
import VpsPricingCard from './VpsPricingCard.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VpsPricingSection = () => {
  const [selectedProcessor, setSelectedProcessor] = useState('Intel');
  const [selectedLocation, setSelectedLocation] = useState('India');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const EXCHANGE_RATE_USD = 0.012; // 1 INR = 0.012 USD

  const locations = [
    { name: 'India', multiplier: 1.0 },
    { name: 'Europe', multiplier: 1.3 },
    { name: 'Singapore', multiplier: 1.4 },
    { name: 'Germany', multiplier: 1.5 }
  ];

  const plans = [
    { id: 1, name: 'Starter', cores: 1, ram: '4GB', ssd: '80GB', bw: '1TB', baseIntel: 360, baseAMD: 400 },
    { id: 2, name: 'Professional', cores: 2, ram: '8GB', ssd: '160GB', bw: '2TB', baseIntel: 720, baseAMD: 800 },
    { id: 3, name: 'Business', cores: 4, ram: '16GB', ssd: '320GB', bw: '4TB', baseIntel: 1440, baseAMD: 1600 },
    { id: 4, name: 'Enterprise', cores: 8, ram: '32GB', ssd: '640GB', bw: '8TB', baseIntel: 2880, baseAMD: 3200 },
  ];

  const currentLocation = locations.find(loc => loc.name === selectedLocation) || locations[0];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20"
          >
            <Server className="w-4 h-4" /> Transparent Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            Our <span className="text-primary">VPS</span> Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Choose the perfect VPS for your needs. Dynamically calculate your cost based on compute power, data center location, and currency.
          </motion.p>
        </div>

        {/* Controls Configuration */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
          
          {/* Processor Toggle */}
          <div className="bg-card border border-border p-1.5 rounded-xl inline-flex shadow-sm">
            <button
              onClick={() => setSelectedProcessor('Intel')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                selectedProcessor === 'Intel' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Cpu className="w-4 h-4" /> Intel
            </button>
            <button
              onClick={() => setSelectedProcessor('AMD')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                selectedProcessor === 'AMD' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Cpu className="w-4 h-4" /> AMD EPYC
            </button>
          </div>

          {/* Location Selector */}
          <div className="relative flex items-center bg-card border border-border rounded-xl shadow-sm px-4 py-1.5 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
            <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent text-sm font-bold text-foreground focus:outline-none py-2 cursor-pointer appearance-none pr-8"
            >
              {locations.map(loc => (
                <option key={loc.name} value={loc.name} className="bg-card text-foreground">
                  {loc.name} (x{loc.multiplier.toFixed(1)})
                </option>
              ))}
            </select>
            {/* Custom select arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Currency Toggle */}
          <div className="bg-card border border-border p-1.5 rounded-xl inline-flex shadow-sm">
            <button
              onClick={() => setSelectedCurrency('INR')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                selectedCurrency === 'INR' 
                  ? 'bg-secondary text-foreground shadow-sm border border-border' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setSelectedCurrency('USD')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                selectedCurrency === 'USD' 
                  ? 'bg-secondary text-foreground shadow-sm border border-border' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              USD ($)
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <VpsPricingCard
              key={plan.id}
              plan={plan}
              processor={selectedProcessor}
              locationMultiplier={currentLocation.multiplier}
              currency={selectedCurrency}
              rate={EXCHANGE_RATE_USD}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="font-bold px-10 h-14 text-base border-2 hover:bg-secondary">
            <Link to="/vps">View All Plans</Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default VpsPricingSection;
