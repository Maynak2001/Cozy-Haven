import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll hone par navbar ka background thoda dark karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["GAMES", "SHOP", "COMMUNITY", "SUPPORT"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-10 py-5 flex justify-between items-center ${
      isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent'
    }`}>
      
      {/* Brand Logo */}
      <div className="text-white text-2xl font-black tracking-[0.2em] cursor-pointer hover:scale-105 transition-transform">
        MINECRAFT
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => (
          <button 
            key={link}
            className="group relative text-white border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 text-[11px] font-bold tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg"
          >
            <span className="flex items-center gap-2">
              {link} 
              <span className="text-[8px] opacity-60 group-hover:rotate-180 transition-transform duration-300">▼</span>
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden text-white cursor-pointer text-2xl">
        ☰
      </div>
    </nav>
  );
};

export default Navbar;