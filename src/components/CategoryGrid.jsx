import React from 'react';
import { motion } from 'framer-motion';

const CategoryGrid = () => {
  return (
    <section className="py-24 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Card 1: Builds */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative h-[400px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-800 p-10 flex flex-col justify-end cursor-pointer"
        >
          <div className="z-10">
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">The Build Archives</h3>
            <p className="text-gray-400 text-lg">Explore massive castles and redstone marvels.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>

        {/* Card 2: Community */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative h-[400px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-800 p-10 flex flex-col justify-end cursor-pointer"
        >
          <div className="z-10">
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">Architects Hall</h3>
            <p className="text-gray-400 text-lg">Meet the legends who built Cozy Haven.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;