import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  Lock,
} from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type Lang = 'ar' | 'en';

export default function Contact() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  const contactPage = content.pages.contact;
  const commonContact = content.common.contact;

  const inquiryOptions = [
    { value: 'agents', label: { ar: 'AI Agents & Workflow Automation', en: 'AI Agents & Workflow Automation' } },
    { value: 'voice', label: { ar: 'Voice & Service Intelligence', en: 'Voice & Service Intelligence' } },
    { value: 'spatial', label: { ar: 'Spatial & Operational Intelligence', en: 'Spatial & Operational Intelligence' } },
    { value: 'knowledge', label: { ar: 'Knowledge & Document Intelligence', en: 'Knowledge & Document Intelligence' } },
    { value: 'platforms', label: { ar: 'Custom AI Platforms & Applications', en: 'Custom AI Platforms & Applications' } },
    { value: 'deployment', label: { ar: 'Private AI Deployment', en: 'Private AI Deployment' } },
    { value: 'general', label: { ar: 'General Inquiry', en: 'General Inquiry' } },
  ];

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[340px] bg-maya-gold/5 blur-[125px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-white/5 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Mail size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Strategic Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {contactPage.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed max-w-3xl mb-10">
              {contactPage.hero.subtitle[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Confidential Engagement
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Solutions & Capability Discussions
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Enterprise & Sovereign Solution Focus
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 py-20 md:py-24">
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
                      {contactPage.form.name[lang]}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.email[lang]}
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
                      {contactPage.form.org[lang]}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder="Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                      {contactPage.form.phone[lang]}
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
                    {contactPage.form.type[lang]}
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
                        {opt.label[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/45 mb-2 text-xs font-bold uppercase tracking-widest">
                    {contactPage.form.message[lang]}
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
                    {contactPage.form.submit[lang]}
                    {direction === 'rtl' ? (
                      <ArrowRight size={16} className="rotate-180" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
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
                  <div className={cn('relative border-maya-gold', direction === 'rtl' ? 'pr-6 border-r' : 'pl-6 border-l')}>
                    <h4 className="font-bold text-white text-lg mb-1">{commonContact.usa.entity[lang]}</h4>
                    <p className="text-maya-gold mb-4 text-xs uppercase tracking-widest">
                      United States of America
                    </p>

                    <div className="space-y-3 text-sm text-white/62">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 shrink-0" />
                        <p>{commonContact.usa.address[lang]}</p>
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

                  <div className="hidden md:flex relative border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden items-center justify-center min-h-[190px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,162,39,0.08),transparent_35%)]" />
                    <div className="absolute inset-0 opacity-[0.12] flex items-center justify-center">
                      <svg
                        viewBox="0 0 800 500"
                        className="w-[88%] h-auto text-[#d8b04a]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M98 167L116 132L152 121L197 82L236 88L259 67L297 78L350 64L391 78L452 69L514 90L569 82L612 96L654 122L710 142L699 179L712 209L684 245L690 286L659 304L643 339L602 364L559 352L523 371L462 366L410 385L355 374L300 387L263 367L212 364L188 334L151 318L124 282L90 274L79 231L99 200L98 167Z"
                          stroke="currentColor"
                          strokeWidth="14"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center px-4 mt-6">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-maya-gold/80 mb-2">
                        US Presence
                      </div>
                      <div className="text-white/28 text-xs">
                        International Presence
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saudi */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-stretch">
                  <div className={cn('relative border-white/20', direction === 'rtl' ? 'pr-6 border-r' : 'pl-6 border-l')}>
                    <h4 className="font-bold text-white text-lg mb-1">{commonContact.ksa.entity[lang]}</h4>
                    <p className="text-white/40 mb-4 text-xs uppercase tracking-widest">
                      Kingdom of Saudi Arabia
                    </p>

                    <div className="space-y-3 text-sm text-white/62">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 shrink-0" />
                        <p>{commonContact.ksa.address[lang]}</p>
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

                  <div className="hidden md:flex relative border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden items-center justify-center min-h-[190px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(201,162,39,0.06),transparent_35%)]" />
                    <div className="absolute inset-0 opacity-[0.12] flex items-center justify-center">
                      <svg
                        viewBox="0 0 500 700"
                        className="w-[58%] h-auto text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M228 58L264 69L299 97L318 145L339 177L352 236L330 285L347 326L326 386L351 431L334 471L296 505L270 560L231 617L183 605L164 563L134 524L130 468L108 431L105 381L124 342L112 291L122 238L149 196L163 149L193 108L228 58Z"
                          stroke="currentColor"
                          strokeWidth="14"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center px-4 mt-6">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 mb-2">
                        Saudi Arabia
                      </div>
                      <div className="text-white/22 text-xs">
                        Regional Presence
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

              <p className="text-sm text-white/55 mb-5 leading-relaxed">
                For existing clients requiring operational support or service coordination.
              </p>

              <a
                href={`mailto:${commonContact.emails[0]}`}
                className="text-maya-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
              >
                Contact Support
                {direction === 'rtl' ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}