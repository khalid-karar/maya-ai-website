import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Lock,
  Server,
  Database,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type Lang = 'ar' | 'en';

export default function Governance() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';
  const pageContent = content.pages.governance;

  const deploymentIcons = [Server, Lock, Building2];
  const controlsIcons = [Database, Shield, Lock, CheckCircle2];

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[860px] h-[360px] bg-maya-gold/5 blur-[130px] rounded-full" />
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
              <Shield size={14} className="text-maya-gold" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'الثقة التشغيلية' : 'Operational Trust'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {pageContent.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed mb-6 max-w-3xl">
              {pageContent.hero.subtitle[lang]}
            </p>

            <p className="text-white/58 text-lg leading-relaxed max-w-3xl">
              {pageContent.hero.description[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageContent.pillars.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 text-maya-gold flex items-center justify-center mb-5">
                {idx === 0 ? <Database size={18} /> : idx === 1 ? <Shield size={18} /> : <Server size={18} />}
              </div>

              <h3 className="text-2xl font-display text-white mb-4">{item.title[lang]}</h3>
              <p className="text-white/58 leading-relaxed">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deployment Models */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            {pageContent.deploymentModels.title[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageContent.deploymentModels.items.map((item: any, idx: number) => {
            const Icon = deploymentIcons[idx] || Server;
            return (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 text-maya-gold flex items-center justify-center mb-5">
                  <Icon size={18} />
                </div>

                <h3 className="text-xl font-display text-white mb-3">{item.title[lang]}</h3>
                <p className="text-white/58 leading-relaxed text-sm md:text-base">{item.desc[lang]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            {pageContent.controls.title[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageContent.controls.items.map((item: any, idx: number) => {
            const Icon = controlsIcons[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-7 hover:border-maya-gold/25 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-white mb-2">{item.title[lang]}</h3>
                    <p className="text-white/58 leading-relaxed text-sm md:text-base">
                      {item.desc[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operating Model */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
              {pageContent.operatingModel.title[lang]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageContent.operatingModel.items.map((item: any, idx: number) => (
              <div key={idx} className="border border-white/10 bg-white/[0.02] p-6">
                <div
                  className={cn(
                    'text-maya-gold mb-3',
                    lang === 'en'
                      ? 'text-xs font-bold uppercase tracking-widest'
                      : 'text-xs font-bold tracking-wide'
                  )}
                >
                  {item.label[lang]}
                </div>

                <p className="text-white/68 leading-relaxed text-sm md:text-base">
                  {item.value[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight mb-4">
                {pageContent.cta.title[lang]}
              </h3>
              <p className="text-white/58 max-w-3xl leading-relaxed">
                {pageContent.cta.subtitle[lang]}
              </p>
            </div>

            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors',
                lang === 'en'
                  ? 'text-sm font-bold uppercase tracking-widest'
                  : 'text-sm font-bold tracking-wide'
              )}
            >
              {pageContent.cta.button[lang]}
              {direction === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}