import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link import karein

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Isko objects mein badal diya taaki path bhi mil sake
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "LEGENDS", path: "/legends" },
    { name: "BUILDS", path: "/builds" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-10 py-5 flex justify-between items-center ${
      isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent'
    }`}>
      
      {/* Logo pe click karne se Home page pe jayenge */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img 
          src="/CH.png" 
          alt="Cozy Haven Logo" 
          className="h-8 md:h-20 w-auto object-contain transition-transform hover:scale-105"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className="text-white border border-white/20 bg-white/5 rounded-full px-8 py-2 text-[11px] font-bold tracking-widest hover:bg-white hover:text-black transition-all"
          >
            {link.name} 
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 flex flex-col p-6 gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // Click karne pe menu band ho jaye
              className="text-white text-left text-lg font-bold tracking-widest py-3 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;