import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';

export default function Leadership() {
  const pageContent = content.pages.leadership;

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#06040d]">
        {/* Diagonal line grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leader-diag" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 60" fill="none" stroke="rgba(172,133,48,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leader-diag)" />
        </svg>
        {/* Top-right radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 85% 0%, rgba(172,133,48,0.10) 0%, transparent 55%)' }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[700px] h-[340px] bg-maya-gold/[0.06] blur-[130px] rounded-full" />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-maya-gold/[0.08] blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Users size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Leadership
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {pageContent.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl">
              {pageContent.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
            Founding Leadership
          </h2>
          <p className="text-white/58 text-lg leading-relaxed">
            Maya AI is headquartered in the United States with an operational presence in the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.8fr] gap-8 max-w-5xl items-stretch">

          {/* Card 1 — Khalid Abdelrahman */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-maya-gold/10 border border-maya-gold/20 flex items-center justify-center text-maya-gold mb-5">
              <Users size={24} />
            </div>
            <div className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-maya-gold/60 mb-2">
              Founding Leadership
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-1">Khalid Abdelrahman</h3>
            <div className="text-xs text-maya-gold/80 font-bold uppercase tracking-widest mb-4">Founder &amp; CEO</div>
            <p className="text-white/85 text-sm leading-relaxed">
              Leads Maya AI globally across US and KSA operations. Two decades of experience building and scaling
              technology-driven operations across regulated markets. Prior career spans enterprise software delivery,
              government digital transformation, and cross-border operating strategy in the US and GCC.
            </p>
          </motion.div>

          {/* Card 2 — Co-Founder, KSA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/40 mb-5">
              <Users size={24} />
            </div>
            <div className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-maya-gold/60 mb-2">
              Co-Founder, KSA
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-1">Mufarrij Bin Shawyah</h3>
            <div className="text-xs text-maya-gold/80 font-bold uppercase tracking-widest mb-4">Co-Founder, KSA</div>
            <p className="text-white/85 text-sm leading-relaxed">
              Leads Maya AI's in-Kingdom operations and delivery. Extensive experience building enterprise technology
              relationships within KSA's government and regulated private sector, with deep understanding of Vision 2030
              priorities and SDAIA-aligned AI frameworks.
            </p>
          </motion.div>

          {/* Decorative panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="bg-[#0a0816] flex flex-col items-center justify-center px-8 py-14 text-center min-h-full"
          >
            <p className="font-display font-black leading-[0.9] tracking-tight">
              <span className="block text-4xl text-white whitespace-nowrap">US-rooted.</span>
              <span className="block text-4xl text-white whitespace-nowrap">Kingdom-ready.</span>
              <span className="block text-4xl text-maya-gold whitespace-nowrap">Built for both.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* Advisory placeholder — removed: not in JSON */}

      {/* Leadership experience — plain text only */}
      <section className="bg-[#0a0816] border-t border-white/[0.06] py-10">
        <div className="container mx-auto px-6">
          <p className="text-white/45 text-sm leading-relaxed max-w-3xl">
            Leadership experience spans U.S. federal, defense, healthcare, and enterprise
            environments, delivered through direct roles and approved partner engagements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-8">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-white mb-3">
                Engage with our leadership team
              </h3>
              <p className="text-white/85 leading-relaxed">
                For strategic partnerships, institutional engagement, and senior-level briefings.
              </p>
            </div>
            <a
              href="mailto:sales@mayaai.sa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Request Engagement
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
