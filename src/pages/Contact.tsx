import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  Lock,
} from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type Lang = 'ar' | 'en';

export default function Contact() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  const contactPage = content.pages.contact;
  const commonContact = content.common.contact;

  const inquiryOptions = [
    { value: 'national', label: { ar: 'تنفيذ الأنظمة الوطنية', en: 'National Systems Implementation' } },
    { value: 'geoai', label: { ar: 'برنامج الذكاء الجيومكاني', en: 'GeoAI Pilot Program' } },
    { value: 'enterprise', label: { ar: 'عملاء المؤسسات', en: 'Enterprise Agents' } },
    { value: 'partnership', label: { ar: 'شراكة استراتيجية', en: 'Strategic Partnership' } },
    { value: 'other', label: { ar: 'استفسار آخر', en: 'Other Inquiry' } },
  ];

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[340px] bg-maya-gold/5 blur-[125px] rounded-full" />
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
              <Mail size={14} className="text-maya-gold" />
              <span
                className={cn(
                  'text-xs text-maya-gold',
                  lang === 'en'
                    ? 'font-mono uppercase tracking-widest'
                    : 'font-semibold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'تواصل استراتيجي' : 'Strategic Contact'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {contactPage.hero.title[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-white/68 leading-relaxed max-w-3xl mb-10">
              {contactPage.hero.subtitle[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'استجابة سرية ومهنية' : 'Confidential Engagement'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'فريق هندسة حلول' : 'Solutions Architecture Team'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                {lang === 'ar' ? 'للحكومة والمؤسسات الكبرى' : 'Government & Enterprise Focus'}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14">
          {/* Contact Form */}
          <div>
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={20} className="text-maya-gold" />
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  {lang === 'ar' ? 'طلب إحاطة أو استشارة' : 'Briefing or Consultation Request'}
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={cn(
                        'block text-white/45 mb-2',
                        lang === 'en'
                          ? 'text-xs font-bold uppercase tracking-widest'
                          : 'text-xs font-bold tracking-wide'
                      )}
                    >
                      {contactPage.form.name[lang]}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    />
                  </div>

                  <div>
                    <label
                      className={cn(
                        'block text-white/45 mb-2',
                        lang === 'en'
                          ? 'text-xs font-bold uppercase tracking-widest'
                          : 'text-xs font-bold tracking-wide'
                      )}
                    >
                      {contactPage.form.email[lang]}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder={lang === 'ar' ? 'البريد الإلكتروني للعمل' : 'Work Email'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={cn(
                        'block text-white/45 mb-2',
                        lang === 'en'
                          ? 'text-xs font-bold uppercase tracking-widest'
                          : 'text-xs font-bold tracking-wide'
                      )}
                    >
                      {contactPage.form.org[lang]}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      placeholder={lang === 'ar' ? 'الجهة / المؤسسة' : 'Organization'}
                    />
                  </div>

                  <div>
                    <label
                      className={cn(
                        'block text-white/45 mb-2',
                        lang === 'en'
                          ? 'text-xs font-bold uppercase tracking-widest'
                          : 'text-xs font-bold tracking-wide'
                      )}
                    >
                      {contactPage.form.phone[lang]}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25"
                      dir="ltr"
                      placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={cn(
                      'block text-white/45 mb-2',
                      lang === 'en'
                        ? 'text-xs font-bold uppercase tracking-widest'
                        : 'text-xs font-bold tracking-wide'
                    )}
                  >
                    {contactPage.form.type[lang]}
                  </label>

                  <select
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                  >
                    <option value="" disabled className="bg-[#0b0816] text-white/50">
                      {lang === 'ar' ? 'اختر نوع الاستفسار' : 'Select inquiry type'}
                    </option>
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0b0816] text-white">
                        {opt.label[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className={cn(
                      'block text-white/45 mb-2',
                      lang === 'en'
                        ? 'text-xs font-bold uppercase tracking-widest'
                        : 'text-xs font-bold tracking-wide'
                    )}
                  >
                    {contactPage.form.message[lang]}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors placeholder:text-white/25 resize-none"
                    placeholder={
                      lang === 'ar'
                        ? 'اشرح بإيجاز طبيعة الجهة، نطاق الاهتمام، أو متطلبات البرنامج.'
                        : 'Briefly describe your institution, area of interest, or program requirements.'
                    }
                  />
                </div>

                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-start gap-3">
                    <Lock size={16} className="text-maya-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-white/62 leading-relaxed">
                      {lang === 'ar'
                        ? 'تُعامل الطلبات الواردة بسرية مهنية، وتتم مراجعتها بما يتوافق مع طبيعة الجهة ومتطلبات الامتثال.'
                        : 'Incoming requests are handled with professional confidentiality and reviewed in line with institutional context and compliance requirements.'}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className={cn(
                      'w-full py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors flex items-center justify-center gap-2',
                      lang === 'en'
                        ? 'text-sm font-bold uppercase tracking-widest'
                        : 'text-sm font-bold tracking-wide'
                    )}
                  >
                    {contactPage.form.submit[lang]}
                    {direction === 'rtl' ? (
                      <ArrowRight size={16} className="rotate-180" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
                  </button>

                  <p className="text-[11px] text-white/30 text-center mt-4 leading-relaxed">
                    {lang === 'ar'
                      ? 'بإرسال هذا النموذج، فإنك تقر بأن بياناتك ستتم معالجتها وفقاً لسياسات الخصوصية والامتثال المعمول بها.'
                      : 'By submitting this form, you acknowledge that your data will be processed in accordance with applicable privacy and compliance policies.'}
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Operating presence */}
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-9">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-8 flex items-center gap-2">
                <Globe size={20} className="text-maya-gold" />
                {lang === 'ar' ? 'التواجد التشغيلي' : 'Operational Presence'}
              </h3>

              <div className="space-y-8">
                {/* Saudi */}
                <div className={cn('relative border-maya-gold', direction === 'rtl' ? 'pr-6 border-r' : 'pl-6 border-l')}>
                  <h4 className="font-bold text-white text-lg mb-1">{commonContact.ksa.entity[lang]}</h4>
                  <p
                    className={cn(
                      'text-maya-gold mb-4',
                      lang === 'en'
                        ? 'text-xs uppercase tracking-widest'
                        : 'text-xs tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
                  </p>

                  <div className="space-y-3 text-sm text-white/62">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 shrink-0" />
                      <p>{commonContact.ksa.address[lang]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="shrink-0" />
                      <p dir="ltr">{commonContact.ksa.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="shrink-0" />
                      <p>{commonContact.emails[0]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 size={16} className="shrink-0" />
                      <p>{lang === 'ar' ? 'الكيان التشغيلي المحلي' : 'Local Operating Entity'}</p>
                    </div>
                  </div>
                </div>

                {/* US */}
                <div className={cn('relative border-white/20', direction === 'rtl' ? 'pr-6 border-r' : 'pl-6 border-l')}>
                  <h4 className="font-bold text-white text-lg mb-1">{commonContact.usa.entity[lang]}</h4>
                  <p
                    className={cn(
                      'text-white/40 mb-4',
                      lang === 'en'
                        ? 'text-xs uppercase tracking-widest'
                        : 'text-xs tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'الولايات المتحدة الأمريكية' : 'United States of America'}
                  </p>

                  <div className="space-y-3 text-sm text-white/62">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 shrink-0" />
                      <p>{commonContact.usa.address[lang]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="shrink-0" />
                      <p dir="ltr">{commonContact.usa.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="shrink-0" />
                      <p>{commonContact.emails[1]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield size={16} className="shrink-0" />
                      <p>{lang === 'ar' ? 'امتداد استراتيجي للشركة الأم' : 'Strategic Parent-Company Extension'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-7">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-maya-gold" />
                {lang === 'ar' ? 'الدعم والعمليات' : 'Support & Operations'}
              </h4>

              <p className="text-sm text-white/55 mb-5 leading-relaxed">
                {lang === 'ar'
                  ? 'للعملاء الحاليين الذين يحتاجون إلى دعم تشغيلي أو تنسيق متعلق بالخدمة.'
                  : 'For existing clients requiring operational support or service coordination.'}
              </p>

              <a
                href={`mailto:${commonContact.emails[0]}`}
                className={cn(
                  'text-maya-gold hover:text-white transition-colors inline-flex items-center gap-2',
                  lang === 'en'
                    ? 'text-sm font-bold uppercase tracking-wide'
                    : 'text-sm font-bold tracking-wide'
                )}
              >
                {lang === 'ar' ? 'تواصل مع الدعم' : 'Contact Support'}
                {direction === 'rtl' ? (
                  <ChevronLeft size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}