import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logoImage from '../assets/sri_sai_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-greenDark text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <a href="#home" className="flex items-center space-x-2 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-brand-green bg-white shadow-sm overflow-hidden p-0.5 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="SSM Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide uppercase text-white md:text-base">
                  Sri Sai Manjunadha
                </span>
                <span className="text-[10px] font-semibold text-brand-orange tracking-[0.15em] uppercase -mt-0.5">
                  Enterprises
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Serving Eluru and West Godavari with premium Solar Rooftop Systems, Water Purifiers, Water Softeners, and Authorized Appliance Services since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services Offered', href: '#services' },
                { name: 'Partner Brands', href: '#brands' },
                { name: 'Project Showcase', href: '#projects' },
                { name: 'Coverage Area', href: '#coverage' },
                { name: 'Contact Form', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-blue text-sm transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-brand-orange">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Our Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: '☀️ Solar Rooftop Systems', href: '#services' },
                { name: '💧 Water Purifier Solutions', href: '#services' },
                { name: '💧 Hard Water Softeners', href: '#services' },
                { name: '🔧 Authorized Appliance Care', href: '#services' },
                { name: '🛠️ Annual Maintenance (AMC)', href: '#services' },
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
                <span>
                  Sri Sai Manjunadha Enterprises,<br />
                  Main Road, Near Fire Station Area,<br />
                  Eluru, Andhra Pradesh - 534001
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <a href="tel:+919949144551" className="hover:text-brand-blue transition-colors">
                  +91 99491 44551
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail size={18} className="text-brand-green shrink-0" />
                <a href="mailto:support@srisaimanjunadha.com" className="hover:text-brand-green transition-colors break-all">
                  support@srisaimanjunadha.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Sri Sai Manjunadha Enterprises. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
