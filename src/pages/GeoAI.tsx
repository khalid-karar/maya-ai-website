import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Building2,
  Trees,
  AlertTriangle,
  Car,
  Factory,
  ArrowRight,
  Layers,
  Target,
  Users,
  Clock,
  ChevronRight,
  ChevronLeft,
  Image as ImageIcon,
  Map as MapIcon,
  Radar,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

const iconMap: Record<string, React.ElementType> = {
  solar: Sun,
  infrastructure: Building2,
  vegetation: Trees,
  disaster: AlertTriangle,
  mobility: Car,
  industrial: Factory,
};

export default function GeoAI() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  const geoContent = content.pages.geoai;
  const [activeTab, setActiveTab] = useState(geoContent.tabs[0].id);

  const activeContent = geoContent.tabs.find((t) => t.id === activeTab) || geoContent.tabs[0];
  const ActiveIcon = iconMap[activeContent.id] || Sun;

  const readiness = {
    label: { ar: 'جاهز الآن', en: 'Available Now' },
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  const splitArabicOrEnglishList = (text: string) =>
    text.split(/[،,]/).map((item) => item.trim()).filter(Boolean);

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0816]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-maya-navy/88 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale" />

          <svg
            className="absolute inset-0 w-full h-full opacity-15 z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern id="topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M0 120 C 25 0 60 0 120 120 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-maya-gold/5 blur-[130px] rounded-full z-10" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
              <MapIcon size={14} className="text-maya-gold" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'الذكاء الجيومكاني' : 'Geospatial Intelligence'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              {geoContent.hero.title[lang]}
            </h1>

            <h2 className="text-2xl md:text-3xl text-white/82 font-light mb-8 whitespace-pre-line leading-relaxed">
              {geoContent.hero.subtitle[lang]}
            </h2>

            <p className="text-lg md:text-xl text-white/62 max-w-3xl leading-relaxed">
              {geoContent.hero.description[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-28">
              <div className="space-y-2">
                <h3
                  className={cn(
                    'mb-6 px-1 text-white/40',
                    lang === 'en'
                      ? 'text-xs font-bold uppercase tracking-widest'
                      : 'text-xs font-bold tracking-wide'
                  )}
                >
                  {lang === 'ar' ? 'القدرات' : 'Capabilities'}
                </h3>

                {geoContent.tabs.map((tab) => {
                  const Icon = iconMap[tab.id] || Sun;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'w-full flex items-center gap-4 p-4 border transition-all duration-300 group',
                        isActive
                          ? 'border-maya-gold/35 bg-white/[0.05] text-white'
                          : 'border-white/10 hover:bg-white/[0.03] text-white/55 hover:text-white'
                      )}
                      type="button"
                    >
                      <Icon size={18} className={cn(isActive ? 'text-maya-gold' : 'text-white/45')} />

                      <span className="font-medium text-sm">{tab.label[lang]}</span>

                      {direction === 'rtl' ? (
                        <ChevronLeft
                          size={14}
                          className={cn('mr-auto', isActive ? 'text-maya-gold' : 'text-white/30')}
                        />
                      ) : (
                        <ChevronRight
                          size={14}
                          className={cn('ml-auto', isActive ? 'text-maya-gold' : 'text-white/30')}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: direction === 'rtl' ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'rtl' ? 16 : -16 }}
                  transition={{ duration: 0.26 }}
                  className="bg-white/[0.02] border border-white/10 p-8 md:p-10 lg:p-12 relative overflow-hidden"
                >
                  {/* Decorative Background */}
                  <div
                    className={cn(
                      'absolute top-0 p-10 opacity-[0.045] pointer-events-none',
                      direction === 'rtl' ? 'left-0' : 'right-0'
                    )}
                  >
                    <ActiveIcon size={280} />
                  </div>

                  {/* Top row */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-3 text-maya-gold">
                        <ActiveIcon size={22} />
                        <span
                          className={cn(
                            lang === 'en'
                              ? 'text-xs font-bold uppercase tracking-widest'
                              : 'text-xs font-bold tracking-wide'
                          )}
                        >
                          {activeContent.label[lang]}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        {activeContent.label[lang]}
                      </h2>

                      <p className="text-white/65 max-w-3xl leading-relaxed">
                        {activeContent.detects[lang]}
                      </p>
                    </div>

                    <div className="flex items-start">
                      <span
                        className={cn(
                          'text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border',
                          readiness.color
                        )}
                      >
                        {readiness.label[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Main info grid */}
                  <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
                    {/* Left column */}
                    <div className="space-y-6">
                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Target size={18} className="text-maya-gold" />
                          <h4
                            className={cn(
                              lang === 'en'
                                ? 'font-bold uppercase tracking-wide text-sm'
                                : 'font-bold tracking-wide text-sm'
                            )}
                          >
                            {lang === 'ar' ? 'ما يتم رصده' : 'What It Detects'}
                          </h4>
                        </div>

                        <ul className="space-y-3">
                          {splitArabicOrEnglishList(activeContent.detects[lang]).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/65 text-sm md:text-base leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-maya-gold mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Layers size={18} className="text-maya-gold" />
                          <h4
                            className={cn(
                              lang === 'en'
                                ? 'font-bold uppercase tracking-wide text-sm'
                                : 'font-bold tracking-wide text-sm'
                            )}
                          >
                            {lang === 'ar' ? 'المخرجات التقنية' : 'Technical Outputs'}
                          </h4>
                        </div>

                        <ul className="space-y-3">
                          {splitArabicOrEnglishList(activeContent.outputs[lang]).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/65 text-sm md:text-base leading-relaxed"
                            >
                              <FileText size={14} className="text-maya-gold mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Users size={18} className="text-maya-gold" />
                          <h4
                            className={cn(
                              lang === 'en'
                                ? 'font-bold uppercase tracking-wide text-sm'
                                : 'font-bold tracking-wide text-sm'
                            )}
                          >
                            {lang === 'ar' ? 'الجهات المستهدفة' : 'Target Stakeholders'}
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {splitArabicOrEnglishList(activeContent.buyers[lang]).map((buyer, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/78"
                            >
                              {buyer}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border border-maya-gold/20 bg-maya-navy/45 p-6">
                        <div className="flex items-center gap-2 text-white mb-4">
                          <Clock size={18} className="text-maya-gold" />
                          <h4
                            className={cn(
                              lang === 'en'
                                ? 'font-bold uppercase tracking-wide text-sm'
                                : 'font-bold tracking-wide text-sm'
                            )}
                          >
                            {lang === 'ar' ? 'خطة البرنامج التجريبي' : 'Pilot Plan'}
                          </h4>
                        </div>

                        <div className="flex items-start gap-3 text-white/74 text-sm md:text-base leading-relaxed">
                          <Radar size={15} className="text-maya-gold mt-1 shrink-0" />
                          <span>{activeContent.pilot[lang]}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <ImageIcon size={18} className="text-maya-gold" />
                          <h4
                            className={cn(
                              lang === 'en'
                                ? 'font-bold uppercase tracking-wide text-sm'
                                : 'font-bold tracking-wide text-sm'
                            )}
                          >
                            {lang === 'ar' ? 'نموذج المخرجات' : 'Sample Output'}
                          </h4>
                        </div>

                        <div className="relative w-full h-40 bg-black/35 border border-white/10 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                            <div
                              className="w-full h-full"
                              style={{
                                backgroundImage:
                                  'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                              }}
                            />
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                            <span className="text-white/10 font-bold text-2xl uppercase tracking-widest rotate-[-15deg] select-none">
                              {geoContent.sampleImagery.watermark}
                            </span>
                          </div>

                          <span className="text-xs text-white/30 z-10">
                            {lang === 'ar' ? 'صورة توضيحية' : 'Illustrative Output'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-start gap-3">
                    <AlertTriangle size={16} className="text-white/30 shrink-0 mt-0.5" />
                    <p className="text-xs text-white/42 leading-relaxed">
                      {geoContent.sampleImagery.note[lang]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0e0c1d] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <CheckCircle2 size={14} className="text-maya-gold" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'برنامج تجريبي' : 'Pilot Engagement'}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display mb-6">
              {geoContent.cta.title[lang]}
            </h2>

            <p className="text-white/60 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              {geoContent.cta.subtitle[lang]}
            </p>

            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center gap-2 px-10 py-5 bg-maya-gold text-maya-navy hover:bg-white transition-colors',
                lang === 'en'
                  ? 'font-bold text-sm uppercase tracking-widest'
                  : 'font-bold text-sm tracking-wide'
              )}
            >
              {geoContent.cta.button[lang]}
              {direction === 'rtl' ? (
                <ArrowRight size={16} className="rotate-180" />
              ) : (
                <ArrowRight size={16} />
              )}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}