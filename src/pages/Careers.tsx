import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, ArrowRight, MapPin } from 'lucide-react';
import content from '../data/site-content.json';

export default function Careers() {
  const pageContent = content.pages.careers;

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-maya-gold/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Briefcase size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">Careers</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {pageContent.hero.title}
            </h1>

            <p className="text-xl text-white/68 leading-relaxed max-w-2xl">
              {pageContent.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-white/65 text-lg leading-relaxed">{pageContent.intro}</p>
        </div>

        <div className="space-y-6 max-w-3xl mb-16">
          {(pageContent.roles as any[]).map((role: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-display font-bold text-white">{role.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-maya-gold/10 text-maya-gold border border-maya-gold/20 rounded">
                  {role.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/45 text-sm mb-4">
                <MapPin size={13} className="text-maya-gold/60" />
                <span>{role.location}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-10 md:p-12 max-w-3xl">
          <h2 className="text-2xl font-display text-white mb-4">Apply</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Send your CV and a brief note about the role you're interested in.
          </p>
          <a
            href="mailto:careers@mayaai.net"
            className="inline-flex items-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            careers@mayaai.net
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
