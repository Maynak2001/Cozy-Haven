import React from 'react';

const Footer = () => (
  <footer className="bg-black py-16 border-t border-gray-900 text-center">
    <h2 className="text-2xl font-black text-white tracking-widest mb-4">COZY HAVEN</h2>
    <p className="text-gray-500 text-sm max-w-xs mx-auto mb-8">The ultimate digital archive for Minecraft dreamers.</p>
    <div className="flex justify-center gap-8 text-gray-400 font-bold text-xs uppercase tracking-widest">
      <a href="#" className="hover:text-blue-500">Discord</a>
      <a href="#" className="hover:text-blue-500">Instagram</a>
      <a href="#" className="hover:text-blue-500">Youtube</a>
    </div>
    <p className="mt-12 text-gray-700 text-[10px] uppercase tracking-[0.5em]">© 2026 Cozy Haven • Not official Minecraft.</p>
  </footer>
);

export default Footer;