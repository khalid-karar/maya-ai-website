import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Server, FileText, AlertTriangle, CheckCircle2, ArrowRight, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

export default function NationalPrograms() {
  const { language, direction } = useLanguage();
  const pageContent = content.pages.nationalPrograms;
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [selectedReadiness, setSelectedReadiness] = useState<'available' | 'pilot' | 'strategic'>('strategic');

  // SEO: Noindex
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
    setSelectedReadiness(readiness as 'available' | 'pilot' | 'strategic');
    setIsModalOpen(true);
  };

  const readinessConfig = {
    pilot: {
      label: { ar: "جاهز للتجربة", en: "Pilot Ready" },
      color: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    strategic: {
      label: { ar: "برنامج استراتيجي", en: "Strategic Program" },
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    }
  };

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-24 pb-20">
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        solutionTitle={selectedSystem}
        readinessType={selectedReadiness}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
            <Shield size={14} className="text-maya-gold" />
            <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">
              {language === 'ar' ? 'البنية التحتية الرقمية' : 'Digital Infrastructure'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            {pageContent.hero.title[language]}
          </h1>
          
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {pageContent.hero.subtitle[language]}
          </p>

          {/* Disclaimer Box */}
          <div className="bg-white/5 border border-maya-gold/30 p-4 rounded-lg inline-flex items-start gap-3 max-w-2xl">
            <AlertTriangle className="text-maya-gold shrink-0 mt-1" size={20} />
            <p className="text-sm text-maya-gold/90 font-medium leading-relaxed">
              {pageContent.hero.disclaimer[language]}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Systems Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pageContent.systems.map((system, idx) => {
            const readiness = readinessConfig[system.readiness as keyof typeof readinessConfig];
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-xl hover:border-maya-gold/30 transition-all duration-300 flex flex-col group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg text-maya-gold group-hover:bg-maya-gold group-hover:text-maya-navy transition-colors">
                    <Database size={24} />
                  </div>
                  {readiness && (
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                      readiness.color
                    )}>
                      {readiness.label[language]}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {system.title[language]}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {system.desc[language]}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {system.features.map((feature: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-maya-gold/50" />
                      {feature[language]}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleRequestBrief(system.title[language], system.readiness)}
                  className="w-full py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded"
                >
                  {language === 'ar' ? 'اطلب مذكرة تنفيذية' : 'Request Executive Brief'}
                  {direction === 'rtl' ? <ArrowRight size={14} className="rotate-180" /> : <ArrowRight size={14} />}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Governance Section */}
      <section className="container mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-10">
            <Lock className="text-maya-gold" size={24} />
            <h2 className="text-2xl font-display font-bold text-white">
              {pageContent.governance.title[language]}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.governance.items.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1 h-full bg-white/10 rounded-full" />
                <div>
                  <h4 className="text-white font-bold mb-2">{item.title[language]}</h4>
                  <p className="text-white/50 text-sm">{item.desc[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
