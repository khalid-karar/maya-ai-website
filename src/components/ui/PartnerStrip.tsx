import React from 'react';
import { motion } from 'motion/react';

const partners = [
  {
    name: 'Amazon Web Services',
    abbr: 'AWS',
    role: 'Cloud Infrastructure',
    tier: 'Infrastructure',
  },
  {
    name: 'Microsoft Azure',
    abbr: 'Azure',
    role: 'Cloud & Enterprise AI',
    tier: 'Infrastructure',
  },
  {
    name: 'Google Cloud',
    abbr: 'GCP',
    role: 'Cloud & AI Platform',
    tier: 'Infrastructure',
  },
  {
    name: 'NVIDIA',
    abbr: 'NVDA',
    role: 'AI Compute & Models',
    tier: 'Technology',
  },
  {
    name: 'Snowflake',
    abbr: 'SNFLK',
    role: 'Data Infrastructure',
    tier: 'Technology',
  },
  {
    name: 'Palantir Technologies',
    abbr: 'PLTR',
    role: 'Enterprise AI Platform',
    tier: 'Platform',
  },
];

export default function PartnerStrip() {
  return (
    <div className="w-full py-10 border-y border-white/8 bg-[#0a0816]">
      <div className="container mx-auto px-6">
        <div className="text-xs font-bold text-white/25 uppercase tracking-widest mb-8 text-center font-mono">
          Technology &amp; Infrastructure Partners
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="border border-white/8 bg-white/[0.02] p-4 text-center hover:border-white/15 transition-colors"
            >
              <div className="text-base font-mono font-bold text-white/50 mb-1">{partner.abbr}</div>
              <div className="text-[10px] text-white/30 leading-tight mb-1">{partner.name}</div>
              <div className="text-[9px] text-maya-gold/45 font-mono uppercase tracking-widest">
                {partner.tier}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[10px] text-white/18 mt-6 font-mono">
          Partner relationships reflect technology integrations and capability alignment. Not all partners are active in all deployment contexts.
        </p>
      </div>
    </div>
  );
}
