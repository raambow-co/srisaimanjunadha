import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you install rooftop solar?",
      answer: "Yes! We design and install high-efficiency Grid-Connected (On-Grid), Off-Grid, and Hybrid Solar Rooftop Systems. We handle the entire end-to-end execution: structural design, panel installation, electrical wiring, net-metering approvals with the electricity board, and post-installation monitoring support."
    },
    {
      question: "Do you offer AMC (Annual Maintenance Contract) services?",
      answer: "Absolutely. We offer customized Annual Maintenance Contracts for RO Water Purifiers, Water Softeners, and Solar Rooftop Systems. An AMC includes quarterly preventive inspection visits, filter cleaning/replacements, health-checks, electrical parameter monitoring, and priority emergency breakdown support."
    },
    {
      question: "Do you install water softeners?",
      answer: "Yes, we are specialists in treating hard water. We supply and install premium Domestic and Commercial Water Softeners designed to eliminate high hardness levels. Our systems protect your home piping infrastructure, electronic boilers, bathroom fixtures, and safeguard your skin and hair health."
    },
    {
      question: "What service coverage areas do you support?",
      answer: "We provide comprehensive on-site installation and support services spanning Eluru and the entire West Godavari District, covering up to a 100 KM operational radius. We have multiple sub-hubs (Tadepalligudem, Bhimavaram, Jangareddygudem) ensuring fast dispatch times."
    },
    {
      question: "Which appliance brands are supported?",
      answer: "We are authorized service and sales partners for leading national brands, including V-Guard, Usha, Bajaj Electricals, Philips, Symphony, McCoy, Surya, Polycab, and Reliance. All maintenance is completed using genuine manufacturer spare parts and warranty standards."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden border-t border-brand-green/10">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
            FAQ AND SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-gray text-sm max-w-xl mx-auto leading-relaxed">
            Got questions? We have answers. If you don't find the answers you are looking for, contact our direct customer helpline.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-green/30 shadow-md' : 'border-gray-150 shadow-sm hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-brand-dark text-base md:text-lg flex items-center pr-4">
                    <HelpCircle size={18} className="text-brand-green mr-3 shrink-0 hidden sm:inline" />
                    {faq.question}
                  </span>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-brand-green text-white' : 'bg-brand-light text-brand-dark'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-100 text-brand-gray text-sm leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
