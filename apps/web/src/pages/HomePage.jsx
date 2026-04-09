import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Clock, Headphones, Server, Cloud, ArrowRight, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import LocationCard from '@/components/LocationCard.jsx';
import ComingSoonBadge from '@/components/ComingSoonBadge.jsx';
import RotatingTestimonials from '@/components/RotatingTestimonials.jsx';

import { useTheme } from '@/components/ThemeContext.jsx';

const ServerIllustration = () => {
  //by https://github.com/neonjava
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
      {/* Hero Image */}
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[500px]"
      >
        <img
          src={isDark ? "/images/hero-server-dark.jpg" : "/images/hero-server.png"}
          alt="Premium Cloud Server Illustration"
          className={`w-full h-auto ${isDark
            ? 'mix-blend-lighten'
            : 'mix-blend-multiply [mask-image:radial-gradient(circle_at_center,black_90%,transparent_100%)]'
            }`}
        />
      </motion.div>
    </div>
  );
};

const HomePage = () => {
  const features = [{
    title: 'NVMe SSD Storage',
    description: 'Enterprise-grade NVMe drives delivering up to 10x faster read/write speeds than standard SSDs.',
    icon: Zap
  }, {
    title: 'Advanced DDoS Protection',
    description: 'Always-on mitigation filtering malicious traffic before it reaches your server.',
    icon: Shield
  }, {
    title: 'Instant Provisioning',
    description: 'Automated deployment systems get your infrastructure online in under 60 seconds.',
    icon: Clock
  }, {
    title: '24/7 Expert Support',
    description: 'Direct access to L3 technicians who understand complex hosting environments.',
    icon: Headphones
  }, {
    title: 'Global Anycast Network',
    description: 'Optimized routing across premium tier-1 carriers for minimal latency worldwide.',
    icon: Globe
  }, {
    title: 'Dedicated Resources',
    description: 'Guaranteed CPU and RAM allocation with zero noisy-neighbor interference.',
    icon: Cpu
  }];

  const locations = [{
    region: 'Mumbai, India',
    flag: '🇮🇳',
    details: 'Asia Pacific Region - Tier 1 Network'
  }, {
    region: 'Frankfurt, Germany',
    flag: '🇩🇪',
    details: 'Central Europe - DE-CIX Connected'
  }, {
    region: 'London, UK',
    flag: '🇬🇧',
    details: 'Western Europe - LINX Connected'
  }, {
    region: 'Singapore',
    flag: '🇸🇬',
    details: 'Southeast Asia - SGIX Connected'
  }];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ExtraRack",
    "url": "https://extrarack.com",
    "logo": "https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/e8ccf1235363e63ec79cde122d0b5a4d.png",
    "description": "High Performance Hosting, Zero Lag. Reliable VPS & Dedicated Servers.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9924398503",
      "contactType": "customer service",
      "email": "support@extrarack.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>ExtraRack - VPS Hosting & Dedicated Servers in India</title>
        <meta name="description" content="Powerful, scalable, reliable VPS hosting and dedicated servers. Based in Lucknow, serving the world." />
        <meta name="keywords" content="VPS hosting, dedicated servers, cloud hosting, India, ExtraRack" />
        <link rel="canonical" href="https://extrarack.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://extrarack.com/" />
        <meta property="og:title" content="ExtraRack - VPS Hosting & Dedicated Servers in India" />
        <meta property="og:description" content="Powerful, scalable, reliable VPS hosting and dedicated servers. Based in Lucknow, serving the world." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/e8ccf1235363e63ec79cde122d0b5a4d.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://extrarack.com/" />
        <meta property="twitter:title" content="ExtraRack - VPS Hosting & Dedicated Servers in India" />
        <meta property="twitter:description" content="Powerful, scalable, reliable VPS hosting and dedicated servers. Based in Lucknow, serving the world." />
        <meta property="twitter:image" content="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/e8ccf1235363e63ec79cde122d0b5a4d.png" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="flex-grow">
        {/* HERO SECTION - RE-DESIGNED */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-40">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  New Locations Available
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
                  {/* //by https://github.com/neonjava */}
                  <span className="block md:whitespace-nowrap">High Performance</span>
                  <span className="text-primary block">Zero Lag</span>
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Reliable VPS & Game Servers with <span className="text-foreground font-bold">99.9% uptime</span>.
                  Experience the next generation of cloud infrastructure built for speed.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <Link to="/vps" className="btn-custom-primary inline-flex items-center justify-center rounded-2xl text-lg font-bold h-16 px-10 w-full sm:w-auto shadow-xl shadow-primary/20">
                    Get Started
                  </Link>
                  <Link to="/vps" className="btn-custom-outline inline-flex items-center justify-center rounded-2xl text-lg font-bold h-16 px-10 w-full sm:w-auto">
                    View Plans
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    No Setup Fee
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Instant Setup
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Money Back
                  </div>
                </div>
              </motion.div>

              {/* Illustration Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <ServerIllustration />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section-padding relative">
          <div className="container">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="mb-6">Engineered for Performance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-xl italic leading-relaxed">Choose the perfect infrastructure for your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} className="card-base flex flex-col h-full group bg-card transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Server className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">VPS Hosting</h3>
                <p className="text-muted-foreground text-lg lg:text-xl mb-10 flex-grow leading-relaxed">
                  Powerful and scalable virtual private servers built for professionals and demanding applications. Full root access and dedicated resources.
                </p>
                <Link to="/vps" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-all gap-3 text-xl mt-auto translate-x-0 group-hover:translate-x-2">
                  Explore VPS Plans <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>

              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="card-base flex flex-col h-full group relative overflow-hidden bg-card transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Cloud className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Dedicated Server</h3>
                <p className="text-muted-foreground text-lg lg:text-xl mb-10 flex-grow leading-relaxed">
                  Bare-metal performance for your most intensive workloads. Complete control over your hardware with zero virtualization overhead.
                </p>
                <Link to="/cloud-servers" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-all gap-3 text-xl mt-auto translate-x-0 group-hover:translate-x-2">
                  Explore Dedicated <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="mb-6">Everything You Need</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Built from the ground up for reliability and speed.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col p-10 rounded-[2.5rem] border border-border bg-card hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>;
              })}
            </div>
          </div>
        </section>

        {/* LOCATIONS SECTION */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="mb-6">Global Network</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto italic leading-relaxed">Deploy your server closer to your users for minimal latency.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {locations.map((loc, i) => <LocationCard key={i} {...loc} />)}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="section-padding overflow-hidden">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">Trusted by Thousands</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">See what our customers have to say about our infrastructure.</p>
            </div>

            <RotatingTestimonials />

          </div>
        </section>

        {/* COMPANY INFO CTA */}
        <section className="section-padding bg-primary text-primary-foreground text-center px-4 rounded-[4rem] mx-6 mb-12 shadow-2xl shadow-primary/30">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-primary-foreground tracking-tight">Ready to scale your <br /> infrastructure?</h2>
            <p className="text-xl lg:text-3xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-medium">
              Join thousands of businesses hosting with <span className="opacity-75">ExtraRack</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/vps" className="bg-background text-primary hover:bg-background/90 inline-flex items-center justify-center rounded-2xl text-xl font-bold h-20 px-16 w-full sm:w-auto transition-all shadow-2xl active:scale-95">
                Deploy Now
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-background/50 text-white hover:bg-background/10 inline-flex items-center justify-center rounded-2xl text-xl font-bold h-20 px-16 w-full sm:w-auto transition-all active:scale-95">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;