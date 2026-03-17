import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-700 ${isScrolled ? 'bg-black/80 py-6 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent py-12'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-6">
          
     
          <img 
            src="/favicon.svg" 
            alt="PG Logo" 
            className="h-12 w-12 rounded-[12px] shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-shadow duration-300 cursor-pointer" 
            onClick={() => window.scrollTo(0, 0)}
          />
          
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">SYSTEM<span className="text-cyan-400">.</span>ROOT</span>
        </div>
        <div className="hidden items-center gap-10 md:flex text-[13px] font-black tracking-[0.3em] uppercase text-slate-500">
          <a href="#about" className="hover:text-cyan-400 transition-all">Identity</a>
          <a href="#work" className="hover:text-cyan-400 transition-all">Nexus</a>
          <a href="#tech" className="hover:text-cyan-400 transition-all">Arsenal</a>
          <a href="#metrics" className="hover:text-cyan-400 transition-all">Metrics</a>
          <a href="#contact" className="hover:text-cyan-400 transition-all">Signal</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;