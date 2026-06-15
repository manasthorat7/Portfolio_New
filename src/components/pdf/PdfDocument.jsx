import React from 'react';
import { projects } from '../../sections/Projects';
import { skillIcons, skillCategories } from '../../sections/Skills';
import { timelineData } from '../../sections/Experience';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const PdfPage = ({ children, className = '' }) => (
  <div className={`w-[16in] h-[9in] overflow-hidden break-after-page page-break-after-always relative bg-[#09090b] text-white px-24 py-16 ${className}`}>
    {children}
  </div>
);

export function PdfDocument() {
  const education = timelineData.filter(t => t.type === 'education');
  const achievements = timelineData.filter(t => t.type === 'achievement');

  return (
    <div className="pdf-document hidden print:block bg-[#09090b]">
      
      {/* PAGE 1: Hero */}
      <PdfPage>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="w-full h-full flex flex-row items-center justify-between gap-16 relative z-10">
          <div className="w-[55%] flex flex-col justify-center">
            <span className="inline-block self-start py-3 px-8 rounded-full bg-white/5 border border-white/10 text-xl text-accent mb-8">
              Computer Science & AI Student
            </span>
            <h1 className="text-[80px] font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-white">Manas Thorat</span>.
            </h1>
            <h2 className="text-white/50 text-[56px] leading-tight">
              A Student Wanna Be AI Expert.
            </h2>
          </div>

          <div className="w-[45%] h-[75%] flex justify-end items-center relative z-10">
            <div className="relative w-full h-full max-h-[650px] flex justify-end">
              <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-2xl" />
              <img 
                src="/profile.png" 
                alt="Manas Thorat" 
                className="w-auto h-full aspect-square object-cover rounded-3xl border-2 border-white/10 relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </PdfPage>

      {/* PAGE 2: About Me */}
      <PdfPage className="flex flex-col justify-center">
        <h2 className="text-[64px] font-bold mb-16 text-accent">About Me</h2>
        <div className="flex flex-row items-center justify-between gap-24">
          <div className="w-[60%] space-y-10 text-[32px] text-white/80 leading-relaxed max-w-5xl">
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
          
          <div className="w-[40%] flex flex-col gap-12">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-[88px] font-bold text-accent mb-4 leading-none">2+</h4>
              <p className="text-[28px] text-white/50 uppercase tracking-wider font-medium">Years Coding</p>
            </div>
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-[88px] font-bold text-accent mb-4 leading-none">10+</h4>
              <p className="text-[28px] text-white/50 uppercase tracking-wider font-medium">Projects Built</p>
            </div>
          </div>
        </div>
      </PdfPage>

      {/* PAGE 3: Technical Arsenal */}
      <PdfPage className="flex flex-col justify-center">
        <h2 className="text-[64px] font-bold mb-16 text-accent">Technical Arsenal</h2>
        <div className="flex flex-row justify-between gap-8 h-[65%]">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
              <h3 className="text-[28px] font-bold text-white mb-8 pb-4 border-b border-white/10">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <span key={skill} className="flex items-center gap-4 text-white/90 text-[24px] font-medium">
                    {skillIcons[skill]}
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PdfPage>

      {/* PAGE 4: Background */}
      <PdfPage className="flex flex-col justify-center">
        <h2 className="text-[64px] font-bold mb-12 text-accent">Background</h2>
        <div className="flex flex-col gap-12 h-full">
          <div>
            <h3 className="text-[36px] font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-white/30" /> Education
            </h3>
            <div className="grid grid-cols-2 gap-12">
              {education.map((item, index) => (
                <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <span className="inline-block px-5 py-2 text-lg font-medium bg-white/5 border border-white/10 rounded-full text-accent mb-6">
                    {item.period}
                  </span>
                  <h4 className="text-[28px] font-bold text-white mb-2 leading-tight">{item.organization}</h4>
                  <p className="text-[24px] text-accent font-medium mb-4">{item.title}</p>
                  <p className="text-[18px] text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[36px] font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-white/30" /> Achievements
            </h3>
            <div className="grid grid-cols-2 gap-12">
              {achievements.map((item, index) => (
                <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-[28px] font-bold text-white mb-2 leading-tight">{item.organization}</h4>
                  <p className="text-[24px] text-accent font-medium mb-4">{item.title}</p>
                  <p className="text-[18px] text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PdfPage>

      {/* PAGE 5: Selected Work Cover */}
      <PdfPage className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[130px] font-bold mb-8 text-white leading-none">Selected Work</h2>
        <div className="w-64 h-2 bg-accent mx-auto rounded-full mb-12"></div>
        <p className="text-[40px] text-white/50 mb-20">A collection of my best projects and experiments.</p>
        <div className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-[32px] font-medium text-accent">
          {projects.length} Projects Featured
        </div>
      </PdfPage>

      {/* PAGES 6-9: Projects */}
      {projects.map((project, idx) => (
        <PdfPage key={project.id}>
          <div className={`w-full h-full flex items-center justify-between gap-16 ${idx % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            
            {/* Project Screenshot - 48% */}
            <div className="w-[48%] h-[80%] flex items-center justify-center">
              <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Project Details - 52% */}
            <div className="w-[52%] flex flex-col justify-center">
              <h3 className="text-[56px] font-bold text-white leading-tight mb-2">{project.title}</h3>
              <p className="text-[28px] text-accent font-medium mb-8">{project.subtitle}</p>
              
              <p className="text-[18px] leading-relaxed text-white/80 mb-6 max-w-xl">
                {project.summary}
              </p>
              
              <div className="space-y-4 border-l-2 border-white/10 pl-6 py-2 mb-8 text-[18px]">
                <p><strong className="text-white">Type:</strong> <span className="text-white/70">{project.type}</span></p>
                <p><strong className="text-white">Impact:</strong> <span className="text-white/70">{project.impact}</span></p>
              </div>

              <div className="mb-8">
                <h4 className="text-[20px] font-bold text-white mb-4">Key Learnings</h4>
                <ul className="list-disc list-outside ml-6 space-y-2 text-[16px] text-white/70 max-w-xl">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="pl-2">{learning}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="text-[16px] font-medium text-accent bg-accent/10 px-5 py-2 rounded-full border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>

              {project.githubUrl !== '#' && (
                <div className="flex">
                  <div className="flex items-center gap-3 text-white border border-white/20 px-8 py-4 rounded-full text-[18px] font-medium bg-white/5">
                    <FaGithub className="w-6 h-6" />
                    View GitHub
                  </div>
                </div>
              )}
            </div>

          </div>
        </PdfPage>
      ))}

      {/* PAGE 10: Contact */}
      <PdfPage className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[80px] font-bold mb-12 leading-tight">
          Let's Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Together</span>
        </h2>

        <p className="text-[32px] text-white/60 mb-20 max-w-4xl text-center leading-relaxed">
          I'm currently looking for opportunities, collaborations and exciting projects.
        </p>
        
        <div className="flex flex-col gap-10 text-center items-center">
          <a href="mailto:manasthorat7@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-white/80 border border-white/10 bg-white/5 px-12 py-8 rounded-full w-[850px] justify-center hover:bg-white/10 transition-colors">
            <FaEnvelope className="w-10 h-10 text-[#EA4335]" />
            <span className="text-[32px] font-medium tracking-wide">manasthorat7@gmail.com</span>
          </a>
          
          <a href="https://www.linkedin.com/in/manas-thorat-137b72379/" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-white/80 border border-white/10 bg-white/5 px-12 py-8 rounded-full w-[850px] justify-center hover:bg-white/10 transition-colors">
            <FaLinkedin className="w-10 h-10 text-[#0A66C2]" />
            <span className="text-[32px] font-medium tracking-wide">https://www.linkedin.com/in/manas-thorat-137b72379/</span>
          </a>
          
          <a href="https://github.com/manasthorat7" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-white/80 border border-white/10 bg-white/5 px-12 py-8 rounded-full w-[850px] justify-center hover:bg-white/10 transition-colors">
            <FaGithub className="w-10 h-10" />
            <span className="text-[32px] font-medium tracking-wide">https://github.com/manasthorat7</span>
          </a>
        </div>
      </PdfPage>

    </div>
  );
}
