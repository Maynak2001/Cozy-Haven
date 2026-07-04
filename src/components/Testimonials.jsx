import React, { memo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Naya Spotlight Card Component
const SpotlightCard = ({ children, delay }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900/50 p-10 shadow-inner group"
    >
      {/* Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Content z-10 taaki glow text ke peechhe rahe */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const Testimonials = memo(() => {
  const reviews = [
    {
      name: "prs03507",
      rank: "Server Owner",
      quote: "In Minecraft you were never afraid of dying, you were of losing everything you own.",
      image: "/prs406.png" 
    },
    {
      name: "neonneko",
      rank: "Flower Queen",
      quote: "This server is nothing without the annoyingly bugging people Who make it come alive with laughter and happiness 🗣️🔥 , oh ya and without all the sweet sweet animals.",
      image: "/neonneko.png" 
    }
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-center text-4xl font-black text-white mb-20 tracking-tight">VOICES OF THE VAULT</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            // Apne purane motion.div ki jagah ab hum SpotlightCard use kar rahe hain
            <SpotlightCard key={i} delay={i * 0.2}>
              <Quote className="absolute top-0 right-0 text-blue-500/10 w-24 h-24 -mt-4 -mr-4 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
              
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8 italic relative z-10">
                "{rev.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={rev.image}
                  alt={rev.name}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-blue-500/30 bg-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  style={{ imageRendering: 'pixelated' }} 
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{rev.name}</h4>
                  <p className="text-blue-400 text-xs font-mono uppercase tracking-widest">{rev.rank}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
});

export default Testimonials;