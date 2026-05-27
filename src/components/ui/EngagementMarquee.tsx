import React from 'react';

/**
 * EngagementMarquee — Selected Engagement Experience
 *
 * To replace a placeholder with an approved logo:
 *   1. Change `type` to 'image'
 *   2. Set `src` to the asset path (e.g. '/assets/logos/org-name.svg')
 *   3. Update `name` and `abbrev` with the correct organisation name
 *
 * Data format:
 *   { id: string; name: string; abbrev: string; src?: string; type: 'text' | 'image' }
 */

interface Engagement {
  id: string;
  name: string;
  abbrev: string;
  src?: string;
  type: 'text' | 'image';
}

// ─── Replace with approved logos before going live ───────────────────────────
const engagements: Engagement[] = [
  { id: 'org-1', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-2', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-3', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-4', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-5', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-6', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-7', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
  { id: 'org-8', name: 'Organisation Name', abbrev: 'Organisation', type: 'text' },
];
// ─────────────────────────────────────────────────────────────────────────────

function LogoItem({ engagement }: { engagement: Engagement }) {
  if (engagement.type === 'image' && engagement.src) {
    return (
      <div
        className="flex items-center justify-center h-7 w-auto max-w-[160px] min-w-[80px] opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-700 cursor-default shrink-0"
        title={engagement.name}
      >
        <img
          src={engagement.src}
          alt={engagement.name}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center h-7 shrink-0 cursor-default select-none opacity-55 hover:opacity-80 transition-opacity duration-700"
      title={engagement.name}
    >
      <span className="text-white font-display font-semibold text-[13px] tracking-[0.12em] uppercase whitespace-nowrap">
        {engagement.abbrev}
      </span>
    </div>
  );
}

export default function EngagementMarquee() {
  const doubled = [...engagements, ...engagements];

  return (
    <section
      className="relative bg-[#06040d] border-y border-white/[0.07] py-10 overflow-hidden"
      aria-label="Selected Engagement Experience"
    >
      <style>{`
        @keyframes maya-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .maya-marquee-track {
          animation: maya-marquee 90s linear infinite;
          will-change: transform;
        }
        .maya-marquee-viewport:hover .maya-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section header */}
      <div className="container mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-white/85">
          Representative Experience
        </p>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 mb-7">
        <div className="h-px bg-white/[0.07]" />
      </div>

      {/* Marquee */}
      <div
        className="maya-marquee-viewport relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="maya-marquee-track flex items-center py-1">
          {doubled.map((eng, idx) => (
            <React.Fragment key={`${eng.id}-${idx}`}>
              <LogoItem engagement={eng} />
              <span
                className="mx-10 lg:mx-12 shrink-0 w-px h-4 bg-white/10 inline-block"
                aria-hidden="true"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Divider + disclaimer */}
      <div className="container mx-auto px-6 mt-7">
        <div className="h-px bg-white/[0.07] mb-4" />
        <p className="text-[10px] font-mono text-white/22 tracking-widest uppercase text-center leading-relaxed">
          Representative experience spans public-sector and enterprise environments worldwide through direct engagements, approved partner arrangements, and prior leadership experience.
          Inclusion does not imply current affiliation, direct client relationship, or endorsement by the referenced organisations.
        </p>
      </div>
    </section>
  );
}
