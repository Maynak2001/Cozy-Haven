import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Builder_01", rank: "Master Builder", quote: "This museum preserves every block I've placed since 2024. Truly a legacy vault." },
    { name: "Architect_X", rank: "Legacy Member", quote: "Seeing my mega-structures documented in the vault is incredible. The community values art." }
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-center text-4xl font-black text-white mb-20 tracking-tight">VOICES OF THE VAULT</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-10 rounded-[2rem] border border-white/5 relative shadow-inner"
            >
              <Quote className="absolute top-8 right-8 text-blue-500/20 w-16 h-16" />
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8 italic">"{rev.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                <div>
                  <h4 className="text-white font-bold text-lg">{rev.name}</h4>
                  <p className="text-blue-400 text-xs font-mono uppercase tracking-widest">{rev.rank}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Testimonials;