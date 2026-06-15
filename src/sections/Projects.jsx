import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: 'PlanSync',
    subtitle: 'Collaborative Trip Planning Platform',
    summary: 'A modern web application designed to simplify group trip planning by letting users co-create itineraries and manage budgets in real-time.',
    type: 'Individual End-Semester Class Project',
    impact: 'Created a centralized space where groups of people can seamlessly discuss their planning, trip budgets, itineraries, and spending all under one roof.',
    learnings: [
      'Mastered Firebase for robust authentication and real-time database management.',
      'Designed a highly interactive and modern UI focused on user collaboration.',
      'Gained deep experience in managing complex React state across multiple components.'
    ],
    image: '/plansync.png',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/manasthorat7/Plan_Sync'
  },
  {
    id: 2,
    title: 'FinTrack',
    subtitle: 'Personal Finance & News Tracker',
    summary: 'A personal finance dashboard that allows users to log daily income and expenses, export spending data to Excel/CSV, and fetch current finance news via APIs.',
    type: 'Mid-Semester Class Project',
    impact: 'Created a convenient, all-in-one money tracker combined with daily financial news, helping users seamlessly manage their finances while staying informed about global markets.',
    learnings: [
      'Mastered the integration of third-party REST APIs to fetch real-time financial data.',
      'Developed complex logic for parsing and exporting user data securely into Excel/CSV.',
      'Improved state management patterns to ensure a snappy, responsive dashboard.'
    ],
    image: '/fintrack.png',
    tech: ['React', 'REST APIs', 'Data Export'],
    githubUrl: 'https://github.com/manasthorat7/Personal-FinanceTracker'
  },
  {
    id: 3,
    title: 'Clinic Manager MVP',
    subtitle: 'Physiotherapy Clinic Dashboard',
    summary: 'A full-stack SaaS web application designed to help physiotherapists efficiently manage daily appointments, patient data, and co-therapist schedules.',
    type: 'Self-Initiated Project (In-Progress)',
    impact: 'Streamlined daily operations for a real-world clinic by replacing manual processes with a centralized digital dashboard. Built with scalability in mind to eventually transition into a multi-tenant SaaS subscription model.',
    learnings: [
      'Successfully bridged a React frontend with a robust Django backend architecture.',
      'Designed and implemented complex relational data models using PostgreSQL.',
      'Utilized Docker to containerize the application, ensuring reliable cross-platform deployments.'
    ],
    image: '/clinicmanager.png',
    tech: ['React', 'Django', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/manasthorat7/Clinic-Manager-MVP'
  },
  {
    id: 4,
    title: 'Space Fault Recovery System',
    subtitle: 'Deep Space Probe RL Manager',
    summary: 'A reinforcement learning system designed to help space agencies manage and communicate faults in deep space research probes at the earliest sign of failure.',
    type: 'Self-Initiated Group Project (OpenEnv Hackathon)',
    impact: 'Developed an innovative proof-of-concept for deep space research probes, where an intelligent RL system automatically detects faults and manages communications with Earth. (Role: Model Training & Debugging)',
    learnings: [
      'Trained and optimized advanced Reinforcement Learning models using PyTorch.',
      'Successfully integrated Hugging Face transformers into custom environments.',
      'Learned to debug and fine-tune AI agents to autonomously handle complex system faults.'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    tech: ['Reinforcement Learning', 'Hugging Face', 'Python'],
    githubUrl: 'https://github.com/manasthorat7/space_fault_recovery'
  }
];
export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-white/50 text-lg">A collection of my best projects and experiments</p>
        </motion.div>

        <div className="space-y-24 projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center project-card`}
            >
              <div className="w-full md:w-1/2 lg:w-3/5 group cursor-pointer relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-card">
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    className="absolute inset-0 z-10 rounded-2xl border-2 border-white/10 border-dashed bg-[#09090b] hidden items-center justify-center text-white/50 text-center p-6"
                  >
                    <div>
                      Please save your screenshot as<br/> 
                      <code className="bg-black/50 px-2 py-1 rounded mt-2 block font-mono text-sm border border-white/5 text-white">public{project.image}</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-accent text-lg font-medium">{project.subtitle}</p>
                </div>
                
                <div className="space-y-4 text-white/70 text-base mb-8">
                  <p className="leading-relaxed text-white/90">{project.summary}</p>
                  
                  <div className="space-y-2 border-l-2 border-white/10 pl-4 py-1">
                    <p><strong className="text-white/90">Type:</strong> {project.type}</p>
                    <p><strong className="text-white/90">Impact:</strong> {project.impact}</p>
                    <div className="pt-2">
                      <strong className="text-white/90 block mb-1">Key Learnings:</strong>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        {project.learnings.map((learning, i) => (
                          <li key={i} className="text-white/60">{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  {project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-4 py-2 rounded-full font-medium"
                    >
                      <FaGithub className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
