import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Globe,
  Shield,
  Cpu,
  ChevronRight,
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

export default function Home() {
  const homeContent = content.pages.home;
  const solutionsContent = content.pages.solutions;

  const capabilityIcons = {
    Shield,
    Globe,
    Cpu,
  };

  const heroProofs = [
    'Applied AI for enterprise and mission-critical environments',
    'Operating across Saudi Arabia and the United States',
    'Cloud, private cloud, on-prem, and hybrid deployment',
    'Built for security, control, and operational impact',
  ];

  const solutionHighlights = [
    {
      title: 'Enterprise Operations',
      desc: 'AI capabilities that improve execution across internal workflows, reporting, coordination, and structured business processes.',
    },
    {
      title: 'Customer & Service Workflows',
      desc: 'Human-supervised AI support for response handling, information access, and service operations.',
    },
    {
      title: 'Compliance & Risk Operations',
      desc: 'Applied intelligence for oversight, evidence handling, policy-linked processes, and environments where accountability matters.',
    },
    {
      title: 'Infrastructure & Field Intelligence',
      desc: 'Operational visibility and intelligence support for environments linked to assets, infrastructure, and distributed activity.',
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
                className="text-xs text-maya-gold font-mono uppercase tracking-[0.22em]"
              >
                {homeContent.hero.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.95] mb-8 max-w-5xl drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
              {homeContent.hero.headline}
            </h1>

            <p className="text-lg md:text-2xl text-white/72 max-w-3xl mb-10 leading-relaxed drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)]">
              {homeContent.hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Start Strategic Conversation
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/capabilities"
                className="px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-bold text-sm uppercase tracking-widest hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2"
              >
                Explore Capabilities
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl">
              {heroProofs.map((proof, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm text-white/85 text-sm leading-relaxed"
                >
                  {proof}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Maya does */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-gradient-to-b from-maya-navy via-maya-navy to-[#0e0c1d]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display mb-8 leading-tight">
                Applied AI for serious operations
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                Maya designs and deploys intelligence systems proven across enterprise, infrastructure, and mission-critical environments. We don't build generic tools—we build operational AI that integrates into real workflows, scales with governance requirements, and delivers measurable value.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl pt-4">
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Real Integration</div>
                  <p className="text-white/65 text-sm">Operational AI, not theoretical</p>
                </div>
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Enterprise Scale</div>
                  <p className="text-white/65 text-sm">Governance and control built-in</p>
                </div>
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Measurable Impact</div>
                  <p className="text-white/65 text-sm">Proven value delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-maya-navy relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              {homeContent.pillars.headline}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              {homeContent.pillars.subhead}
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
                    {item.title}
                  </h3>

                  <p className="text-white/65 mb-8 leading-relaxed flex-grow text-base">
                    {item.desc}
                  </p>

                  <Link
                    to={idx === 0 ? '/capabilities?tab=agents' : idx === 1 ? '/capabilities?tab=voice' : idx === 2 ? '/capabilities?tab=spatial' : idx === 3 ? '/capabilities?tab=knowledge' : idx === 4 ? '/capabilities?tab=platforms' : '/capabilities?tab=deployment'}
                    className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                  >
                    Learn More
                    <ChevronRight size={12} />
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
              {homeContent.governance.headline}
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
                  {feature.label}
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

                <h3 className="text-2xl font-display text-white mb-3">{item.title}</h3>

                <p className="text-white/62 text-sm md:text-base mb-8 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <Link
                  to={idx === 0 ? '/solutions?category=enterprise-operations' : idx === 1 ? '/solutions?category=service-workflows' : idx === 2 ? '/solutions?category=compliance-risk' : '/solutions?category=enterprise-operations'}
                  className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                >
                  Explore Solutions
                  <ChevronRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Capabilities Breadth */}
      <section className="py-28 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display mb-4">
                Six core capability pillars
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                From workflow automation to spatial intelligence—Maya's capabilities span the full spectrum of applied AI. Organizations combine these to build sovereign-ready solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Execution - Featured (larger) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="lg:col-span-1 border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 hover:border-maya-gold/30 transition-all group relative lg:row-span-1"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-bold text-maya-gold/90 uppercase tracking-widest mb-3">Core Execution</div>
              <h3 className="text-xl font-display text-white mb-3 leading-tight">AI Agents & Workflow Automation</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">Structured automation for internal workflows, approvals, and service execution with human oversight and control.</p>
            </motion.div>

            {/* Voice - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-1 border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 hover:border-maya-gold/30 transition-all group relative"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-bold text-maya-gold/90 uppercase tracking-widest mb-3">Voice & Service</div>
              <h3 className="text-xl font-display text-white mb-3 leading-tight">Voice & Service Intelligence</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">AI voice agents, call handling, service workflows, and customer interaction intelligence systems.</p>
            </motion.div>

            {/* Spatial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-1 border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 hover:border-maya-gold/30 transition-all group relative"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-bold text-maya-gold/90 uppercase tracking-widest mb-3">Spatial Visibility</div>
              <h3 className="text-xl font-display text-white mb-3 leading-tight">Spatial & Operational Intelligence</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">Infrastructure monitoring, field operations, and environmental visibility through applied intelligence.</p>
            </motion.div>

            {/* Knowledge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="md:col-span-1 lg:col-span-1 border border-white/10 bg-white/[0.03] p-7 hover:border-maya-gold/20 transition-all group"
            >
              <div className="text-xs font-bold text-maya-gold/70 uppercase tracking-widest mb-3">Knowledge Systems</div>
              <h3 className="text-lg font-display text-white mb-2 leading-tight">Knowledge & Document Intelligence</h3>
              <p className="text-white/55 text-sm leading-relaxed">Document understanding, information extraction, knowledge retrieval, and content operationalization.</p>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="md:col-span-1 lg:col-span-1 border border-white/10 bg-white/[0.03] p-7 hover:border-maya-gold/20 transition-all group"
            >
              <div className="text-xs font-bold text-maya-gold/70 uppercase tracking-widest mb-3">Custom Platforms</div>
              <h3 className="text-lg font-display text-white mb-2 leading-tight">Custom AI Platforms & Applications</h3>
              <p className="text-white/55 text-sm leading-relaxed">Purpose-built intelligence systems, dashboards, and operational platforms tailored to your environment.</p>
            </motion.div>

            {/* Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-1 lg:col-span-1 border border-white/10 bg-white/[0.03] p-7 hover:border-maya-gold/20 transition-all group"
            >
              <div className="text-xs font-bold text-maya-gold/70 uppercase tracking-widest mb-3">Deployment Options</div>
              <h3 className="text-lg font-display text-white mb-2 leading-tight">Private AI Deployment</h3>
              <p className="text-white/55 text-sm leading-relaxed">Cloud, private cloud, on-prem, and hybrid deployment models aligned to your control requirements.</p>
            </motion.div>
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
              Spatial &amp; Operational Intelligence
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Applied intelligence for environments where assets, infrastructure, and location matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'monitoring', label: 'Infrastructure Monitoring', detects: 'Asset-linked operational awareness for critical infrastructure, utilities, and distributed field environments.' },
              { id: 'field', label: 'Field Operations', detects: 'AI-assisted coordination and visibility for teams and assets operating in physically distributed or high-complexity environments.' },
              { id: 'environmental', label: 'Environmental Intelligence', detects: 'Integrated spatial analysis for environmental monitoring, land use, and operational territory awareness.' },
            ].map((tab) => (
              <div
                key={tab.id}
                className="border border-white/10 bg-white/[0.02] p-8 hover:border-maya-gold/25 transition-colors"
              >
                <h3 className="text-xl font-display text-white mb-3">{tab.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{tab.detects}</p>
                <Link
                  to={`/geoai`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors uppercase tracking-widest"
                >
                  Learn More
                  <ChevronRight size={12} />
                </Link>
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
              Flexible, sovereign deployment
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Every deployment is scoped, structured, and sized for the operational and security requirements of your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {([
              { title: 'Cloud', description: 'Hosted on enterprise cloud infrastructure with full encryption and operational isolation.', badge: 'Scalable' },
              { title: 'Private Cloud', description: 'Dedicated tenant environments on approved infrastructure — stronger control without on-prem complexity.', badge: 'Controlled' },
              { title: 'On-Premises', description: 'For highly controlled environments requiring in-facility data handling and network isolation.', badge: 'High Security' },
              { title: 'Hybrid', description: 'Split workloads across deployment boundaries by sensitivity, combining flexibility with data governance.', badge: 'Flexible' },
            ] as Array<{title:string;description:string;badge:string}>).map((opt, idx) => (
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

                <h3 className="text-xl font-display text-white mb-3">{opt.title}</h3>
                <p className="text-white/55 text-sm md:text-base mb-5 leading-relaxed">
                  {opt.description}
                </p>

                <span className="inline-block px-2.5 py-1 bg-maya-gold/10 text-maya-gold text-[10px] uppercase tracking-widest rounded border border-maya-gold/20">
                  {opt.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Presence */}
      <section className="py-28 bg-maya-navy border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-12 md:p-14 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maya-gold/30 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_auto] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-4">Global Operations</div>
                <h2 className="text-2xl md:text-3xl font-display mb-6">
                  Operating across two markets, one standard
                </h2>
                <p className="text-white/60 max-w-2xl leading-relaxed text-base">
                  Maya serves organizations across Saudi Arabia and the United States through a unified operating model focused on applied AI delivery, secure implementation, and long-term operational value. Our teams operate across both regions with unified standards and shared operational excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {([
                  { city: 'San Francisco, CA', role: 'Global headquarters — corporate, product, and technology leadership.' },
                  { city: 'Riyadh, KSA', role: 'In-Kingdom operations — delivery, government, and enterprise engagement.' },
                ] as Array<{city:string;role:string}>).map((loc, idx) => (
                  <div key={idx} className="border border-white/15 bg-white/[0.04] p-6 hover:border-maya-gold/25 transition-colors">
                    <div className="flex items-center gap-3 text-maya-gold mb-3">
                      <MapPin size={18} className="shrink-0" />
                      <span className="font-bold text-base">{loc.city}</span>
                    </div>
                    <div className="text-white/65 text-sm leading-relaxed">{loc.role}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-right hidden lg:block"
              >
                <div className="text-5xl font-display text-white/12 font-bold leading-none">
                  MAYA<span className="text-white/6 text-4xl">AI</span>
                </div>
                <div className="text-xs text-white/20 mt-3 uppercase tracking-widest font-mono">Operating Model</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility & Context */}
      <section className="py-28 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Technology & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8"
            >
              <div className="text-xs font-bold text-maya-gold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Cpu size={14} />
                Technology & Infrastructure
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6">
                Built on enterprise-grade platforms
              </h2>
              <p className="text-white/60 text-base mb-10 leading-relaxed">
                Maya integrates with industry-leading cloud providers, data infrastructures, and operational systems. Solutions are architected for seamless integration within existing enterprise ecosystems.
              </p>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 mt-1">▪</span>
                  <span><strong className="text-white/80">Cloud:</strong> AWS, Azure, Google Cloud</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 mt-1">▪</span>
                  <span><strong className="text-white/80">Integration:</strong> REST, gRPC, webhooks, enterprise messaging</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 mt-1">▪</span>
                  <span><strong className="text-white/80">Orchestration:</strong> Kubernetes, containerized deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 mt-1">▪</span>
                  <span><strong className="text-white/80">Data:</strong> Enterprise databases, data lakes, data warehouses</span>
                </div>
              </div>
            </motion.div>

            {/* Deployment Contexts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8"
            >
              <div className="text-xs font-bold text-maya-gold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Shield size={14} />
                Deployment Contexts
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6">
                Proven across serious environments
              </h2>
              <p className="text-white/60 text-base mb-10 leading-relaxed">
                Maya's systems operate in mission-critical, enterprise-scale, and compliance-heavy environments where operational reliability, security, and auditability are non-negotiable.
              </p>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 text-lg leading-none">✓</span>
                  <span>Enterprise operations and internal workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 text-lg leading-none">✓</span>
                  <span>Infrastructure and field operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 text-lg leading-none">✓</span>
                  <span>Service delivery and customer workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-maya-gold/60 text-lg leading-none">✓</span>
                  <span>Compliance, oversight, and mission-critical contexts</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 pt-14 border-t border-white/10"
          >
            <p className="text-white/40 text-xs leading-relaxed max-w-3xl">
              Maya prioritizes confidentiality in all client engagements. Specific organizational references, detailed case studies, deployment architectures, and implementation results are shared directly with appropriate confidentiality agreements.
            </p>
          </motion.div>
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
                to="/contact#briefing-request"
                className="inline-flex items-center gap-3 px-10 py-5 bg-maya-gold text-maya-navy hover:bg-white transition-colors font-bold text-sm uppercase tracking-widest"
              >
                Request a Private Briefing
                <ArrowRight size={18} />
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