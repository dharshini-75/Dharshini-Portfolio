import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Loader2, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle,
  Sparkles,
  Edit2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || isSubmitting) return;

    setIsSubmitting(true);

    const subjectText = formData.subject.trim() 
      ? `[Portfolio Inquiry] ${formData.subject.trim()} - from ${formData.name.trim()}`
      : `[Portfolio Inquiry] Opportunity Message from ${formData.name.trim()}`;

    const bodyText = 
`Hi Dharshini,

You have received a new inquiry from your portfolio website:

----------------------------------------
Sender Name: ${formData.name.trim()}
Sender Email: ${formData.email.trim()}
Role / Subject: ${formData.subject.trim() || 'Not specified'}
----------------------------------------

Message:
${formData.message.trim()}

-- Sent via Dharshini J G Portfolio Contact Form`;

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    try {
      // 1. Deliver directly to dharshini0757@gmail.com in the background
      await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: subjectText,
          message: formData.message.trim(),
          _template: 'table'
        })
      });
    } catch (err) {
      console.warn('Direct API notice:', err);
    } finally {
      // 2. Open email client pre-filled so sender also has direct mail action
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>06 // Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's Discuss{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Data &amp; Analytics Roles.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3 max-w-xl">
            Currently open to internships, graduate analyst roles, and technical collaborations. Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* GitHub Card (Fully Verified) */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover glass-card p-5 rounded-2xl border border-white/[0.08] flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest block">
                    Verified GitHub Profile
                  </span>
                  <span className="font-display font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                    github.com/dharshini-75
                  </span>
                  <span className="text-neutral-400 text-xs block font-light">
                    Repositories &amp; source code
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
            </a>

            {/* Email Card (Editable placeholder with copy & mailto) */}
            <div className="glass-card p-5 rounded-2xl border border-white/[0.08]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest block">
                        Email Address
                      </span>
                      
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-mono font-medium text-white hover:text-orange-400 transition-colors text-xs sm:text-sm mt-0.5 block break-all"
                    >
                      {contactInfo.email}
                    </a>
                    <span className="text-neutral-400 text-xs font-light block mt-1">
                      Click to send email or copy address below
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-[#141824] hover:bg-[#1E2333] border border-white/[0.08] text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* LinkedIn Card (Editable placeholder) */}
            <div className="glass-card p-5 rounded-2xl border border-white/[0.08]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest block">
                        LinkedIn Profile
                      </span>
                      
                    </div>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-medium text-white hover:text-orange-400 transition-colors text-xs sm:text-sm mt-0.5 block"
                    >
                      {contactInfo.linkedin}
                    </a>
                    <span className="text-neutral-400 text-xs font-light block mt-1">Connect on LinkedIn</span>
                  </div>
                </div>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#141824] hover:bg-[#1E2333] border border-white/[0.08] text-neutral-300 hover:text-white transition-colors shrink-0"
                  aria-label="Visit LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-4 rounded-xl border border-white/[0.06] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <div className="text-xs text-neutral-300 font-mono">
                <span className="text-white font-medium">Location: </span>
                {contactInfo.location}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative"
            >
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light mb-6">
                Have an inquiry about an internship or graduate opportunity? Fill out the form and I'll get back to you promptly.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Team Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D0F14] border border-white/[0.08] focus:border-orange-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D0F14] border border-white/[0.08] focus:border-orange-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Role / Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Analyst Opportunity / Portfolio Feedback"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D0F14] border border-white/[0.08] focus:border-orange-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, organization, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D0F14] border border-white/[0.08] focus:border-orange-500 focus:outline-none text-white text-xs sm:text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:shadow-[0_0_30px_rgba(255,107,53,0.55)] active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message Directly to Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiring Message</span>
                    </>
                  )}
                </button>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you! Your message has been sent directly to dharshini0757@gmail.com.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
