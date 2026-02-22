import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Builder_01", quote: "This museum preserves every block I've placed since 2024. Truly a legacy vault." },
    { name: "Architect_X", quote: "Seeing my mega-structures documented in the vault is incredible. The community here values art." }
  ];

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12">
        {reviews.map((rev, i) => (
          <motion.div key={i} className="bg-gray-800/40 p-8 rounded-2xl border-l-4 border-blue-500 shadow-xl">
            <p className="text-xl text-gray-300 italic mb-6">"{rev.quote}"</p>
            <h4 className="text-white font-bold">— {rev.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;