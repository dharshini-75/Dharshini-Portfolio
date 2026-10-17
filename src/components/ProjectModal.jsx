import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Wrench, ZoomIn, Maximize2, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { DashboardLightbox } from './ProjectMockups';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeDashIndex, setActiveDashIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Reset tab index whenever project changes
  useEffect(() => {
    setActiveDashIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#0F1118] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.08] bg-[#141722]/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[11px] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-neutral-500 font-mono text-xs">•</span>
                <span className="text-neutral-400 font-mono text-xs">{project.badge}</span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 text-sm text-neutral-300">
            
            {/* Overview Section */}
            <div>
              <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-2">
                Project Overview
              </h4>
              <p className="text-neutral-200 leading-relaxed font-light text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#161A26] border border-white/[0.05]">
                  <span className="text-[11px] font-mono text-neutral-400 block">{m.label}</span>
                  <span className="text-white font-mono font-semibold text-xs sm:text-sm mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Original Dashboard Visuals Gallery */}
            {project.dashboards && project.dashboards.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Power BI Dashboards ({project.dashboards.length} Views)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Click image to inspect high-res
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex flex-wrap gap-1.5 p-1 bg-[#131724] rounded-xl border border-white/[0.06]">
                  {project.dashboards.map((dash, idx) => (
                    <button
                      key={dash.id || idx}
                      onClick={() => setActiveDashIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        activeDashIndex === idx
                          ? 'bg-orange-500 text-white font-semibold shadow-md'
                          : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      {dash.tabLabel || dash.title}
                    </button>
                  ))}
                </div>

                {/* Active Dashboard Screenshot */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-white/[0.08] cursor-pointer group"
                >
                  <img
                    src={project.dashboards[activeDashIndex]?.image}
                    alt={project.dashboards[activeDashIndex]?.title}
                    className="w-full h-full object-contain bg-slate-950 transition-transform duration-300 group-hover:scale-[1.01]"
                  />

                  {/* Hover prompt */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <Maximize2 className="w-4 h-4 text-orange-400" />
                    <span>Click to Zoom &amp; Pan Full Resolution</span>
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-neutral-300 border border-white/10">
                    Page {activeDashIndex + 1} of {project.dashboards.length}
                  </div>
                </div>

                {/* Caption */}
                <p className="font-mono text-xs text-neutral-400 bg-[#121520] p-2.5 rounded-lg border border-white/[0.05]">
                  <strong className="text-white">{project.dashboards[activeDashIndex]?.title}:</strong>{' '}
                  {project.dashboards[activeDashIndex]?.caption}
                </p>
              </div>
            )}

            {/* Structured Subsections / Features */}
            <div>
              <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
                Key Modules &amp; Implementations
              </h4>
              <div className="space-y-3">
                {project.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#131620] border border-white/[0.06] hover:border-orange-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      <h5 className="font-display font-bold text-white text-sm">
                        {sec.title}
                      </h5>
                    </div>
                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed pl-6">
                      {sec.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmed Technologies */}
            <div>
              <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-2.5">
                Verified Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg bg-[#181D2B] border border-white/[0.08] text-neutral-200 font-mono text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between p-3.5 sm:p-5 border-t border-white/[0.08] bg-[#141722]/50">
            <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
              {project.github ? "Verified GitHub Repository Available" : "Interactive Analytical Case Study"}
            </span>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 text-xs font-medium transition-colors cursor-pointer"
              >
                Close
              </button>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(255,107,53,0.3)] active:scale-95"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox for Modal Screenshot Inspection */}
      {project.dashboards && (
        <DashboardLightbox
          images={project.dashboards}
          currentIndex={activeDashIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onSelectIndex={setActiveDashIndex}
        />
      )}
    </AnimatePresence>
  );
}
