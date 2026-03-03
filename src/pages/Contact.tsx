import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Building2, Globe, Shield, ArrowRight } from 'lucide-react';
import content from '../data/site-content.json';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Contact() {
  const { language, direction } = useLanguage();
  const contactPage = content.pages.contact;
  const commonContact = content.common.contact;

  const inquiryOptions = [
    { value: "national", label: { ar: "تنفيذ الأنظمة الوطنية", en: "National Systems Implementation" } },
    { value: "geoai", label: { ar: "برنامج GeoAI التجريبي", en: "GeoAI Pilot Program" } },
    { value: "enterprise", label: { ar: "عملاء المؤسسات", en: "Enterprise Agents" } },
    { value: "partnership", label: { ar: "شراكة استراتيجية", en: "Strategic Partnership" } },
    { value: "other", label: { ar: "استفسار آخر", en: "Other Inquiry" } }
  ];

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
            <Mail size={14} className="text-maya-gold" />
            <span className="text-xs font-mono text-maya-gold uppercase tracking-widest">
              {language === 'ar' ? 'العمليات العالمية' : 'Global Operations'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{contactPage.hero.title[language]}</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            {contactPage.hero.subtitle[language]}
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <div className="lg:w-3/5">
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-8">
                {language === 'ar' ? 'طلب موجز تنفيذي' : 'Executive Briefing Request'}
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      {contactPage.form.name[language]}
                    </label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      {contactPage.form.email[language]}
                    </label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      {contactPage.form.org[language]}
                    </label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      {contactPage.form.phone[language]}
                    </label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors" dir="ltr" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                    {contactPage.form.type[language]}
                  </label>
                  <select defaultValue="" className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors">
                    <option value="" disabled>{language === 'ar' ? 'اختر خياراً' : 'Select an option'}</option>
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label[language]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                    {contactPage.form.message[language]}
                  </label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:border-maya-gold outline-none transition-colors"></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                    {contactPage.form.submit[language]} 
                    {direction === 'rtl' ? <ArrowRight size={16} className="rotate-180" /> : <ArrowRight size={16} />}
                  </button>
                  <p className="text-[10px] text-white/30 text-center mt-4">
                    {language === 'ar' 
                      ? 'بإرسال هذا النموذج، فإنك تقر بأن بياناتك ستتم معالجتها وفقاً لسياسة خصوصية البيانات السيادية لدينا.'
                      : 'By submitting this form, you acknowledge that your data will be processed in accordance with our sovereign data privacy policy.'}
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Global Presence Sidebar */}
          <div className="lg:w-2/5 space-y-8">
            <div className="bg-maya-navy border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Globe size={20} className="text-maya-gold" /> 
                {language === 'ar' ? 'التواجد العالمي' : 'Global Presence'}
              </h3>
              
              <div className="space-y-8">
                {/* Saudi Entity */}
                <div className={cn("relative border-maya-gold", direction === 'rtl' ? "pr-6 border-r" : "pl-6 border-l")}>
                  <h4 className="font-bold text-white text-lg mb-1">{commonContact.ksa.entity[language]}</h4>
                  <p className="text-maya-gold text-xs uppercase tracking-widest mb-4">
                    {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
                  </p>
                  <div className="space-y-3 text-sm text-white/60">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 shrink-0" />
                      <p>{commonContact.ksa.address[language]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} />
                      <p dir="ltr">{commonContact.ksa.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} />
                      <p>{commonContact.emails[0]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 size={16} />
                      <p>{language === 'ar' ? 'سجل تجاري: [رقم السجل]' : 'CR: [Commercial Registration Placeholder]'}</p>
                    </div>
                  </div>
                </div>

                {/* US Entity */}
                <div className={cn("relative border-white/20", direction === 'rtl' ? "pr-6 border-r" : "pl-6 border-l")}>
                  <h4 className="font-bold text-white text-lg mb-1">{commonContact.usa.entity[language]}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                    {language === 'ar' ? 'الولايات المتحدة الأمريكية' : 'United States of America'}
                  </p>
                  <div className="space-y-3 text-sm text-white/60">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 shrink-0" />
                      <p>{commonContact.usa.address[language]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} />
                      <p dir="ltr">{commonContact.usa.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} />
                      <p>{commonContact.emails[1]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield size={16} />
                      <p>{language === 'ar' ? 'رقم الملف: [رقم الملف]' : 'File No: [File Number Placeholder]'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <h4 className="font-bold text-white mb-2">
                {language === 'ar' ? 'الدعم والعمليات' : 'Support & Operations'}
              </h4>
              <p className="text-sm text-white/50 mb-4">
                {language === 'ar' 
                  ? 'للعملاء الحاليين الذين يحتاجون إلى دعم فني أو التحقق من اتفاقية مستوى الخدمة.'
                  : 'For existing enterprise clients requiring technical support or SLA verification.'}
              </p>
              <a href={`mailto:${commonContact.emails[0]}`} className="text-maya-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors inline-flex items-center gap-2">
                {language === 'ar' ? 'تواصل مع الدعم' : 'Contact Support'} 
                {direction === 'rtl' ? <ArrowRight size={14} className="rotate-180" /> : <ArrowRight size={14} />}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
