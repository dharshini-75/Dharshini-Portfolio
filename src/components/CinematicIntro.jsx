import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user has reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 700);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const nameLetters = "DHARSHINI J G".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080B] text-white px-4 selection:bg-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Minimal grid background */}
          <div className="absolute inset-0 bg-subtle-grid bg-[size:32px_32px] opacity-25 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Monogram tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 font-mono text-xs uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
              <span>Data Portfolio</span>
            </motion.div>

            {/* Cinematic Name Reveal with Staggered Letters */}
            <div className="flex items-center justify-center overflow-hidden py-2">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 70, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider ${
                    letter === " " ? "w-4 sm:w-6" : "text-white"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle reveal */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 tracking-[0.3em] uppercase"
            >
              Data <span className="text-orange-500">•</span> Business Insights <span className="text-orange-500">•</span> Systems
            </motion.p>

            {/* Subtle Progress Line */}
            <motion.div
              className="w-48 sm:w-64 h-[2px] bg-neutral-800 rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Skip Intro button */}
            <motion.button
              onClick={() => {
                setVisible(false);
                onComplete?.();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-[11px] font-mono text-neutral-500 hover:text-orange-400 transition-colors uppercase tracking-widest cursor-pointer px-3 py-1"
            >
              Skip Intro →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
