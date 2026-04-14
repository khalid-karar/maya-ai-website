import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  Shield,
  Globe,
  Cpu,
  CheckCircle2,
  Database,
  ChevronLeft,
  ChevronRight,
  Building2,
  Lock,
  Briefcase,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

const categoryIcons: Record<string, React.ElementType> = {
  'enterprise-operations': Briefcase,
  'service-workflows': Cpu,
  'compliance-risk': Shield,
};

export default function Solutions() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';
  const solutionsContent = content.pages.solutions;
  const [searchParams] = useSearchParams();

  // Scroll to category section when page loads with category query param
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const categorySection = document.querySelector(`[data-solutions-category="${categoryParam}"]`);
      if (categorySection) {
        setTimeout(() => {
          categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [searchParams]);

  const categoryMeta = {
    'enterprise-operations': {
      eyebrow: { ar: 'Operational Execution', en: 'Operational Execution' },
      accentIcon: Briefcase,
    },
    'service-workflows': {
      eyebrow: { ar: 'Service Enablement', en: 'Service Enablement' },
      accentIcon: Cpu,
    },
    'compliance-risk': {
      eyebrow: { ar: 'Oversight & Control', en: 'Oversight & Control' },
      accentIcon: Shield,
    },
  };

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[360px] bg-maya-gold/5 blur-[130px] rounded-full" />
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
              <Database size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Solution Categories
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {solutionsContent.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-10">
              {solutionsContent.hero.description[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Operationally useful AI
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Secure deployment options
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Built for enterprise environments
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 pt-20 md:pt-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Applied AI for high-value operational workflows
          </h2>
          <p className="text-white/58 text-lg md:text-xl leading-relaxed max-w-3xl">
            Maya helps organizations apply AI where it can create real operational value, from internal
            process execution to customer-facing workflows and environments where oversight, control, and
            structured decision support matter.
          </p>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="space-y-20">
          {solutionsContent.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.id] || Server;
            const AccentIcon =
              categoryMeta[category.id as keyof typeof categoryMeta]?.accentIcon || Server;
            const eyebrow =
              categoryMeta[category.id as keyof typeof categoryMeta]?.eyebrow || {
                ar: 'Solutions',
                en: 'Solutions',
              };

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.06 }}
                className="relative"
                data-solutions-category={category.id}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start mb-10">
                  <div className="lg:sticky lg:top-28">
                    <div className="w-14 h-14 bg-maya-gold/10 border border-maya-gold/20 rounded-lg flex items-center justify-center text-maya-gold mb-6">
                      <Icon size={24} />
                    </div>

                    <div className="text-maya-gold mb-3 text-xs font-bold uppercase tracking-widest">
                      {eyebrow[lang]}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {category.label[lang]}
                    </h2>

                    <p className="text-white/55 leading-relaxed text-base md:text-lg">
                      {category.description[lang]}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {category.items.map((solution, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="group bg-white/[0.02] border border-white/10 hover:border-maya-gold/30 p-6 md:p-7 transition-all duration-300 flex flex-col min-h-[360px] relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center shrink-0">
                            <AccentIcon size={18} />
                          </div>

                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border text-center bg-white/5 text-white/65 border-white/10">
                            Solution Area
                          </span>
                        </div>

                        <div className="mb-5">
                          <h3 className="text-2xl font-display font-bold text-white group-hover:text-maya-gold transition-colors mb-3 leading-snug">
                            {solution.title[lang]}
                          </h3>

                          <p className="text-white/62 text-sm md:text-base leading-relaxed">
                            {solution.desc[lang]}
                          </p>
                        </div>

                        <div className="space-y-4 mb-8">
                          <div className="border border-white/8 bg-white/[0.02] p-4">
                            <div className="text-white/35 mb-2 text-[10px] font-bold uppercase tracking-widest">
                              Best Fit
                            </div>
                            <div className="text-white/82 text-sm leading-relaxed flex items-start gap-2">
                              <Building2 size={14} className="text-maya-gold shrink-0 mt-0.5" />
                              <span>{solution.buyer[lang]}</span>
                            </div>
                          </div>

                          <div className="border border-white/8 bg-white/[0.02] p-4">
                            <div className="text-white/35 mb-2 text-[10px] font-bold uppercase tracking-widest">
                              Deployment Options
                            </div>
                            <div className="text-white/82 text-sm leading-relaxed flex items-start gap-2">
                              {solution.readiness === 'pilot' ? (
                                <Globe size={14} className="text-maya-gold shrink-0 mt-0.5" />
                              ) : solution.readiness === 'strategic' ? (
                                <Lock size={14} className="text-maya-gold shrink-0 mt-0.5" />
                              ) : (
                                <Server size={14} className="text-maya-gold shrink-0 mt-0.5" />
                              )}
                              <span>{solution.deployment[lang]}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          to="/contact"
                          className="mt-auto w-full py-3.5 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                        >
                          Request a Private Briefing
                          {direction === 'rtl' ? (
                            <ArrowRight size={14} className="rotate-180" />
                          ) : (
                            <ArrowRight size={14} />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      {/* Delivery principles */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <p className="text-white/40 mb-3">How Maya approaches delivery</p>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight mb-6">
                Solutions are shaped around operational reality, not generic AI packaging.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Built around operational outcomes',
                  'Structured for secure deployment',
                  'Designed for human oversight',
                  'Aligned to enterprise integration realities',
                  'Scoped for long-term maintainability',
                  'Adapted to environment-specific constraints',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/78 text-sm">
                    <CheckCircle2 size={16} className="text-maya-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6">
              <div className="w-12 h-12 rounded-full bg-maya-gold/10 text-maya-gold flex items-center justify-center mb-5">
                <Database size={20} />
              </div>

              <h4 className="text-white text-xl font-display mb-3">
                Need a more tailored discussion?
              </h4>

              <p className="text-white/55 text-sm leading-relaxed mb-6">
                We can review your environment, priorities, and deployment considerations in a direct conversation.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                Request a Private Briefing
                {direction === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}