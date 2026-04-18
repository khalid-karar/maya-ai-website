import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useMarket } from '@/lib/market';
import content from '@/data/site-content.json';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topStripVisible, setTopStripVisible] = useState(true);

  const location = useLocation();
  const market = useMarket();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24;
      setIsScrolled(scrolled);
      if (scrolled) setTopStripVisible(false);
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

  // Market-aware entity ordering
  const primaryEntity = market === 'sa' ? contactInfo.ksa : contactInfo.usa;
  const secondaryEntity = market === 'sa' ? contactInfo.usa : contactInfo.ksa;

  return (
    <div className="min-h-screen bg-maya-navy text-white selection:bg-maya-gold selection:text-maya-navy font-sans">

      {/* Top identity strip */}
      <AnimatePresence>
        {topStripVisible && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#06040d] border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-1.5 flex items-center justify-center gap-4">
              <span className="text-xs text-white/35 tracking-widest uppercase font-mono">
                Maya AI, Inc. (US)
              </span>
              <span className="text-white/15">•</span>
              <span className="text-xs text-white/35 tracking-widest uppercase font-mono">
                Maya AI KSA
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300 border-b',
          topStripVisible ? 'top-[30px]' : 'top-0',
          isScrolled
            ? 'bg-maya-navy/92 backdrop-blur-xl border-white/10 py-2'
            : 'bg-[#0a0816]/60 backdrop-blur-md border-white/8 py-3'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-6">

            {/* Brand + Nav */}
            <div className="flex items-center gap-10 lg:gap-12">
              <Link to="/" className="relative z-50 shrink-0 flex items-center">
                <img
                  src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772830830/Just-Logo-No-Border_kgjs9d.png"
                  alt="Maya AI"
                  className={cn(
                    'w-auto transition-all duration-300 object-contain',
                    isScrolled ? 'h-10' : 'h-12'
                  )}
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={cn(
                      'relative text-sm font-medium transition-colors duration-300 hover:text-maya-gold',
                      isActive(link.path) ? 'text-maya-gold' : 'text-white/70'
                    )}
                  >
                    {link.label}
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

            {/* Right side: CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact#briefing-request"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-maya-gold text-maya-navy font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Request Briefing
                <ChevronRight size={14} />
              </Link>

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
            <div className="flex flex-col gap-7 text-center px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={cn(
                    'text-2xl font-display font-bold transition-colors',
                    isActive(link.path) ? 'text-maya-gold' : 'text-white hover:text-maya-gold'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact#briefing-request"
                className="mt-4 px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest"
              >
                Request Briefing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative pt-[88px] md:pt-[88px]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0a0816] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">

          {/* 5-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="mb-6 block">
                <img
                  src="https://res.cloudinary.com/dzipj6lnb/image/upload/v1772830830/Just-Logo-No-Border_kgjs9d.png"
                  alt="Maya AI"
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <p className="text-white/45 text-xs leading-relaxed mb-5">
                {footerContent.positioning}
              </p>

              <div className="space-y-1.5 text-xs text-white/30">
                <p className="font-mono uppercase tracking-widest text-white/20 text-[10px] mb-2">Operating Presence</p>
                <p>Maya AI, Inc. — Delaware (US) — Virginia HQ</p>
                <p>Maya AI KSA — Riyadh — {contactInfo.ksa.cr}</p>
              </div>
            </div>

            {/* Col 2: Primary market entity (market-ordered) */}
            <div>
              <h4 className="text-maya-gold mb-5 font-bold uppercase tracking-widest text-xs">
                {primaryEntity.entity}
              </h4>
              <div className="space-y-3 text-sm text-white/55">
                <p className="text-white/35 text-xs">{primaryEntity.legalForm}</p>
                <p>{primaryEntity.address}</p>
                <div className="pt-1 space-y-1">
                  <p dir="ltr" className="text-left">{primaryEntity.phone}</p>
                  <p>{primaryEntity.email}</p>
                </div>
              </div>
            </div>

            {/* Col 3: Secondary market entity */}
            <div>
              <h4 className="text-maya-gold mb-5 font-bold uppercase tracking-widest text-xs">
                {secondaryEntity.entity}
              </h4>
              <div className="space-y-3 text-sm text-white/55">
                <p className="text-white/35 text-xs">{secondaryEntity.legalForm}</p>
                <p>{secondaryEntity.address}</p>
                <div className="pt-1 space-y-1">
                  <p dir="ltr" className="text-left">{secondaryEntity.phone}</p>
                  <p>{secondaryEntity.email}</p>
                </div>
              </div>
            </div>

            {/* Col 4: Site links */}
            <div>
              <h4 className="text-maya-gold mb-5 font-bold uppercase tracking-widest text-xs">
                Site
              </h4>
              <ul className="space-y-2.5 text-sm text-white/55">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Trust links */}
            <div>
              <h4 className="text-maya-gold mb-5 font-bold uppercase tracking-widest text-xs">
                Trust & Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-white/55">
                <li><Link to="/trust" className="hover:text-white transition-colors">Trust & Compliance</Link></li>
                <li><a href="mailto:security@mayaai.net" className="hover:text-white transition-colors">Security Contact</a></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                <li>
                  <a
                    href="/.well-known/security.txt"
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    security.txt
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Compliance strip */}
          <div className="border-t border-white/5 pt-8 mb-6">
            <div className="flex flex-wrap gap-2">
              {footerContent.complianceBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="px-3 py-1.5 border border-white/12 text-white/40 text-[10px] font-mono uppercase tracking-widest"
                >
                  {badge.label} — {badge.status}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/25 gap-2">
            <p>{footerContent.rights}</p>
            <p className="text-white/15">{footerContent.disclaimer}</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
