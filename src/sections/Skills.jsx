import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaFigma, FaSwift } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiReactrouter, SiDjango, SiFastapi, SiPostgresql, SiFirebase } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BsRobot } from 'react-icons/bs';

export const skillIcons = {
  'Java': <FaJava className="w-5 h-5 text-[#f89820]" />,
  'Python': <FaPython className="w-5 h-5 text-[#3776AB]" />,
  'JavaScript': <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />,
  'React.js': <FaReact className="w-5 h-5 text-[#61DAFB]" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  'React Router': <SiReactrouter className="w-5 h-5 text-[#CA4245]" />,
  'Node.js': <FaNodeJs className="w-5 h-5 text-[#339933]" />,
  'Django': <SiDjango className="w-5 h-5 text-[#092E20]" />,
  'FastAPI': <SiFastapi className="w-5 h-5 text-[#009688]" />,
  'MySQL': <GrMysql className="w-5 h-5 text-[#4479A1]" />,
  'PostgreSQL': <SiPostgresql className="w-5 h-5 text-[#336791]" />,
  'Firebase': <SiFirebase className="w-5 h-5 text-[#FFCA28]" />,
  'Swift': <FaSwift className="w-5 h-5 text-[#F05138]" />,
  'Figma': <FaFigma className="w-5 h-5 text-[#F24E1E]" />,
  'AI Tools': <BsRobot className="w-5 h-5 text-[#aa3bff]" />
};

export const skillCategories = [
  {
    title: 'Language',
    skills: ['Java', 'Python', 'JavaScript']
  },
  {
    title: 'Frontend',
    skills: ['React.js','Tailwind CSS', 'React Router']
  },
  {
    title: 'Backend',
    skills: ['Node.js','Django','FastAPI']
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'Firebase']
  },
  {
    title: 'Currently Learning',
    skills: ['Swift', 'Figma', 'AI Tools']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-white/50 text-lg">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 glass-card ${
                category.title === 'Currently Learning' ? 'md:col-span-2 md:w-1/2 md:mx-auto w-full' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-px bg-accent mr-4" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium border border-white/5 hover:border-white/20 transition-colors cursor-default"
                  >
                    {skillIcons[skill]}
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
