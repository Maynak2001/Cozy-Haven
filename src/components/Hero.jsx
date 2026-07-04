import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Hero = memo(() => {
  // Animation for the floating Minecraft characters
  const characterAnimation = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: [0, -15, 0], 
      transition: {
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay }
      }
    }
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
        <source src="/Minecraft_video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>  

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-9xl font-normal text-white text-center drop-shadow-2xl" 
          style={{ fontFamily: 'Vibur, cursive' }}
        >
          Cozy Haven
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white/90 font-mono font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-sm mt-10 text-center bg-black/10 backdrop-blur-[2px] px-4 py-1 rounded-full"
        >
          The Ultimate Minecraft Museum
        </motion.p>
      </div>

      {/* --- Updated Animated Scroll Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-3"
      >
        {/* The "Scroll Down" Text */}
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white font-mono text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll Down
        </motion.span>
        
        {/* The vertical dandi */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-14 bg-gradient-to-b from-white via-white/50 to-transparent"
        ></motion.div>
      </motion.div>
    </div>
  );
});

export default Hero;