import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Database, Code2, GraduationCap, Compass, Layers, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const focusAreas = [
  {
    icon: Database,
    title: "Data Analytics & Cleaning",
    description: "Systematically handling missing values, standardizing tabular formats, eliminating duplicates, and performing exploratory data analysis to discover real operational trends.",
    tag: "SQL • Excel • Pandas"
  },
  {
    icon: BarChart2,
    title: "Business Intelligence & KPIs",
    description: "Designing structured multi-page dashboards in Power BI. Transforming abstract sales metrics, outlet dynamics, and product performance into visual clarity for stakeholders.",
    tag: "Power BI • DAX • Visual Reports"
  },
  {
    icon: Code2,
    title: "Computational Problem Solving",
    description: "Rooted in Computer Science fundamentals—relational database modeling, query writing, procedural logic, and clean software development principles.",
    tag: "MySQL • Python • Java / C"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>01 // About Dharshini</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Analytical Rigor meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Practical Technology.
            </span>
          </h2>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full pointer-events-none" />
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              Driven by curiosity for data and business clarity.
            </h3>
            
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-light mb-4">
              {personalInfo.fullAbout}
            </p>

            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base font-light mb-6">
              Throughout my degree at <strong className="text-neutral-200 font-medium">Thiagarajar College, Madurai</strong>, I have focused on translating theoretical principles into hands-on data implementations—from cleaning and segmenting retail transactions in MySQL to building multi-page Power BI reports and evaluating AI-driven financial workflows.
            </p>

            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-neutral-500 font-mono text-[11px] block uppercase tracking-wider">Degree</span>
                <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">B.Sc Computer Science</span>
              </div>
              <div>
                <span className="text-neutral-500 font-mono text-[11px] block uppercase tracking-wider">Institution</span>
                <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">Thiagarajar College</span>
              </div>
              <div>
                <span className="text-neutral-500 font-mono text-[11px] block uppercase tracking-wider">Expected Grad</span>
                <span className="text-orange-400 font-mono font-medium text-xs sm:text-sm mt-0.5 block">Year 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="glass-card-hover glass-card p-5 rounded-xl border border-white/[0.07] relative group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-light">
                        {area.description}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-orange-400/90 font-mono text-[11px]">
                          {area.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
