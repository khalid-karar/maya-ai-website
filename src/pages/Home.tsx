import React from 'react';
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
  Briefcase,
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import { cn } from '@/lib/utils';
import HeroVideo from '@/components/ui/HeroVideo';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

export default function Home() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';

  const homeContent = content.pages.home;
  const solutionsContent = content.pages.solutions;
const geoHero = content?.pages?.geoai?.hero;
const geoTabs = content?.pages?.geoai?.tabs ?? [];

  const capabilityIcons = {
    Shield,
    Globe,
    Cpu,
  };

  const heroProofs = [
    { ar: 'Applied AI for enterprise and mission-critical environments', en: 'Applied AI for enterprise and mission-critical environments' },
    { ar: 'Operating across Saudi Arabia and the United States', en: 'Operating across Saudi Arabia and the United States' },
    { ar: 'Cloud, private cloud, on-prem, and hybrid deployment', en: 'Cloud, private cloud, on-prem, and hybrid deployment' },
    { ar: 'Built for security, control, and operational impact', en: 'Built for security, control, and operational impact' },
  ];

  const solutionHighlights = [
    {
      title: { ar: 'Enterprise Operations', en: 'Enterprise Operations' },
      desc: {
        ar: 'AI capabilities that improve execution across internal workflows, reporting, coordination, and structured business processes.',
        en: 'AI capabilities that improve execution across internal workflows, reporting, coordination, and structured business processes.',
      },
    },
    {
      title: { ar: 'Customer & Service Workflows', en: 'Customer & Service Workflows' },
      desc: {
        ar: 'Human-supervised AI support for response handling, information access, and service operations.',
        en: 'Human-supervised AI support for response handling, information access, and service operations.',
      },
    },
    {
      title: { ar: 'Compliance & Risk Operations', en: 'Compliance & Risk Operations' },
      desc: {
        ar: 'Applied intelligence for oversight, evidence handling, policy-linked processes, and environments where accountability matters.',
        en: 'Applied intelligence for oversight, evidence handling, policy-linked processes, and environments where accountability matters.',
      },
    },
    {
      title: { ar: 'Infrastructure & Field Intelligence', en: 'Infrastructure & Field Intelligence' },
      desc: {
        ar: 'Operational visibility and intelligence support for environments linked to assets, infrastructure, and distributed activity.',
        en: 'Operational visibility and intelligence support for environments linked to assets, infrastructure, and distributed activity.',
      },
    },
  ];

  return (
    <div className="w-full bg-maya-navy">
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <HeroVideo
          poster={homeContent.hero.poster}
          videoSrc="https://res.cloudinary.com/dzipj6lnb/video/upload/v1773751729/Loop_video_medium_quality_f1sjvq.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06040d]/90 via-[#06040d]/45 to-[#070511]/82 z-10 pointer-events-none" />
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
                  'font-mono uppercase tracking-[0.22em]'
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
                to="/contact"
                className="px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Start Strategic Conversation
                {direction === 'rtl' ? (
                  <ArrowRight size={16} className="rotate-180" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </Link>

              <Link
                to="/capabilities"
                className="px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-bold text-sm uppercase tracking-widest hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2"
              >
                Explore Capabilities
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

      {/* What Maya does */}
      <section className="py-20 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display mb-6">
              Applied AI for serious operations
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl">
              Maya designs and deploys intelligence systems proven across enterprise, infrastructure, and mission-critical environments. We don't build generic tools—we build operational AI that integrates into real workflows, scales with governance requirements, and delivers measurable value.
            </p>
          </div>
        </div>
      </section>

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
              const Icon =
                capabilityIcons[item.icon as keyof typeof capabilityIcons] || Cpu;

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
                    to={idx === 0 ? '/capabilities?tab=agents' : idx === 1 ? '/capabilities?tab=voice' : idx === 2 ? '/capabilities?tab=spatial' : idx === 3 ? '/capabilities?tab=knowledge' : idx === 4 ? '/capabilities?tab=platforms' : '/capabilities?tab=deployment'}
                    className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                  >
                    Learn More
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why organizations choose Maya */}
      <section
        className="py-20 bg-[#0e0c1d] border-y border-white/5"
        aria-labelledby="why-maya-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 id="why-maya-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
              {homeContent.governance.headline[lang]}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Our work is shaped around operational usefulness, secure deployment, and controlled execution.
              We focus on systems that fit real enterprise environments rather than abstract demonstrations.
            </p>
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

      {/* Solutions Preview */}
      <section className="py-24 bg-[#0e0c1d]">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              Where Maya creates value
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Maya helps organizations apply AI where it can create real operational value,
              from internal process execution to customer-facing workflows and decision support environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionHighlights.map((item, idx) => (
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

                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border bg-white/5 text-white/70 border-white/10">
                    Operational Use Case
                  </span>
                </div>

                <h3 className="text-2xl font-display text-white mb-3">{item.title[lang]}</h3>

                <p className="text-white/62 text-sm md:text-base mb-8 leading-relaxed flex-grow">
                  {item.desc[lang]}
                </p>

                <Link
                  to={idx === 0 ? '/solutions?category=enterprise-operations' : idx === 1 ? '/solutions?category=service-workflows' : idx === 2 ? '/solutions?category=compliance-risk' : '/solutions?category=enterprise-operations'}
                  className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                >
                  Explore Solutions
                  {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Capabilities Breadth */}
      <section className="py-24 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Six core capability pillars
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              From workflow automation to spatial intelligence—Maya's capabilities span the full spectrum of applied AI. Organizations combine these to build sovereign-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Execution</div>
              <h3 className="text-lg font-display text-white mb-2">AI Agents & Workflow Automation</h3>
              <p className="text-white/55 text-sm leading-relaxed">Structured automation for internal workflows, approvals, and service execution with human oversight.</p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Voice & Service</div>
              <h3 className="text-lg font-display text-white mb-2">Voice & Service Intelligence</h3>
              <p className="text-white/55 text-sm leading-relaxed">AI voice agents, call handling, service workflows, and customer interaction intelligence.</p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Visibility</div>
              <h3 className="text-lg font-display text-white mb-2">Spatial & Operational Intelligence</h3>
              <p className="text-white/55 text-sm leading-relaxed">Infrastructure monitoring, field operations, and environmental visibility through applied intelligence.</p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Knowledge</div>
              <h3 className="text-lg font-display text-white mb-2">Knowledge & Document Intelligence</h3>
              <p className="text-white/55 text-sm leading-relaxed">Document understanding, information extraction, knowledge retrieval, and content operationalization.</p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Applications</div>
              <h3 className="text-lg font-display text-white mb-2">Custom AI Platforms & Applications</h3>
              <p className="text-white/55 text-sm leading-relaxed">Purpose-built intelligence systems, dashboards, and operational platforms tailored to your environment.</p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-maya-gold/20 transition-colors">
              <div className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-3">Deployment</div>
              <h3 className="text-lg font-display text-white mb-2">Private AI Deployment</h3>
              <p className="text-white/55 text-sm leading-relaxed">Cloud, private cloud, on-prem, and hybrid deployment models aligned to your control and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spatial Intelligence */}
      <section className="py-24 bg-maya-navy relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.08),transparent_18%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Spatial & Operational Intelligence
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display mb-4">
              {geoHero?.title?.[lang] ?? 'Spatial & Operational Intelligence'}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {geoHero?.description?.[lang] ?? 'Applied intelligence for environments where assets, infrastructure, and location matter.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {geoTabs.slice(0, 3).map((tab, idx) => (
              <div
                key={tab.id}
                className="relative border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <div
                  className="h-56 bg-cover bg-center opacity-55"
                  style={{ backgroundImage: `url(${tab.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maya-navy via-[#0b0817]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display text-white mb-2">{tab.label[lang]}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    {tab.detects[lang]}
                  </p>
                  <Link
                    to={`/capabilities?tab=spatial&subtab=${tab.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors uppercase tracking-widest"
                  >
                    Learn More
                    {direction === 'rtl' ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                  </Link>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {homeContent.deployment.options.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 p-8 text-center hover:border-maya-gold/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 mb-6 text-maya-gold">
                  {idx === 0 ? (
                    <Server size={22} />
                  ) : idx === 1 ? (
                    <Shield size={22} />
                  ) : idx === 2 ? (
                    <Lock size={22} />
                  ) : (
                    <Globe size={22} />
                  )}
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

      {/* Operating Presence */}
      <section className="py-20 bg-maya-navy">
        <div className="container mx-auto px-6">
          <div className="border border-white/10 p-10 md:p-12 bg-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_auto] gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-4">
                  {homeContent.global.headline[lang]}
                </h2>
                <p className="text-white/50 max-w-xl leading-relaxed">
                  Maya serves organizations across Saudi Arabia and the United States through a unified operating model focused on applied AI delivery, secure implementation, and long-term operational value.
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

      {/* Credibility & Context */}
      <section className="py-24 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technology & Infrastructure */}
            <div>
              <h3 className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-2">
                Technology & Infrastructure
              </h3>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6">
                Built on enterprise-grade platforms
              </h2>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Maya integrates with industry-leading cloud providers, data infrastructures, and operational systems. Solutions are architected for seamless integration within existing enterprise ecosystems.
              </p>
              <div className="space-y-3 text-white/70 text-sm">
                <div>Cloud: AWS, Azure, Google Cloud</div>
                <div>Integration: REST, gRPC, webhooks, enterprise messaging</div>
                <div>Orchestration: Kubernetes, containerized deployment</div>
                <div>Data: Enterprise databases, data lakes, data warehouses</div>
              </div>
            </div>

            {/* Deployment Contexts */}
            <div>
              <h3 className="text-sm font-bold text-maya-gold uppercase tracking-widest mb-2">
                Deployment Contexts
              </h3>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6">
                Proven across serious environments
              </h2>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Maya's systems operate in mission-critical, enterprise-scale, and compliance-heavy environments where operational reliability, security, and auditability are non-negotiable.
              </p>
              <div className="space-y-3 text-white/70 text-sm">
                <div>✓ Enterprise operations and internal workflows</div>
                <div>✓ Infrastructure and field operations</div>
                <div>✓ Service delivery and customer workflows</div>
                <div>✓ Compliance, oversight, and mission-critical contexts</div>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-12 border-t border-white/10">
            <p className="text-white/35 text-xs leading-relaxed max-w-3xl">
              Maya prioritizes confidentiality in all client engagements. Specific organizational references, detailed case studies, deployment architectures, and implementation results are shared directly with appropriate confidentiality agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-maya-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-maya-gold/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-[#0b0816] border border-white/10 p-10 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                Ready to discuss sovereign AI deployment?
              </h2>

              <p className="text-white/62 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Share your operational environment, priorities, and deployment considerations. Our team will respond with strategic recommendations aligned to your context.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-maya-gold text-maya-navy hover:bg-white transition-colors font-bold text-sm uppercase tracking-widest"
              >
                Request a Private Briefing
                {direction === 'rtl' ? (
                  <ArrowRight size={18} className="rotate-180" />
                ) : (
                  <ArrowRight size={18} />
                )}
              </Link>

              <p className="text-white/35 text-xs mt-10">
                Incoming inquiries are handled with professional confidentiality and reviewed in accordance with your organization's context and deployment requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}