import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const { language, direction } = useLanguage();
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
        'font-sans'
      )}
    >
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-maya-navy/88 backdrop-blur-xl border-white/10 py-3'
            : 'bg-[#0a0816]/50 backdrop-blur-md border-white/10 py-4'
        )}
      >
        <div className="container mx-auto px-6">
          
        <div className="flex items-center justify-between gap-6">
  <div className="flex items-center gap-10 lg:gap-14">
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
    <div className="hidden md:flex items-center">
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
                isActive(link.path) ? 'w-full' : 'w-0'
              )}
            />
          </Link>
        ))}
      </nav>
    </div>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative pt-24 md:pt-28">{children}</main>

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

            {/* US first */}
            <div>
              <h4 className="text-maya-gold mb-6 font-bold uppercase tracking-widest text-xs">
                {contactInfo.usa.entity[lang]}
              </h4>

              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.usa.address[lang]}</p>

                <div className="pt-2">
                  <p className="text-white/40 mb-1 text-xs uppercase tracking-wider">
                    Contact
                  </p>
                  <p dir="ltr" className="text-left">
                    {contactInfo.usa.phone}
                  </p>
                  <p>{contactInfo.emails[1]}</p>
                </div>
              </div>
            </div>

            {/* Saudi second */}
            <div>
              <h4 className="text-maya-gold mb-6 font-bold uppercase tracking-widest text-xs">
                {contactInfo.ksa.entity[lang]}
              </h4>

              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.ksa.address[lang]}</p>

                <div className="pt-2">
                  <p className="text-white/40 mb-1 text-xs uppercase tracking-wider">
                    Contact
                  </p>
                  <p dir="ltr" className="text-left">
                    {contactInfo.ksa.phone}
                  </p>
                  <p>{contactInfo.emails[0]}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-maya-gold mb-6 font-bold uppercase tracking-widest text-xs">
                Quick Links
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