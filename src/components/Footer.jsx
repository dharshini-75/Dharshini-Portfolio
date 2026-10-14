import React, { useState } from 'react';
import { ArrowUp, Mail, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Copy email to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
    
    // Open Gmail web compose in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#08090D] text-xs font-sans">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col sm:items-start text-center sm:text-left gap-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-display font-bold text-white text-sm tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="font-mono text-neutral-400 text-[11px]">
              B.Sc Computer Science '27
            </span>
          </div>
          <p className="text-neutral-500 font-mono text-[11px]">
            © {currentYear} Dharshini J G. All rights reserved. Crafted for Data &amp; Business Intelligence.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 relative">
            
            {/* GitHub Button */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#12151E] hover:bg-[#1A1F2C] border border-white/[0.08] hover:border-orange-500/50 text-neutral-300 hover:text-orange-400 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm group"
              title="Visit GitHub Profile (dharshini-75)"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn Button */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#12151E] hover:bg-[#1A1F2C] border border-white/[0.08] hover:border-orange-500/50 text-neutral-300 hover:text-orange-400 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm group"
              title="Visit LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* Email Button */}
            <div className="relative">
              <button
                type="button"
                onClick={handleEmailClick}
                className="p-2.5 rounded-lg bg-[#12151E] hover:bg-[#1A1F2C] border border-white/[0.08] hover:border-orange-500/50 text-neutral-300 hover:text-orange-400 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm group"
                title="Send Email / Copy dharshini0757@gmail.com"
                aria-label="Send Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Copied Toast Notification */}
              {copied && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#1A1F2C] border border-emerald-500/40 text-emerald-300 text-[10px] font-mono whitespace-nowrap shadow-xl flex items-center gap-1 z-30">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Email copied!</span>
                </div>
              )}
            </div>

          </div>

          <div className="w-[1px] h-6 bg-white/[0.08]" />

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#12151E] hover:bg-orange-500 hover:text-white border border-white/[0.06] text-neutral-400 text-xs font-mono transition-all cursor-pointer group shadow-sm active:scale-95"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
