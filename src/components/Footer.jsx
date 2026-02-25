import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="relative bg-black text-white py-24 px-8 overflow-hidden">
      
      {/* Premium Top Border Glow (Solid line ki jagah gradient glow) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Brand Name with Staggered Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 
            className="text-3xl md:text-4xl font-black tracking-[0.4em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            style={{ fontFamily: 'Vibur, cursive' }}
          >
            COZY HAVEN
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-blue-500 mx-auto mt-6 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
          />
        </motion.div>

        {/* Minimal Copyright & Legal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <p className="text-[11px] md:text-xs text-gray-400 uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold">
            © {currentYear} THE ARCHIVE PROJECT. MADE WITH <span className="text-red-500 animate-pulse inline-block mx-1">♥</span> BY <span className="text-blue-400">MAYNAK (ENDER 0305)</span>
          </p>
          
          <div className="max-w-2xl border-t border-white/10 pt-8 w-full">
            <p className="text-[10px] text-gray-500 uppercase leading-relaxed tracking-[0.2em] px-4 font-medium">
              Not an official Minecraft product. <br className="hidden md:block" />
              Not approved by or associated with Mojang or Microsoft. <br />
              All builds and creations are property of their respective architects.
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;