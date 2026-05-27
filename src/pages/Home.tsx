import { Helmet } from 'react-helmet-async';
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
  Building2,
  Bot,
  Mic,
  BookOpen,
  Layers,
  Headphones,
  ShieldCheck,
  Network,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/site-content.json';
import HeroVideo from '@/components/ui/HeroVideo';
import EngagementMarquee from '@/components/ui/EngagementMarquee';
import BriefingForm from '@/components/ui/BriefingForm';

export default function Home() {
  const homeContent = content.pages.home;

  const capabilityIcons = {
    Shield,
    Globe,
    Cpu,
    Bot,
    Mic,
    BookOpen,
    Layers,
  };

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
      <Helmet>
        <title>Maya AI | Applied AI for Enterprise &amp; Government Operations</title>
        <meta name="description" content="Maya AI designs and deploys operational AI systems for enterprise and government — workflow automation, voice intelligence, spatial intelligence, and sovereign deployment across the United States and Saudi Arabia." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mayaai.sa/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maya AI | Applied AI for Enterprise & Government Operations" />
        <meta property="og:description" content="Operational AI systems for enterprise and government — built for the United States and Kingdom of Saudi Arabia." />
        <meta property="og:url" content="https://mayaai.sa/" />
        <meta property="og:image" content="https://mayaai.sa/og-image.png" />
        <meta property="og:site_name" content="Maya AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maya AI | Applied AI for Enterprise & Government" />
        <meta name="twitter:description" content="Operational AI systems for enterprise and government across the US and Saudi Arabia." />
        <meta name="twitter:image" content="https://mayaai.sa/og-image.png" />

        {/* JSON-LD Organization schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Maya AI",
          "legalName": "Maya AI, LLC",
          "url": "https://mayaai.sa",
          "description": "Applied AI systems for enterprise and government operations across the United States and Saudi Arabia.",
          "areaServed": ["United States", "Saudi Arabia"],
          "contactPoint": [
            { "@type": "ContactPoint", "telephone": "+1-202-802-1976", "contactType": "sales", "areaServed": "US", "email": "info@mayaai.net" },
            { "@type": "ContactPoint", "telephone": "+966-50-477-9551", "contactType": "sales", "areaServed": "SA", "email": "info@mayaai.sa" }
          ],
          "sameAs": ["https://mayaai.net", "https://mayaai.sa"]
        })}</script>
      </Helmet>

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

            <p className="text-lg md:text-2xl text-white/85 max-w-3xl mb-10 leading-relaxed drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)]">
              {homeContent.hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Request a Private Briefing
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

            <div className="flex flex-wrap gap-3">
              {['6 Capability Domains', '2-Market Operations', '5 Compliance Frameworks'].map((chip) => (
                <span
                  key={chip}
                  className="border border-white/15 rounded-sm px-3 py-1.5 text-xs font-semibold tracking-widest text-white/70 inline-flex"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Maya does */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0e0c1d]">
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
              <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl">
                Maya designs and deploys intelligence systems proven across enterprise, infrastructure, and mission-critical environments.
              </p>
              <blockquote className="border-l-2 border-maya-gold pl-6 my-8">
                <p className="text-xl italic text-white/90 leading-relaxed">
                  We don't build generic tools — we build operational AI
                </p>
              </blockquote>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl">
                that integrates into real workflows, scales with governance requirements, and delivers measurable value.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl pt-4">
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Real Integration</div>
                  <p className="text-white/85 text-sm">Operational AI, not theoretical</p>
                </div>
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Enterprise Scale</div>
                  <p className="text-white/85 text-sm">Governance and control built-in</p>
                </div>
                <div className="pl-4 border-l border-maya-gold/40">
                  <div className="text-xs font-bold text-maya-gold/80 uppercase tracking-widest mb-2">Measurable Impact</div>
                  <p className="text-white/85 text-sm">Proven value delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement credibility strip */}
      <EngagementMarquee />

      {/* Core Capabilities */}
      <section className="py-24 bg-maya-navy relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              {homeContent.pillars.headline}
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
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

                  <p className="text-white/85 mb-8 leading-relaxed flex-grow text-base">
                    {item.desc}
                  </p>

                  <Link
                    to={idx === 0 ? '/capabilities?tab=agents' : idx === 1 ? '/capabilities?tab=voice' : idx === 2 ? '/capabilities?tab=spatial' : idx === 3 ? '/capabilities?tab=knowledge' : idx === 4 ? '/capabilities?tab=platforms' : '/capabilities?tab=deployment'}
                    className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                  >
                    {idx === 0 ? 'Explore Agents & Automation' : idx === 1 ? 'Explore Voice Intelligence' : idx === 2 ? 'Explore Spatial Intelligence' : idx === 3 ? 'Explore Knowledge Systems' : idx === 4 ? 'Explore Private Deployment' : 'Explore Custom Platforms'} →
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
            <p className="text-white/85 text-lg leading-relaxed">
              Our work is shaped around operational usefulness, secure deployment, and controlled execution.
              We focus on systems that fit real enterprise environments rather than abstract demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {homeContent.governance.features.map((feature, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-white/[0.02] p-6 flex flex-col hover:border-maya-gold/25 transition-colors rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-maya-gold/10 text-maya-gold flex items-center justify-center mb-4 shrink-0">
                  <Check size={18} />
                </div>
                <h3 className="text-white/90 font-semibold text-base mb-2 leading-snug">
                  {feature.label}
                </h3>
                <p className="text-sm text-white/85 mt-1 leading-relaxed">
                  {(feature as typeof feature & { desc?: string }).desc}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance badges */}
          <div className="flex flex-wrap gap-3 mt-10 justify-center">
            {[
              { label: 'NIST 800-53', status: 'Mapped', gold: true },
              { label: 'SOC2 Type II', status: 'In Progress', gold: false },
              { label: 'ISO 27001', status: 'Planned', gold: false },
              { label: 'PDPL', status: 'Aligned', gold: true },
              { label: 'NCA ECC', status: 'Mapped', gold: true },
              { label: 'SDAIA Guidance', status: 'Applied', gold: true },
            ].map((b) => (
              <span
                key={b.label}
                className={`text-xs font-semibold tracking-widest px-4 py-2 rounded-sm ${b.gold ? 'border border-maya-gold/50 text-maya-gold/80' : 'border border-white/20 text-white/50'}`}
              >
                {b.label} &nbsp;·&nbsp; {b.status}
              </span>
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
            <p className="text-white/85 text-lg leading-relaxed">
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
                <div className="mb-5">
                  <div className="w-11 h-11 rounded-full bg-white/5 text-maya-gold flex items-center justify-center">
                    {idx === 0 ? <Building2 size={28} className="text-maya-gold" /> : idx === 1 ? <Headphones size={28} className="text-maya-gold" /> : idx === 2 ? <ShieldCheck size={28} className="text-maya-gold" /> : <Network size={28} className="text-maya-gold" />}
                  </div>
                </div>

                <h3 className="text-2xl font-display text-white mb-3">{item.title}</h3>

                <p className="text-white/85 text-sm md:text-base mb-8 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <Link
                  to={idx === 0 ? '/solutions?category=enterprise-operations' : idx === 1 ? '/solutions?category=service-workflows' : idx === 2 ? '/solutions?category=compliance-risk' : '/solutions?category=infrastructure-field'}
                  className="inline-flex items-center gap-2 text-xs font-bold text-maya-gold hover:text-white transition-colors mt-auto uppercase tracking-widest"
                >
                  {idx === 0 ? 'Explore Enterprise Solutions' : idx === 1 ? 'Explore Service Solutions' : idx === 2 ? 'Explore Compliance Solutions' : 'Explore Infrastructure Solutions'} →
                </Link>
              </motion.div>
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
            <p className="text-white/85 text-lg leading-relaxed">
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
                <p className="text-white/85 text-sm md:text-base mb-5 leading-relaxed">
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
                <p className="text-white/85 max-w-2xl leading-relaxed text-base">
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
                  { city: 'Virginia, United States', role: 'US operations — enterprise delivery, technology partnerships, and corporate structure.' },
                  { city: 'Riyadh, Kingdom of Saudi Arabia', role: 'KSA operations — enterprise delivery, government engagements, and Vision 2030-aligned programs.' },
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
      <section className="py-14 bg-[#0e0c1d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto"
          >
            {/* Technology & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 max-w-3xl"
            >
              <div className="text-xs font-bold text-maya-gold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Cpu size={14} />
                Technology & Infrastructure
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-6">
                Built on enterprise-grade platforms
              </h2>
              <p className="text-white/85 text-base mb-8 leading-relaxed">
                Maya integrates with industry-leading cloud providers, data infrastructures, and operational systems. Solutions are architected for seamless integration within existing enterprise ecosystems.
              </p>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed mb-10">
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

              {/* Partner logos */}
              <div className="flex flex-wrap items-center gap-10 opacity-40 hover:opacity-60 transition-opacity">
                {[
                  { src: '/logos/aws.svg', alt: 'Amazon Web Services' },
                  { src: '/logos/azure.svg', alt: 'Microsoft Azure' },
                  { src: '/logos/gcp.svg', alt: 'Google Cloud' },
                  { src: '/logos/kubernetes.svg', alt: 'Kubernetes' },
                ].map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-8 w-auto object-contain filter grayscale brightness-200"
                  />
                ))}
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
              <p className="text-white/85 text-base mb-10 leading-relaxed">
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
            className="mt-8 pt-6 border-t border-white/10"
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
          <div className="max-w-2xl mx-auto bg-[#0b0816] border border-white/10 p-10 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-maya-light-gold to-maya-gold" />

            <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
              Ready to discuss sovereign AI deployment?
            </h2>

            <p className="text-white/85 text-base leading-relaxed text-center mb-8">
              Share your operational environment, priorities, and deployment considerations. Our team will respond with strategic recommendations aligned to your context.
            </p>

            {/* Inline briefing form */}
            <BriefingForm />

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/35 text-xs leading-relaxed">
                Our teams in Virginia and Riyadh respond within one business day. All inquiries are handled with strict confidentiality.
              </p>
              <Link
                to="/contact#briefing-request"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors font-bold text-xs uppercase tracking-widest"
              >
                Full Contact Page
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}