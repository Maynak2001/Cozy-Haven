import React from 'react';
import { motion } from 'framer-motion';
import { Castle, Zap, Users, Trophy } from 'lucide-react'; // Icons add karo

const CategoryGrid = () => {
  const categories = [
    { title: "Build Archives", desc: "Massive castles & wonders.", icon: <Castle />, color: "from-blue-600/20" },
    { title: "Redstone Hub", desc: "Intricate machines & automation.", icon: <Zap />, color: "from-purple-600/20" },
    { title: "Architects Hall", desc: "Meet the server legends.", icon: <Users />, color: "from-green-600/20" },
    { title: "Hall of Fame", desc: "Top monthly creations.", icon: <Trophy />, color: "from-yellow-600/20" }
  ];

  return (
    <section className="py-24 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-500 transition-all">
              {cat.icon}
            </div>
            <div className="z-10">
              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
            </div>
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;