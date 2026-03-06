import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Eye,
  Shield,
  Cpu,
  CheckCircle2,
  Scale,
  Building2,
  Globe2,
} from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

const valueIconMap = {
  sovereignty: Shield,
  innovation: Cpu,
  reliability: CheckCircle2,
  compliance: Scale,
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
              <span
  className={`text-xs text-maya-gold ${
    lang === 'en'
      ? 'font-mono uppercase tracking-[0.25em]'
      : 'font-semibold tracking-normal'
  }`}
>
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
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 p-8 md:p-12 border border-white/10 bg-white/[0.03] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/60 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 items-start">
              <div className="w-16 h-16 bg-maya-gold/10 border border-maya-gold/20 flex items-center justify-center text-maya-gold">
                <Building2 size={30} />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-display text-white mb-5">
                  {companyContent.sections.whoWeAre.title[lang]}
                </h2>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-4xl">
                  {companyContent.sections.whoWeAre.content[lang]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why Maya AI */}
          <div className="mb-24 md:mb-28">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                {companyContent.differentiators.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {companyContent.differentiators.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyContent.differentiators.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <h3 className="text-2xl font-display text-white mb-4">
                    {item.title[lang]}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    {item.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Identity + Operating Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border border-white/10 bg-white/[0.02] relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-maya-gold/10 rounded-lg flex items-center justify-center text-maya-gold mb-6">
                <Shield size={26} />
              </div>
              <h2 className="text-3xl font-display text-white mb-4">
                {companyContent.sections.identity.title[lang]}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {companyContent.sections.identity.content[lang]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="p-10 border border-white/10 bg-[#0e0c1d]"
            >
              <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center text-maya-gold mb-6">
                <Globe2 size={26} />
              </div>
              <h2 className="text-3xl font-display text-white mb-4">
                {companyContent.operatingModel.title[lang]}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {companyContent.operatingModel.content[lang]}
              </p>

              <div className="space-y-4">
                {companyContent.operatingModel.items.map((item: any, idx: number) => (
                  <div key={idx} className="border border-white/8 bg-white/[0.02] p-4">
                    <div
  className={`text-sm text-maya-gold/90 mb-2 ${
    lang === 'en' ? 'uppercase tracking-[0.2em]' : 'font-semibold'
  }`}
>
  {item.label[lang]}
</div>
                    <div className="text-white/80 leading-relaxed">
                      {item.value[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
              {companyContent.values.title[lang]}
            </h2>
            <div className="w-24 h-1 bg-maya-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyContent.values.items.map((item: any, idx: number) => {
              const Icon =
                valueIconMap[item.key as keyof typeof valueIconMap] ?? Shield;

              return (
                <motion.div
                  key={item.key ?? idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-8 border border-white/10 bg-[#0e0c1d] hover:border-maya-gold/30 transition-all text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-white/5 rounded-full flex items-center justify-center text-maya-gold mb-6">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-4">
                    {item.title[lang]}
                  </h4>
                  <p className="text-white/65 text-base leading-relaxed">
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