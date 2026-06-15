import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image/Visual Placeholder */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card group about-image-container">
            {/* Replace with actual image later */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
              alt="Manas Thorat" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                I am a curious mind who loves to learn new things and explore technologies. Currently studying <strong className="text-white">Computer Science and Artificial Intelligence</strong>, Someone who wants to know about<strong className='text-white'> “How and Why this thing works?”</strong> behind everything creative.
              </p>
              <p>
                My goal is to turn ideas into reality on the web with pixel-perfect design. Beyond the code, I am a crazy overthinker who wants to be a successful entrepreneur and leader.
              </p>
              <p>
                When I'm not behind a screen, you'll find me travelling to explore new places and cultures, or embracing my inner foodie trying out new cuisines.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-3xl font-bold text-accent mb-2">2+</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Years Coding</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-3xl font-bold text-accent mb-2">10+</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Projects Built</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
