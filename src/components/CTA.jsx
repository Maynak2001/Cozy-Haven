import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      
      {/* --- Background Video --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-20 w-full h-full object-cover"
      >
        {/* Yahan apni video ka path daalo (public folder mein rakho video) */}
        <source src="/Minecraft_video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* --- Overlay (Taaki text padhne mein aaye) --- */}
      {/* Light overlay agar video dark hai, ya dark overlay agar video bright hai */}
      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px]" />

      <div className="relative z-20 max-w-5xl mx-auto text-center px-8">
        {/* Floating Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-red-500 p-4 rounded-full shadow-xl">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-black"
        >
          TO THE BRAVE EXPLORERS <br/> & ARCHITECTS
        </motion.h2>

        {/* Thank You Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-bold">
            Ye safar aapke bina mumkin nahi tha. Aapki har ek block-placement, har ek kahani, 
            aur har ek dosti ne <span className="text-blue-600 font-black">Cozy Haven</span> ko sirf ek server nahi, 
            ek ghar banaya hai. <br/><br/>
            Hamaari community ka hissa banne ke liye aur humein itni yaadein dene ke liye — <span className="underline decoration-blue-600 decoration-4 underline-offset-8">Dil se shukriya.</span>
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-black/10 inline-block"
        >
          <p className="text-sm font-black tracking-[0.4em] text-black uppercase">
            With Love, MAYNAK (ENDER 0305)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;