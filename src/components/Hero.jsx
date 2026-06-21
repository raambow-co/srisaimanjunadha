import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Sun, Droplets, Zap, ShieldCheck, Trophy } from 'lucide-react';
import pmModiImage from '../assets/pm_modi.webp';
import proprietorImage from '../assets/proprietor.webp';

const Hero = () => {
  const images = [pmModiImage, proprietorImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [images.length]);

  const slideVariants = {
    initial: {
      x: 150,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 120, damping: 20 },
        opacity: { duration: 0.4 },
      },
    },
    exit: {
      x: -150,
      opacity: 0,
      transition: {
        x: { duration: 0.4 },
        opacity: { duration: 0.4 },
      },
    },
  };

  const labels = [
    { title: "Hon'ble PM Narendra Modi", subtitle: "PM Surya Ghar Muft Bijli Yojana" },
    { title: "Proprietor", subtitle: "Sri Sai Manjunadha Enterprises" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-brand-greenDark via-[#155A2B] to-brand-green text-white"
    >
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-size-[40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>

      {/* Background Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-brand-orange/20 glow-orb blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-blue/20 glow-orb blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-white/10 glow-orb blur-3xl"></div>

      {/* Abstract Solar Waves and Grid Design */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="10%" r="250" fill="none" stroke="#FF7A00" strokeWidth="2" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: '60s' }} />
          <circle cx="90%" cy="10%" r="180" fill="none" stroke="#0057B8" strokeWidth="1.5" />
          <path d="M 0,200 Q 150,150 300,200 T 600,200 T 900,200 T 1200,200 T 1500,200 T 1800,200" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="10 5" />
          <path d="M 0,400 Q 200,300 400,400 T 800,400 T 1200,400 T 1600,400 T 2000,400" fill="none" stroke="#0057B8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full w-fit mb-6 shadow-md border border-brand-blue/25"
            >
              <ShieldCheck className="text-brand-blue h-4 w-4" />
              <span className="text-xs font-bold text-brand-blue tracking-wide uppercase">
                Authorized Service &amp; Installation Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Trusted Solar, Water &amp; Appliance Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl"
            >
              Serving Eluru and West Godavari District with state-of-the-art Solar Rooftop Systems, Water Purifiers, Water Softeners, and professional home appliance services.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center space-x-2 rounded-full bg-brand-orange px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-brand-orange/95 hover:shadow-lg hover:scale-102 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+919949144551"
                className="flex items-center justify-center space-x-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={16} className="text-brand-orange" />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Premium Dynamic Illustration */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full max-w-[500px] aspect-square relative"
            >
              {/* Premium Floating Ring Background */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin" style={{ animationDuration: '40s' }} />

              {/* Custom SVG Illustration Layer */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full drop-shadow-xl animate-float-slow"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Definitions for Gradients & ClipPath */}
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A00" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#0057B8" />
                  </linearGradient>
                  <clipPath id="hexClip">
                    <polygon points="250,70 400,160 400,340 250,430 100,340 100,160" />
                  </clipPath>
                </defs>

                {/* Core Base - Glowing Energy Hexagon Outline */}
                <polygon points="250,50 420,150 420,350 250,450 80,350 80,150" fill="none" stroke="url(#hexGradient)" strokeWidth="3.5" opacity="0.8" />
                
                {/* Hexagon Background Shadow Polygon */}
                <polygon points="250,70 400,160 400,340 250,430 100,340 100,160" fill="rgba(12,62,30,0.3)" />

                {/* Hexagon Image Slider */}
                <AnimatePresence initial={false}>
                  <motion.image
                    key={currentIndex}
                    href={images[currentIndex]}
                    x="100"
                    y="70"
                    width="300"
                    height="360"
                    clipPath="url(#hexClip)"
                    preserveAspectRatio="xMidYMid slice"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  />
                </AnimatePresence>

                {/* Semi-transparent Overlay to blend with green theme */}
                <polygon 
                  points="250,70 400,160 400,340 250,430 100,340 100,160" 
                  fill="rgba(12,62,30,0.15)" 
                  clipPath="url(#hexClip)"
                />
              </svg>

              {/* Floating micro-badges */}
              <div className="absolute -top-4 left-2 sm:-left-4 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-gray-150 shadow-lg flex items-center space-x-2 sm:space-x-2.5 animate-float-slow text-brand-dark scale-90 sm:scale-100">
                <div className="h-8 w-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Sun size={18} className="fill-current" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-brand-gray font-bold uppercase tracking-wider">Solar Yield</div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-dark">100% Green</div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-6 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-gray-150 shadow-lg flex items-center space-x-2 sm:space-x-2.5 animate-float-medium text-brand-dark scale-90 sm:scale-100" style={{ animationDelay: '1.5s' }}>
                <div className="h-8 w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Droplets size={18} className="fill-current" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-brand-gray font-bold uppercase tracking-wider">Water Purifiers</div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-dark">1000+ Installed</div>
                </div>
              </div>

              <div className="absolute top-1/2 right-2 sm:-right-8 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-gray-150 shadow-lg flex items-center space-x-2 sm:space-x-2.5 animate-float-slow text-brand-dark scale-90 sm:scale-100" style={{ animationDelay: '2.5s' }}>
                <div className="h-8 w-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <Zap size={18} className="fill-current" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-brand-gray font-bold uppercase tracking-wider">Appliance Health</div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-dark">A+ Rated</div>
                </div>
              </div>

              {/* 4. Solar Installations Badge */}
              <div className="absolute top-6 right-2 sm:-right-6 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-gray-150 shadow-lg flex items-center space-x-2 sm:space-x-2.5 animate-float-medium text-brand-dark scale-90 sm:scale-100" style={{ animationDelay: '0.8s' }}>
                <div className="h-8 w-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Trophy size={18} className="fill-current" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-brand-gray font-bold uppercase tracking-wider">Solar Systems</div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-dark">160+ Installed</div>
                </div>
              </div>

              {/* Dynamic Image Label Badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-brand-dark/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl text-center scale-90 sm:scale-100 min-w-[240px] text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs font-black tracking-wide">{labels[currentIndex].title}</div>
                    <div className="text-[9px] text-brand-orange font-bold uppercase tracking-widest mt-1">{labels[currentIndex].subtitle}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
