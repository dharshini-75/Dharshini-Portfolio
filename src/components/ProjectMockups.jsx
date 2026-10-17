import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Layers, 
  BarChart3, 
  Sparkles,
  Info
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Reusable Lightbox for inspecting high-res dashboard images
export function DashboardLightbox({ images, currentIndex, isOpen, onClose, onSelectIndex }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    // Reset zoom state on slide change
    setIsZoomed(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onSelectIndex(currentIndex + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) onSelectIndex(currentIndex - 1);
      if (e.key === 'f' || e.key === 'F') setIsZoomed((prev) => !prev);
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
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  // Touch swipe handling for mobile phones
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance && currentIndex < images.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else if (distance < -minSwipeDistance && currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    }
  };

  if (!isOpen || !images || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  const content = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex flex-col bg-[#05070B] text-white select-none overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="h-14 sm:h-16 shrink-0 border-b border-white/[0.08] px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-3 bg-[#090C14]/90 z-20">
          {/* Title & Status */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.8)] shrink-0" />
            <div className="truncate">
              <h3 className="font-display font-bold text-xs sm:text-base text-white truncate leading-tight">
                {current.title}
              </h3>
              <p className="font-mono text-[10px] sm:text-[11px] text-neutral-400 truncate hidden sm:block">
                {current.subtitle || `Power BI View ${currentIndex + 1} of ${images.length}`}
              </p>
            </div>
          </div>

          {/* Interactive Page Switcher Tabs (Desktop / Tablet) */}
          <div className="hidden md:flex items-center gap-1 bg-[#121622] p-1 rounded-xl border border-white/[0.06] shrink-0">
            {images.map((item, idx) => (
              <button
                key={item.id || idx}
                onClick={() => onSelectIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-orange-500 text-white font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>{item.tabLabel || item.title}</span>
              </button>
            ))}
          </div>

          {/* Controls: Zoom, Page counter, Close */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="font-mono text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-white/[0.06] text-neutral-300 border border-white/[0.08]">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={() => setIsZoomed((prev) => !prev)}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-white border border-white/[0.08] text-[11px] sm:text-xs font-mono transition-all cursor-pointer"
              title={isZoomed ? "Fit to screen view" : "Actual 100% resolution view"}
            >
              <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
              <span>{isZoomed ? 'Fit' : '100%'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.06] hover:bg-orange-500 hover:text-white text-neutral-300 transition-colors border border-white/[0.08] cursor-pointer"
              aria-label="Close fullscreen view"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Main Display Area (Full Viewport Fit & Swipe on Mobile) */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex-1 min-h-0 min-w-0 relative flex items-center justify-center p-2 sm:p-5 md:p-6 ${
            isZoomed ? 'overflow-auto cursor-zoom-out' : 'overflow-hidden'
          }`}
        >
          {/* Main Screenshot Canvas */}
          <div
            className={`flex items-center justify-center ${
              isZoomed ? 'min-w-[1200px] w-full py-4' : 'w-full h-full'
            }`}
            onClick={() => isZoomed && setIsZoomed(false)}
          >
            <img
              src={current.image}
              alt={current.title}
              className={`rounded-lg sm:rounded-xl shadow-2xl border border-white/[0.12] bg-[#0A0D15] transition-all duration-150 ${
                isZoomed
                  ? 'w-full h-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)]'
                  : 'max-w-full max-h-full w-auto h-auto object-contain'
              }`}
              style={{
                maxHeight: isZoomed ? 'none' : 'calc(100vh - 125px)',
                maxWidth: isZoomed ? 'none' : 'min(calc(100vw - 16px), 1400px)'
              }}
            />
          </div>

          {/* Desktop Left Arrow Button */}
          {images.length > 1 && (
            <button
              disabled={currentIndex === 0}
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex(Math.max(0, currentIndex - 1));
              }}
              className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0E121E]/80 hover:bg-orange-500 text-white disabled:opacity-20 disabled:pointer-events-none transition-all backdrop-blur-md border border-white/15 items-center justify-center shadow-xl cursor-pointer z-10"
              aria-label="Previous view"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Desktop Right Arrow Button */}
          {images.length > 1 && (
            <button
              disabled={currentIndex === images.length - 1}
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex(Math.min(images.length - 1, currentIndex + 1));
              }}
              className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0E121E]/80 hover:bg-orange-500 text-white disabled:opacity-20 disabled:pointer-events-none transition-all backdrop-blur-md border border-white/15 items-center justify-center shadow-xl cursor-pointer z-10"
              aria-label="Next view"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Status & Mobile Thumb Bar */}
        <div className="h-14 shrink-0 border-t border-white/[0.08] px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 bg-[#090C14]/90 text-xs font-mono z-20">
          
          {/* Caption / Key Takeaway (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 min-w-0 text-neutral-300">
            <Info className="w-4 h-4 text-orange-400 shrink-0" />
            <p className="truncate text-xs">
              <strong className="text-white font-medium">{current.title}:</strong>{' '}
              <span className="text-neutral-400">{current.caption}</span>
            </p>
          </div>

          {/* Mobile Navigation Controls (< Page Tabs >) */}
          <div className="flex sm:hidden items-center justify-between w-full gap-2">
            <button
              disabled={currentIndex === 0}
              onClick={() => onSelectIndex(Math.max(0, currentIndex - 1))}
              className="p-1.5 rounded-lg bg-white/[0.08] disabled:opacity-25 text-white active:bg-orange-500 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Mobile Tab Switcher Pills */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[230px] no-scrollbar py-0.5">
              {images.map((item, idx) => (
                <button
                  key={item.id || idx}
                  onClick={() => onSelectIndex(idx)}
                  className={`px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap transition-all ${
                    idx === currentIndex
                      ? 'bg-orange-500 text-white font-semibold shadow-sm'
                      : 'bg-white/[0.06] text-neutral-400'
                  }`}
                >
                  {item.tabLabel || item.title}
                </button>
              ))}
            </div>

            <button
              disabled={currentIndex === images.length - 1}
              onClick={() => onSelectIndex(Math.min(images.length - 1, currentIndex + 1))}
              className="p-1.5 rounded-lg bg-white/[0.08] disabled:opacity-25 text-white active:bg-orange-500 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Keyboard hint */}
          <div className="hidden lg:flex items-center gap-2 text-neutral-500 shrink-0 text-[11px]">
            <span>Navigate: <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-300">→</kbd></span>
            <span>•</span>
            <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-300">Esc</kbd></span>
          </div>

        </div>

      </div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
}

// Master Dashboard Viewer Component for project cards
export function DashboardViewer({ project, accent = 'orange' }) {
  const dashboards = project?.dashboards || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeDashboard = dashboards[activeIndex] || dashboards[0];

  if (!activeDashboard) return null;

  return (
    <>
      <div className="w-full bg-[#0A0D15] rounded-xl border border-white/[0.08] hover:border-orange-500/30 transition-all duration-300 p-2 sm:p-3.5 shadow-2xl overflow-hidden group/viewer">
        
        {/* Top Window Bar - Responsive Flex Layout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-2 border-b border-white/[0.08] gap-2">
          {/* Status & Title */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex gap-1 mr-0.5 shrink-0">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-neutral-300 font-medium tracking-wide truncate">
              Power BI // {project.title}
            </span>
          </div>

          {/* Interactive Page Tabs */}
          <div className="flex items-center gap-1 bg-[#121622] p-0.5 sm:p-1 rounded-lg border border-white/[0.06] overflow-x-auto max-w-full no-scrollbar">
            {dashboards.map((dash, idx) => (
              <button
                key={dash.id || idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  activeIndex === idx
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {dash.tabLabel || dash.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Image Canvas Container */}
        <div 
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#0F121C] border border-white/[0.06] cursor-pointer group/image"
          title="Click to zoom and view full dashboard resolution"
        >
          {/* Main Screenshot */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeDashboard.image}
              src={activeDashboard.image}
              alt={activeDashboard.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-contain bg-slate-950 transition-transform duration-500 group-hover/image:scale-[1.01]"
              loading="lazy"
            />
          </AnimatePresence>

          {/* Hover / Tap Overlay with Zoom Icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2.5 sm:p-3">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] sm:text-[10px] text-orange-400 bg-black/70 px-2 py-0.5 rounded border border-orange-500/30 backdrop-blur-md">
                Power BI Dashboard
              </span>
              <div className="p-1 sm:p-1.5 rounded-lg bg-orange-500 text-white shadow-lg flex items-center gap-1 text-[10px] font-semibold">
                <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Inspect</span>
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500 text-white font-medium text-xs shadow-lg transform -translate-y-1 transition-transform">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Tap to Full View</span>
              </span>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] text-neutral-300 text-center line-clamp-1">
              {activeDashboard.subtitle}
            </p>
          </div>

          {/* Persistent Page Badge in corner */}
          <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/80 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono text-neutral-300 border border-white/10 group-hover/image:opacity-0 transition-opacity">
            {activeIndex + 1} / {dashboards.length}
          </div>
        </div>

        {/* Caption Bar underneath */}
        <div className="mt-2 pt-1.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-400 font-mono">
          <span className="truncate text-neutral-300">
            {activeDashboard.title}
          </span>
          <button
            onClick={() => setLightboxOpen(true)}
            className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors ml-2 shrink-0 cursor-pointer text-[10px] sm:text-xs"
          >
            <ZoomIn className="w-3 h-3" />
            <span>Full Resolution</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <DashboardLightbox
        images={dashboards}
        currentIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={setActiveIndex}
      />
    </>
  );
}

// Dedicated wrapper for BigMart project
export function BigMartMockup() {
  const project = projectsData.find((p) => p.id === 'bigmart-sales-analysis');
  return <DashboardViewer project={project} accent="orange" />;
}

// Dedicated wrapper for Uber project
export function UberRideMockup() {
  const project = projectsData.find((p) => p.id === 'uber-ride-analysis');
  return <DashboardViewer project={project} accent="orange" />;
}
