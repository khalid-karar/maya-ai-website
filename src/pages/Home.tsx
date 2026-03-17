import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Globe,
  Shield,
  Cpu,
  ChevronRight,
  ChevronLeft,
  Check,
  Server,
  Lock,
  MapPin,
  Activity,
  Building2,
  Briefcase,
  Radar,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import HeroVideo from '@/components/ui/HeroVideo';
import { useLanguage } from '@/context/LanguageContext';
import RequestModal from '@/components/ui/RequestModal';

type Lang = 'ar' | 'en';
type ReadinessType = 'available' | 'pilot' | 'strategic';

export default function Home() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  const homeContent = content.pages.home;
  const geoContent = content.pages.geoai;
  const solutionsContent = content.pages.solutions;

  const [activeGeoTab, setActiveGeoTab] = useState(geoContent.tabs[0].id);
  const activeGeoTabContent = geoContent.tabs.find((t) => t.id === activeGeoTab);

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

  const featuredSolutions = useMemo(() => {
    return solutionsContent.categories
      .slice(0, 2)
      .flatMap((cat) => cat.items)
      .slice(0, 4);
  }, [solutionsContent.categories]);

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

  const heroProofs = [
    { ar: 'شركة سعودية', en: 'Saudi-Based Company' },
    { ar: 'جاهزية حكومية ومؤسسية', en: 'Government & Enterprise Ready' },
    { ar: 'سحابة سيادية / داخل المنشأة / هجينة', en: 'Sovereign / On-Prem / Hybrid' },
    { ar: 'امتداد استراتيجي أمريكي', en: 'U.S. Strategic Extension' },
  ];

  return (
    <div className="w-full bg-maya-navy">
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutionTitle={selectedSolution}
        readinessType={selectedReadiness}
      />

      
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <HeroVideo
          poster="/assets/hero-poster.jpg"
          videoSrc="https://res.cloudinary.com/dzipj6lnb/video/upload/v1773751729/Loop_video_medium_quality_f1sjvq.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06040d]/90 via-[#06040d]/40 to-[#070511]/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(201,162,39,0.10),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_18%)] z-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-20 pt-24 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-maya-gold animate-pulse" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-[0.22em]'
                    : 'font-semibold tracking-normal'
                )}
              >
                {homeContent.hero.status[lang]}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.95] mb-8 max-w-5xl drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
              {homeContent.hero.headline[lang]}
            </h1>

            <p className="text-lg md:text-2xl text-white/72 max-w-3xl mb-10 leading-relaxed drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)]">
              {homeContent.hero.subhead[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to={homeContent.hero.cta.primary.path}
                className="px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                {homeContent.hero.cta.primary.label[lang]}
                {direction === 'rtl' ? (
                  <ArrowRight size={16} className="rotate-180" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </Link>

              <Link
                to="/solutions"
                className="px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-bold text-sm uppercase tracking-widest hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2"
              >
                {lang === 'ar' ? 'استكشف الحلول' : 'Explore Solutions'}
                {direction === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl">
              {heroProofs.map((proof, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm text-white/85 text-sm leading-relaxed"
                >
                  {proof[lang]}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-28 border-t border-white/10">
  <div className="container mx-auto px-6">

    <div className="max-w-3xl mb-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        {language === 'ar' ? 'نموذج التشغيل المؤسسي' : 'Institutional Operating Model'}
      </h2>

      <p className="text-white/60 text-lg">
        {language === 'ar'
          ? 'تعمل Maya AI مع الجهات الحكومية والمؤسسات الكبرى عبر مسار واضح يبدأ بالتقييم وينتهي بالنشر التشغيلي الكامل.'
          : 'Maya AI works with governments and major institutions through a structured engagement model that moves from assessment to full operational deployment.'}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Step 1 */}
      <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
        <div className="text-maya-gold mb-4">01</div>
        <h3 className="font-bold text-lg mb-3">
          {language === 'ar' ? 'التقييم المؤسسي' : 'Institutional Assessment'}
        </h3>
        <p className="text-white/60 text-sm">
          {language === 'ar'
            ? 'تحليل التحديات التشغيلية والبيانات المتاحة لتحديد نطاق البرنامج.'
            : 'Evaluate operational challenges and available data to define program scope.'}
        </p>
      </div>

      {/* Step 2 */}
      <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
        <div className="text-maya-gold mb-4">02</div>
        <h3 className="font-bold text-lg mb-3">
          {language === 'ar' ? 'برنامج تجريبي' : 'Pilot Deployment'}
        </h3>
        <p className="text-white/60 text-sm">
          {language === 'ar'
            ? 'تنفيذ تجربة محدودة لقياس الأثر التشغيلي والتحقق من جدوى الحل.'
            : 'Deploy a controlled pilot to validate operational impact and system performance.'}
        </p>
      </div>

      {/* Step 3 */}
      <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
        <div className="text-maya-gold mb-4">03</div>
        <h3 className="font-bold text-lg mb-3">
          {language === 'ar' ? 'التكامل المؤسسي' : 'Operational Integration'}
        </h3>
        <p className="text-white/60 text-sm">
          {language === 'ar'
            ? 'دمج الأنظمة مع البنية التحتية الرقمية الحالية والأنظمة المؤسسية.'
            : 'Integrate the platform with institutional systems and existing digital infrastructure.'}
        </p>
      </div>

      {/* Step 4 */}
      <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
        <div className="text-maya-gold mb-4">04</div>
        <h3 className="font-bold text-lg mb-3">
          {language === 'ar' ? 'النشر التشغيلي' : 'Operational Deployment'}
        </h3>
        <p className="text-white/60 text-sm">
          {language === 'ar'
            ? 'توسيع الحل إلى مستوى مؤسسي أو وطني مع ضوابط الحوكمة والتشغيل.'
            : 'Scale the system to institutional or national deployment with governance controls.'}
        </p>
      </div>

    </div>
  </div>
</section>        
      {/* Reference Ecosystem */}
      {homeContent.partners && (
        <section className="py-12 bg-[#0a0816] border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-6 mb-8 text-center">
            <h3
              className={cn(
                'text-sm text-white/40',
                lang === 'en' ? 'font-bold uppercase tracking-widest' : 'font-bold tracking-wide'
              )}
            >
              {homeContent.partners.title[lang]}
            </h3>
          </div>

          <div className="relative w-full flex">
            <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0a0816] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0a0816] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-16 md:gap-28 items-center min-w-max px-8"
              animate={{ x: direction === 'rtl' ? ['0%', '50%'] : ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
            >
              {[...homeContent.partners.logos, ...homeContent.partners.logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <img src={logo.src} alt={logo.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Core Capabilities */}
      <section className="py-24 bg-maya-navy relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              {homeContent.pillars.headline[lang]}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              {homeContent.pillars.subhead[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.pillars.items.map((item, idx) => {
              const Icon = item.icon === 'Shield' ? Shield : item.icon === 'Globe' ? Globe : Cpu;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors h-full flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-14 h-14 bg-maya-gold/10 rounded-lg flex items-center justify-center text-maya-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-display mb-4 group-hover:text-maya-gold transition-colors">
                    {item.title[lang]}
                  </h3>

                  <p className="text-white/65 mb-8 leading-relaxed flex-grow text-base">
                    {item.desc[lang]}
                  </p>

                  <Link
                    to={idx === 1 ? '/geoai' : '/solutions'}
                    className={cn(
                      'inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto',
                      lang === 'en' ? 'uppercase tracking-widest' : 'tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      

      {/* Governance Strip */}
      {/* Governance Strip */}
      <section 
        className="py-20 bg-[#0e0c1d] border-y border-white/5"
        aria-labelledby="governance-heading"
      >
        <div className="container mx-auto px-6">
          
          {/* Section Header - Natural Alignment */}
          <div className="max-w-3xl mb-10">
            <h2 id="governance-heading" className="text-3xl md:text-4xl font-display font-bold">
              {homeContent.governance.headline[lang]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {homeContent.governance.features.map((feature, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-5 md:p-6 flex items-center gap-4 hover:border-maya-gold/25 transition-colors rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-maya-gold/10 text-maya-gold flex items-center justify-center shrink-0">
                  <Check size={18} />
                </div>
                <h3 className="text-white/90 leading-snug font-medium text-sm md:text-base">
                  {feature.label[lang]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-24 bg-[#0e0c1d] border-y border-white/5">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl md:text-5xl font-display mb-4">
        {lang === 'ar' ? 'بنية المنصة' : 'Platform Architecture'}
      </h2>
      <p className="text-white/55 text-lg leading-relaxed">
        {lang === 'ar'
          ? 'من طبقة البيانات إلى الذكاء التشغيلي، تربط Maya AI بين المصادر، النماذج، والتطبيقات ضمن بنية موحدة قابلة للنشر.'
          : 'From data ingestion to operational intelligence, Maya AI connects sources, models, and applications through a unified deployable architecture.'}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="relative border border-white/10 bg-white/[0.02] p-6">
        <div className="text-maya-gold text-xs font-bold uppercase tracking-widest mb-4">
          {lang === 'ar' ? '01' : '01'}
        </div>
        <h3 className="text-xl font-display text-white mb-4">
          {lang === 'ar' ? 'مصادر البيانات' : 'Data Sources'}
        </h3>
        <ul className="space-y-2 text-white/60 text-sm leading-relaxed">
          <li>{lang === 'ar' ? 'صور أقمار صناعية' : 'Satellite Imagery'}</li>
          <li>{lang === 'ar' ? 'أنظمة مؤسسية' : 'Enterprise Systems'}</li>
          <li>{lang === 'ar' ? 'بيانات ميدانية' : 'Field Data'}</li>
          <li>{lang === 'ar' ? 'أجهزة استشعار وIoT' : 'Sensors & IoT'}</li>
        </ul>
      </div>

      <div className="relative border border-white/10 bg-white/[0.02] p-6">
        <div className="text-maya-gold text-xs font-bold uppercase tracking-widest mb-4">
          02
        </div>
        <h3 className="text-xl font-display text-white mb-4">
          {lang === 'ar' ? 'منصة Maya AI' : 'Maya AI Platform'}
        </h3>
        <ul className="space-y-2 text-white/60 text-sm leading-relaxed">
          <li>{lang === 'ar' ? 'نماذج ذكاء اصطناعي' : 'AI Models'}</li>
          <li>{lang === 'ar' ? 'تحليلات جيومكانية' : 'Geospatial Analytics'}</li>
          <li>{lang === 'ar' ? 'حوكمة وصلاحيات' : 'Governance & Access'}</li>
          <li>{lang === 'ar' ? 'تدفق وتشغيل العمليات' : 'Workflow Orchestration'}</li>
        </ul>
      </div>

      <div className="relative border border-white/10 bg-white/[0.02] p-6">
        <div className="text-maya-gold text-xs font-bold uppercase tracking-widest mb-4">
          03
        </div>
        <h3 className="text-xl font-display text-white mb-4">
          {lang === 'ar' ? 'الأنظمة والتطبيقات' : 'Systems & Applications'}
        </h3>
        <ul className="space-y-2 text-white/60 text-sm leading-relaxed">
          <li>Tadweer360</li>
          <li>MaaIQ</li>
          <li>{lang === 'ar' ? 'التفتيش الذكي' : 'Smart Inspection'}</li>
          <li>{lang === 'ar' ? 'عملاء المؤسسات' : 'Enterprise Agents'}</li>
        </ul>
      </div>

      <div className="relative border border-white/10 bg-white/[0.02] p-6">
        <div className="text-maya-gold text-xs font-bold uppercase tracking-widest mb-4">
          04
        </div>
        <h3 className="text-xl font-display text-white mb-4">
          {lang === 'ar' ? 'الذكاء التشغيلي' : 'Operational Intelligence'}
        </h3>
        <ul className="space-y-2 text-white/60 text-sm leading-relaxed">
          <li>{lang === 'ar' ? 'لوحات تنفيذية' : 'Executive Dashboards'}</li>
          <li>{lang === 'ar' ? 'تنبيهات ومراقبة' : 'Monitoring & Alerts'}</li>
          <li>{lang === 'ar' ? 'امتثال وتنبؤ' : 'Compliance & Forecasting'}</li>
          <li>{lang === 'ar' ? 'دعم اتخاذ القرار' : 'Decision Support'}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Featured Solutions */}
      <section className="py-24 bg-[#0e0c1d]">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              {solutionsContent.hero.title[lang]}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              {solutionsContent.hero.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSolutions.map((item, idx) => {
              const readinessKey = (item.readiness || 'available') as ReadinessType;
              const readiness = readinessConfig[readinessKey];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-8 border border-white/10 bg-maya-navy hover:border-maya-gold/30 transition-colors group relative overflow-hidden flex flex-col"
                >
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center shrink-0">
                      {idx % 2 === 0 ? <Building2 size={18} /> : <Briefcase size={18} />}
                    </div>

                    <span
                      className={cn(
                        'text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border',
                        readiness.color
                      )}
                    >
                      {readiness.label[lang]}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display text-white mb-3">{item.title[lang]}</h3>

                  <p className="text-white/62 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                    {item.desc[lang]}
                  </p>

                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex items-center gap-3 text-white/55">
                      <Building2 size={14} className="text-maya-gold shrink-0" />
                      <span>{item.buyer?.[lang]}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/55">
                      <Server size={14} className="text-maya-gold shrink-0" />
                      <span>{item.deployment?.[lang]}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCtaClick(item)}
                    className={cn(
                      'inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto',
                      lang === 'en' ? 'uppercase tracking-widest' : 'tracking-wide'
                    )}
                  >
                    {readiness.cta[lang]}
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GeoAI Showcase */}
      <section className="py-24 bg-maya-navy relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.08),transparent_18%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
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

            <h2 className="text-4xl md:text-5xl font-display mb-4">{geoContent.hero.title[lang]}</h2>
            <p className="text-white/60 text-lg leading-relaxed whitespace-pre-line">
              {geoContent.hero.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">
            <div className="space-y-2">
              {geoContent.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGeoTab(tab.id)}
                  className={cn(
                    'w-full p-4 transition-all duration-300 border text-start',
                    activeGeoTab === tab.id
                      ? 'border-maya-gold/40 bg-white/[0.05] text-white'
                      : 'border-white/10 text-white/45 hover:text-white/75 hover:bg-white/[0.02]'
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold">{tab.label[lang]}</span>
                    <ChevronRight
                      size={14}
                      className={cn(
                        'transition-transform',
                        activeGeoTab === tab.id ? 'text-maya-gold' : 'text-white/30',
                        direction === 'rtl' ? 'rotate-180' : ''
                      )}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] md:aspect-video bg-black/50 border border-white/10 overflow-hidden group">
              <div 
  className="absolute inset-0 bg-cover bg-center opacity-55 transition-all duration-700" 
  style={{ 
    backgroundImage: `url(${activeGeoTabContent?.image})` 
  }}
/>
              <div className="absolute inset-0 bg-gradient-to-t from-maya-navy via-[#0b0817]/30 to-transparent" />

              <div className="absolute top-5 right-5 z-20">
                <span
                  className={cn(
                    'text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border',
                    readinessConfig.available.color
                  )}
                >
                  {readinessConfig.available.label[lang]}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-display text-white mb-3">
                  {activeGeoTabContent?.label[lang]}
                </h3>

                <p className="text-white/80 max-w-2xl mb-6 leading-relaxed">
                  {activeGeoTabContent?.detects[lang]}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="px-4 py-3 bg-black/45 border border-white/10">
                    <div className="text-maya-gold text-xs mb-1">
                      {lang === 'ar' ? 'المخرجات' : 'Outputs'}
                    </div>
                    <div className="text-white/80 text-sm">{activeGeoTabContent?.outputs[lang]}</div>
                  </div>

                  <div className="px-4 py-3 bg-black/45 border border-white/10">
                    <div className="text-maya-gold text-xs mb-1">
                      {lang === 'ar' ? 'الجهات المناسبة' : 'Target Buyers'}
                    </div>
                    <div className="text-white/80 text-sm">{activeGeoTabContent?.buyers[lang]}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="inline-flex items-center gap-2 text-sm text-white/70">
                    <Radar size={14} className="text-maya-gold" />
                    {activeGeoTabContent?.pilot[lang]}
                  </div>

                  <Link
                    to="/geoai"
                    className={cn(
                      'inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors',
                      lang === 'en' ? 'uppercase tracking-widest' : 'tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'استكشف الذكاء الجيومكاني' : 'Explore GeoAI'}
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-[#0e0c1d]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              {homeContent.deployment.headline[lang]}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              {homeContent.deployment.subhead[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.deployment.options.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 p-8 text-center hover:border-maya-gold/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 mb-6 text-maya-gold">
                  {idx === 0 ? <Server size={22} /> : idx === 1 ? <Lock size={22} /> : <Activity size={22} />}
                </div>

                <h3 className="text-xl font-display text-white mb-3">{opt.title[lang]}</h3>
                <p className="text-white/55 text-sm md:text-base mb-5 leading-relaxed">
                  {opt.description[lang]}
                </p>

                <span className="inline-block px-2.5 py-1 bg-maya-gold/10 text-maya-gold text-[10px] uppercase tracking-widest rounded border border-maya-gold/20">
                  {opt.badge[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Presence */}
      <section className="py-20 bg-maya-navy">
        <div className="container mx-auto px-6">
          <div className="border border-white/10 p-10 md:p-12 bg-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_auto] gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-4">
                  {homeContent.global.headline[lang]}
                </h2>
                <p className="text-white/50 max-w-xl leading-relaxed">
                  {lang === 'ar'
                    ? 'هيكل تشغيلي يربط التنفيذ المحلي في المملكة بالامتداد الاستراتيجي عبر الولايات المتحدة.'
                    : 'An operating structure that connects local execution in the Kingdom with strategic extension through the United States.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {homeContent.global.locations.map((loc, idx) => (
                  <div key={idx} className="border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-center gap-2 text-maya-gold mb-2">
                      <MapPin size={16} />
                      <span className="font-bold text-sm">{loc.city}</span>
                    </div>
                    <div className="text-white/55 text-sm">{loc.role[lang]}</div>
                  </div>
                ))}
              </div>

              <div className="text-right hidden lg:block">
                <div className="text-4xl font-display text-white/18 font-bold">
                  MAYA<span className="text-white/10">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-maya-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-maya-gold/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-[#0b0816] border border-white/10 p-10 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display mb-6">
                  {homeContent.cta.headline[lang]}
                </h2>

                <p className="text-white/62 mb-8 leading-relaxed text-base md:text-lg">
                  {homeContent.cta.subhead[lang]}
                </p>

                <div className="space-y-4">
                  {homeContent.governance.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/74 text-sm">
                      <Check size={16} className="text-maya-gold shrink-0" />
                      {feat.label[lang]}
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-4">
                <h3
                  className={cn(
                    'text-maya-gold mb-4',
                    lang === 'en' ? 'text-sm font-bold uppercase tracking-widest' : 'text-sm font-bold tracking-wide'
                  )}
                >
                  {homeContent.cta.form.title[lang]}
                </h3>

                <div>
                  <input
                    type="text"
                    placeholder={lang === 'ar' ? 'الاسم' : 'Name'}
                    className="w-full bg-white/5 border border-white/10 p-3.5 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/30"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={lang === 'ar' ? 'البريد الإلكتروني للعمل' : 'Work Email'}
                    className="w-full bg-white/5 border border-white/10 p-3.5 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/30"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={lang === 'ar' ? 'الجهة / المؤسسة' : 'Organization'}
                    className="w-full bg-white/5 border border-white/10 p-3.5 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/30"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors mt-2"
                >
                  {homeContent.cta.form.submitLabel[lang]}
                </button>

                <p className="text-[11px] text-white/30 mt-4 leading-relaxed">
                  {homeContent.cta.form.disclaimer[lang]}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}