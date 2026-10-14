import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Terminal, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  analytics: Database,
  programming: Terminal,
  tools: Wrench,
};

export default function Skills() {
  const categories = skillsData.categories;

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>02 // Technical Skills</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Practical Toolset &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Core Foundations.
              </span>
            </h2>
          </div>

          
        </div>

        {/* Skill Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || Database;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.name}
                      </h3>
                    </div>

                    <p className="text-neutral-400 text-xs font-light mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Items */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-[#0D0F14] border border-white/[0.05] hover:border-orange-500/30 hover:bg-[#12151E] transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-semibold text-sm text-neutral-200 group-hover:text-orange-400 transition-colors">
                              {skill.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover:bg-orange-500 transition-colors" />
                          </div>
                          <p className="font-mono text-[11px] text-neutral-400 mt-1">
                            {skill.highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
