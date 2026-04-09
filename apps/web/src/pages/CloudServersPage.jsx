
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Server, Shield, Cpu, Zap } from 'lucide-react';

import { useCurrency } from '@/hooks/useCurrency.jsx';

const CloudServersPage = () => {
  //by https://github.com/neonjava
  const { currency } = useCurrency();

  return (
    <>
      <Helmet>
        <title>Dedicated Servers - ExtraRack</title>
        <meta name="description" content="Ultimate bare-metal performance for enterprise workloads. Fully dedicated hardware with zero virtualization lag." />
      </Helmet>

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center min-h-[85vh] bg-background">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-16 lg:p-24 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-10 border border-primary/20">
                Coming Soon
              </div>

              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-8 border border-border">
                <Server className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>

              {/* Headings */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground tracking-tight">
                Bare-Metal <span className="text-primary">Dedicated Servers</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
                We are engineering a new tier of uncompromised performance. Get ready for enterprise-grade hardware with zero virtualization overhead, full IPMI access, and automated provisioning.
              </p>

              {/* Feature Previews */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-border pt-16">
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <Cpu className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Latest Gen CPUs</h3>
                  <p className="text-base text-muted-foreground">AMD EPYC™ & Intel® Xeon® processors</p>
                </div>

                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">NVMe Storage</h3>
                  <p className="text-base text-muted-foreground">Enterprise drives for maximum IOPS</p>
                </div>

                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">DDoS Protection</h3>
                  <p className="text-base text-muted-foreground">Always-on network mitigation</p>
                </div>
              </div>

              {/* Disabled Button */}
              <div className="mt-16">
                <button
                  disabled
                  className="bg-muted text-muted-foreground border-2 border-border opacity-60 cursor-not-allowed inline-flex items-center justify-center rounded-xl text-lg font-bold h-14 px-10"
                >
                  Comming soon...
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default CloudServersPage;
