import React from 'react';

/**
 * LeadershipExperience — Prior Professional Experience (Marquee)
 *
 * This section conveys the professional domain depth leadership brings to
 * Maya AI. Entries are DOMAIN LABELS, not organisation logos, because this
 * represents personal professional history, not current Maya client
 * relationships.
 *
 * To add an approved organisation logo instead of a domain label:
 *   1. Change `type` to 'image'
 *   2. Set `src` to the asset path
 *   3. Ensure the organisation has explicitly cleared use
 *
 * IMPORTANT: Do not add organisation names or logos here unless each
 * has been individually cleared for public association with this section.
 */

interface ExperienceDomain {
  id: string;
  /** Display label — domain name or cleared organisation name */
  label: string;
  /** Optional sublabel for context */
  sub?: string;
  src?: string;
  type: 'text' | 'image';
}

// ─── Replace / extend with approved domains or cleared org names ─────────────
const domains: ExperienceDomain[] = [
  { id: 'dom-1', label: 'U.S. Federal Government',      sub: 'Civilian & Program Delivery',  type: 'text' },
  { id: 'dom-2', label: 'Defense & National Security',  sub: 'Intelligence & Operations',     type: 'text' },
  { id: 'dom-3', label: 'Healthcare & Life Sciences',   sub: 'Enterprise & Compliance',       type: 'text' },
  { id: 'dom-4', label: 'Financial Services',           sub: 'AI Strategy & Transformation',  type: 'text' },
  { id: 'dom-5', label: 'Saudi Arabia & Gulf Region',   sub: 'Public Sector & Vision 2030',   type: 'text' },
  { id: 'dom-6', label: 'Technology & Platforms',       sub: 'Applied AI & Engineering',      type: 'text' },
  { id: 'dom-7', label: 'Enterprise Operations',        sub: 'Workflow & Advisory',            type: 'text' },
  { id: 'dom-8', label: 'Infrastructure & Logistics',   sub: 'Program & Field Ops',           type: 'text' },
];
// ─────────────────────────────────────────────────────────────────────────────

function DomainItem({ domain }: { domain: ExperienceDomain }) {
  if (domain.type === 'image' && domain.src) {
    return (
      <div
        className="flex items-center justify-center h-7 w-auto max-w-[160px] min-w-[80px] opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-700 cursor-default shrink-0"
        title={domain.label}
      >
        <img src={domain.src} alt={domain.label} className="h-full w-auto object-contain" />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center shrink-0 cursor-default select-none opacity-55 hover:opacity-80 transition-opacity duration-700 min-w-[180px]"
      title={domain.label}
    >
      <span className="text-white font-display font-semibold text-[12px] tracking-[0.10em] uppercase whitespace-nowrap leading-tight">
        {domain.label}
      </span>
      {domain.sub && (
        <span className="text-white/38 font-mono text-[9px] tracking-[0.14em] uppercase mt-0.5 whitespace-nowrap">
          {domain.sub}
        </span>
      )}
    </div>
  );
}

export default function LeadershipExperience() {
  const doubled = [...domains, ...domains];

  return (
    <section
      className="relative bg-[#08060f] border-y border-white/[0.07] py-10 overflow-hidden"
      aria-label="Prior Professional Experience"
    >
      <style>{`
        @keyframes maya-leadership-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .maya-leadership-track {
          animation: maya-leadership-marquee 110s linear infinite;
          will-change: transform;
        }
        .maya-leadership-viewport:hover .maya-leadership-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section header */}
      <div className="container mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-white/50">
          Prior Professional Experience
        </p>
        <p className="text-white/30 text-[11px] leading-relaxed max-w-sm sm:text-right">
          Leadership experience spans U.S. federal, defense, healthcare, and enterprise environments.
          Domains listed represent professional background, not current Maya client engagements.
        </p>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 mb-7">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Marquee */}
      <div
        className="maya-leadership-viewport relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="maya-leadership-track flex items-center py-1">
          {doubled.map((dom, idx) => (
            <React.Fragment key={`${dom.id}-${idx}`}>
              <DomainItem domain={dom} />
              <span
                className="mx-10 lg:mx-12 shrink-0 w-px h-4 bg-white/[0.08] inline-block"
                aria-hidden="true"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Divider + disclaimer */}
      <div className="container mx-auto px-6 mt-7">
        <div className="h-px bg-white/[0.06] mb-4" />
        <p className="text-[10px] font-mono text-white/18 tracking-widest uppercase text-center">
          Prior professional experience · Not a representation of current Maya AI client relationships · Logos shown for contextual reference only and do not imply endorsement
        </p>
      </div>
    </section>
  );
}
