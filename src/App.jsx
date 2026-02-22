import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CategoryGrid from './components/CategoryGrid';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(() => {
    return localStorage.getItem('hasVisited') === 'true';
  });

  useEffect(() => {
    if (showMain) {
      localStorage.setItem('hasVisited', 'true');
    }
  }, [showMain]);

  return (
    <div className="bg-gray-900 min-h-screen">
      {!showMain ? (
        <WelcomeScreen onFinished={() => setShowMain(true)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <CategoryGrid />
          <Testimonials />
          <CTA />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;