import React, { memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Castle, Zap, Users, Trophy } from 'lucide-react';
import Particles from './Particles';

const categories = [
  { title: "Build Archives", desc: "Massive castles & wonders.", icon: <Castle />, color: "from-blue-600/20", image: "/build.jpg" },
  { title: "Redstone Hub", desc: "Intricate machines & automation.", icon: <Zap />, color: "from-purple-600/20", image: "/redstone.png" },
  { title: "Architects", desc: "Meet the server legends.", icon: <Users />, color: "from-green-600/20", image: "/3.png" }
];

// Naya 3D Card Component
const TiltCard = memo(({ cat }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth movement ke liye useSpring ka use
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Mouse movement ko degree mein convert karna (-15deg se 15deg tak)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    // Mouse hatane par wapas default position pe lana
    x.set(0);
    y.set(0);
  };

  return (
    
    <div style={{ perspective: 1000 }}> {/* 3D effect dikhane ke liye perspective zaruri hai */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d", // Card ke andar ke elements ko bhi 3D depth dene ke liye
        }}
        whileHover={{ scale: 1.02 }}
        className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-between cursor-pointer shadow-2xl"
      >
        {/* Background Image - translateZ add kiya hai slight 3D depth ke liye */}
        <div 
          className="absolute inset-0"
          style={{ transform: "translateZ(-20px)" }} 
        >
          <img src={cat.image} alt={cat.title} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500" />
        </div>
        
        {/* Content Box - translateZ(40px) isko 3D mein bahar nikalega hover pe */}
        <div 
          className="relative z-10 p-8 flex flex-col justify-between h-full"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-500 transition-all">
            {cat.icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      </motion.div>
    </div>
  );
});

const CategoryGrid = () => {
  return (
    <section className="py-24 px-8 bg-gray-950 relative overflow-hidden">
      <h2 className="text-center text-4xl font-black text-white mb-16 tracking-tight">CATEGORIES</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <TiltCard key={i} cat={cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;