import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, Building2, Trees, AlertTriangle, Car, Factory, 
  ArrowRight, Layers, Target, Users, Clock, FileText, 
  CheckCircle2, Map as MapIcon, ChevronRight, ChevronLeft, Image as ImageIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  solar: Sun,
  infrastructure: Building2,
  vegetation: Trees,
  disaster: AlertTriangle,
  mobility: Car,
  industrial: Factory
};

export default function GeoAI() {
  const { language, direction } = useLanguage();
  const geoContent = content.pages.geoai;
  const [activeTab, setActiveTab] = useState(geoContent.tabs[0].id);
  const activeContent = geoContent.tabs.find(t => t.id === activeTab) || geoContent.tabs[0];
  const ActiveIcon = iconMap[activeContent.id] || Sun;

  const readinessConfig = {
    available: {
      label: { ar: "جاهز الآن", en: "Available Now" },
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  };
  
  const readiness = readinessConfig.available;

  return (
    <div className="w-full bg-maya-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute inset-0 z-0">
          {/* Dark Map Background */}
          <div className="absolute inset-0 bg-maya-navy/90 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />
          
          {/* Topographic Lines Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20 z-10" xmlns="http://www.w3.org/2000/svg">
            <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
              <MapIcon size={14} className="text-maya-gold" />
              <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">
                {language === 'ar' ? 'قسم الذكاء الجيومكاني' : 'Geospatial Intelligence Division'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              {geoContent.hero.title[language]}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-white/80 font-light mb-8 whitespace-pre-line">
              {geoContent.hero.subtitle[language]}
            </h2>

            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              {geoContent.hero.description[language]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 px-4">
                  {language === 'ar' ? 'القدرات' : 'Capabilities'}
                </h3>
                {geoContent.tabs.map((tab) => {
                  const Icon = iconMap[tab.id] || Sun;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group",
                        direction === 'rtl' ? "text-right" : "text-left",
                        activeTab === tab.id
                          ? "bg-maya-gold text-maya-navy shadow-lg shadow-maya-gold/20"
                          : "hover:bg-white/5 text-white/60 hover:text-white"
                      )}
                    >
                      <Icon size={20} className={cn(activeTab === tab.id ? "text-maya-navy" : "text-maya-gold")} />
                      <span className="font-medium text-sm uppercase tracking-wide">{tab.label[language]}</span>
                      {activeTab === tab.id && (
                        direction === 'rtl' 
                          ? <ChevronLeft size={16} className="mr-auto" /> 
                          : <ChevronRight size={16} className="ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: direction === 'rtl' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                >
                  {/* Decorative Background */}
                  <div className={cn("absolute top-0 p-12 opacity-5 pointer-events-none", direction === 'rtl' ? 'left-0' : 'right-0')}>
                    <ActiveIcon size={300} />
                  </div>

                  {/* Readiness Badge */}
                  <div className={cn("absolute top-8 flex", direction === 'rtl' ? 'left-8' : 'right-8')}>
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded border",
                      readiness.color
                    )}>
                      {readiness.label[language]}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 text-maya-gold">
                      <ActiveIcon size={24} />
                      <span className="text-sm font-bold uppercase tracking-widest">
                        {activeContent.label[language]} {language === 'ar' ? 'ذكاء' : 'Intelligence'}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{activeContent.label[language]}</h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      
                      {/* Detects & Outputs */}
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-white/80">
                            <Target size={18} className="text-maya-gold" />
                            <h4 className="font-bold uppercase tracking-wide text-sm">
                              {language === 'ar' ? 'ما يتم رصده' : 'What It Detects'}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {activeContent.detects[language].split('،').map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-maya-gold mt-1.5" />
                                {item.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4 text-white/80">
                            <Layers size={18} className="text-maya-gold" />
                            <h4 className="font-bold uppercase tracking-wide text-sm">
                              {language === 'ar' ? 'المخرجات التقنية' : 'Technical Outputs'}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {activeContent.outputs[language].split('،').map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                                {item.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Buyers & Pilot & Sample */}
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-white/80">
                            <Users size={18} className="text-maya-gold" />
                            <h4 className="font-bold uppercase tracking-wide text-sm">
                              {language === 'ar' ? 'الجهات المستهدفة' : 'Target Stakeholders'}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {activeContent.buyers[language].split('،').map((buyer: string, i: number) => (
                              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70">
                                {buyer.trim()}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-maya-navy/50 border border-maya-gold/20 rounded-xl p-6">
                          <div className="flex items-center gap-2 text-white mb-4">
                            <Clock size={18} className="text-maya-gold" />
                            <h4 className="font-bold uppercase tracking-wide text-sm">
                              {language === 'ar' ? 'خطة البرنامج التجريبي' : 'Pilot Plan'}
                            </h4>
                          </div>
                          <p className="text-sm text-white/70">
                            {activeContent.pilot[language]}
                          </p>
                        </div>

                        {/* Sample Imagery Placeholder */}
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-white/80">
                            <ImageIcon size={18} className="text-maya-gold" />
                            <h4 className="font-bold uppercase tracking-wide text-sm">
                              {language === 'ar' ? 'نموذج المخرجات' : 'Sample Output'}
                            </h4>
                          </div>
                          <div className="relative w-full h-32 bg-black/40 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-maya-gold/30 transition-colors">
                            {/* Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                              <span className="text-white/10 font-bold text-2xl uppercase tracking-widest rotate-[-15deg] select-none">
                                {geoContent.sampleImagery.watermark}
                              </span>
                            </div>
                            {/* Grid Pattern to simulate map */}
                            <div className="absolute inset-0 opacity-20" 
                                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>
                            <span className="text-xs text-white/30 z-10">
                              {language === 'ar' ? 'صورة توضيحية' : 'Illustrative Image'}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Disclaimer Note */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-start gap-3">
                      <AlertTriangle size={16} className="text-white/30 shrink-0 mt-0.5" />
                      <p className="text-xs text-white/40 leading-relaxed">
                        {geoContent.sampleImagery.note[language]}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0e0c1d] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-6">{geoContent.cta.title[language]}</h2>
            <p className="text-white/60 text-lg mb-10">{geoContent.cta.subtitle[language]}</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              {geoContent.cta.button[language]} 
              {direction === 'rtl' ? <ArrowRight size={16} className="rotate-180" /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
