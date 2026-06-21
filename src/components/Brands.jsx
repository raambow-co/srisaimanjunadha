import React from 'react';
import vGuardLogo from '../assets/v_guard_logo.webp';
import ushaLogo from '../assets/usha_home_appliances.webp';
import bajajLogo from '../assets/bajaj_home_electronics.webp';
import philipsLogo from '../assets/philips.webp';
import symphonyLogo from '../assets/symphony.webp';
import mccoyLogo from '../assets/mccoy_logo.webp';
import suryaLogo from '../assets/surya_electronics.webp';
import polycabLogo from '../assets/polycab_logo.webp';
import relianceLogo from '../assets/reliance_logo.webp';

const Brands = () => {
  const partners = [
    {
      name: "V-GUARD",
      desc: "Appliances & Solar",
      logo: vGuardLogo
    },
    {
      name: "USHA",
      desc: "Appliances",
      logo: ushaLogo
    },
    {
      name: "BAJAJ",
      desc: "Bajaj Electricals",
      logo: bajajLogo
    },
    {
      name: "PHILIPS",
      desc: "Lighting & Care",
      logo: philipsLogo
    },
    {
      name: "Symphony",
      desc: "Coolers & Water",
      logo: symphonyLogo
    },
    {
      name: "McCoy",
      desc: "Home Appliances",
      logo: mccoyLogo
    },
    {
      name: "SURYA",
      desc: "Water & Solar",
      logo: suryaLogo
    },
    {
      name: "POLYCAB",
      desc: "Cables & Solar",
      logo: polycabLogo
    },
    {
      name: "RELIANCE",
      desc: "Reliance Solar",
      logo: relianceLogo
    }
  ];

  // Triplicating the list to guarantee infinite looping without blank gaps
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section id="brands" className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-orange tracking-[0.2em] uppercase">
            AUTHORIZED SERVICE PARTNER
          </span>
          <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mt-3">
            We Service Leading National Brands
          </h2>
          <p className="text-brand-gray text-sm mt-3 leading-relaxed">
            As an authorized support and engineering firm, we represent and maintain high-quality equipment from leading manufacturers.
          </p>
        </div>

        {/* Marquee Wrapper with soft edge fades */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-greenLight to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-greenLight to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row */}
          <div className="animate-marquee flex gap-6 items-center">
            {marqueeItems.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-gray-150 p-6 rounded-2xl flex flex-col justify-center items-center text-center h-28 w-48 shrink-0 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer animate-float-slow"
                style={{ animationDelay: `${(index % 3) * 0.5}s`, animationDuration: '6s' }}
              >
                <div className="h-10 flex items-center justify-center select-none">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="max-h-full max-w-[130px] object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-[9px] text-brand-gray font-bold tracking-wider uppercase mt-3 opacity-75">
                  {partner.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
