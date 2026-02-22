import React, { useState } from 'react';

const CTA = () => {
  const [copied, setCopied] = useState(false);
  const copyIP = () => {
    navigator.clipboard.writeText("play.cozyhaven.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-blue-600 text-center px-8">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-10 italic">READY TO JOIN?</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button onClick={copyIP} className="bg-white text-blue-600 px-12 py-5 rounded-xl font-black text-xl shadow-2xl active:scale-95 transition-all">
          {copied ? "IP COPIED!" : "COPY SERVER IP"}
        </button>
        <button className="bg-blue-800 text-white px-12 py-5 rounded-xl font-black text-xl shadow-2xl border border-blue-400/30">
          JOIN DISCORD
        </button>
      </div>
    </section>
  );
};

export default CTA;