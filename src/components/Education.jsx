import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>04 // Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Formal Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Coursework.
            </span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.1] space-y-12 ml-2 sm:ml-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0B0C10] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_12px_rgba(255,107,53,0.5)]">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              </div>

              {/* Education Content Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-orange-500/35 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-300 text-[11px]">
                      {edu.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-semibold text-[11px] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Score: 81.16% (Semesters 1–4)</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-xs">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Madurai, Tamil Nadu</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="font-sans text-neutral-300 font-medium text-base mb-4">
                  {edu.institution}
                </h4>

                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Relevant Coursework List */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-3">
                    Core Coursework &amp; Subject Foundations:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.keyAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Score Verification Transparency Note */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#11141E] border border-white/[0.06] flex items-center gap-3 text-xs text-neutral-300 font-mono">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Academic Score: <strong className="text-white">81.16%</strong> across all 4 completed semesters (B.Sc Computer Science).</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
