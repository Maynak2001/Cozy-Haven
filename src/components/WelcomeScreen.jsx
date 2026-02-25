import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 5500);

    return () => clearTimeout(timer);
  }, [onFinished]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.6 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const text = "Cozy Haven";

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[200] bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-2xl md:text-3xl mb-4 tracking-widest text-center"
        >
          Welcome to
        </motion.p>
        
        <motion.div 
          className="flex text-7xl md:text-9xl font-bold tracking-wider"
          style={{ fontFamily: 'Vibur, cursive', perspective: '1000px' }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block text-white drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              style={{ transformOrigin: 'center' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-8"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-gray-400 text-xl mt-8 tracking-widest"
      >
        Your Minecraft Journey Begins
      </motion.p>

      <div className="absolute w-96 h-96 bg-green-500/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </motion.div>
  );
};

export default WelcomeScreen;