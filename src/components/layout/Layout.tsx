import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import content from '@/data/site-content.json';

interface LayoutProps {
  children: React.ReactNode;
}

type Lang = 'ar' | 'en';

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { language, direction, toggleLanguage } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = content.nav;
  const footerContent = content.common.footer;
  const contactInfo = content.common.contact;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      dir={direction}
      className={cn(
        'min-h-screen bg-maya-navy text-white selection:bg-maya-gold selection:text-maya-navy',
        direction === 'rtl' ? 'font-arabic' : 'font-sans'
      )}
    >
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-maya-navy/88 backdrop-blur-xl border-white/10 py-3'
            : 'bg-transparent border-transparent py-4'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-6">
            {/* Brand */}
            <Link to="/" className="relative z-50 shrink-0 flex items-center">
              <img
                src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772830830/Just-Logo-No-Border_kgjs9d.png"
                alt="Maya AI"
                className={cn(
                  'w-auto transition-all duration-300 object-contain',
                  isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <nav className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={cn(
                      'relative text-sm font-medium transition-colors duration-300 hover:text-maya-gold',
                      isActive(link.path) ? 'text-maya-gold' : 'text-white/78'
                    )}
                  >
                    {link.label[lang]}
                    <span
                      className={cn(
                        'absolute -bottom-2 left-0 h-[2px] bg-maya-gold transition-all duration-300',
                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                ))}
              </nav>

              <button
                onClick={toggleLanguage}
                className={cn(
                  'border border-white/15 hover:bg-white/8 transition-colors flex items-center gap-2 rounded-md',
                  lang === 'en'
                    ? 'text-xs font-bold uppercase tracking-widest px-3 py-2'
                    : 'text-xs font-bold tracking-wide px-3 py-2'
                )}
              >
                <Globe size={14} />
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 text-white"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-maya-navy/98 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={cn(
                    'text-2xl font-display font-bold transition-colors',
                    isActive(link.path) ? 'text-maya-gold' : 'text-white hover:text-maya-gold'
                  )}
                >
                  {link.label[lang]}
                </Link>
              ))}

              <button
                onClick={toggleLanguage}
                className={cn(
                  'border border-white/15 hover:bg-white/8 transition-colors flex items-center gap-2 mx-auto mt-2 rounded-md',
                  lang === 'en'
                    ? 'text-sm font-bold uppercase tracking-widest px-6 py-3'
                    : 'text-sm font-bold tracking-wide px-6 py-3'
                )}
                type="button"
              >
                <Globe size={16} />
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0e0c1d] border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <Link to="/" className="mb-6 block">
                <img
                  src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772830830/Just-Logo-No-Border_kgjs9d.png"
                  alt="Maya AI"
                  className="h-28 md:h-32 w-auto object-contain"
                />
              </Link>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {content.pages.home.hero.subhead[lang]}
              </p>

              <div className="text-xs text-white/30">
                <p className="mb-2">{footerContent.disclaimer[lang]}</p>
              </div>
            </div>

            <div>
              <h4
                className={cn(
                  'text-maya-gold mb-6',
                  lang === 'en'
                    ? 'font-bold uppercase tracking-widest text-xs'
                    : 'font-bold tracking-wide text-xs'
                )}
              >
                {contactInfo.ksa.entity[lang]}
              </h4>

              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.ksa.address[lang]}</p>

                <div className="pt-2">
                  <p
                    className={cn(
                      'text-white/40 mb-1',
                      lang === 'en'
                        ? 'text-xs uppercase tracking-wider'
                        : 'text-xs tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'للتواصل' : 'Contact'}
                  </p>
                  <p dir="ltr" className={direction === 'rtl' ? 'text-right' : 'text-left'}>
                    {contactInfo.ksa.phone}
                  </p>
                  <p>{contactInfo.emails[0]}</p>
                </div>
              </div>
            </div>

            <div>
              <h4
                className={cn(
                  'text-maya-gold mb-6',
                  lang === 'en'
                    ? 'font-bold uppercase tracking-widest text-xs'
                    : 'font-bold tracking-wide text-xs'
                )}
              >
                {contactInfo.usa.entity[lang]}
              </h4>

              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.usa.address[lang]}</p>

                <div className="pt-2">
                  <p
                    className={cn(
                      'text-white/40 mb-1',
                      lang === 'en'
                        ? 'text-xs uppercase tracking-wider'
                        : 'text-xs tracking-wide'
                    )}
                  >
                    {lang === 'ar' ? 'للتواصل' : 'Contact'}
                  </p>
                  <p dir="ltr" className={direction === 'rtl' ? 'text-right' : 'text-left'}>
                    {contactInfo.usa.phone}
                  </p>
                  <p>{contactInfo.emails[1]}</p>
                </div>
              </div>
            </div>

            <div>
              <h4
                className={cn(
                  'text-maya-gold mb-6',
                  lang === 'en'
                    ? 'font-bold uppercase tracking-widest text-xs'
                    : 'font-bold tracking-wide text-xs'
                )}
              >
                {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>

              <ul className="space-y-3 text-sm text-white/60">
                {navLinks.slice(1).map((link) => (
                  <li key={link.id}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 gap-2">
            <p>{footerContent.rights[lang]}</p>
            <p>{footerContent.operatingEntities[lang]}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}