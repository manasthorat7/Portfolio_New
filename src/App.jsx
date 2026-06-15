import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { PdfDocument } from './components/pdf/PdfDocument';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-accent/30">
      <PdfDocument />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-white/30 border-t border-white/5 text-sm">
        <p>© {new Date().getFullYear()} Manas Thorat. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
