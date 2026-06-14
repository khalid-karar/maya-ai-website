import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Shield,
  Globe,
  Cpu,
  Briefcase,
  FileText,
  AppWindow,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';

// ─── Code particle animation ──────────────────────────────────────────────────
const CODE_CHARS = '01アイウエオ░▒▓∑∆Ωλπ∞◆◇'.split('');

function CodeParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const rafRef = useRef<number>(0);

  const spawnParticles = useCallback((x: number, y: number) => {
    for (let i = 0; i < 2; i++) {
      particlesRef.current.push({
        x,
        y,
        char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(Math.random() * 1.5 + 0.5),
        opacity: 1,
        size: Math.random() * 8 + 9,
        decay: Math.random() * 0.018 + 0.012,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter(p => p.opacity > 0);
      for (const p of particlesRef.current) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(172, 133, 48, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= p.decay;
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    // Attach to section so particles spawn even when mouse is over text
    const section = canvas.closest('section');
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      spawnParticles(e.clientX - rect.left, e.clientY - rect.top);
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, [spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
// ─────────────────────────────────────────────────────────────────────────────

const categoryIcons: Record<string, React.ElementType> = {
  'enterprise-operations': Briefcase,
  'service-workflows': Cpu,
  'compliance-risk': Shield,
  'spatial-field': Globe,
  'knowledge-intelligence': FileText,
  'platforms-custom': AppWindow,
};

export default function Solutions() {
  const solutionsContent = content.pages.solutions;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const categorySection = document.querySelector(`[data-solutions-category="${categoryParam}"]`);
      if (categorySection) {
        setTimeout(() => {
          categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#06040d]">
        {/* Texture background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale pointer-events-none"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dzipj6lnb/image/upload/v1773752774/governance-pattern_qbxdkt.jpg')", mixBlendMode: 'overlay' }}
        />
        {/* Cross-hatch grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1] pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sol-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(172,133,48,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sol-grid)" />
        </svg>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-1/4 w-[760px] h-[380px] bg-maya-gold/[0.08] blur-[140px] rounded-full" />
        </div>
        <CodeParticleCanvas />

        <div className="container mx-auto px-6 py-24 md:py-28 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Shield size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Sovereign AI Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Applied AI Solutions
              <span className="block">for Enterprise and Government</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mb-10">
              {solutionsContent.hero.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Enterprise &amp; Government Scale
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                Sovereign-Ready Deployment
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-white/80 text-sm">
                US &amp; KSA Operating Environments
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Category */}
      <div className="container mx-auto px-6">
        {(solutionsContent.categories as any[]).map((category: any, catIdx: number) => {
          const CategoryIcon = categoryIcons[category.id] || Shield;

          return (
            <section
              key={category.id}
              data-solutions-category={category.id}
              className={cn(
                'py-16 md:py-20',
                catIdx < (solutionsContent.categories as any[]).length - 1
                  ? 'border-b border-white/8'
                  : ''
              )}
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-10 md:mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-maya-gold/10 border border-maya-gold/20 flex items-center justify-center text-maya-gold">
                    <CategoryIcon size={18} />
                  </div>
                  <span className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest">
                    {category.eyebrow}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-display text-white mb-3">
                  {category.label}
                </h2>
                <p className="text-white/58 text-base md:text-lg leading-relaxed max-w-3xl">
                  {category.description}
                </p>
              </motion.div>

              {/* Tiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {(category.items as any[]).map((tile: any, tileIdx: number) => (
                  <motion.div
                    key={tileIdx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: tileIdx * 0.06, duration: 0.45 }}
                    className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/25 transition-colors flex flex-col group"
                  >
                    {/* Readiness badge + deployment */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn(
                        'text-[10px] font-bold uppercase tracking-widest px-2 py-1 border rounded',
                        tile.readiness === 'production-ready'
                          ? 'bg-maya-gold/10 text-maya-gold border-maya-gold/20'
                          : tile.readiness === 'pilot'
                          ? 'bg-white/5 text-white/60 border-white/15'
                          : 'bg-white/5 text-white/40 border-white/10'
                      )}>
                        {tile.readiness}
                      </span>
                      <span className="text-[10px] text-white/35 font-mono uppercase tracking-widest">
                        {tile.deployment}
                      </span>
                    </div>

                    {/* Title + desc */}
                    <h3 className="text-base font-display font-bold text-white mb-2 leading-snug group-hover:text-maya-gold transition-colors">
                      {tile.title}
                    </h3>
                    <p className="text-white/58 text-sm leading-relaxed mb-4 flex-grow">
                      {tile.desc}
                    </p>

                    {/* Buyer */}
                    <div className="text-[11px] text-white/40 mb-3 font-mono">
                      {tile.buyer}
                    </div>

                    {/* Sectors */}
                    {tile.sectors && (tile.sectors as string[]).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {(tile.sectors as string[]).slice(0, 3).map((sector: string, si: number) => (
                          <span
                            key={si}
                            className="px-2 py-0.5 bg-white/[0.04] border border-white/8 text-[10px] text-white/50 rounded"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <a
                      href="mailto:sales@mayaai.sa"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-maya-gold/70 hover:text-maya-gold transition-colors uppercase tracking-widest mt-auto pt-2"
                    >
                      Request Briefing
                      <ArrowRight size={12} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 pt-8 pb-8">
        <div className="border border-white/10 bg-[#0b0816] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display text-white leading-tight mb-4">
                Discuss the right solutions for your environment
              </h3>
              <p className="text-white/58 max-w-3xl leading-relaxed">
                Our team can review your operating environment, security requirements, and deployment priorities to recommend the best-fit solutions.
              </p>
            </div>

            <a
              href="mailto:sales@mayaai.sa"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Request a Private Briefing
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
