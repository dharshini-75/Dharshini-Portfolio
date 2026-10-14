import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, FileDown, CheckCircle2, AlertCircle, Sparkles, FolderSync, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function ResumeSection() {
  const [downloaded, setDownloaded] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B35', '#FFA07A', '#FF9F1C', '#FFFFFF'],
    });
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  };

  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>06 // Formal Curriculum Vitae</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curriculum Vitae &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Resume.
            </span>
          </h2>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/[0.05] rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider">
                  Verified Academic &amp; Skills Summary
                </span>
                <span className="text-neutral-500 font-mono text-xs">•</span>
                <span className="text-neutral-400 font-mono text-xs">PDF Document</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Download Dharshini's Complete Resume
              </h3>

              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                Contains verified educational background at Thiagarajar College (2024–2027), technical competencies in Power BI, SQL, Excel, and MySQL, full case breakdowns of BigMart Sales Analysis, FinGuard AI, and SHEmpower, and IBM Data Analyst credentials.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>ATS-Friendly Layout</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Strictly Verified Facts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Direct Recruiter Contact</span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:items-end lg:items-center justify-center">
              <a
                href={contactInfo.resumePath}
                download="Dharshini_JG_Resume.pdf"
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,107,53,0.35)] hover:shadow-[0_0_35px_rgba(255,107,53,0.55)] active:scale-95 text-center"
              >
                <FileDown className="w-4 h-4" />
                <span>{downloaded ? "Downloaded!" : "Download Resume (PDF)"}</span>
              </a>

              <button
                onClick={() => setShowHelper(!showHelper)}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-orange-400 font-mono transition-colors cursor-pointer mt-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>How to replace with your updated resume</span>
              </button>
            </div>

          </div>

          {/* Replacement Guide Collapse */}
          {showHelper && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-neutral-400 space-y-2 bg-[#0E1118] p-4 rounded-xl border border-orange-500/20"
            >
              <div className="flex items-center gap-2 text-orange-400 font-semibold">
                <FolderSync className="w-4 h-4" />
                <span>Instructions for Dharshini:</span>
              </div>
              <p>
                A verified placeholder resume is currently active at <code className="text-orange-300 bg-white/[0.05] px-1.5 py-0.5 rounded">public/resume.pdf</code>.
              </p>
              <p>
                To replace it with your newly exported PDF from Word, Canva, or LaTeX: simply save your final PDF into <code className="text-orange-300 bg-white/[0.05] px-1.5 py-0.5 rounded">public/resume.pdf</code> (overwriting the placeholder). All download buttons on the site will instantly serve your file without needing any code edits!
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>
    </section>
  );
}
