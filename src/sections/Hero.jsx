import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-6">
              Computer Science & AI Student
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="text-white">Manas Thorat</span>. <br />
            <span className="text-white/50 text-4xl md:text-5xl mt-2 block">A Student Wanna Be AI Expert.</span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors w-full sm:w-auto text-center hide-on-export">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center hide-on-export">
              Contact Me
            </a>
            <button 
              onClick={async () => {
                const { exportPortfolioPdf } = await import('../utils/exportPortfolioPdf');
                await exportPortfolioPdf();
              }}
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2 hide-on-export"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download PDF
            </button>
          </motion.div>
        </div>

        {/* Right Content: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-2xl animate-pulse group-hover:bg-accent/40 transition-all duration-500" />
            <img 
              src="/profile.png" 
              alt="Manas Thorat" 
              className="w-full h-full object-cover rounded-3xl border-2 border-white/10 relative z-10 shadow-2xl transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.classList.remove('hidden');
                  e.target.nextElementSibling.classList.add('flex');
                }
              }}
            />
            {/* Fallback box when image is missing */}
            <div 
              className="absolute inset-0 z-10 rounded-3xl border-2 border-white/10 border-dashed bg-[#09090b] hidden items-center justify-center text-white/50 text-center p-6 shadow-2xl"
            >
              <div>
                Please save your photo as<br/> 
                <code className="bg-black/50 px-2 py-1 rounded mt-2 block font-mono text-sm border border-white/5 text-white">public/profile.jpg</code>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
