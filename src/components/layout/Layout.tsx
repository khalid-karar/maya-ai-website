import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import content from '@/data/site-content.json';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, direction, toggleLanguage } = useLanguage();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = content.nav;
  const footerContent = content.common.footer;
  const contactInfo = content.common.contact;

  return (
    <div 
      dir={direction}
      className={cn("min-h-screen bg-maya-navy text-white font-sans selection:bg-maya-gold selection:text-maya-navy", direction === 'rtl' ? 'font-arabic' : 'font-sans')}
    >
      
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled ? "bg-maya-navy/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="z-50 relative">
            <img src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772556017/maya_ai_logo_png_vwcqoa.png" alt="Maya AI" className="h-32 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                to={link.path} 
                className={cn(
                  "text-sm font-medium hover:text-maya-gold transition-colors relative group",
                  location.pathname === link.path ? "text-maya-gold" : "text-white/80"
                )}
              >
                {link.label[language]}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-maya-gold transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Globe size={14} />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: direction === 'rtl' ? '100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'rtl' ? '100%' : '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-maya-navy flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  to={link.path} 
                  className="text-2xl font-display font-bold text-white hover:text-maya-gold transition-colors"
                >
                  {link.label[language]}
                </Link>
              ))}
              <button 
                onClick={toggleLanguage}
                className="text-sm font-bold uppercase tracking-widest border border-white/20 px-6 py-2 rounded hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto mt-4"
              >
                <Globe size={16} />
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0c1d] border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <Link to="/" className="mb-6 block">
                <img src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772556017/maya_ai_logo_png_vwcqoa.png" alt="Maya AI" className="h-64 w-auto" />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {content.pages.home.hero.subhead[language]}
              </p>
              <div className="text-xs text-white/30">
                <p className="mb-2">{footerContent.disclaimer[language]}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-maya-gold font-bold uppercase tracking-widest text-xs mb-6">{contactInfo.ksa.entity[language]}</h4>
              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.ksa.address[language]}</p>
                <div className="pt-2">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{language === 'ar' ? 'للتواصل' : 'Contact'}</p>
                  <p dir="ltr" className={direction === 'rtl' ? 'text-right' : 'text-left'}>{contactInfo.ksa.phone}</p>
                  <p>{contactInfo.emails[0]}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-maya-gold font-bold uppercase tracking-widest text-xs mb-6">{contactInfo.usa.entity[language]}</h4>
              <div className="space-y-4 text-sm text-white/60">
                <p>{contactInfo.usa.address[language]}</p>
                <div className="pt-2">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{language === 'ar' ? 'للتواصل' : 'Contact'}</p>
                  <p dir="ltr" className={direction === 'rtl' ? 'text-right' : 'text-left'}>{contactInfo.usa.phone}</p>
                  <p>{contactInfo.emails[1]}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-maya-gold font-bold uppercase tracking-widest text-xs mb-6">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
              <ul className="space-y-3 text-sm text-white/60">
                {navLinks.slice(1).map((link) => (
                   <li key={link.id}><Link to={link.path} className="hover:text-white transition-colors">{link.label[language]}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
            <p>{footerContent.rights[language]}</p>
            <p className="mt-2 md:mt-0">{footerContent.operatingEntities[language]}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
