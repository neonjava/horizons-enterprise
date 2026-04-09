import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <img 
                src="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/e8ccf1235363e63ec79cde122d0b5a4d.png" 
                alt="ExtraRack Logo" 
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              High-performance infrastructure tailored for modern developers and businesses. Build, deploy, and scale with unmatched reliability.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold mb-8 text-foreground uppercase tracking-widest">Services</h3>
            <ul className="space-y-5">
              <li><Link to="/vps" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">VPS Hosting</Link></li>
              <li><Link to="/cloud-servers" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">Dedicated Servers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-8 text-foreground uppercase tracking-widest">Legal</h3>
            <ul className="space-y-5">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">Refund Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-8 text-foreground uppercase tracking-widest">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:support@extrarack.com" className="hover:text-primary transition-colors text-lg font-medium break-all">support@extrarack.com</a>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:9924398503" className="hover:text-primary transition-colors text-lg font-medium">9924398503</a>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-medium leading-snug">ExtraRack<br/>Lucknow, UP<br/>India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border">
          <p className="text-base text-muted-foreground font-medium">
            © {new Date().getFullYear()} ExtraRack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;