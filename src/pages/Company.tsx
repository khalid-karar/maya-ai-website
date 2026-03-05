import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Star } from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';

export default function Company() {
  const { language, direction } = useLanguage();
  const companyContent = content.pages.company;

  return (
    <div className="w-full pt-24 bg-maya-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0a0816]">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-maya-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">{companyContent.hero.title[language]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {companyContent.hero.subtitle[language]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Who We Are - من نحن */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-maya-gold/10 rounded-lg flex items-center justify-center text-maya-gold mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h2 className="text-3xl font-display text-white mb-4">{companyContent.sections.whoWeAre.title[language]}</h2>
              <p className="text-white/70 text-lg leading-relaxed">{companyContent.sections.whoWeAre.content[language]}</p>
            </motion.div>

            {/* Identity - هويتنا */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-maya-gold/10 rounded-lg flex items-center justify-center text-maya-gold mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl font-display text-white mb-4">{companyContent.sections.identity.title[language]}</h2>
              <p className="text-white/70 text-lg leading-relaxed">{companyContent.sections.identity.content[language]}</p>
            </motion.div>
          </div>

          {/* Mission & Vision - رسالتنا وهدفنا */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start bg-maya-gold/5 p-8 border border-maya-gold/20"
            >
              <div className="p-4 bg-maya-gold text-maya-navy rounded-full shrink-0">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display text-maya-gold mb-3">{companyContent.sections.mission.title[language]}</h3>
                <p className="text-white/80 leading-relaxed">{companyContent.sections.mission.content[language]}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start bg-white/5 p-8 border border-white/10"
            >
              <div className="p-4 bg-white/10 text-white rounded-full shrink-0">
                <Eye size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-3">{companyContent.sections.vision.title[language]}</h3>
                <p className="text-white/60 leading-relaxed">{companyContent.sections.vision.content[language]}</p>
              </div>
            </motion.div>
          </div>

          {/* Values - قيمنا */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{companyContent.values.title[language]}</h2>
            <div className="w-24 h-1 bg-maya-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyContent.values.items.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-white/5 bg-[#0e0c1d] hover:border-maya-gold/30 transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center text-maya-gold mb-6 group-hover:scale-110 transition-transform">
                  <Star size={20} />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">{item.title[language]}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc[language]}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}