import React from 'react';
import { motion } from 'framer-motion';

export const timelineData = [
  {
    type: 'education',
    title: 'Bachelor\'s Degree in Computer Science',
    organization: 'Scaler School of Technology',
    period: '2025 - 2029',
    description: 'Focused on software engineering, scalable systems, data structures, and practical problem-solving.'
  },
  {
    type: 'education',
    title: 'BS in Data Science and Applications',
    organization: 'Indian Institute of Technology (IIT) Madras',
    period: '2025 - 2029',
    description: 'Focused on data science, machine learning, statistics, and analytical thinking.'
  },
  {
    type: 'achievement',
    title: 'Finalist',
    organization: 'Meta x PyTorch x Hugging Face OpenEnv Hackathon',
    period: '2026',
    description: 'Built a Deep Space Fault Recovery System using reinforcement learning for autonomous fault detection.'
  },
  {
    type: 'achievement',
    title: 'Participant',
    organization: 'DayDream HackClub Game Development Hackathon',
    period: '2025',
    description: 'Collaborated on rapid game development and interactive gameplay prototyping under deadlines.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Background</h2>
          <p className="text-white/50 text-lg">My education and achievements</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70 mb-3">
                  {item.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-accent font-medium mb-3">{item.organization}</h4>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-[-1]" />
        </div>
      </div>
    </section>
  );
}
