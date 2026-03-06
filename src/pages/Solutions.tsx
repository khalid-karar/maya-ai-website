import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  Shield,
  Globe,
  Cpu,
  CheckCircle2,
  Database,
  ChevronLeft,
  ChevronRight,
  Building2,
  Radar,
  Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

type Lang = 'ar' | 'en';
type ReadinessType = 'available' | 'pilot' | 'strategic';

const categoryIcons: Record<string, React.ElementType> = {
  national: Shield,
  geoai: Globe,
  compliance: CheckCircle2,
  agents: Cpu,
};

export default function Solutions() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';
  const solutionsContent = content.pages.solutions;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('');
  const [selectedReadiness, setSelectedReadiness] = useState<ReadinessType>('available');

  const readinessConfig = {
    available: {
      label: { ar: 'جاهز الآن', en: 'Available Now' },
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      cta: { ar: 'اطلب عرضًا', en: 'Request Demo' },
    },
    pilot: {
      label: { ar: 'جاهز للتجربة', en: 'Pilot Ready' },
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      cta: { ar: 'اطلب مذكرة تجربة', en: 'Request Pilot Brief' },
    },
    strategic: {
      label: { ar: 'برنامج استراتيجي', en: 'Strategic Program' },
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      cta: { ar: 'اطلب مذكرة تنفيذية', en: 'Request Executive Brief' },
    },
  } satisfies Record<
    ReadinessType,
    {
      label: Record<Lang, string>;
      color: string;
      cta: Record<Lang, string>;
    }
  >;

  const categoryMeta = useMemo(
    () => ({
      compliance: {
        eyebrow: { ar: 'الرقابة والامتثال', en: 'Oversight & Compliance' },
        accentIcon: CheckCircle2,
      },
      agents: {
        eyebrow: { ar: 'الأتمتة المؤسسية', en: 'Enterprise Automation' },
        accentIcon: Cpu,
      },
      national: {
        eyebrow: { ar: 'الأنظمة الوطنية', en: 'National Systems' },
        accentIcon: Shield,
      },
      geoai: {
        eyebrow: { ar: 'الذكاء الجيومكاني', en: 'Geospatial Intelligence' },
        accentIcon: Globe,
      },
    }),
    []
  );

  const handleCtaClick = (solution: any) => {
    const readiness = (solution.readiness || 'available') as ReadinessType;

    if (readiness === 'available') {
      window.location.href = '/contact';
      return;
    }

    setSelectedSolution(solution.title[lang]);
    setSelectedReadiness(readiness);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutionTitle={selectedSolution}
        readinessType={selectedReadiness}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[360px] bg-maya-gold/5 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-white/5 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Database size={14} className="text-maya-gold" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'دليل الحلول' : 'Solution Architecture'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {solutionsContent.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-10">
              {solutionsContent.hero.description[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'حلول قابلة للنشر' : 'Deployable Solutions'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'امتثال وحوكمة من البداية' : 'Governance by Design'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'مرونة في النشر والسيادة' : 'Flexible Sovereign Deployment'}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="space-y-20">
          {solutionsContent.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.id] || Server;
            const AccentIcon = categoryMeta[category.id as keyof typeof categoryMeta]?.accentIcon || Server;
            const eyebrow =
              categoryMeta[category.id as keyof typeof categoryMeta]?.eyebrow || {
                ar: 'الحلول',
                en: 'Solutions',
              };

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.06 }}
                className="relative"
              >
                {/* Category header */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start mb-10">
                  <div className="lg:sticky lg:top-28">
                    <div className="w-14 h-14 bg-maya-gold/10 border border-maya-gold/20 rounded-lg flex items-center justify-center text-maya-gold mb-6">
                      <Icon size={24} />
                    </div>

                    <div
                      className={cn(
                        'text-maya-gold mb-3',
                        lang === 'en'
                          ? 'text-xs font-bold uppercase tracking-widest'
                          : 'text-xs font-bold tracking-wide'
                      )}
                    >
                      {eyebrow[lang]}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {category.label[lang]}
                    </h2>

                    <p className="text-white/55 leading-relaxed text-base md:text-lg">
                      {category.description[lang]}
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.items.map((solution, idx) => {
                      const readinessKey = (solution.readiness || 'available') as ReadinessType;
                      const readiness = readinessConfig[readinessKey];

                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="group bg-white/[0.02] border border-white/10 hover:border-maya-gold/30 p-6 md:p-7 transition-all duration-300 flex flex-col min-h-[410px] relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center shrink-0">
                              <AccentIcon size={18} />
                            </div>

                            <span
                              className={cn(
                                'text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border text-center',
                                readiness?.color || 'bg-white/5 text-white/50 border-white/10'
                              )}
                            >
                              {readiness?.label[lang]}
                            </span>
                          </div>

                          <div className="mb-5">
                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-maya-gold transition-colors mb-3 leading-snug">
                              {solution.title[lang]}
                            </h3>

                            <p className="text-white/62 text-sm md:text-base leading-relaxed">
                              {solution.desc[lang]}
                            </p>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div className="border border-white/8 bg-white/[0.02] p-4">
                              <div
                                className={cn(
                                  'text-white/35 mb-2',
                                  lang === 'en'
                                    ? 'text-[10px] font-bold uppercase tracking-widest'
                                    : 'text-[11px] font-bold tracking-wide'
                                )}
                              >
                                {lang === 'ar' ? 'الجهات المستهدفة' : 'Target Stakeholders'}
                              </div>
                              <div className="text-white/82 text-sm leading-relaxed flex items-start gap-2">
                                <Building2 size={14} className="text-maya-gold shrink-0 mt-0.5" />
                                <span>{solution.buyer[lang]}</span>
                              </div>
                            </div>

                            <div className="border border-white/8 bg-white/[0.02] p-4">
                              <div
                                className={cn(
                                  'text-white/35 mb-2',
                                  lang === 'en'
                                    ? 'text-[10px] font-bold uppercase tracking-widest'
                                    : 'text-[11px] font-bold tracking-wide'
                                )}
                              >
                                {lang === 'ar' ? 'خيارات النشر' : 'Deployment Options'}
                              </div>
                              <div className="text-white/82 text-sm leading-relaxed flex items-start gap-2">
                                {readinessKey === 'strategic' ? (
                                  <Lock size={14} className="text-maya-gold shrink-0 mt-0.5" />
                                ) : readinessKey === 'pilot' ? (
                                  <Radar size={14} className="text-maya-gold shrink-0 mt-0.5" />
                                ) : (
                                  <Server size={14} className="text-maya-gold shrink-0 mt-0.5" />
                                )}
                                <span>{solution.deployment[lang]}</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleCtaClick(solution)}
                            className={cn(
                              'mt-auto w-full py-3.5 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white transition-all duration-300',
                              lang === 'en'
                                ? 'text-xs font-bold uppercase tracking-widest'
                                : 'text-xs font-bold tracking-wide'
                            )}
                            type="button"
                          >
                            {readiness?.cta[lang]}
                            {direction === 'rtl' ? (
                              <ArrowRight size={14} className="rotate-180" />
                            ) : (
                              <ArrowRight size={14} />
                            )}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-white/40 mb-3">{solutionsContent.cta.text[lang]}</p>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">
                {lang === 'ar'
                  ? 'ناقش نطاق الحل المناسب لجهتك مع فريق هندسة الحلول.'
                  : 'Discuss the right solution scope with our Solutions Architecture team.'}
              </h3>
            </div>

            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors',
                lang === 'en'
                  ? 'text-sm font-bold uppercase tracking-widest'
                  : 'text-sm font-bold tracking-wide'
              )}
            >
              {solutionsContent.cta.link[lang]}
              {direction === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}