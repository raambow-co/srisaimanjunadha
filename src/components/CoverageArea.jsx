import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldAlert, Navigation, Users2 } from 'lucide-react';

const CoverageArea = () => {
  const [activeHub, setActiveHub] = useState('eluru');

  const hubs = [
    {
      id: 'eluru',
      name: 'Eluru City (Headquarters)',
      coords: { x: 230, y: 220 },
      radius: '100 KM Operations Center',
      manpower: '12 Certified Engineers',
      response: 'Within 2-4 Hours',
      details: 'Central inventory depot for Solar panels, RO filter replacements, and authorized service components.'
    },
    {
      id: 'tadepalligudem',
      name: 'Tadepalligudem Sub-hub',
      coords: { x: 310, y: 200 },
      radius: '75 KM Services Coverage',
      manpower: '6 Field Technicians',
      response: 'Within 3-6 Hours',
      details: 'Dedicated agricultural & domestic water softener installation team serving nearby rural sectors.'
    },
    {
      id: 'bhimavaram',
      name: 'Bhimavaram Sub-hub',
      coords: { x: 330, y: 260 },
      radius: '60 KM Coastal Coverage',
      manpower: '5 Aqua-Treatment Specialists',
      response: 'Within 4-8 Hours',
      details: 'Expertise in high-hardness water conditioning for residential apartments & commercial shrimp processing hubs.'
    },
    {
      id: 'jangareddygudem',
      name: 'Jangareddygudem Sub-hub',
      coords: { x: 200, y: 130 },
      radius: '50 KM Agency Coverage',
      manpower: '4 Rooftop Technicians',
      response: 'Within 4-8 Hours',
      details: 'Solar site survey and structural framing technicians servicing the agency & upland areas.'
    }
  ];

  return (
    <section id="coverage" className="py-16 md:py-24 bg-brand-greenLight/70 relative overflow-hidden border-y border-brand-green/10">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl opacity-50"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Map Visual */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Title block */}
            <div className="text-left w-full mb-8">
              <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
                DISTRICT COVERAGE MAP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3">
                Serving Eluru & West Godavari
              </h2>
              <p className="text-brand-gray text-sm mt-3 leading-relaxed">
                Our main offices and certified technicians are strategically positioned across major hubs to ensure prompt service delivery.
              </p>
            </div>

            {/* Custom SVG Interactive Map of coastal AP */}
            <div className="w-full max-w-[550px] aspect-[4/3] bg-white rounded-3xl border border-gray-150 p-6 shadow-sm relative overflow-hidden">
              <svg
                viewBox="0 0 500 380"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Styled AP Outline representation */}
                <path
                  d="M 50,220 C 80,180 120,130 180,110 C 230,90 280,120 320,140 C 360,160 410,210 450,250 C 420,280 390,310 340,320 C 300,330 260,300 220,290 C 180,280 130,300 90,280 Z"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  className="opacity-70"
                />

                {/* Highlighted Region (Eluru & West Godavari zone) */}
                <path
                  d="M 160,170 C 190,140 240,150 280,170 C 320,190 350,230 330,270 C 290,280 250,260 210,260 C 180,260 165,220 160,170 Z"
                  fill="rgba(0, 87, 184, 0.06)"
                  stroke="url(#highlightGrad)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDuration: '4s' }}
                />

                <defs>
                  <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0057B8" />
                    <stop offset="50%" stopColor="#22A447" />
                    <stop offset="100%" stopColor="#FF7A00" />
                  </linearGradient>
                </defs>

                {/* Pulsing 100 KM Radius centered on Eluru (Hub 0) */}
                <circle
                  cx={hubs[0].coords.x}
                  cy={hubs[0].coords.y}
                  r="85"
                  fill="rgba(0, 87, 184, 0.02)"
                  stroke="#0057B8"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  className="origin-center"
                />
                
                {/* Visual indicator of Radius */}
                <line
                  x1={hubs[0].coords.x}
                  y1={hubs[0].coords.y}
                  x2={hubs[0].coords.x + 85}
                  y2={hubs[0].coords.y}
                  stroke="#0057B8"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <text
                  x={hubs[0].coords.x + 10}
                  y={hubs[0].coords.y - 6}
                  fill="#0057B8"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="0.05em"
                >
                  100 KM RADIUS
                </text>

                {/* Connections between hubs */}
                {hubs.slice(1).map(h => (
                  <line
                    key={h.id}
                    x1={hubs[0].coords.x}
                    y1={hubs[0].coords.y}
                    x2={h.coords.x}
                    y2={h.coords.y}
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Map Pins / Nodes */}
                {hubs.map(h => {
                  const isActive = activeHub === h.id;
                  return (
                    <g
                      key={h.id}
                      className="cursor-pointer"
                      onClick={() => setActiveHub(h.id)}
                    >
                      {/* Outer Pulse */}
                      {isActive && (
                        <circle
                          cx={h.coords.x}
                          cy={h.coords.y}
                          r="16"
                          fill="rgba(0, 87, 184, 0.15)"
                          className="animate-ping"
                          style={{ animationDuration: '2s' }}
                        />
                      )}
                      
                      {/* Node Base */}
                      <circle
                        cx={h.coords.x}
                        cy={h.coords.y}
                        r={isActive ? "8" : "6"}
                        fill={isActive ? "#0057B8" : "#22A447"}
                        stroke="#FFF"
                        strokeWidth="2"
                        className="transition-all duration-300 hover:scale-125 shadow-md"
                      />

                      {/* Text Tag */}
                      <text
                        x={h.coords.x}
                        y={h.coords.y - 12}
                        textAnchor="middle"
                        fill="#111111"
                        fontSize="12"
                        fontWeight={isActive ? "bold" : "600"}
                        className="transition-all duration-300"
                      >
                        {h.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Side: Interactive Details Card */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {hubs.map(h => {
                const isActive = activeHub === h.id;
                if (!isActive) return null;

                return (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-8 rounded-3xl border border-gray-150 shadow-md relative overflow-hidden"
                  >
                    {/* Visual bar */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-green"></div>

                    <div className="flex items-center space-x-3 mb-6">
                      <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-brand-dark text-lg">{h.name}</h4>
                        <span className="text-xs text-brand-gray font-bold tracking-wider uppercase">Active Dispatch Center</span>
                      </div>
                    </div>

                    <div className="space-y-6 border-t border-gray-100 pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] text-brand-gray font-bold uppercase tracking-wider mb-1">Manpower Deploy</div>
                          <div className="text-sm font-extrabold text-brand-dark flex items-center">
                            <Users2 size={14} className="mr-1.5 text-brand-green" />
                            {h.manpower}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-brand-gray font-bold uppercase tracking-wider mb-1">Response Radius</div>
                          <div className="text-sm font-extrabold text-brand-dark flex items-center">
                            <Navigation size={14} className="mr-1.5 text-brand-orange" />
                            {h.radius.split(' ')[0] + " " + h.radius.split(' ')[1]}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-brand-gray font-bold uppercase tracking-wider mb-1">Target Response Time</div>
                        <div className="text-sm font-extrabold text-brand-blue">{h.response}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-brand-gray font-bold uppercase tracking-wider mb-1">Center Operations</div>
                        <p className="text-brand-gray text-xs leading-relaxed">{h.details}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* General Manpower Information Banner */}
              <div className="glass-card p-6 rounded-2xl border border-dashed border-gray-200 flex items-start space-x-4 shadow-sm bg-white/70">
                <ShieldAlert className="text-brand-green h-6 w-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">Local Authorized Manpower Guarantee</h4>
                  <p className="text-brand-gray text-xs leading-relaxed mt-1">
                    Every sub-hub runs fully equipped mobile units carry critical replacement parts, filters, and diagnostic tools to ensure same-day resolution for over 90% of service visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
