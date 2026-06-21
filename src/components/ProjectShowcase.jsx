import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local project gallery images
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.webp';
import p7 from '../assets/p7.webp';
import p8 from '../assets/p8.webp';
import p9 from '../assets/p9.webp';
import p10 from '../assets/p10.webp';

const ProjectShowcase = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play sliding interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500); // 4.5 seconds interval
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCardStyles = (index) => {
    let offset = index - activeIndex;

    // Infinite wrap calculation
    const halfCount = Math.floor(images.length / 2);
    if (offset > halfCount) {
      offset -= images.length;
    } else if (offset < -halfCount) {
      offset += images.length;
    }

    const absOffset = Math.abs(offset);
    
    // Render only closest cards for visual balance
    const isVisible = absOffset <= 2;

    const isMobile = windowWidth < 640;
    const x = offset * (isMobile ? 150 : 250);     // horizontal offset spacing
    const z = -absOffset * (isMobile ? 80 : 130); // depth translation (backwards)
    const scale = 1 - absOffset * 0.15; // scaling factor
    const rotateY = offset * -25; // 3D Y-axis rotation angle
    const opacity = isVisible ? (1 - absOffset * 0.35) : 0;
    const zIndex = 10 - absOffset;

    return {
      x,
      z,
      scale,
      rotateY,
      opacity,
      zIndex,
      pointerEvents: offset === 0 ? 'auto' : 'none',
    };
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor Orbs */}
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-brand-orange/5 glow-orb"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-green/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
            PROJECT GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3 mb-6">
            Real-World Installations & Engineering Excellence
          </h2>
          <p className="text-brand-gray text-base leading-relaxed">
            Swipe or select a project card to view our high-performance solar rooftop systems and professional water treatment operations in Eluru and surrounding regions.
          </p>
        </div>

        {/* 3D Carousel Wrapper */}
        <div 
          className="relative w-full h-[480px] sm:h-[660px] flex items-center justify-center overflow-hidden perspective-[1200px]" 
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center" 
            style={{ transformStyle: 'preserve-3d' }}
          >
            {images.map((image, index) => {
              const cardStyle = getCardStyles(index);
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: cardStyle.x,
                    z: cardStyle.z,
                    scale: cardStyle.scale,
                    rotateY: cardStyle.rotateY,
                    opacity: cardStyle.opacity,
                  }}
                  style={{
                    zIndex: cardStyle.zIndex,
                    pointerEvents: cardStyle.pointerEvents,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24
                  }}
                  onClick={() => setActiveIndex(index)}
                  className="absolute w-[280px] h-[380px] sm:w-[420px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-150/10 bg-brand-dark cursor-pointer select-none transform-gpu"
                >
                  <img
                    src={image}
                    alt={`Project Installation Site ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                  
                  {/* Active Card Label Overlay */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/45 to-transparent p-6 text-left"
                    >
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-1.5 flex items-center">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange mr-2"></span>
                        Live Installation
                      </span>
                      <h3 className="font-extrabold text-lg text-white leading-tight mb-1 tracking-tight">
                        Project Site #{index + 1}
                      </h3>
                      <p className="text-xs text-white/70 font-semibold">
                        Eluru & West Godavari District
                      </p>
                    </motion.div>
                  )}

                  {/* Dark glass overlay for inactive background cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[0.5px] transition-all duration-300 hover:bg-brand-dark/20" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls Overlay */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-10 md:left-20 z-30 h-11 w-11 rounded-full bg-white/90 hover:bg-white border border-gray-250/50 flex items-center justify-center text-brand-dark hover:text-brand-green hover:scale-105 shadow-md active:scale-95 transition-all duration-200"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-10 md:right-20 z-30 h-11 w-11 rounded-full bg-white/90 hover:bg-white border border-gray-250/50 flex items-center justify-center text-brand-dark hover:text-brand-green hover:scale-105 shadow-md active:scale-95 transition-all duration-200"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Progress Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 z-30 relative">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index 
                  ? 'w-7 bg-brand-green' 
                  : 'w-2.5 bg-gray-300 hover:bg-brand-green/40'
              }`}
              aria-label={`Go to project slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
