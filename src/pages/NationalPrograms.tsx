import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Lock,
  Server,
  AlertTriangle,
  ArrowRight,
  Database,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import RequestModal from '@/components/ui/RequestModal';

type ReadinessType = 'available' | 'pilot' | 'strategic';

const systemIcons: Record<string, React.ElementType> = {
  operations: Database,
  monitoring: Server,
  registry: Database,
  emergency: Shield,
  maaiq: Server,
  shadow: Shield,
};

const readinessConfig = {
  pilot: {
    label: 'Pilot Ready',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    cta: 'Request Pilot Brief',
  },
  strategic: {
    label: 'Strategic Program',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    cta: 'Request Executive Brief',
  },
};

export default function NationalPrograms() {
  const pageContent = content.pages.nationalPrograms;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState('');
  const [selectedReadiness, setSelectedReadiness] = useState<ReadinessType>('strategic');

  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  const handleRequestBrief = (systemTitle: string, readiness: string) => {
    setSelectedSystem(systemTitle);
    setSelectedReadiness((readiness as ReadinessType) || 'strategic');
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutionTitle={selectedSystem}
        readinessType={selectedReadiness}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[860px] h-[360px] bg-maya-gold/5 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-white/5 blur-[110px] rounded-full" />
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
                Sovereign Infrastructure
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {pageContent.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed mb-8 max-w-3xl">
              {pageContent.hero.subtitle}
            </p>

            <div className="bg-white/[0.04] border border-maya-gold/25 p-4 md:p-5 inline-flex items-start gap-3 max-w-3xl">
              <AlertTriangle className="text-maya-gold shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-maya-gold/90 leading-relaxed">
                {pageContent.hero.disclaimer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-display mb-4 text-white">Core Programs</h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Sovereign systems designed for governments and critical sectors that require operational
            reliability, clear governance, and enterprise-grade execution.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {pageContent.systems.map((system, idx) => {
            const readiness = readinessConfig[system.readiness as keyof typeof readinessConfig];
            const Icon = systemIcons[system.id] || Database;

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white/[0.02] border border-white/10 p-8 md:p-9 hover:border-maya-gold/30 transition-all duration-300 flex flex-col group relative overflow-hidden min-h-[320px]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 text-maya-gold flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  {readiness && (
                    <span
                      className={cn(
                        'text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border',
                        readiness.color
                      )}
                    >
                      {readiness.label}
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-snug">
                    {system.title}
                  </h3>
                  <p className="text-white/62 text-sm md:text-base leading-relaxed">
                    {system.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
                  {(system.features as string[]).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-white/70 border border-white/8 bg-white/[0.02] px-3 py-2"
                    >
                      <CheckCircle2 size={12} className="text-maya-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleRequestBrief(system.title, system.readiness)}
                  className="mt-auto w-full py-3.5 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
                  type="button"
                >
                  {readiness?.cta || 'Request Brief'}
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Governance & Sovereignty */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-maya-gold" size={22} />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                {pageContent.governance.title}
              </h2>
            </div>
            <p className="text-white/55 text-lg leading-relaxed">
              These programs are built around clear sovereignty, compliance, and operational
              integrity requirements for sensitive environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.governance.items.map((item, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center mb-5">
                  {idx === 0 ? <Database size={18} /> : idx === 1 ? <Building2 size={18} /> : <Shield size={18} />}
                </div>
                <h4 className="text-white font-bold mb-3 text-lg">{item.title}</h4>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-white/40 mb-3">For Qualified Entities</p>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">
                {pageContent.cta.title}
              </h3>
            </div>

            <button
              onClick={() => {
                setSelectedSystem(pageContent.hero.title);
                setSelectedReadiness('strategic');
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
              type="button"
            >
              {pageContent.cta.button}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
