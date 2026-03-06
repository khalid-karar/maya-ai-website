import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Lock,
  Server,
  AlertTriangle,
  ArrowRight,
  Database,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Building2,
  Radar,
} from 'lucide-react';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

type Lang = 'ar' | 'en';
type ReadinessType = 'available' | 'pilot' | 'strategic';

const systemIcons: Record<string, React.ElementType> = {
  registry: Database,
  emergency: Radar,
  maaiq: Server,
  shadow: Shield,
};

export default function NationalPrograms() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';
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

  const readinessConfig = {
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
    Exclude<ReadinessType, 'available'>,
    {
      label: Record<Lang, string>;
      color: string;
      cta: Record<Lang, string>;
    }
  >;

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
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'البنية التحتية السيادية' : 'Sovereign Infrastructure'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {pageContent.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed mb-8 max-w-3xl">
              {pageContent.hero.subtitle[lang]}
            </p>

            <div className="bg-white/[0.04] border border-maya-gold/25 p-4 md:p-5 inline-flex items-start gap-3 max-w-3xl">
              <AlertTriangle className="text-maya-gold shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-maya-gold/90 leading-relaxed">
                {pageContent.hero.disclaimer[lang]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-display mb-4 text-white">
            {lang === 'ar' ? 'الأنظمة الرئيسية' : 'Core Programs'}
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            {lang === 'ar'
              ? 'منظومات سيادية مصممة للجهات الحكومية والقطاعات الحيوية التي تتطلب موثوقية تشغيلية، حوكمة واضحة، وإمكانية تنفيذ على نطاق مؤسسي.'
              : 'Sovereign systems designed for governments and critical sectors that require operational reliability, clear governance, and enterprise-grade execution.'}
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
                className="bg-white/[0.02] border border-white/10 p-8 md:p-9 hover:border-maya-gold/30 transition-all duration-300 flex flex-col group relative overflow-hidden min-h-[360px]"
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
                      {readiness.label[lang]}
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-snug">
                    {system.title[lang]}
                  </h3>

                  <p className="text-white/62 text-sm md:text-base leading-relaxed">
                    {system.desc[lang]}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {system.features.map((feature: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/75 border border-white/8 bg-white/[0.02] p-4"
                    >
                      <CheckCircle2 size={14} className="text-maya-gold shrink-0 mt-0.5" />
                      <span>{feature[lang]}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleRequestBrief(system.title[lang], system.readiness)}
                  className={cn(
                    'mt-auto w-full py-3.5 flex items-center justify-center gap-2 bg-white/5 hover:bg-maya-gold hover:text-maya-navy border border-white/10 hover:border-transparent text-white transition-all duration-300',
                    lang === 'en'
                      ? 'text-xs font-bold uppercase tracking-widest'
                      : 'text-xs font-bold tracking-wide'
                  )}
                  type="button"
                >
                  {readiness?.cta[lang] || (lang === 'ar' ? 'اطلب مذكرة' : 'Request Brief')}
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
      </section>

      {/* Governance & Sovereignty */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-maya-gold" size={22} />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                {pageContent.governance.title[lang]}
              </h2>
            </div>

            <p className="text-white/55 text-lg leading-relaxed">
              {lang === 'ar'
                ? 'تُبنى هذه البرامج على متطلبات واضحة للسيادة، الامتثال، وسلامة التشغيل في البيئات الحساسة.'
                : 'These programs are built around clear sovereignty, compliance, and operational integrity requirements for sensitive environments.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.governance.items.map((item: any, idx: number) => (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center mb-5">
                  {idx === 0 ? <Database size={18} /> : idx === 1 ? <FileCardIcon /> : <Shield size={18} />}
                </div>

                <h4 className="text-white font-bold mb-3 text-lg">{item.title[lang]}</h4>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{item.desc[lang]}</p>
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
              <p className="text-white/40 mb-3">
                {lang === 'ar' ? 'لجهات مؤهلة' : 'For Qualified Entities'}
              </p>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">
                {lang === 'ar'
                  ? 'اطلب مذكرة تنفيذية أو ابدأ محادثة استراتيجية حول البرنامج المناسب لجهتك.'
                  : 'Request an executive brief or start a strategic conversation about the right program for your institution.'}
              </h3>
            </div>

            <button
              onClick={() => {
                setSelectedSystem(pageContent.hero.title[lang]);
                setSelectedReadiness('strategic');
                setIsModalOpen(true);
              }}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors',
                lang === 'en'
                  ? 'text-sm font-bold uppercase tracking-widest'
                  : 'text-sm font-bold tracking-wide'
              )}
              type="button"
            >
              {lang === 'ar' ? 'اطلب مذكرة تنفيذية' : 'Request Executive Brief'}
              {direction === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FileCardIcon() {
  return <Server size={18} />;
}