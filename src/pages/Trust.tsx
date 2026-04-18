import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';

export default function Trust() {
  const pageContent = content.pages.trust;

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[340px] bg-maya-gold/5 blur-[130px] rounded-full" />
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
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Trust &amp; Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {pageContent.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed max-w-3xl">
              {pageContent.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
            {pageContent.complianceMatrix.title}
          </h2>
          <p className="text-white/58 text-lg leading-relaxed">
            {pageContent.complianceMatrix.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(pageContent.complianceMatrix.rows as any[]).map((fw: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.45 }}
              className="border border-white/10 bg-white/[0.02] p-7 hover:border-maya-gold/25 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-maya-gold" />
                  <span className="font-mono text-sm font-bold text-white">{fw.area}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-maya-gold/10 text-maya-gold border border-maya-gold/20 rounded">
                  Mapped
                </span>
              </div>
              <p className="text-white/58 text-sm leading-relaxed font-mono text-xs">
                NIST: {fw.nist} &nbsp;|&nbsp; SOC2: {fw.soc2} &nbsp;|&nbsp; NCA: {fw.nca}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Residency */}
      <section className="container mx-auto px-6 pb-20">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
              {pageContent.dataResidency.title}
            </h2>
            <p className="text-white/58 text-lg leading-relaxed">
              {pageContent.dataResidency.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(pageContent.dataResidency.options as any[]).map((opt: any, idx: number) => (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Database size={18} className="text-maya-gold" />
                  <h3 className="font-display font-bold text-white text-lg">{opt.label}</h3>
                </div>
                <p className="text-white/58 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="container mx-auto px-6 pb-16">
        <div className="border border-maya-gold/20 bg-maya-gold/[0.04] p-8 md:p-10 relative">
          <div className="flex items-start gap-4">
            <Lock size={22} className="text-maya-gold shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Security Contact</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                For security disclosures, vulnerability reports, and responsible disclosure inquiries, please contact our security team directly. We respond to all credible disclosures within 72 hours.
              </p>
              <a
                href="mailto:security@mayaai.net"
                className="inline-flex items-center gap-2 text-sm font-bold text-maya-gold hover:text-white transition-colors uppercase tracking-widest"
              >
                security@mayaai.net
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-white mb-3">
                Discuss compliance and security requirements
              </h3>
              <p className="text-white/55 leading-relaxed">
                Our team can address specific compliance, audit, and security questions for enterprise procurement and institutional engagement.
              </p>
            </div>
            <Link
              to="/contact#briefing-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Request Briefing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
