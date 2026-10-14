import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>05 // Verified Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certification.
          </h2>
        </div>

        {/* Certificate Card */}
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl border border-white/[0.08] p-6 sm:p-8 hover:border-orange-500/35 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 text-orange-400 shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.2)]">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-emerald-400 font-mono text-xs flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Professional Credential
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed mt-2.5 max-w-2xl">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 md:min-w-[190px]">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(255,107,53,0.3)]"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>

            </div>

            {/* Curriculum breakdown */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-3">
                Covered Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {cert.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1118] border border-white/[0.06] text-neutral-200 font-mono text-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            
          </motion.div>
        ))}

      </div>
    </section>
  );
}
