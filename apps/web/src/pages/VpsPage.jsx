
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Server, Shield, Zap, Globe, Code, Database, Cpu, CheckCircle, Cloud, MapPin, ArrowRight } from 'lucide-react';
import VpsPricingCard from '@/components/VpsPricingCard.jsx';
import ComingSoonBadge from '@/components/ComingSoonBadge.jsx';
import { useCurrency } from '@/hooks/useCurrency.jsx';

const VpsPage = () => {
  //by https://github.com/neonjava
  const { currency, toggleCurrency } = useCurrency();
  const [selectedProcessor, setSelectedProcessor] = useState('Intel');
  const [selectedLocation, setSelectedLocation] = useState('India');

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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VPS Hosting Plans",
    "description": "Affordable VPS hosting with Intel and AMD processors. Flexible plans starting from ₹360/month.",
    "brand": {
      "@type": "Brand",
      "name": "ExtraRack"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://extrarack.com/vps",
      "priceCurrency": "INR",
      "lowPrice": "360",
      "highPrice": "3200",
      "offerCount": "8"
    }
  };

  return (
    <>
      <Helmet>
        <title>VPS Hosting Plans - ExtraRack</title>
        <meta name="description" content="Affordable VPS hosting with Intel and AMD processors. Flexible plans starting from ₹360/month." />
        <meta name="keywords" content="VPS hosting, virtual private server, cloud hosting, ExtraRack" />
        <link rel="canonical" href="https://extrarack.com/vps" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://extrarack.com/vps" />
        <meta property="og:title" content="VPS Hosting Plans - ExtraRack" />
        <meta property="og:description" content="Affordable VPS hosting with Intel and AMD processors. Flexible plans starting from ₹360/month." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/69f9ba0b5ff65be202d8f06a5d4797b1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://extrarack.com/vps" />
        <meta property="twitter:title" content="VPS Hosting Plans - ExtraRack" />
        <meta property="twitter:description" content="Affordable VPS hosting with Intel and AMD processors. Flexible plans starting from ₹360/month." />
        <meta property="twitter:image" content="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/69f9ba0b5ff65be202d8f06a5d4797b1.png" />

        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <main className="flex-grow pt-32 pb-24">

        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-muted-foreground font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">VPS Hosting</span>
          </div>
        </div>

        {/* Hero */}
        <section className="container py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="mb-6">VPS Hosting</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-8">Powerful, Scalable, Reliable.</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Take complete control with full root access on our high-performance KVM infrastructure. Powered by enterprise-grade NVMe SSDs to deliver blazing fast I/O speeds for your most demanding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#pricing" className="btn-custom-primary inline-flex items-center justify-center rounded-xl text-lg font-bold h-16 px-12 shadow-lg shadow-primary/20">
                  View Plans
                </a>
              </div>
            </motion.div>

            {/* Clean Image Display - No Box/Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center w-full"
            >
              <img
                src="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/69f9ba0b5ff65be202d8f06a5d4797b1.png"
                alt="Gaming VPS Server"
                className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </section>

        {/* Features & Perfect For */}
        <section className="bg-card/40 py-32 border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

              {/* Features List */}
              <div>
                <h3 className="text-4xl font-bold mb-12">Premium Features</h3>
                <div className="space-y-8">
                  {[
                    { title: 'Full Root Access', desc: 'Complete server control to install any software.', icon: Shield },
                    { title: 'KVM Virtualization', desc: 'True hardware virtualization for dedicated resources.', icon: Server },
                    { title: 'NVMe SSD Storage', desc: 'Up to 10x faster than traditional SSDs.', icon: Zap },
                    { title: 'Uptime Guarantee', desc: 'Backed by our strict 99.9% SLA.', icon: CheckCircle },
                    { title: 'Scalable Anytime', desc: 'Upgrade your resources with a single click.', icon: Cpu }
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-6 p-6 rounded-2xl hover:bg-card border border-transparent hover:border-border/50 transition-colors">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <f.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">{f.title}</h4>
                        <p className="text-lg text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div>
                <h3 className="text-4xl font-bold mb-12">Perfect For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-card p-10 border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm mx-auto">
                      <Globe className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-center">Web Applications</h4>
                    <p className="text-muted-foreground text-lg text-center">Host high-traffic sites and complex web apps with zero bottlenecks.</p>
                  </div>
                  <div className="bg-card p-10 border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm mx-auto">
                      <Database className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-center">Databases</h4>
                    <p className="text-muted-foreground text-lg text-center">Ensure lightning-fast queries with dedicated NVMe storage.</p>
                  </div>
                  <div className="bg-card p-10 border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm mx-auto">
                      <Code className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-center">Development</h4>
                    <p className="text-muted-foreground text-lg text-center">Create isolated testing environments with full root access.</p>
                  </div>
                  <div className="bg-card p-10 border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm mx-auto">
                      <Cloud className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-center">Cloud Hosting</h4>
                    <p className="text-muted-foreground text-lg text-center">Build a private cloud architecture for enterprise use cases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Section */}
        <section id="pricing" className="container pt-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">VPS Hosting Plans</h2>
            <p className="text-xl text-muted-foreground">
              Dynamically calculate your cost based on compute power, data center location, and currency.
            </p>
          </div>

          {/* Controls Configuration */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
            {/* Processor Toggle */}
            <div className="bg-card border border-border p-2 rounded-2xl inline-flex shadow-sm">
              <button
                onClick={() => setSelectedProcessor('Intel')}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-bold transition-all ${selectedProcessor === 'Intel'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                <Cpu className="w-5 h-5" /> Intel
              </button>
              <button
                onClick={() => setSelectedProcessor('AMD')}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-bold transition-all ${selectedProcessor === 'AMD'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                <Cpu className="w-5 h-5" /> AMD EPYC
              </button>
            </div>

            {/* Location Selector */}
            <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-sm px-6 py-2 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <MapPin className="w-6 h-6 text-muted-foreground mr-3" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-base font-bold text-foreground focus:outline-none py-3 cursor-pointer appearance-none pr-10"
              >
                {locations.map(loc => (
                  <option key={loc.name} value={loc.name} className="bg-card text-foreground">
                    {loc.name} (x{loc.multiplier.toFixed(1)})
                  </option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Currency Toggle */}
            <div className="bg-card border border-border p-2 rounded-2xl inline-flex shadow-sm">
              <button
                onClick={() => currency !== 'INR' && toggleCurrency()}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-bold transition-all ${currency === 'INR'
                    ? 'bg-secondary text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => currency !== 'USD' && toggleCurrency()}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-bold transition-all ${currency === 'USD'
                    ? 'bg-secondary text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto mb-32">
            {plans.map((plan, index) => (
              <VpsPricingCard
                key={plan.id}
                plan={plan}
                processor={selectedProcessor}
                locationMultiplier={currentLocation.multiplier}
                currency={currency}
                rate={EXCHANGE_RATE_USD}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Dedicated Server Teaser */}
          <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-10 md:p-16 shadow-sm relative overflow-hidden">

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Server className="w-16 h-16" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Need more power? Dedicated Servers</h3>
                <p className="text-muted-foreground text-xl mb-6 leading-relaxed">
                  Bare-metal performance for your most intensive workloads. Complete control over your hardware with zero virtualization overhead.
                </p>
                <Link to="/cloud-servers" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-all gap-3 text-lg group">
                  Explore Dedicated Plans <ArrowRight className="w-6 h-6 translate-x-0 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default VpsPage;
