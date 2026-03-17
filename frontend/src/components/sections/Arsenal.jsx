import React from 'react';
import { motion } from 'framer-motion';
import { techStackData, courseworkData } from '../../constants';

const Arsenal = () => {
  return (
    <section id="tech" className="py-24 lg:py-48 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-16 md:mb-20 flex items-center gap-4 md:gap-6">
          <span className="text-cyan-500 text-2xl md:text-3xl font-mono">02/</span> Arsenal & Core
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4">
            {techStackData.map((tech) => (
              <motion.div key={tech.name} whileHover={{ scale: 1.1, y: -5 }} className="flex flex-col items-center justify-center aspect-square rounded-[1.5rem] bg-white/5 border-2 border-white/10 backdrop-blur-xl p-4 group transition-all shadow-xl hover:border-cyan-500/50">
                <img src={tech.src} alt={tech.name} className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300 group-hover:scale-110" />
                <span className="text-[8px] md:text-[9px] font-black tracking-widest text-slate-400 mt-3 uppercase group-hover:text-cyan-400 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl h-full">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-8">Core Coursework</h3>
              <ul className="space-y-6">
                {courseworkData.map((course, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400 font-medium text-sm md:text-base">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arsenal;