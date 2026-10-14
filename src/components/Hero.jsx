import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Architectural Mesh & Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:32px_32px] opacity-20 pointer-events-none" />

      {/* Decorative Floating Editorial Coordinates */}
      <div className="hidden lg:block absolute top-36 left-12 font-mono text-[11px] text-neutral-600 select-none tracking-widest uppercase">
        LOC // 09°55'N 78°07'E<br />
        CAMPUS // THIAGARAJAR CLG
      </div>
      <div className="hidden lg:block absolute top-36 right-12 font-mono text-[11px] text-neutral-600 select-none tracking-widest uppercase text-right">
        STATUS // 2027 COHORT<br />
        FOCUS // DATA & INSIGHTS
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/[0.08] backdrop-blur-md mb-8 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs sm:text-[13px] text-neutral-200 tracking-wide font-medium">
            {personalInfo.status}
          </span>
        </motion.div>

        {/* Editorial Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 text-neutral-400 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
        >
          <span>Hi, I'm</span>
          <span className="text-white font-semibold">{personalInfo.name}</span>
          <span className="w-8 h-[1px] bg-orange-500/50" />
        </motion.div>

        {/* Huge Impactful Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Turning Data Into{' '}
          <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
            Meaningful
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-transparent" />
          </span>{' '}
          Insights.
        </motion.h1>

        {/* Dynamic Role Text Cycler */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl text-neutral-300 font-normal"
        >
          <span className="text-neutral-400">Aspiring</span>
          <div className="h-9 overflow-hidden flex items-center justify-center min-w-[200px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="font-display font-bold text-orange-400 text-lg sm:text-2xl px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20"
              >
                {personalInfo.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-neutral-400 hidden sm:inline">&amp; Problem Solver</span>
        </motion.div>

        {/* Concise Recruiter-Friendly Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed"
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_0_30px_rgba(255,107,53,0.35)] hover:shadow-[0_0_40px_rgba(255,107,53,0.55)] active:scale-95 w-full sm:w-auto"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          
        </motion.div>

        {/* Highlight Quick Stats / Architecture Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06] hover:border-orange-500/30 transition-all">
            <span className="text-orange-400 font-mono text-xl sm:text-2xl font-bold">SQL + BI</span>
            <p className="text-[12px] text-neutral-400 mt-1">Multi-page interactive dashboards &amp; relational queries</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06] hover:border-orange-500/30 transition-all">
            <span className="text-orange-400 font-mono text-xl sm:text-2xl font-bold">3 Projects</span>
            <p className="text-[12px] text-neutral-400 mt-1">Data analysis, AI reconciliation &amp; mobile solutions</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06] hover:border-orange-500/30 transition-all">
            <span className="text-orange-400 font-mono text-xl sm:text-2xl font-bold">IBM Track</span>
            <p className="text-[12px] text-neutral-400 mt-1">Professional Data Analyst Certificate credentials</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06] hover:border-orange-500/30 transition-all">
            <span className="text-orange-400 font-mono text-xl sm:text-2xl font-bold">2027 Cohort</span>
            <p className="text-[12px] text-neutral-400 mt-1">Final-Year B.Sc Computer Science at Thiagarajar College</p>
          </div>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-neutral-500 hover:text-orange-400 transition-colors cursor-pointer group"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 group-hover:border-orange-500/60 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-orange-500"
            />
          </div>
        </motion.a>

      </div>
    </section>
  );
}
