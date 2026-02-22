import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/Minecraft_video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
        {/* Main Title Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-9xl font-normal text-white text-center drop-shadow-2xl" 
          style={{ fontFamily: 'Vibur, cursive' }}
        >
          Cozy Haven
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white/90 font-mono font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-sm mt-10 text-center "
        >
          The Ultimate Minecraft Museum
        </motion.p>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;