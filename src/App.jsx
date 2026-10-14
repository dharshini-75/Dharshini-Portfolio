import React, { useState } from 'react';
import CinematicIntro from './components/CinematicIntro';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <div className="relative bg-[#0B0C10] text-[#F8FAFC] min-h-screen overflow-x-hidden w-full max-w-full selection:bg-[#FF6B35]/30 selection:text-[#FFA07A]">
      {/* Cinematic Intro Animation on Load */}
      <CinematicIntro onComplete={() => setIntroCompleted(true)} />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Interactive Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content" className="relative z-10 overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
