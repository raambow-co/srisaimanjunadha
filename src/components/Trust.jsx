import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Zap, MapPin } from 'lucide-react';

const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    // calculate increment step based on duration
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={elementRef} className="font-extrabold text-4xl sm:text-5xl tracking-tight text-brand-dark">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Trust = () => {
  const stats = [
    {
      icon: <Trophy className="h-6 w-6 text-brand-orange" />,
      value: "16",
      suffix: "+",
      label: "Years Experience",
      description: "Delivering reliable support since 2010.",
      borderColor: "hover:border-brand-orange/30",
      iconBg: "bg-brand-orange/10",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-blue" />,
      value: "1000",
      suffix: "+",
      label: "Happy Customers",
      description: "Residential & commercial clients in AP.",
      borderColor: "hover:border-brand-blue/30",
      iconBg: "bg-brand-blue/10",
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-green" />,
      value: "500",
      suffix: "+",
      label: "Projects Completed",
      description: "Solar rooftops and water systems.",
      borderColor: "hover:border-brand-green/30",
      iconBg: "bg-brand-green/10",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-greenLight relative overflow-hidden border-y border-brand-green/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`glass-card p-8 rounded-2xl flex flex-col justify-between border border-gray-150/50 shadow-sm transition-all duration-300 ${stat.borderColor} hover:shadow-md hover:scale-102`}
            >
              <div>
                <div className={`h-12 w-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-6`}>
                  {stat.icon}
                </div>
                <div className="flex items-baseline space-x-1 mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">{stat.label}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
