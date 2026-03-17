import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, Instagram, Award, GraduationCap, Zap } from 'lucide-react';
import Typewriter from '../common/Typewriter';

const Identity = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 px-6 md:px-10 z-10">
      <div className="mx-auto max-w-[1440px] w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <motion.div className="lg:col-span-7 space-y-8 z-20" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
              <Terminal size={22} className="text-cyan-400" />
              <span className="text-sm font-black tracking-[0.2em] text-cyan-400 uppercase">WCE_SANGLI // AUG 2023 - JUN 2027</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-slate-500 text-xl font-black uppercase tracking-[0.6em]">The Engineer</h2>
              <h1 className="text-5xl sm:text-7xl xl:text-[5rem] font-black text-white tracking-tighter leading-tight uppercase italic pb-2">
                <Typewriter text="Prathamesh Gurav" />
              </h1>
            </div>
            
            <p className="text-slate-400 text-xl xl:text-2xl leading-relaxed max-w-2xl font-medium">
              Pursuing <span className="text-white border-b-4 border-cyan-500">B.Tech in Information Technology</span>. Specializing in building secure, high-availability software systems and automated deployment cycles. Highly adaptable and driven by continuous learning, I thrive in dynamic environments where rapid technological change is the baseline.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a href="https://github.com/Pratham2779" target="_blank" rel="noreferrer" className="group flex items-center justify-center h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all hover:-translate-y-1">
                <Github size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/prathamesh-gurav-557bb9277/" target="_blank" rel="noreferrer" className="group flex items-center justify-center h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all hover:-translate-y-1">
                <Linkedin size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="mailto:prathamesh.official.79@gmail.com" className="group flex items-center justify-center h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all hover:-translate-y-1">
                <Mail size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center justify-center h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all hover:-translate-y-1">
                <Instagram size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              
              <a href="https://drive.google.com/file/d/1rJKFl1H4Taxs4jEDOnqYt3qFnBEUAXT2/view" target="_blank" rel="noreferrer" className="mt-2 sm:mt-0 inline-flex items-center justify-center h-14 px-8 sm:ml-2 rounded-2xl border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 font-black tracking-widest uppercase hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1">
                Access_Resume
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { label: "ACADEMIC_CGPA", val: "8.77", icon: <Award size={24}/> },
                { label: "CURRENT_SEM", val: "06", icon: <GraduationCap size={24}/> },
                { label: "SYSTEM_STATUS", val: "ACTIVE", icon: <Zap size={24}/> },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    {stat.icon}
                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">{stat.label}</span>
                  </div>
                  <div className="text-4xl font-black text-white">{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Photo */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div tabIndex="0" className="relative group mt-12 lg:mt-0 cursor-pointer focus:outline-none">
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[4rem] opacity-20 blur-3xl" />
              <div className="relative w-[280px] sm:w-[350px] xl:w-[400px] aspect-[4/5] rounded-[3.5rem] border-2 border-white/20 bg-slate-900/60 backdrop-blur-3xl p-3 shadow-2xl overflow-hidden group-hover:border-cyan-500/50 group-focus:border-cyan-500/50 group-active:border-cyan-500/50 transition-all duration-500">
                <img 
                  src="https://raw.githubusercontent.com/Pratham2779/Pratham2779/main/profile_photo.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-[2.8rem] grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0 transition-all duration-1000 opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Identity;