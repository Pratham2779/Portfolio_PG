import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../../constants';

const Projects = () => {
  return (
    <section id="work" className="py-24 lg:py-48 px-6 md:px-10 relative z-10 border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-16 md:mb-20 flex items-center gap-4 md:gap-6">
          <span className="text-cyan-500 text-2xl md:text-3xl font-mono">01/</span> Project_Nexus
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {projectsData.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:border-cyan-500/30 transition-all shadow-2xl overflow-hidden">
              <p className="text-sm font-black text-cyan-500 tracking-[0.4em] uppercase mb-4">{project.category}</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase leading-none">{project.title}</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-medium">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map(t => <span key={t} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black text-slate-500 uppercase">{t}</span>)}
              </div>
              <div className="flex flex-wrap gap-6 md:gap-8">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black text-white hover:text-cyan-400 transition-all uppercase tracking-widest"><Github size={18}/> Source</a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black text-white hover:text-cyan-400 transition-all uppercase tracking-widest"><ExternalLink size={18}/> Live_Link</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;