
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import GameSelector from '@/components/GameSelector.jsx';
import ProcessorToggle from '@/components/ProcessorToggle.jsx';
import LocationSelector from '@/components/LocationSelector.jsx';
import CurrencyToggle from '@/components/CurrencyToggle.jsx';
import GameHostingPricingCard from '@/components/GameHostingPricingCard.jsx';
import { useCurrency } from '@/hooks/useCurrency.jsx';

const GameHostingPage = () => {
  const [game, setGame] = useState('Minecraft');
  const [processor, setProcessor] = useState('AMD EPYC');
  const [location, setLocation] = useState('India');
  const { currency, toggleCurrency } = useCurrency();

  const ramTiers = [2, 4, 6, 8, 12, 16, 24, 32];

  // Exact pricing logic requested
  const pricingData = {
    2: { 'Intel': 50, 'AMD EPYC': 70 },
    4: { 'Intel': 80, 'AMD EPYC': 110 },
    6: { 'Intel': 110, 'AMD EPYC': 150 },
    8: { 'Intel': 140, 'AMD EPYC': 190 },
    12: { 'Intel': 200, 'AMD EPYC': 270 },
    16: { 'Intel': 260, 'AMD EPYC': 350 },
    24: { 'Intel': 380, 'AMD EPYC': 510 },
    32: { 'Intel': 500, 'AMD EPYC': 670 },
  };

  const calculatePrice = (ram) => {
    let priceInr = pricingData[ram][processor];
    
    // Apply location premium if Singapore is selected
    if (location === 'Singapore') {
      priceInr = Math.round(priceInr * 1.2); // 20% premium
    }

    if (currency === 'USD') {
      return (priceInr / 83).toFixed(2); // Rough conversion for display
    }
    return priceInr;
  };

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  return (
    <>
      <Helmet>
        <title>Game Hosting | ExtraRack</title>
        <meta name="description" content="High performance game servers for Minecraft and Palworld." />
      </Helmet>

      <main className="flex-grow pt-32 pb-24 bg-[#0a0a0a] text-gray-100 relative overflow-hidden">
        {/* Neon Ambient Backgrounds */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* HEADER */}
        <section className="text-center px-4 mb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              Low Latency Gaming
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 tracking-tight">
              Dominate the Server
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              High clock-speed processors and premium routing for zero-lag gameplay.
            </p>
          </motion.div>
        </section>

        {/* CONTROLS */}
        <section className="container max-w-5xl mx-auto mb-20 relative z-10">
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="w-full md:w-auto flex-1">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Select Game</label>
              <GameSelector selectedGame={game} onSelect={setGame} />
            </div>
            <div className="w-full md:w-auto flex-1">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Processor</label>
              <ProcessorToggle selectedProcessor={processor} onSelect={setProcessor} />
            </div>
            <div className="w-full md:w-auto flex-1 flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Location</label>
                <LocationSelector selectedLocation={location} onSelect={setLocation} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Currency</label>
                <CurrencyToggle currency={currency} onToggle={toggleCurrency} />
              </div>
            </div>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramTiers.map((ram, index) => (
              <motion.div
                key={`${ram}-${processor}-${location}-${currency}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GameHostingPricingCard
                  ram={`${ram}GB`}
                  processor={processor}
                  location={location}
                  price={calculatePrice(ram)}
                  currencySymbol={currencySymbol}
                  specs={[
                    `${ram}GB DDR4 RAM`,
                    `${Math.max(2, Math.floor(ram/2))} vCPU Cores`,
                    'Unmetered Bandwidth',
                    'Advanced DDoS Protection',
                    'Full FTP Access'
                  ]}
                />
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
};

export default GameHostingPage;
