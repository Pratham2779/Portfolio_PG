import React from 'react';
import Starfield from './components/common/Starfield';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Identity from './components/sections/Identity';
import Projects from './components/sections/Projects';
import Arsenal from './components/sections/Arsenal';
import Metrics from './components/sections/Metrics';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#010208] text-slate-200 font-sans selection:bg-cyan-500/30 scroll-smooth relative overflow-x-hidden">
      <Starfield />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.04)_0%,transparent_80%)]" />
      
      <Navbar />
      <Identity />
      <Projects />
      <Arsenal />
      <Metrics />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;