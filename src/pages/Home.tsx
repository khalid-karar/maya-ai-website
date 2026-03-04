import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Cpu, ChevronRight, ChevronLeft, Check, Server, Lock, MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import HeroVideo from '@/components/ui/HeroVideo';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

export default function Home() {
  const { language, direction } = useLanguage();
  const homeContent = content.pages.home;
  const geoContent = content.pages.geoai;
  const solutionsContent = content.pages.solutions;
  
  const [activeGeoTab, setActiveGeoTab] = useState(geoContent.tabs[0].id);
  const activeGeoTabContent = geoContent.tabs.find(t => t.id === activeGeoTab);

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
      window.location.href = '/contact';
    } else {
      setSelectedSolution(solution.title[language]);
      setSelectedReadiness(readiness);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        solutionTitle={selectedSolution}
        readinessType={selectedReadiness}
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <HeroVideo 
          poster="/assets/hero-poster.jpg"
          videoSrc="https://res.cloudinary.com/dzipj6lnb/video/upload/v1772660724/loop_high_quality_vu40cn.mp4"
        />

        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-maya-gold animate-pulse"></span>
              <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">{homeContent.hero.status[language]}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 whitespace-pre-line drop-shadow-[0_10px_35px_rgba(0,0,0,0.75)]">
              {homeContent.hero.headline[language]}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed drop-shadow-[0_6px_24px_rgba(0,0,0,0.65)]">
              {homeContent.hero.subhead[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={homeContent.hero.cta.primary.path} className="px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                {homeContent.hero.cta.primary.label[language]} 
                {direction === 'rtl' ? <ArrowRight size={16} className="transform rotate-180" /> : <ArrowRight size={16} />}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-maya-navy relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display mb-2">{homeContent.pillars.headline[language]}</h2>
              <p className="text-white/50">{homeContent.pillars.subhead[language]}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.pillars.items.map((item, idx) => {
              const Icon = item.icon === 'Shield' ? Shield : item.icon === 'Globe' ? Globe : Cpu;
              return (
                <div key={idx} className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 bg-maya-gold/10 rounded-lg flex items-center justify-center text-maya-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-display mb-4 group-hover:text-maya-gold transition-colors">{item.title[language]}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                    {item.desc[language]}
                  </p>
                  <Link to="/solutions" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-maya-gold hover:text-white transition-colors mt-auto">
                    {language === 'ar' ? 'اقرأ المزيد' : 'Learn More'} 
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions Grid (using categories from solutions page) */}
      <section className="py-24 bg-[#0e0c1d] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-4">{solutionsContent.hero.title[language]}</h2>
            <p className="text-white/50">{solutionsContent.hero.subtitle[language]}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsContent.categories.slice(0, 2).flatMap(cat => cat.items).slice(0, 4).map((item, idx) => {
              const readinessKey = item.readiness as keyof typeof readinessConfig;
              const readiness = readinessConfig[readinessKey];
              return (
                <div key={idx} className="p-8 border border-white/10 bg-maya-navy hover:border-maya-gold/30 transition-colors group relative overflow-hidden flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <ArrowRight className={cn("text-white/20 group-hover:text-maya-gold transition-colors", direction === 'rtl' ? 'rotate-180' : '')} size={20} />
                    {readiness && (
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                        readiness.color
                      )}>
                        {readiness.label[language]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-display text-white mb-3">{item.title[language]}</h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">{item.desc[language]}</p>
                  
                  <button 
                    onClick={() => handleCtaClick(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-maya-gold transition-colors mt-auto"
                  >
                    {readiness?.cta[language]}
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GeoAI Showcase */}
      <section className="py-24 bg-maya-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">GeoAI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-4">{geoContent.hero.title[language]}</h2>
            <p className="text-white/60 text-lg whitespace-pre-line">{geoContent.hero.subtitle[language]}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs Navigation */}
            <div className="lg:w-1/3 space-y-2">
              {geoContent.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGeoTab(tab.id)}
                  className={cn(
                    "w-full p-4 transition-all duration-300",
                    direction === 'rtl' ? "text-right border-r-2" : "text-left border-l-2",
                    activeGeoTab === tab.id
                      ? "border-maya-gold bg-white/5 text-white"
                      : "border-white/10 text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                  )}
                >
                  <span className="text-sm font-bold uppercase tracking-widest block mb-1">{tab.label[language]}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:w-2/3">
              <div className="relative aspect-video bg-black/50 border border-white/10 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-maya-navy via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4 z-20">
                   <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                      readinessConfig.available.color
                    )}>
                      {readinessConfig.available.label[language]}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display text-white mb-2">{activeGeoTabContent?.label[language]}</h3>
                  <p className="text-white/80 max-w-xl mb-6">{activeGeoTabContent?.detects[language]}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-3 py-1 bg-black/60 border border-maya-gold/30 rounded text-xs font-mono text-maya-gold">
                      {activeGeoTabContent?.outputs[language]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display mb-4">{homeContent.deployment.headline[language]}</h2>
            <p className="text-white/50 max-w-2xl mx-auto">{homeContent.deployment.subhead[language]}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.deployment.options.map((opt, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 text-center hover:border-maya-gold/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 text-maya-gold">
                  {idx === 0 ? <Server size={20} /> : idx === 1 ? <Lock size={20} /> : <Activity size={20} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{opt.title[language]}</h3>
                <p className="text-white/50 text-sm mb-4">{opt.description[language]}</p>
                <span className="inline-block px-2 py-1 bg-maya-gold/10 text-maya-gold text-[10px] uppercase tracking-widest rounded border border-maya-gold/20">
                  {opt.badge[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-maya-navy">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border border-white/10 p-10 rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
            <div>
              <h2 className="text-2xl font-display mb-6">{homeContent.global.headline[language]}</h2>
              <div className="flex gap-12">
                {homeContent.global.locations.map((loc, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 text-maya-gold mb-1">
                      <MapPin size={16} />
                      <span className="font-bold text-sm uppercase tracking-wider">{loc.city}</span>
                    </div>
                    <div className="text-white/40 text-xs">{loc.role[language]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-16 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="text-right">
              <div className="text-4xl font-display text-white/20 font-bold">MAYA<span className="text-white/10">AI</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-maya-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-maya-gold/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-maya-navy border border-white/10 p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maya-light-gold to-maya-gold" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display mb-6">{homeContent.cta.headline[language]}</h2>
                <p className="text-white/60 mb-8">
                  {homeContent.cta.subhead[language]}
                </p>
                <div className="space-y-4">
                  {homeContent.governance.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check size={16} className="text-maya-gold" /> {feat.label[language]}
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-maya-gold mb-4">{homeContent.cta.form.title[language]}</h3>
                <div>
                  <input 
                    type="email" 
                    placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/30"
                  />
                </div>
                <button type="button" className="w-full py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors mt-2">
                  {homeContent.cta.form.submitLabel[language]}
                </button>
                <p className="text-[10px] text-white/30 text-center mt-4">{homeContent.cta.form.disclaimer[language]}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
