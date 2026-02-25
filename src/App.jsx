import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const CategoryGrid = lazy(() => import('./components/CategoryGrid'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));
const Legends = lazy(() => import('./components/Legends'));
const Builds = lazy(() => import('./components/Builds'));
import './App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Animated Routes wrapper
function AnimatedRoutes() {
  const location = useLocation();
  
  const HomePage = () => (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <Hero />
      <About />
      <CategoryGrid />
      <Testimonials />
      <CTA />
    </Suspense>
  );
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HomePage />
          </motion.div>
        } />
        
        <Route path="/legends" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
              <Legends />
            </Suspense>
          </motion.div>
        } />
        
        <Route path="/builds" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
              <Builds />
            </Suspense>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showMain, setShowMain] = useState(() => {
    return sessionStorage.getItem('hasVisited') === 'true';
  });

  useEffect(() => {
    if (showMain) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [showMain]);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 min-h-screen">
        {!showMain ? (
          <WelcomeScreen onFinished={() => setShowMain(true)} />
        ) : (
          <>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;