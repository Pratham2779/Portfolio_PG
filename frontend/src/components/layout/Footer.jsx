import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 text-center border-t border-white/5 relative z-10 bg-black/60">
      <p className="text-[10px] font-black tracking-[1.2em] text-slate-700 uppercase italic px-4">Identity Confirmed: P. Gurav // Walchand College</p>
      <div className="flex flex-wrap justify-center gap-10 md:gap-14 mt-10 px-6">
        <a href="https://github.com/Pratham2779" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-125"><Github size={28}/></a>
        <a href="https://www.linkedin.com/in/prathamesh-gurav-557bb9277/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-125"><Linkedin size={28}/></a>
        <a href="mailto:prathamesh.official.79@gmail.com" className="text-slate-500 hover:text-white transition-all hover:scale-125"><Mail size={28}/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-125"><Instagram size={28}/></a>
      </div>
    </footer>
  );
};

export default Footer;