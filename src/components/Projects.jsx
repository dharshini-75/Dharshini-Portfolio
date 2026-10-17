import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Sparkles, Eye, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { BigMartMockup, UberRideMockup } from './ProjectMockups';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>03 // Featured Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Data Insights &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Applied Solutions.
              </span>
            </h2>
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm">
            Interactive analytics dashboards, business intelligence insights, and data-driven solutions built with precision.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-white/[0.08] hover:border-orange-500/35 transition-all duration-300 p-4 sm:p-6 lg:p-8 relative overflow-hidden group shadow-xl"
              >
                {/* Background glow on card hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Mockup Container (7 cols) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      {project.id === 'bigmart-sales-analysis' && <BigMartMockup />}
                      {project.id === 'uber-ride-analysis' && <UberRideMockup />}
                    </div>
                  </div>

                  {/* Narrative & Details (5 cols) */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Category & Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[11px] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-neutral-500 font-mono text-xs">•</span>
                        <span className="text-neutral-400 font-mono text-[11px] truncate">
                          {project.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-orange-400/90 mt-1 mb-4">
                        {project.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Tool Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded bg-[#0E1118] border border-white/[0.06] text-neutral-300 font-mono text-[11px]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <button
                        onClick={() => openProjectDetails(project)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(255,107,53,0.3)] active:scale-95"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Case Study Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1C2030] border border-white/[0.08] hover:border-orange-500/40 text-neutral-300 hover:text-white font-medium text-xs transition-all active:scale-95"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Project</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      ) : null}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
