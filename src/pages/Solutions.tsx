import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Server, Shield, Globe, Cpu, CheckCircle2, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

const categoryIcons: Record<string, React.ElementType> = {
  national: Shield,
  geoai: Globe,
  compliance: CheckCircle2,
  agents: Cpu
};

export default function Solutions() {
  const { language, direction } = useLanguage();
  const solutionsContent = content.pages.solutions;
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string>('');
  const [selectedReadiness, setSelectedReadiness] = useState<'available' | 'pilot' | 'strategic'>('available');

  const readinessConfig = {
    available: {
      label: { ar: "جاهز الآن", en: "Available Now" },
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      cta: { ar: "اطلب عرضًا", en: "Request Demo" }
    },
    pilot: {
      label: { ar: "جاهز للتجربة خلال 90 يوم", en: "Pilot-ready (90 Days)" },
      color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      cta: { ar: "اطلب مذكرة تجربة", en: "Request Pilot Brief" }
    },
    strategic: {
      label: { ar: "برنامج استراتيجي", en: "Strategic Program" },
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      cta: { ar: "اطلب مذكرة تنفيذية", en: "Request Executive Brief" }
    }
  };

  const handleCtaClick = (solution: any) => {
    const readiness = solution.readiness as keyof typeof readinessConfig;
    
    if (readiness === 'available') {
      // For Available Now, route to contact page but maybe pre-fill context?
      // User requested "Request Demo" for Available Now.
      // We can use the modal for consistency or link to contact.
      // Given the "Gated" context for others, let's use the modal for ALL to capture leads uniformly.
      // OR stick to the user request "When Pilot Brief or Executive Brief is clicked: Open a modal..."
      // implying Available Now might behave differently.
      // However, to keep it simple and capture data, let's use the modal for all but with different titles/context if needed.
      // Actually, let's follow the instruction: "When Pilot Brief or Executive Brief is clicked: Open a modal..."
      // For "Available Now", I will link to /contact to respect the "Request Demo" flow which usually implies a meeting/demo.
      // Wait, the user said "For Available Now cards: CTA = 'Request Demo'".
      // And "When Pilot Brief or Executive Brief is clicked: Open a modal".
      // So Available Now -> /contact (or existing flow).
      // Pilot/Strategic -> Modal.
      window.location.href = '/contact';
    } else {
      setSelectedSolution(solution.title[language]);
      setSelectedReadiness(readiness);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-24 pb-20">
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        solutionTitle={selectedSolution}
        readinessType={selectedReadiness}
      />

      {/* Header */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
            <Database size={14} className="text-maya-gold" />
            <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">
              {language === 'ar' ? 'دليل الحلول' : 'Solution Catalog'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{solutionsContent.hero.title[language]}</h1>
          <p className="text-xl text-white/60 leading-relaxed">{solutionsContent.hero.description[language]}</p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-6">
        <div className="space-y-16">
          {solutionsContent.categories.map((category) => {
            const Icon = categoryIcons[category.id] || Server;
            
            return (
              <div key={category.id} className="relative">
                {/* Category Header */}
                <div className="flex items-end gap-4 mb-8 border-b border-white/10 pb-4">
                  <div className="p-3 bg-white/5 rounded-lg text-maya-gold">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white">{category.label[language]}</h2>
                    <p className="text-white/50 text-sm">{category.description[language]}</p>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((solution, idx) => {
                    const readinessKey = solution.readiness as keyof typeof readinessConfig;
                    const readiness = readinessConfig[readinessKey];
                    
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="group bg-white/[0.02] border border-white/10 hover:border-maya-gold/30 p-6 rounded-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                      >
                        {/* Readiness Badge */}
                        <div className="absolute top-4 right-4 left-4 flex justify-end">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                            readiness?.color || "bg-white/5 text-white/50 border-white/10"
                          )}>
                            {readiness?.label[language]}
                          </span>
                        </div>

                        <div className="mb-4 mt-8">
                          <h3 className="text-xl font-display font-bold text-white group-hover:text-maya-gold transition-colors mb-2">
                            {solution.title[language]}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed min-h-[40px]">
                            {solution.desc[language]}
                          </p>
                        </div>

                        <div className="mt-auto space-y-4">
                          <div className="grid grid-cols-1 gap-4 text-xs">
                            <div>
                              <span className="block text-white/30 uppercase tracking-wider mb-1">
                                {language === 'ar' ? 'الجهات المستهدفة' : 'Target Stakeholders'}
                              </span>
                              <span className="text-white/80 font-medium">{solution.buyer[language]}</span>
                            </div>
                            <div>
                              <span className="block text-white/30 uppercase tracking-wider mb-1">
                                {language === 'ar' ? 'خيارات النشر' : 'Deployment Options'}
                              </span>
                              <span className="text-white/80 font-medium">{solution.deployment[language]}</span>
                            </div>
                          </div>

                          <button 
                            onClick={() => handleCtaClick(solution)}
                            className="w-full py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded"
                          >
                            {readiness?.cta[language]} 
                            {direction === 'rtl' ? <ArrowRight size={14} className="rotate-180" /> : <ArrowRight size={14} />}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 mt-24 pt-12 border-t border-white/10 text-center">
        <p className="text-white/40 mb-6">{solutionsContent.cta.text[language]}</p>
        <Link to="/contact" className="text-maya-gold hover:text-white font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 transition-colors">
          {solutionsContent.cta.link[language]} 
          {direction === 'rtl' ? <ArrowRight size={16} className="rotate-180" /> : <ArrowRight size={16} />}
        </Link>
      </section>
    </div>
  );
}
