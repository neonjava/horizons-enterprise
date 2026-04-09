import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeContext.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'VPS Hosting', path: '/vps' },
    { name: 'Dedicated Server', path: '/cloud-servers' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm' 
          : 'bg-background/80 backdrop-blur-sm py-6 border-b border-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link to="/" className="shrink-0 flex items-center group">
          <img 
            src="https://horizons-cdn.hostinger.com/b384ccb2-25f6-4c51-a8f6-b154713bcacf/e8ccf1235363e63ec79cde122d0b5a4d.png" 
            alt="ExtraRack Logo" 
            className="h-10 md:h-[44px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
          />
        </Link>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 justify-center flex-1 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-200 font-semibold text-base relative group ${
                isActive(link.path) ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-5 shrink-0">
          
          {/* Client Area Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button asChild size="lg" className="font-bold shadow-sm px-8 rounded-xl">
              <a href="https://billing.extrarack.in" target="_blank" rel="noopener noreferrer">
                Client Area
              </a>
            </Button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border/50 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-foreground hover:bg-secondary transition-colors border border-transparent hover:border-border"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-6 flex flex-col gap-3 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`p-4 rounded-xl font-semibold transition-colors text-lg ${
                isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Actions */}
          <div className="flex flex-col mt-4 pt-6 border-t border-border">
            <a
              href="https://billing.extrarack.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl font-bold transition-colors bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center text-lg shadow-sm"
            >
              Client Area
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;