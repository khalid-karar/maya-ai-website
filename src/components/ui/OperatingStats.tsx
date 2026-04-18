import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Solution Categories', value: '6', unit: 'domains' },
  { label: 'Deployment Models', value: '4', unit: 'options' },
  { label: 'Compliance Frameworks', value: '6+', unit: 'mapped' },
  { label: 'Operating Markets', value: '2', unit: 'US · KSA' },
  { label: 'Engagement Type', value: '100%', unit: 'enterprise' },
  { label: 'Data Control', value: 'Full', unit: 'sovereignty' },
];

export default function OperatingStats() {
  return (
    <div className="w-full bg-[#0e0c1d] border-y border-white/8 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-[#0e0c1d] px-6 py-8 text-center"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-maya-gold/70 uppercase tracking-widest mb-2">
                {stat.unit}
              </div>
              <div className="text-xs text-white/40 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
