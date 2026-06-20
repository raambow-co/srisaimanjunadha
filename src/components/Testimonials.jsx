import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Satish Kumar",
      location: "Powerpet, Eluru",
      rating: 5,
      service: "☀️ 5kW Solar Rooftop Installation",
      text: "Sri Sai Manjunadha Enterprises did an outstanding job installing our rooftop solar. Our electricity bills have dropped by almost 90%, and their team handled the entire net-metering approval process with the department smoothly. Extremely professional experience!"
    },
    {
      id: 2,
      name: "Radha Krishna",
      location: "Bhimavaram Town",
      rating: 5,
      service: "💧 Commercial Water Softener",
      text: "We were facing severe scaling issues due to hard water in our apartment. Their technical team recommended the right softener system. Scaling on bathroom fixtures is completely gone and water quality has improved immensely. Their AMC service is prompt and hassle-free."
    },
    {
      id: 3,
      name: "Srinivas Rao",
      location: "Tadepalligudem",
      rating: 5,
      service: "🔧 V-Guard Appliance Repair",
      text: "I called them for an authorized V-Guard appliance repair. The technician arrived on the same afternoon, diagnosed the board fault quickly, and replaced it with an original spare part. Pricing was transparent and fair. High quality support!"
    },
    {
      id: 4,
      name: "Lakshmi Prasanna",
      location: "Tanuku Bypass Area",
      rating: 5,
      service: "💧 Domestic RO Purifier & AMC",
      text: "We bought an RO water purifier from them, and we also subscribed to their annual maintenance. They call us proactively for filter changes and service visits. The drinking water tastes excellent, and the service response is very fast."
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-blue/5 glow-orb"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-orange/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3 mb-6">
            Trusted By Over 1,000+ Happy Homeowners & Businesses
          </h2>
          <p className="text-brand-gray text-base leading-relaxed">
            Read what our residential and commercial customers say about our solar installations, water systems, and appliance servicing.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Green Card Container */}
          <div className="bg-gradient-to-tr from-brand-greenDark to-[#18532A] rounded-3xl p-8 md:p-14 border border-transparent shadow-xl overflow-hidden min-h-[350px] flex flex-col justify-between relative text-white">
            
            {/* Background quote mark visual */}
            <div className="absolute -top-6 -right-6 text-brand-orange/5 pointer-events-none">
              <MessageSquare size={220} className="fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1.5 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl font-medium text-white leading-relaxed italic mb-8">
                    "{reviews[currentIndex].text}"
                  </blockquote>
                </div>

                {/* Client Profile details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-6 gap-4">
                  <div>
                    <cite className="not-italic font-extrabold text-base text-white block">
                      {reviews[currentIndex].name}
                    </cite>
                    <span className="text-xs text-white/80 font-bold tracking-wide uppercase">
                      {reviews[currentIndex].location}
                    </span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-xs font-bold text-brand-orange w-fit">
                    {reviews[currentIndex].service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-brand-dark hover:border-brand-green hover:text-brand-green transition-all duration-300 shadow-sm"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Indicators */}
            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-brand-green' : 'w-2.5 bg-gray-250'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-brand-dark hover:border-brand-green hover:text-brand-green transition-all duration-300 shadow-sm"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
