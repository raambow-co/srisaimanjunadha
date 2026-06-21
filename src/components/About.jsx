import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Award, Star } from 'lucide-react';
import aboutImage from '../assets/about_image.webp';

const About = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const timelineEvents = [
    {
      year: '2010',
      title: 'Company Foundation',
      desc: 'Started operations with appliance repair services and electrical integrations in Eluru.',
      color: 'border-brand-blue bg-brand-blue text-white',
    },
    {
      year: '2015',
      title: 'Water Services Expansion',
      desc: 'Expanded into water treatment, launching sales, installation & AMC support for RO Purifiers and Softeners.',
      color: 'border-brand-green bg-brand-green text-white',
    },
    {
      year: '2020',
      title: 'Solar Rooftop Launch',
      desc: 'Launched comprehensive Solar Rooftop Systems, catering to residential, commercial, and industrial clients.',
      color: 'border-brand-orange bg-brand-orange text-white',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-green/5 glow-orb"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-orange/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Interactive Company Composite Graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white p-2 group"
            >
              <img 
                src={aboutImage} 
                alt="Sri Sai Manjunadha Enterprises Flyer" 
                className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Overlapping Badge 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 right-2 sm:-right-4 md:right-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-xl flex items-center space-x-3"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-xs text-brand-gray font-bold uppercase tracking-wider">Certified Team</div>
                <div className="text-sm font-extrabold text-brand-dark">Authorized Partners</div>
              </div>
            </motion.div>

            {/* Overlapping Badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-2 sm:-left-4 md:left-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-xl flex items-center space-x-3"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="text-xs text-brand-gray font-bold uppercase tracking-wider">Reliability</div>
                <div className="text-sm font-extrabold text-brand-dark">16+ Years Trust</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About Content and Interactive Timeline Slider */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
                OUR CORPORATE LEGACY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3 mb-6">
                About Sri Sai Manjunadha Enterprises
              </h2>
              <p className="text-brand-gray text-base leading-relaxed mb-6">
                Established in 2010, **Sri Sai Manjunadha Enterprises** has been delivering reliable solar energy, water treatment and appliance support services across Eluru and West Godavari District for more than 16 years.
              </p>
              <p className="text-brand-gray text-base leading-relaxed mb-10">
                The company operates with highly trained manpower and service locations, ensuring fast turnaround times, technical accuracy, and long-term support for your solar rooftop systems, residential and industrial water purifiers, softeners, and home appliances.
              </p>
            </motion.div>

            {/* Horizontal Timeline Slider */}
            <div className="mt-8 px-2">
              {/* Year Selector Nodes */}
              <div className="relative flex justify-between items-center max-w-md mx-auto mb-14">
                {/* Horizontal line background */}
                <div className="absolute left-0 right-0 h-1 bg-gray-200/80 rounded-full z-0"></div>
                {/* Active line progress */}
                <div 
                  className="absolute left-0 h-1 bg-brand-green rounded-full z-0 transition-all duration-500"
                  style={{ width: `${(activeIdx / (timelineEvents.length - 1)) * 100}%` }}
                ></div>

                {timelineEvents.map((event, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="relative z-10 flex flex-col items-center focus:outline-none group"
                  >
                    <div 
                      className={`h-8 w-8 rounded-full border-4 border-white flex items-center justify-center shadow-md transition-all duration-300 ${
                        activeIdx === idx 
                          ? 'bg-brand-green scale-110 text-white' 
                          : 'bg-white text-brand-gray hover:border-brand-green/50'
                      }`}
                    >
                      <span className="text-[10px] font-black">{idx + 1}</span>
                    </div>
                    <span 
                      className={`absolute -bottom-7 text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                        activeIdx === idx 
                          ? 'text-brand-green font-extrabold scale-105' 
                          : 'text-brand-gray group-hover:text-brand-dark'
                      }`}
                    >
                      {event.year}
                    </span>
                  </button>
                ))}
              </div>

              {/* Event Details Card (Framer Motion Slide-in) */}
              <div className="relative overflow-hidden min-h-[160px] mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="bg-brand-light/50 border border-gray-100/60 p-5 sm:p-6 rounded-2xl shadow-sm hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300 text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                      <h4 className="font-extrabold text-brand-dark text-base md:text-lg">
                        {timelineEvents[activeIdx].title}
                      </h4>
                      <span className="inline-block px-3 py-1 text-[10px] font-extrabold rounded-full bg-brand-green/10 text-brand-green w-fit uppercase tracking-wider">
                        Milestone
                      </span>
                    </div>
                    <p className="text-brand-gray text-sm md:text-base leading-relaxed">
                      {timelineEvents[activeIdx].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setActiveIdx((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length)}
                  className="h-10 w-10 rounded-full border border-brand-green/20 hover:border-brand-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Previous Milestone"
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev + 1) % timelineEvents.length)}
                  className="h-10 w-10 rounded-full border border-brand-green/20 hover:border-brand-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Next Milestone"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
