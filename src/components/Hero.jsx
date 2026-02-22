import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover scale-105" // Subtle scale to prevent white edges
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Minecraft_video1.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <div className="animate-fade-in-up">
          <h1 
            className="text-7xl md:text-9xl font-normal text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" 
            style={{ fontFamily: 'Vibur, cursive' }}
          >
            Cozy Haven
          </h1>
          <p className="text-white/80 tracking-[0.4em] uppercase text-sm mt-4 text-center font-light">
            The Ultimate Minecraft Museum
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]"></div>
    </div>
  );
};

export default Hero;