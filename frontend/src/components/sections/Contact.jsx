import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-48 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-16 md:mb-20 flex items-center gap-4 md:gap-6">
          <span className="text-cyan-500 text-2xl md:text-3xl font-mono">04/</span> Signal_Open
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-12">
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
              Establish <br/><span className="text-cyan-400">Connection.</span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md font-medium">
              Whether you have a question, a project proposal, or just want to network, my system is actively listening.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:prathamesh.official.79@gmail.com" className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all w-full sm:w-fit break-all sm:break-normal">
                <div className="h-14 w-14 rounded-2xl bg-black/50 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div className="pr-2 sm:pr-6">
                  <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase mb-1">Email_Protocol</p>
                  <p className="text-slate-200 text-sm sm:text-base font-bold tracking-wide">prathamesh.official.79@gmail.com</p>
                </div>
              </a>

              <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all w-full sm:w-fit cursor-default">
                <div className="h-14 w-14 rounded-2xl bg-black/50 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <Phone size={24} className="text-cyan-400" />
                </div>
                <div className="pr-2 sm:pr-6">
                  <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase mb-1">Voice_Protocol</p>
                  <p className="text-slate-200 text-sm sm:text-base font-bold tracking-wide">+91 9623108820</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form onSubmit={handleContactSubmit} className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
              <div>
                <label className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3 ml-2">Identity_String</label>
                <input 
                  type="text" required 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 font-medium" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3 ml-2">Return_Address</label>
                <input 
                  type="email" required 
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 font-medium" 
                  placeholder="Enter your email address" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3 ml-2">Message_Payload</label>
                <textarea 
                  required rows={4} 
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none font-medium" 
                  placeholder="Initiate transmission sequence..." 
                />
              </div>
              <button 
                type="submit" disabled={formStatus === 'submitting'} 
                className="w-full inline-flex justify-center items-center gap-4 px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm tracking-[0.2em] uppercase transition-all shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {formStatus === 'submitting' ? 'Transmitting Data...' : formStatus === 'success' ? 'Link Established' : 'Transmit Data'}
              </button>
              {formStatus === 'error' && <p className="text-red-400 text-sm mt-4 text-center font-bold">Transmission Failed. Please try again.</p>}
              {formStatus === 'success' && <p className="text-cyan-400 text-sm mt-4 text-center font-bold">Message delivered successfully.</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;