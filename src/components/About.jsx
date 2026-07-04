import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// Aapke naye Particles component ko import karein
import Particles from './Particles';

const About = () => {
  const scrollRef = useRef(null);

  const screenshots = [
    { id: 1, title: "The Grand Spawn", url: "https://placehold.co/800x450/111827/white?text=Grand+Spawn" },
    { id: 2, title: "Ancient Archives", url: "https://placehold.co/800x450/111827/white?text=Ancient+Archives" },
    { id: 3, title: "Legacy District", url: "https://placehold.co/800x450/111827/white?text=Legacy+District" },
    { id: 4, title: "The Vault Hall", url: "https://placehold.co/800x450/111827/white?text=The+Vault+Hall" },
    { id: 5, title: "Community Square", url: "https://placehold.co/800x450/111827/white?text=Community+Square" },
  ];

  // Auto-scroll logic for carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let step = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += step;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-8 bg-gray-900 text-white overflow-hidden">

      {/* 3D PARTICLE BACKGROUND START */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ff57f1"]}
          particleCount={200}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio="1"
        />
      </div>
      {/* 3D PARTICLE BACKGROUND END */}

      {/* Main Content (z-10 to stay above particles) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side: Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/5 space-y-8"
        >
          <header>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm"
            >
              Our Legacy
            </motion.span>
            <h2 className="text-6xl font-black mt-2 leading-tight drop-shadow-md">
              A Living <br /> <span className="text-blue-500">Museum.</span>
            </h2>
          </header>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Welcome to <span className="text-white font-bold tracking-wide">Cozy Haven</span> 🏡✨ — 
              our little corner of the internet where blocky memories never fade. Think of it as a digital scrapbook, keeping every beautiful build and crazy contraption safe and sound.
            </p>
            <p>
              From the humblest starter houses to ticking redstone wonders, we cherish every piece of our world. 
              This isn't just a server... it's a warm hug to the community and the legends who built it, block by block.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 overflow-hidden font-bold rounded-full bg-transparent border-2 border-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-blue-600/20 backdrop-blur-sm cursor-pointer"
          >
            MEET THE ARCHITECTS
          </motion.button>
        </motion.div>

        {/* Right Side: Animated Auto-Scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-3/5 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative overflow-hidden"
          >
            <img
              src="/WE3.png"
              alt="Legacy Vault"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;