import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const phoneNumber = "+919949144551"; // Company contact number
  const whatsappNumber = "919949144551";
  const whatsappMessage = encodeURIComponent("Hello! I am interested in your Solar/Water Purifier/Appliance services. I would like to get a free consultation.");

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 fill-current" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded bg-brand-dark px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap shadow-md hidden md:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 group relative animate-pulse-subtle"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6 fill-current animate-bounce" style={{ animationDuration: '3s' }} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded bg-brand-dark px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap shadow-md hidden md:block">
          Call Customer Support
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
