import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-24 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
          style={{ fontFamily: 'Vibur, cursive' }}
        >
          <h2 className="text-2xl font-black tracking-[0.4em] uppercase text-white">
            COZY HAVEN
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-6" />
        </motion.div>

        {/* Minimal Copyright & Legal - Improved Visibility */}
        <div className="flex flex-col items-center gap-8">
          <p className="text-[11px] text-gray-400 uppercase tracking-[0.6em] font-bold">
            © {currentYear} THE ARCHIVE PROJECT
          </p>
          
          <div className="max-w-2xl border-t border-white/5 pt-8">
            <p className="text-[10px] text-gray-500 uppercase leading-relaxed tracking-[0.2em] px-4 font-medium">
              Not an official Minecraft product. <br className="hidden md:block" />
              Not approved by or associated with Mojang or Microsoft. 
              All builds and creations are property of their respective architects.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;