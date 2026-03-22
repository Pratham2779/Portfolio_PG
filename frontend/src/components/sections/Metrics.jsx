import React from 'react';
import { Code2, Terminal, Server, Trophy, Target } from 'lucide-react';
import { achievementsData } from '../../constants';

const Metrics = () => {
  const profiles = [
    { platform: "LeetCode", handle: "GuravPrathamesh_79", link: "https://leetcode.com/u/GuravPrathamesh_79/", stat1: "700+ Solved", stat2: "Max Rating: 1726", icon: <Code2 size={32}/> },
    { platform: "Codeforces", handle: "prathamesh527", link: "https://codeforces.com/profile/prathamesh527", stat1: "200+ Solved", stat2: "Max Rating: 1056 (Newbie)", icon: <Terminal size={32}/> },
    { platform: "CodeChef", handle: "boss373", link: "https://www.codechef.com/users/boss373", stat1: "2 Star", stat2: "Max Rating: 1426", icon: <Server size={32}/> },
    { platform: "GeeksforGeeks", handle: "prathamesh2wu2", link: "https://www.geeksforgeeks.org/profile/prathamesh2wu2", stat1: "300+ Solved", stat2: "Score: 1200", icon: <Code2 size={32}/> },
  ];

  return (
    <section id="metrics" className="py-24 lg:py-48 px-6 md:px-10 relative z-10 border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-16 md:mb-20 flex items-center gap-4 md:gap-6">
          <span className="text-cyan-500 text-2xl md:text-3xl font-mono">03/</span> Operational_Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {profiles.map((profile, i) => (
            <a key={i} href={profile.link} target="_blank" rel="noreferrer" className="group block p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:border-cyan-500/50 transition-all shadow-2xl">
              <div className="text-cyan-400 mb-6">{profile.icon}</div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors break-words">{profile.platform}</h3>
              <p className="text-cyan-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 break-words">@{profile.handle}</p>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm md:text-base font-medium flex items-center gap-3"><Trophy size={14} className="text-slate-500 shrink-0"/> {profile.stat1}</p>
                <p className="text-slate-400 text-sm md:text-base font-medium flex items-center gap-3"><Target size={14} className="text-slate-500 shrink-0"/> {profile.stat2}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
          <h3 className="text-xl md:text-2xl font-black text-cyan-400 uppercase tracking-widest mb-10">Notable_Achievements</h3>
          <ul className="space-y-8">
            {achievementsData.map((achievement, i) => (
              <li key={i} className="flex gap-4 md:gap-6 items-start">
                <div className="mt-2 h-2 w-2 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Metrics;