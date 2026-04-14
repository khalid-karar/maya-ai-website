import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Cpu,
  Headphones,
  Globe,
  FileText,
  AppWindow,
  Server,
  ArrowRight,
  Layers,
  Target,
  Users,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

type Lang = 'ar' | 'en';

const capabilityTabs = [
  {
    id: 'agents',
    label: {
      ar: 'AI Agents & Workflow Automation',
      en: 'AI Agents & Workflow Automation',
    },
    eyebrow: {
      ar: 'Sovereign Execution Layer',
      en: 'Sovereign Execution Layer',
    },
    description: {
      ar: 'AI systems that support and accelerate structured workflows, internal operations, approvals, and service processes with appropriate human oversight.',
      en: 'AI systems that support and accelerate structured workflows, internal operations, approvals, and service processes with appropriate human oversight.',
    },
    supports: {
      ar: 'Workflow automation, internal operations, service coordination, task routing, human-supervised execution',
      en: 'Workflow automation, internal operations, service coordination, task routing, human-supervised execution',
    },
    outputs: {
      ar: 'Operational workflows, case actions, escalations, summaries, orchestration layers',
      en: 'Operational workflows, case actions, escalations, summaries, orchestration layers',
    },
    fit: {
      ar: 'Enterprise operations teams, service organizations, internal shared services',
      en: 'Enterprise operations teams, service organizations, internal shared services',
    },
    visual: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'voice',
    label: {
      ar: 'Voice & Service Intelligence',
      en: 'Voice & Service Intelligence',
    },
    eyebrow: {
      ar: 'Sovereign Service Systems',
      en: 'Sovereign Service Systems',
    },
    description: {
      ar: 'Voice-enabled AI capabilities for service operations, customer interaction handling, call workflows, ticket creation, and response consistency.',
      en: 'Voice-enabled AI capabilities for service operations, customer interaction handling, call workflows, ticket creation, and response consistency.',
    },
    supports: {
      ar: 'AI voice agents, service response handling, inbound workflows, outbound updates, ticket generation',
      en: 'AI voice agents, service response handling, inbound workflows, outbound updates, ticket generation',
    },
    outputs: {
      ar: 'Call summaries, service tickets, escalation paths, response logs, workflow triggers',
      en: 'Call summaries, service tickets, escalation paths, response logs, workflow triggers',
    },
    fit: {
      ar: 'Customer operations, service centers, support environments, public-facing organizations',
      en: 'Customer operations, service centers, support environments, public-facing organizations',
    },
    visual: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'spatial',
    label: {
      ar: 'Spatial & Operational Intelligence',
      en: 'Spatial & Operational Intelligence',
    },
    eyebrow: {
      ar: 'Sovereign Monitoring & Visibility',
      en: 'Sovereign Monitoring & Visibility',
    },
    description: {
      ar: 'Applied intelligence for environments where infrastructure, assets, geography, field operations, and satellite-linked visibility matter.',
      en: 'Applied intelligence for environments where infrastructure, assets, geography, field operations, and satellite-linked visibility matter.',
    },
    supports: {
      ar: 'Satellite imagery analysis, infrastructure monitoring, field operations, environmental visibility, operational awareness',
      en: 'Satellite imagery analysis, infrastructure monitoring, field operations, environmental visibility, operational awareness',
    },
    outputs: {
      ar: 'Dashboards, spatial outputs, monitoring views, alerts, operational summaries',
      en: 'Dashboards, spatial outputs, monitoring views, alerts, operational summaries',
    },
    fit: {
      ar: 'Infrastructure operators, field organizations, large-area environments, monitoring-heavy operations',
      en: 'Infrastructure operators, field organizations, large-area environments, monitoring-heavy operations',
    },
    visual: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'knowledge',
    label: {
      ar: 'Knowledge & Document Intelligence',
      en: 'Knowledge & Document Intelligence',
    },
    eyebrow: {
      ar: 'Sovereign Information Intelligence',
      en: 'Sovereign Information Intelligence',
    },
    description: {
      ar: 'Capabilities for extracting, organizing, interpreting, and operationalizing information across documents, records, policies, and enterprise content.',
      en: 'Capabilities for extracting, organizing, interpreting, and operationalizing information across documents, records, policies, and enterprise content.',
    },
    supports: {
      ar: 'Document understanding, knowledge retrieval, structured extraction, case support, record intelligence',
      en: 'Document understanding, knowledge retrieval, structured extraction, case support, record intelligence',
    },
    outputs: {
      ar: 'Structured records, summaries, tagged content, searchable knowledge layers, review support',
      en: 'Structured records, summaries, tagged content, searchable knowledge layers, review support',
    },
    fit: {
      ar: 'Compliance teams, operations teams, case handlers, document-heavy organizations',
      en: 'Compliance teams, operations teams, case handlers, document-heavy organizations',
    },
    visual: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'platforms',
    label: {
      ar: 'Custom AI Platforms & Applications',
      en: 'Custom AI Platforms & Applications',
    },
    eyebrow: {
      ar: 'Sovereign Digital Platforms',
      en: 'Sovereign Digital Platforms',
    },
    description: {
      ar: 'Custom-built AI-enabled systems, applications, dashboards, and operational platforms designed around specific organizational environments.',
      en: 'Custom-built AI-enabled systems, applications, dashboards, and operational platforms designed around specific organizational environments.',
    },
    supports: {
      ar: 'Operational platforms, intelligence interfaces, AI-enabled apps, workflow systems, custom dashboards',
      en: 'Operational platforms, intelligence interfaces, AI-enabled apps, workflow systems, custom dashboards',
    },
    outputs: {
      ar: 'Business systems, operational portals, management dashboards, AI-enabled applications, control interfaces',
      en: 'Business systems, operational portals, management dashboards, AI-enabled applications, control interfaces',
    },
    fit: {
      ar: 'Organizations needing tailored AI systems rather than generic tools',
      en: 'Organizations needing tailored AI systems rather than generic tools',
    },
    visual: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'deployment',
    label: {
      ar: 'Private AI Deployment',
      en: 'Private AI Deployment',
    },
    eyebrow: {
      ar: 'Sovereign Deployment Models',
      en: 'Sovereign Deployment Models',
    },
    description: {
      ar: 'Deployment models designed for organizations that require control over security, data handling, access, integration boundaries, and operational architecture.',
      en: 'Deployment models designed for organizations that require control over security, data handling, access, integration boundaries, and operational architecture.',
    },
    supports: {
      ar: 'Cloud, private cloud, on-prem, hybrid, controlled integration, security-aligned deployment',
      en: 'Cloud, private cloud, on-prem, hybrid, controlled integration, security-aligned deployment',
    },
    outputs: {
      ar: 'Deployment architecture, control layers, access models, integration paths, operational hosting strategies',
      en: 'Deployment architecture, control layers, access models, integration paths, operational hosting strategies',
    },
    fit: {
      ar: 'Enterprise and government-scale environments requiring stronger control and deployment discipline',
      en: 'Enterprise and government-scale environments requiring stronger control and deployment discipline',
    },
    visual: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
  },
];

const iconMap: Record<string, React.ElementType> = {
  agents: Cpu,
  voice: Headphones,
  spatial: Globe,
  knowledge: FileText,
  platforms: AppWindow,
  deployment: Server,
};

export default function GeoAI() {
  const { language, direction } = useLanguage();
  const lang: Lang = language === 'en' ? 'en' : 'ar';
  const [searchParams] = useSearchParams();

  // Initialize tab from query param or default to first tab
  const tabParam = searchParams.get('tab');
  const initialTab = tabParam && capabilityTabs.some(t => t.id === tabParam)
    ? tabParam
    : capabilityTabs[0].id;

  const [activeTab, setActiveTab] = useState(initialTab);

  // Scroll to capabilities section when page loads with query param
  useEffect(() => {
    if (tabParam) {
      const capabilitiesSection = document.querySelector('[data-capabilities-section]');
      if (capabilitiesSection) {
        setTimeout(() => {
          capabilitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [tabParam]);

  const activeContent =
    capabilityTabs.find((t) => t.id === activeTab) || capabilityTabs[0];

  const ActiveIcon = iconMap[activeContent.id] || Shield;

  const splitList = (text: string) =>
    (text || '')
      .split(/[،,]/)
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0816]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-maya-navy/88 z-10 mix-blend-multiply" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 grayscale"
            style={{ backgroundImage: `url(${activeContent.visual})` }}
          />

          <svg
            className="absolute inset-0 w-full h-full opacity-15 z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern id="cap-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M0 120 C 25 0 60 0 120 120 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cap-grid)" />
          </svg>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-maya-gold/5 blur-[130px] rounded-full z-10" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-navy/50 backdrop-blur-sm mb-6">
              <Shield size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Sovereign Capabilities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Capabilities built for sovereign solutions
            </h1>

            <h2 className="text-2xl md:text-3xl text-white/82 font-light mb-8 leading-relaxed">
              Secure AI systems, operational intelligence, and custom digital platforms designed for serious environments.
            </h2>

            <p className="text-lg md:text-xl text-white/62 max-w-3xl leading-relaxed">
              Maya develops sovereign-ready capabilities for organizations that need more than generic tools. Our work spans
              AI agents, voice systems, spatial intelligence, document intelligence, custom AI platforms, and private deployment
              models aligned to security, control, and operational fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="py-20 md:py-24" data-capabilities-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-28">
              <div className="space-y-2">
                <h3 className="mb-6 px-1 text-white/40 text-xs font-bold uppercase tracking-widest">
                  Capability Pillars
                </h3>

                {capabilityTabs.map((tab) => {
                  const Icon = iconMap[tab.id] || Shield;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'w-full flex items-center gap-4 p-4 border transition-all duration-300 group text-left',
                        isActive
                          ? 'border-maya-gold/35 bg-white/[0.05] text-white'
                          : 'border-white/10 hover:bg-white/[0.03] text-white/55 hover:text-white'
                      )}
                      type="button"
                    >
                      <Icon size={18} className={cn(isActive ? 'text-maya-gold' : 'text-white/45')} />
                      <span className="font-medium text-sm">{tab.label[lang]}</span>
                      {direction === 'rtl' ? (
                        <ChevronLeft
                          size={14}
                          className={cn('mr-auto', isActive ? 'text-maya-gold' : 'text-white/30')}
                        />
                      ) : (
                        <ChevronRight
                          size={14}
                          className={cn('ml-auto', isActive ? 'text-maya-gold' : 'text-white/30')}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: direction === 'rtl' ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'rtl' ? 16 : -16 }}
                  transition={{ duration: 0.26 }}
                  className="bg-white/[0.02] border border-white/10 p-8 md:p-10 lg:p-12 relative overflow-hidden"
                >
                  <div
                    className={cn(
                      'absolute top-0 p-10 opacity-[0.045] pointer-events-none',
                      direction === 'rtl' ? 'left-0' : 'right-0'
                    )}
                  >
                    <ActiveIcon size={280} />
                  </div>

                  {/* Top row */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-3 text-maya-gold">
                        <ActiveIcon size={22} />
                        <span className="text-xs font-bold uppercase tracking-widest">
                          {activeContent.eyebrow[lang]}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        {activeContent.label[lang]}
                      </h2>

                      <p className="text-white/65 max-w-3xl leading-relaxed">
                        {activeContent.description[lang]}
                      </p>
                    </div>

                    <div className="flex items-start">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border bg-maya-gold/10 text-maya-gold border-maya-gold/20">
                        Sovereign Solution Capability
                      </span>
                    </div>
                  </div>

                  {/* Main info grid */}
                  <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
                    {/* Left column */}
                    <div className="space-y-6">
                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Target size={18} className="text-maya-gold" />
                          <h4 className="font-bold uppercase tracking-wide text-sm">
                            What It Covers
                          </h4>
                        </div>

                        <ul className="space-y-3">
                          {splitList(activeContent.supports[lang]).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/65 text-sm md:text-base leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-maya-gold mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Layers size={18} className="text-maya-gold" />
                          <h4 className="font-bold uppercase tracking-wide text-sm">
                            Example Outputs
                          </h4>
                        </div>

                        <ul className="space-y-3">
                          {splitList(activeContent.outputs[lang]).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/65 text-sm md:text-base leading-relaxed"
                            >
                              <FileText size={14} className="text-maya-gold mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                      <div className="border border-white/10 bg-white/[0.02] p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <Users size={18} className="text-maya-gold" />
                          <h4 className="font-bold uppercase tracking-wide text-sm">
                            Best Fit
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {splitList(activeContent.fit[lang]).map((item, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/78"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border border-maya-gold/20 bg-maya-navy/45 p-6">
                        <div className="flex items-center gap-2 text-white mb-4">
                          <Lock size={18} className="text-maya-gold" />
                          <h4 className="font-bold uppercase tracking-wide text-sm">
                            Sovereign Solution Positioning
                          </h4>
                        </div>

                        <div className="text-white/74 text-sm md:text-base leading-relaxed">
                          Maya builds capabilities that can be shaped into sovereign-ready solutions, aligned to security,
                          deployment control, enterprise integration realities, and long-term operational use.
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4 text-white/85">
                          <CheckCircle2 size={18} className="text-maya-gold" />
                          <h4 className="font-bold uppercase tracking-wide text-sm">
                            Delivery Approach
                          </h4>
                        </div>

                        <div className="relative w-full min-h-[160px] bg-black/35 border border-white/10 p-6 overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                            <div
                              className="w-full h-full"
                              style={{
                                backgroundImage:
                                  'radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                              }}
                            />
                          </div>

                          <div className="relative z-10 space-y-3 text-sm text-white/70">
                            <div>Understand the operating environment</div>
                            <div>Define the right capability scope</div>
                            <div>Choose the right deployment model</div>
                            <div>Deliver for sustained operational use</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0e0c1d] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Shield size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">
                Sovereign Capability Discussion
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Discuss the right capability mix for your environment
            </h2>

            <p className="text-white/60 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              We can review your priorities, operating environment, and deployment requirements to determine the right
              sovereign-ready capability and solution direction.
            </p>

            <Link
              to="/contact#briefing-request"
              className="inline-flex items-center gap-2 px-10 py-5 bg-maya-gold text-maya-navy hover:bg-white transition-colors font-bold text-sm uppercase tracking-widest"
            >
              Request a Private Briefing
              {direction === 'rtl' ? (
                <ArrowRight size={16} className="rotate-180" />
              ) : (
                <ArrowRight size={16} />
              )}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}