import React from 'react';

const Brands = () => {
  const partners = [
    {
      name: "V-GUARD",
      desc: "Appliances & Solar",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* V-Guard red/orange wings */}
          <path d="M12 8 L22 28 L32 8 H27 L22 18 L17 8 Z" fill="#E02424" />
          <path d="M22 18 L26 8 H18 Z" fill="#F59E0B" />
          <text x="38" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="13" fill="#0C3E1E" letterSpacing="0.5">V-GUARD</text>
        </svg>
      )
    },
    {
      name: "USHA",
      desc: "Appliances",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="15" y="28" fontFamily="'Outfit', sans-serif" fontWeight="950" fontSize="24" fontStyle="italic" fill="#DC2626" letterSpacing="1.5">USHA</text>
          <rect x="15" y="32" width="70" height="2.5" fill="#DC2626" />
        </svg>
      )
    },
    {
      name: "BAJAJ",
      desc: "Bajaj Electricals",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8 H28 C32 8, 34 10, 34 13 C34 15, 32 17, 30 18 C33 19, 35 21, 35 25 C35 29, 32 31, 28 31 H15 Z M21 13 V17 H27 C28 17, 29 16.5, 29 15 C29 13.5, 28 13, 27 13 Z M21 21 V26 H27 C28 26, 29 25.5, 29 24.5 C29 23, 28 21, 27 21 Z" fill="#1E3A8A" />
          <text x="42" y="25" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="15" fill="#1E3A8A" letterSpacing="0.5">BAJAJ</text>
        </svg>
      )
    },
    {
      name: "PHILIPS",
      desc: "Lighting & Care",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6 H28 V16 C28 23, 19 29, 19 29 C19 29, 10 23, 10 16 Z" fill="#0369A1" />
          <circle cx="15" cy="12" r="1.5" fill="white" />
          <circle cx="23" cy="12" r="1.5" fill="white" />
          <path d="M12 19 Q19 16 26 19" stroke="white" strokeWidth="1.5" fill="none" />
          <text x="35" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="14" fill="#0369A1" letterSpacing="0.5">PHILIPS</text>
        </svg>
      )
    },
    {
      name: "Symphony",
      desc: "Coolers & Water",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25 C10 15, 20 10, 25 15 C20 20, 15 25, 10 25" fill="#0D9488" />
          <path d="M15 28 C15 20, 25 15, 30 20 C25 25, 20 28, 15 28" fill="#0F766E" />
          <text x="38" y="25" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="16" fill="#0F766E" fontStyle="italic">Symphony</text>
        </svg>
      )
    },
    {
      name: "McCoy",
      desc: "Home Appliances",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="26" fontFamily="'Outfit', sans-serif" fontWeight="950" fontSize="19" fill="#312E81" letterSpacing="0.5">McCoy</text>
          <path d="M82 12 L89 26 L96 12" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "SURYA",
      desc: "Water & Solar",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="7" fill="#F97316" />
          <path d="M20 5 V8 M20 32 V35 M5 20 H8 M32 20 H35 M9.5 9.5 L11.5 11.5 M28.5 28.5 L30.5 30.5 M9.5 30.5 L11.5 28.5 M28.5 11.5 L30.5 9.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
          <text x="44" y="26" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="17" fill="#EA580C" letterSpacing="1">SURYA</text>
        </svg>
      )
    },
    {
      name: "POLYCAB",
      desc: "Cables & Solar",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="9" width="22" height="22" rx="4" fill="#B91C1C" />
          <path d="M15 14 H21 M15 20 H25 M15 26 H22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <text x="40" y="26" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="950" fontSize="15" fill="#B91C1C" letterSpacing="0.5">POLYCAB</text>
        </svg>
      )
    },
    {
      name: "RELIANCE",
      desc: "Reliance Solar",
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="20" cy="20" rx="11" ry="11" fill="#1E40AF" />
          <text x="20" y="24" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="12" fill="white" textAnchor="middle">R</text>
          <text x="38" y="25" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="14" fill="#1E40AF" letterSpacing="0.5">Reliance</text>
          <path d="M38 29 H92" stroke="#EF4444" strokeWidth="1.5" />
        </svg>
      )
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
                  {partner.logo}
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
