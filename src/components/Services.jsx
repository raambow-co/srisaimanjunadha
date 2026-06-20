import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplet, ArrowUpRight, Wrench, ShieldCheck, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  const services = [
    {
      id: 1,
      title: "Solar Rooftop Solutions",
      icon: <Sun className="h-7 w-7 text-brand-orange" />,
      tagline: "Harness clean energy, reduce power bills",
      points: [
        "Residential Solar Installation",
        "Commercial & Industrial Solar",
        "On-Grid & Off-Grid Rooftop Setup",
        "Routine Maintenance & Cleaning",
        "Energy Saving Consultation"
      ],
      accentClass: "border-brand-orange/20 hover:border-brand-orange/80 shadow-brand-orange/5",
      accentBg: "bg-brand-orange/5",
      badgeColor: "bg-brand-orange/10 text-brand-orange",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(255,122,0,0.15)]",
    },
    {
      id: 2,
      title: "Water Purifier Solutions",
      icon: <Droplet className="h-7 w-7 text-brand-blue" />,
      tagline: "Pure, safe, and healthy drinking water",
      points: [
        "Premium RO Purifier Sales",
        "Professional Installation & Setup",
        "Annual Maintenance Contract (AMC)",
        "Prompt Repairs & Filter Replacement",
        "Industrial RO Filtration Systems"
      ],
      accentClass: "border-brand-blue/20 hover:border-brand-blue/80 shadow-brand-blue/5",
      accentBg: "bg-brand-blue/5",
      badgeColor: "bg-brand-blue/10 text-brand-blue",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(0,87,184,0.15)]",
    },
    {
      id: 3,
      title: "Water Softener Solutions",
      icon: <Droplet className="h-7 w-7 text-brand-blue" />,
      tagline: "Total protection against hard water problems",
      points: [
        "Hard Water Conditioning Systems",
        "Residential Water Softeners",
        "Commercial & Corporate Softeners",
        "Reconditioning & Maintenance Services",
        "Water Quality Inspection & Testing"
      ],
      accentClass: "border-brand-blue/20 hover:border-brand-blue/80 shadow-brand-blue/5",
      accentBg: "bg-brand-blue/5",
      badgeColor: "bg-brand-blue/10 text-brand-blue",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(0,87,184,0.15)]",
    },
    {
      id: 4,
      title: "Authorized Appliance Services",
      icon: <Wrench className="h-7 w-7 text-brand-green" />,
      tagline: "Fast support for electrical appliances",
      points: [
        "Authorized Service Partnership",
        "Preventative Maintenance Support",
        "Expert Repair & Part Replacement",
        "Trained Certified Technicians",
        "Quick Doorstep Response Policy"
      ],
      accentClass: "border-brand-green/20 hover:border-brand-green/80 shadow-brand-green/5",
      accentBg: "bg-brand-green/5",
      badgeColor: "bg-brand-green/10 text-brand-green",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,164,71,0.15)]",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (services.length - visibleCards + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [visibleCards, services.length]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, services.length - visibleCards)));
  }, [visibleCards, services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - visibleCards + 1)) % (services.length - visibleCards + 1));
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-brand-greenLight/70 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-blue/5 glow-orb"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-orange/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mt-3 mb-6">
            High-Performance Systems & Professional Services
          </h2>
          <p className="text-brand-gray text-base leading-relaxed">
            From green energy generation to professional water conditioning and authorized home appliance support, we deliver certified corporate-grade solutions.
          </p>
        </div>

        {/* Sliding Services Carousel */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            {services.map((service) => (
              <div key={service.id} className="w-full md:w-1/2 shrink-0 p-4">
                <div className={`group bg-white rounded-3xl p-8 md:p-10 border shadow-sm transition-all duration-500 cursor-pointer h-full flex flex-col justify-between ${service.accentClass} ${service.hoverGlow}`}>
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`h-14 w-14 rounded-2xl ${service.accentBg} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.badgeColor}`}>
                        Active Solution
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight mb-2 flex items-center">
                      {service.title}
                      <ArrowUpRight size={18} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-brand-gray" />
                    </h3>
                    <p className="text-brand-gray text-sm mb-8 font-medium italic">
                      {service.tagline}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4 border-t border-gray-100 pt-6">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-brand-dark/95 text-sm">
                          <ShieldCheck className="h-5 w-5 text-brand-green mr-3 shrink-0" />
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Indicators & Controls */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          <button
            onClick={prevSlide}
            className="h-11 w-11 rounded-full border border-brand-green/20 hover:border-brand-green bg-white/40 hover:bg-brand-green hover:text-white flex items-center justify-center text-brand-green transition-all duration-300 shadow-sm"
            aria-label="Previous Service"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: services.length - visibleCards + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-brand-green' : 'w-2.5 bg-brand-green/30 hover:bg-brand-green/60'
                }`}
                aria-label={`Go to service slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="h-11 w-11 rounded-full border border-brand-green/20 hover:border-brand-green bg-white/40 hover:bg-brand-green hover:text-white flex items-center justify-center text-brand-green transition-all duration-300 shadow-sm"
            aria-label="Next Service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Call to Action Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/60 backdrop-blur-md border border-gray-150 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center space-x-4 text-left">
            <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 hidden sm:flex">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-brand-dark text-base md:text-lg">Need a customized engineering or support quote?</h4>
              <p className="text-brand-gray text-xs md:text-sm">Get in touch for building/commercial site inspections and service contracts.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto text-center px-8 py-3.5 rounded-full bg-brand-green text-white font-bold text-sm shadow-md hover:bg-brand-green/95 transition-all duration-300 shrink-0"
          >
            Request Site Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
