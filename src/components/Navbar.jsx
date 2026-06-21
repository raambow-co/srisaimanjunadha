import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/sri_sai_logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coverage Areas', href: '#coverage' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || isOpen
            ? 'navbar-scrolled py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-brand-green bg-white shadow-sm overflow-hidden p-0.5 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="SSM Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide text-brand-blue uppercase md:text-base">
                  Sri Sai Manjunadha
                </span>
                <span className="text-[10px] font-bold text-brand-orange tracking-[0.15em] uppercase -mt-0.5">
                  Enterprises
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base lg:text-lg font-bold text-white hover:text-brand-orange transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Call Now Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919949144551"
                className="flex items-center space-x-2 rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 text-white hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-16 z-30 mobile-drawer-scrolled shadow-xl lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="space-y-1 px-4 pt-3 pb-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-lg font-bold text-white hover:bg-white/10 hover:text-brand-orange transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-green/10 mt-2 px-4">
                <a
                  href="tel:+919949144551"
                  className="flex items-center justify-center space-x-2 rounded-full bg-brand-orange py-3 text-base font-bold text-white shadow-md hover:bg-brand-orange/95 w-full"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
