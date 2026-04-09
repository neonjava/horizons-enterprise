
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Server, Users, Target, Zap, Shield, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ExtraRack</title>
        <meta name="description" content="Learn about ExtraRack's mission, vision, and what makes us different." />
      </Helmet>

      <main className="flex-grow pt-24 pb-24">
        <div className="container py-4">
          <div className="flex items-center text-sm text-muted-foreground font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">About Us</span>
          </div>
        </div>

        {/* Hero */}
        <section className="container text-center py-16 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Server className="w-10 h-10" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            About ExtraRack
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We're a team of infrastructure enthusiasts dedicated to providing high-performance, affordable, and incredibly reliable server solutions to developers and gamers worldwide.
          </motion.p>
        </section>

        {/* Stats */}
        <section className="container pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-extrabold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground font-medium">Happy Customers</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-extrabold text-foreground mb-2">99.9%</h3>
              <p className="text-muted-foreground font-medium">Uptime SLA</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-extrabold text-foreground mb-2">20+</h3>
              <p className="text-muted-foreground font-medium">Global Locations</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-extrabold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground font-medium">Expert Support</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision (Zig-Zag layout) */}
        <section className="py-24 bg-card/40 border-y border-border">
          <div className="container space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-wider">
                  <Target className="w-5 h-5" /> Our Mission
                </div>
                <h2 className="text-3xl font-bold mb-6">Empowering Creators Globally</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to democratize high-performance computing. We believe that whether you're a teenager hosting a Minecraft server for friends or a startup deploying critical infrastructure, you deserve enterprise-grade hardware without the exorbitant price tag.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl aspect-video flex items-center justify-center border border-border">
                {/* Abstract graphic representation */}
                <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl absolute"></div>
                <Server className="w-24 h-24 text-primary relative z-10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-secondary rounded-2xl aspect-video flex items-center justify-center border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <Users className="w-24 h-24 text-primary relative z-10" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-wider">
                  <Users className="w-5 h-5" /> Our Vision
                </div>
                <h2 className="text-3xl font-bold mb-6">A Seamless Digital Future</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a digital landscape where latency is nonexistent and scaling happens automatically. By continuously investing in R&D and the latest networking technology, we aim to be the silent engine powering the next generation of the internet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="container py-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground text-lg">We don't just sell servers; we partner with you for success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Hardware</h3>
              <p className="text-muted-foreground leading-relaxed">We strictly use the latest generation AMD and Intel processors alongside enterprise NVMe storage to ensure zero bottlenecks.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-muted-foreground leading-relaxed">No hidden fees, no lock-in contracts, and a transparent SLA. If we fall short, you get credited automatically.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Human Support</h3>
              <p className="text-muted-foreground leading-relaxed">Tired of bots? Our L3 support technicians are real engineers who understand your stack and are ready to assist.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
