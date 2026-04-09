
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  const { currency, toggleCurrency } = useCurrency();

  // Assuming USD base. We want INR: 799, 1599, 2999
  // USD Base = INR / 80 (approx)
  // Basic: 799 / 80 = 9.99
  // Pro: 1599 / 80 = 19.99
  // Ultra: 2999 / 80 = 37.49
  const pricingPlans = [
    { 
      title: 'Basic', 
      basePriceUSD: 9.99, 
      isPopular: false,
      features: ['2 CPU Cores', '4GB RAM', '80GB NVMe SSD', '1TB Bandwidth', 'DDoS Protection', '24/7 Support']
    },
    { 
      title: 'Standard', 
      basePriceUSD: 19.99, 
      isPopular: true,
      features: ['4 CPU Cores', '8GB RAM', '160GB NVMe SSD', 'Unmetered Bandwidth', 'Advanced DDoS Protection', 'Priority 24/7 Support']
    },
    { 
      title: 'Ultra', 
      basePriceUSD: 37.49, 
      isPopular: false,
      features: ['8 CPU Cores', '16GB RAM', '320GB NVMe SSD', 'Unmetered Bandwidth', 'Enterprise DDoS Protection', 'Dedicated Account Manager']
    }
  ];

  const compareFeatures = [
    { name: 'CPU Cores', basic: '2 Cores', standard: '4 Cores', ultra: '8 Cores' },
    { name: 'RAM (Memory)', basic: '4 GB', standard: '8 GB', ultra: '16 GB' },
    { name: 'Storage (NVMe)', basic: '80 GB', standard: '160 GB', ultra: '320 GB' },
    { name: 'Network Port', basic: '1 Gbps', standard: '1 Gbps', ultra: '10 Gbps' },
    { name: 'DDoS Protection', basic: true, standard: true, ultra: true },
    { name: 'Root Access', basic: true, standard: true, ultra: true },
    { name: 'Daily Backups', basic: false, standard: true, ultra: true },
    { name: 'SLA Uptime', basic: '99.9%', standard: '99.99%', ultra: '100%' },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | ExtraRack</title>
        <meta name="description" content="Simple, transparent pricing for high-performance hosting." />
      </Helmet>

      <main className="flex-grow pt-32 pb-24">
        <section className="text-center container max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            Simple, Transparent <span className="text-primary">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10"
          >
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </motion.p>
          
          <div className="flex justify-center">
            <div className="bg-card border border-border p-1 rounded-xl inline-flex shadow-sm">
              <button
                onClick={() => currency !== 'INR' && toggleCurrency()}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${currency === 'INR' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                INR (₹) Monthly
              </button>
              <button
                onClick={() => currency !== 'USD' && toggleCurrency()}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${currency === 'USD' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                USD ($) Monthly
              </button>
            </div>
          </div>
        </section>

        <section className="container mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} delay={i * 0.1} />
            ))}
          </div>
        </section>

        <section className="container max-w-5xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-muted-foreground">Detailed breakdown of what's included in every tier.</p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="p-6 font-bold text-foreground">Features</th>
                    <th className="p-6 font-bold text-foreground text-center">Basic</th>
                    <th className="p-6 font-bold text-primary text-center">Standard</th>
                    <th className="p-6 font-bold text-foreground text-center">Ultra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {compareFeatures.map((row, i) => (
                    <tr key={i} className="hover:bg-secondary/20 transition-colors">
                      <td className="p-6 text-foreground font-medium">{row.name}</td>
                      <td className="p-6 text-center text-muted-foreground">
                        {typeof row.basic === 'boolean' ? (row.basic ? <Check className="w-5 h-5 mx-auto text-primary" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/50" />) : row.basic}
                      </td>
                      <td className="p-6 text-center text-foreground font-semibold bg-primary/5">
                        {typeof row.standard === 'boolean' ? (row.standard ? <Check className="w-5 h-5 mx-auto text-primary" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/50" />) : row.standard}
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        {typeof row.ultra === 'boolean' ? (row.ultra ? <Check className="w-5 h-5 mx-auto text-primary" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/50" />) : row.ultra}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="container max-w-4xl text-center border border-border bg-card rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">No Setup Fees</h4>
              <p className="text-sm text-muted-foreground">Hidden costs are history.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Instant Activation</h4>
              <p className="text-sm text-muted-foreground">Servers deploy in under 60s.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">30 Day Money Back</h4>
              <p className="text-sm text-muted-foreground">Risk-free guarantee.</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-6">Need a custom enterprise solution?</h3>
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold px-10">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
