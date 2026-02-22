import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const scrollRef = useRef(null);

  const screenshots = [
    { id: 1, title: "The Grand Spawn", url: "https://placehold.co/800x450/111827/white?text=Grand+Spawn" },
    { id: 2, title: "Ancient Archives", url: "https://placehold.co/800x450/111827/white?text=Ancient+Archives" },
    { id: 3, title: "Legacy District", url: "https://placehold.co/800x450/111827/white?text=Legacy+District" },
    { id: 4, title: "The Vault Hall", url: "https://placehold.co/800x450/111827/white?text=The+Vault+Hall" },
    { id: 5, title: "Community Square", url: "https://placehold.co/800x450/111827/white?text=Community+Square" },
  ];

  // Auto-scroll logic remains exactly the same
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
    <section className="py-24 px-8 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Animated Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/5 space-y-8 z-10"
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
            <h2 className="text-6xl font-black mt-2 leading-tight">
              A Living <br /> <span className="text-blue-500">Museum.</span>
            </h2>
          </header>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Welcome to <span className="text-white font-semibold">The Legacy Vault</span>. 
              We are a dedicated space where every masterpiece created by our 
              community is preserved in its original glory.
            </p>
            <p>
              From massive castle builds to intricate redstone machines, 
              nothing is ever lost. Explore the evolution of our world.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 overflow-hidden font-bold rounded-full border border-blue-500 text-white shadow-2xl transition-all duration-300 hover:bg-blue-600"
          >
            Check Out The Builds!
          </motion.button>
        </motion.div>

        {/* Right Side: Animated Auto-Scrolling Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-3/5 w-full relative"
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-10"
          >
            {screenshots.map((img) => (
              <motion.div 
                key={img.id} 
                whileHover={{ y: -10 }} // Subtle lift on hover
                className="inline-block min-w-[350px] md:min-w-[500px] aspect-video relative group overflow-hidden rounded-2xl border border-gray-800 shadow-2xl"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-blue-400 font-mono text-xs mb-1 uppercase tracking-widest">Exhibit Selection</p>
                  <h3 className="text-2xl font-bold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade effect edges */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;