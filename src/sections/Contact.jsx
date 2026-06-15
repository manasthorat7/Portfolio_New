import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">together.</span></h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:manasthorat7@gmail.com" 
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            Say Hello
          </a>
          
          <div className="mt-24 flex justify-center gap-12">
            <a 
              href="https://github.com/manasthorat7" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/40 hover:text-white transition-colors flex items-center gap-3 group"
            >
              <FaGithub className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline-block font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/manas-thorat-137b72379/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/40 hover:text-[#0A66C2] transition-colors flex items-center gap-3 group"
            >
              <FaLinkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline-block font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:manasthorat7@gmail.com" 
              className="text-white/40 hover:text-[#EA4335] transition-colors flex items-center gap-3 group"
            >
              <FaEnvelope className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline-block font-medium">Gmail</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
