import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'motion/react';
import {
  Target,
  Eye,
  Shield,
  CheckCircle2,
  Building2,
  Globe2,
  Briefcase,
  Lock,
} from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

const valueIconMap = {
  practicality: Briefcase,
  control: Lock,
  reliability: CheckCircle2,
  discipline: Shield,
};

export default function Company() {
  const { language, direction } = useLanguage();
  const lang = language as Lang;
  const companyContent = content.pages.company;

  return (
    <div className="w-full pt-24 bg-maya-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-28 overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-maya-gold/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-white/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <span className="text-xs text-maya-gold font-mono uppercase tracking-[0.25em]">
                {companyContent.hero.title[lang]}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {companyContent.hero.subtitle[lang]}
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-10">
              {companyContent.hero.description[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {companyContent.hero.proofs.map((proof: Record<Lang, string>, idx: number) => (
                <div
                  key={idx}
                  className="px-4 py-3 border border-white/10 bg-white/[0.03] text-white/85 text-sm md:text-[15px] leading-relaxed"
                >
                  {proof[lang]}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24 relative">
        <div className="container mx-auto px-6">
          {/* About Maya */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 p-10 md:p-12 border border-maya-gold/25 bg-gradient-to-br from-maya-gold/[0.08] to-maya-gold/[0.02] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/60 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-20 h-20 bg-maya-gold/15 border border-maya-gold/25 flex items-center justify-center text-maya-gold shrink-0"
              >
                <Building2 size={32} />
              </motion.div>

              <div>
                <h2 className="text-3xl md:text-4xl font-display text-white mb-6 leading-tight">
                  {companyContent.sections.whoWeAre.title[lang]}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-white/78 text-base md:text-lg leading-relaxed max-w-2xl col-span-2"
                  >
                    {companyContent.sections.whoWeAre.content[lang]}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Maya */}
          <div className="mb-28 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display text-white mb-5 leading-tight">
                {companyContent.differentiators.title[lang]}
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                {companyContent.differentiators.subtitle[lang]}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyContent.differentiators.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={cn(
                    "p-8 md:p-9 border transition-all group",
                    idx === 0
                      ? 'border-maya-gold/30 bg-gradient-to-br from-maya-gold/[0.10] to-maya-gold/[0.02] hover:border-maya-gold/50'
                      : 'border-white/12 bg-gradient-to-br from-white/[0.05] to-white/[0.01] hover:border-white/20'
                  )}
                >
                  <h3 className="text-xl md:text-2xl font-display text-white mb-4 leading-snug group-hover:text-maya-gold transition-colors">
                    {item.title[lang]}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    {item.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How we operate + Operating Presence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 border border-white/15 bg-gradient-to-br from-white/[0.05] to-white/[0.01] relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-maya-gold/12 rounded-lg flex items-center justify-center text-maya-gold mb-7 group-hover:bg-maya-gold/18 transition-colors">
                <Shield size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-5 leading-tight">
                {companyContent.sections.identity.title[lang]}
              </h2>
              <p className="text-white/72 text-base md:text-lg leading-relaxed">
                {companyContent.sections.identity.content[lang]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 border border-maya-gold/20 bg-gradient-to-br from-maya-gold/[0.06] to-maya-gold/[0.01] relative"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/40 to-transparent" />
              <div className="w-14 h-14 bg-maya-gold/15 rounded-lg flex items-center justify-center text-maya-gold mb-7">
                <Globe2 size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6 leading-tight">
                {companyContent.operatingModel.title[lang]}
              </h2>
              <p className="text-white/72 text-base md:text-lg leading-relaxed mb-8">
                {companyContent.operatingModel.content[lang]}
              </p>

              <div className="space-y-4">
                {companyContent.operatingModel.items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                    className="border border-maya-gold/15 bg-maya-gold/[0.04] p-4"
                  >
                    <div className="text-xs text-maya-gold/90 font-bold uppercase tracking-[0.2em] mb-2">
                      {item.label[lang]}
                    </div>
                    <div className="text-white/82 text-sm leading-relaxed">
                      {item.value[lang]}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mission & Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-28">
            <motion.div
              initial={{ opacity: 0, x: direction === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start bg-maya-gold/5 p-8 md:p-10 border border-maya-gold/20"
            >
              <div className="p-4 bg-maya-gold text-maya-navy rounded-full shrink-0">
                <Target size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-display text-maya-gold mb-3">
                  {companyContent.sections.mission.title[lang]}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {companyContent.sections.mission.content[lang]}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: direction === 'rtl' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start bg-white/[0.03] p-8 md:p-10 border border-white/10"
            >
              <div className="p-4 bg-white/10 text-white rounded-full shrink-0">
                <Eye size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-3">
                  {companyContent.sections.vision.title[lang]}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {companyContent.sections.vision.content[lang]}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
              {companyContent.values.title[lang]}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-maya-gold to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
            {companyContent.values.items.map((item: any, idx: number) => {
              const Icon =
                valueIconMap[item.key as keyof typeof valueIconMap] ?? Shield;

              return (
                <motion.div
                  key={item.key ?? idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className={cn(
                    "p-8 md:p-9 border transition-all text-center group",
                    idx === 0
                      ? 'border-maya-gold/30 bg-gradient-to-br from-maya-gold/[0.10] to-maya-gold/[0.02]'
                      : 'border-white/12 bg-gradient-to-br from-white/[0.04] to-white/[0.01]'
                  )}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 + 0.1 }}
                    className={cn(
                      'w-14 h-14 mx-auto rounded-lg flex items-center justify-center mx-auto mb-6 transition-colors',
                      idx === 0
                        ? 'bg-maya-gold/20 text-maya-gold group-hover:bg-maya-gold/30'
                        : 'bg-white/8 text-maya-gold/90 group-hover:bg-white/12'
                    )}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 leading-snug">
                    {item.title[lang]}
                  </h4>
                  <p className="text-white/68 text-sm md:text-base leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}