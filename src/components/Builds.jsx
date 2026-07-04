import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Builds = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-emerald-400">COMING SOON</h2>
        <p className="text-gray-400 text-xl">Builds page is under construction</p>
      </motion.div>
    </div>
  );
});

export default Builds;
