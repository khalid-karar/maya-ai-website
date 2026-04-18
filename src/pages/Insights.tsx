import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';

export default function Insights() {
  const pageContent = content.pages.insights;

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
              <BookOpen size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">Insights</span>
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

      {/* Placeholder content */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="border border-white/10 bg-white/[0.02] p-10 md:p-12 text-center">
            <BookOpen size={40} className="text-maya-gold/40 mx-auto mb-6" />
            <h2 className="text-xl font-display text-white mb-4">Content Coming Soon</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Maya's insights, perspectives, and technical guidance on applied AI for enterprise and government environments will be published here.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-maya-gold/30 text-maya-gold hover:bg-maya-gold hover:text-maya-navy transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Get Notified
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
