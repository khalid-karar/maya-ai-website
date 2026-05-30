import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Shield,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  Lock,
} from 'lucide-react';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';

export default function Contact() {
  const contactPage = content.pages.contact;
  const commonContact = content.common.contact;

  // Handle scroll-to-anchor when page loads with hash
  useEffect(() => {
    const handleAnchorScroll = () => {
      const hash = window.location.hash;
      if (hash === '#briefing-request') {
        setTimeout(() => {
          const element = document.getElementById('briefing-request');
          if (element) {
            // Account for sticky header height (~128px on desktop, ~96px on mobile)
            const headerHeight = window.innerWidth >= 768 ? 128 : 96;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    };

    handleAnchorScroll();
    window.addEventListener('hashchange', handleAnchorScroll);
    return () => window.removeEventListener('hashchange', handleAnchorScroll);
  }, []);

  const inquiryOptions = [
    { value: 'agents', label: 'AI Agents & Workflow Automation' },
    { value: 'voice', label: 'Voice & Service Intelligence' },
    { value: 'spatial', label: 'Spatial & Operational Intelligence' },
    { value: 'knowledge', label: 'Knowledge & Document Intelligence' },
    { value: 'platforms', label: 'Custom AI Platforms & Applications' },
    { value: 'deployment', label: 'Private AI Deployment' },
    { value: 'general', label: 'General Inquiry' },
  ];

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#06040d]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[700px] h-[360px] bg-maya-gold/[0.07] blur-[140px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center max-w-6xl"
          >
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
                <Mail size={14} className="text-maya-gold" />
                <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                  Strategic Contact
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                {contactPage.hero.title}
              </h1>

              <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-2xl">
                {contactPage.hero.subtitle}
              </p>
            </div>

            {/* Right — engagement process */}
            <div className="hidden lg:block border border-white/10 bg-white/[0.02] p-8">
              <p className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-maya-gold/60 mb-5">What to expect</p>
              <ul className="space-y-4">
                {[
                  { label: 'Acknowledged within 24 hours', sub: 'All enquiries receive a personal response' },
                  { label: 'NDA available on request', sub: 'Confidential engagement from the first call' },
                  { label: 'US & KSA presence', sub: 'Senior contacts in both markets' },
                  { label: 'No sales automation', sub: 'You speak directly with the leadership team' },
                ].map(({ label, sub }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 shrink-0 rounded-full border border-maya-gold/30 bg-maya-gold/10 flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-maya-gold" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white/85">{label}</p>
                      <p className="text-xs text-white/45 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 py-20 md:py-24" id="briefing-request">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14">
          {/* Contact Form */}
          <div>
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={20} className="text-maya-gold" />
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  Briefing or Consultation Request
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder="Work Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.org}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder="Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      dir="ltr"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                    {contactPage.form.type}
                  </label>

                  <select
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                  >
                    <option value="" disabled className="bg-[#0b0816] text-white/50">
                      Select area of interest
                    </option>
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0b0816] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                    {contactPage.form.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25 resize-none"
                    placeholder="Briefly describe your environment, priorities, use case, or deployment considerations."
                  />
                </div>

                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-start gap-3">
                    <Lock size={16} className="text-maya-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-white/62 leading-relaxed">
                      Incoming requests are handled with professional confidentiality and reviewed in line with institutional context, sensitivity, and deployment considerations.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest"
                  >
                    {contactPage.form.submit}
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] text-white/30 text-center mt-4 leading-relaxed">
                    By submitting this form, you acknowledge that your data will be processed in accordance with applicable privacy and compliance policies.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Operating presence */}
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-9">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-8 flex items-center gap-2">
                <Globe size={20} className="text-maya-gold" />
                Operational Presence
              </h3>

              <div className="space-y-8">
                {/* US */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-stretch">
                  <div className={cn('relative border-maya-gold', 'pl-6 border-l')}>
                    <h4 className="font-bold text-white text-lg mb-1">{commonContact.usa.entity}</h4>
                    <p className="text-maya-gold mb-4 text-xs uppercase tracking-widest">
                      United States of America
                    </p>

                    <div className="space-y-3 text-sm text-white/62">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 shrink-0" />
                        <p>{commonContact.usa.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="shrink-0" />
                        <p dir="ltr">{commonContact.usa.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="shrink-0" />
                        <p>{commonContact.emails[1]}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield size={16} className="shrink-0" />
                        <p>International Operating Presence</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center w-40 h-32 border border-white/10 bg-white/[0.02] rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(172,133,48,0.12) 0%, transparent 70%)' }} />
                    <div className="relative text-center">
                      <div className="text-maya-gold text-xs font-mono tracking-widest mb-1">
                        38.9°N&nbsp;&nbsp;77.0°W
                      </div>
                      <div className="text-white/20 text-[10px] tracking-widest uppercase mt-2">
                        Virginia, USA
                      </div>
                      <div className="flex justify-center mt-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maya-gold opacity-50" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-maya-gold" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saudi */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-stretch">
                  <div className={cn('relative border-white/20', 'pl-6 border-l')}>
                    <h4 className="font-bold text-white text-lg mb-1">{commonContact.ksa.entity}</h4>
                    <p className="text-white/40 mb-4 text-xs uppercase tracking-widest">
                      Kingdom of Saudi Arabia
                    </p>

                    <div className="space-y-3 text-sm text-white/62">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 shrink-0" />
                        <p>{commonContact.ksa.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="shrink-0" />
                        <p dir="ltr">{commonContact.ksa.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="shrink-0" />
                        <p>{commonContact.emails[0]}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 size={16} className="shrink-0" />
                        <p>Regional Operating Presence</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center w-40 h-32 border border-white/10 bg-white/[0.02] rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(172,133,48,0.12) 0%, transparent 70%)' }} />
                    <div className="relative text-center">
                      <div className="text-maya-gold text-xs font-mono tracking-widest mb-1">
                        24.7°N&nbsp;&nbsp;46.7°E
                      </div>
                      <div className="text-white/20 text-[10px] tracking-widest uppercase mt-2">
                        Riyadh, KSA
                      </div>
                      <div className="flex justify-center mt-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maya-gold opacity-50" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-maya-gold" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-7">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-maya-gold" />
                Support & Operations
              </h4>

              <p className="text-sm text-white/85 mb-5 leading-relaxed">
                For existing clients requiring operational support or service coordination.
              </p>

              <a
                href={`mailto:${commonContact.emails[0]}`}
                className="text-maya-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
              >
                Contact Support
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}