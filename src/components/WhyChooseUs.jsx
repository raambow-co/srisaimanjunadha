import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserCheck, Zap, Globe, Smile, BadgePercent, ChevronLeft, ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const highlights = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "16+ Years Experience",
      desc: "Operating successfully since 2010, building deep engineering trust and service expertise.",
      accentClass: "border-brand-orange bg-brand-orange/5 text-brand-orange",
      cardHover: "hover:border-brand-orange/40",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Certified Professionals",
      desc: "All solar integrations and water systems are handled by qualified, certified technicians.",
      accentClass: "border-brand-blue bg-brand-blue/5 text-brand-blue",
      cardHover: "hover:border-brand-blue/40",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Service Response",
      desc: "Dedicated support team and mobile service units for fast doorstep maintenance and troubleshooting.",
      accentClass: "border-brand-green bg-brand-green/5 text-brand-green",
      cardHover: "hover:border-brand-green/40",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "District-Wide Coverage",
      desc: "Comprehensive coverage radius supporting Eluru and the entire West Godavari District.",
      accentClass: "border-brand-blue bg-brand-blue/5 text-brand-blue",
      cardHover: "hover:border-brand-blue/40",
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Trusted Support Team",
      desc: "Friendly client relationship desk offering transparent, reliable advice and annual service plans.",
      accentClass: "border-brand-green bg-brand-green/5 text-brand-green",
      cardHover: "hover:border-brand-green/40",
    },
    {
      icon: <BadgePercent className="h-6 w-6" />,
      title: "Affordable Solutions",
      desc: "Competitive pricing model with premium component warranty support for long-term ROI.",
      accentClass: "border-brand-orange bg-brand-orange/5 text-brand-orange",
      cardHover: "hover:border-brand-orange/40",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
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
      setCurrentIndex((prev) => (prev + 1) % (highlights.length - visibleCards + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [visibleCards, highlights.length]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, highlights.length - visibleCards)));
  }, [visibleCards, highlights.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (highlights.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (highlights.length - visibleCards + 1)) % (highlights.length - visibleCards + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-greenDark to-[#125026] text-white relative overflow-hidden border-t border-brand-green/20">
      <div className="absolute top-10 right-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-orange tracking-[0.2em] uppercase">
            WHY SRI SAI MANJUNADHA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6">
            The Preferred Choice For Home & Commercial Utility Systems
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            We merge professional corporate systems with fast, localized support. Discover why over 1,000 clients in Eluru rely on us.
          </p>
        </div>

        {/* Sliding Highlights Carousel */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            {highlights.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 shrink-0 p-4">
                <div className={`bg-white p-8 rounded-2xl border border-transparent shadow-md transition-all duration-300 ${item.cardHover} hover:shadow-lg hover:scale-102 flex flex-col justify-between text-brand-dark h-full min-h-[250px]`}>
                  <div>
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border-l-4 mb-6 ${item.accentClass}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-extrabold text-lg text-brand-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          <button
            onClick={prevSlide}
            className="h-11 w-11 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all duration-300"
            aria-label="Previous Highlight"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {Array.from({ length: highlights.length - visibleCards + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-brand-orange' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="h-11 w-11 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all duration-300"
            aria-label="Next Highlight"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
