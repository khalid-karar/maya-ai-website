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
              <Users size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Leadership
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

      {/* Leadership Team */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
            Our Team
          </h2>
          <p className="text-white/58 text-lg leading-relaxed">
            {pageContent.placeholder}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(pageContent.leaders as any[]).map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-maya-gold/10 border border-maya-gold/20 flex items-center justify-center text-maya-gold mb-5">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{member.name}</h3>
              <div className="text-xs text-maya-gold/80 font-bold uppercase tracking-widest mb-3">{member.title}</div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>
              {member.focus && (
                <div className="flex flex-wrap gap-2">
                  {(member.focus as string[]).map((f: string, fi: number) => (
                    <span key={fi} className="px-2 py-0.5 bg-white/[0.04] border border-white/8 text-[10px] text-white/50 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisory placeholder — removed: not in JSON */}

      {/* CTA */}
      <section className="container mx-auto px-6 pb-8">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-white mb-3">
                Engage with our leadership team
              </h3>
              <p className="text-white/55 leading-relaxed">
                For strategic partnerships, institutional engagement, and senior-level briefings.
              </p>
            </div>
            <Link
              to="/contact#briefing-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Request Engagement
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
