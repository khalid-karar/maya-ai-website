import React from 'react';

/**
 * EngagementMarquee — Selected Engagement Experience
 *
 * To swap a placeholder for a real logo:
 *   1. Drop the real SVG/PNG into /public/logos/clients/<filename>
 *   2. If the source file has colour (not pre-exported white), keep
 *      `invert: true` so the CSS filter converts it to white on dark bg.
 *   3. If it is already white/mono, set `invert: false`.
 *
 * Data format:
 *   { id, name, src, invert? }
 *   — `invert: true`  → applies filter: brightness(0) invert(1)
 *   — `invert: false` → logo is already white; no filter applied
 */

interface Engagement {
  id: string;
  name: string;
  src: string;
  /** Apply brightness(0) invert(1) to make a coloured logo appear white */
  invert?: boolean;
}

// ─── Swap src files as real logos arrive — no component changes needed ────────
const engagements: Engagement[] = [
  { id: 'sdaia',     name: 'SDAIA',        src: '/logos/clients/sdaia.svg',      invert: false },
  { id: 'nca',       name: 'NCA',          src: '/logos/clients/nca.svg',        invert: false },
  { id: 'vision',    name: 'Vision 2030',  src: '/logos/clients/vision2030.svg', invert: false },
  { id: 'neom',      name: 'NEOM',         src: '/logos/clients/neom.svg',       invert: false },
  { id: 'stc',       name: 'STC',          src: '/logos/clients/stc.svg',        invert: false },
  { id: 'aws',       name: 'Amazon Web Services', src: '/logos/clients/aws.svg', invert: true  },
  { id: 'microsoft', name: 'Microsoft',    src: '/logos/clients/microsoft.svg',  invert: false },
  { id: 'c3ai',      name: 'C3.AI',        src: '/logos/clients/c3ai.svg',       invert: false },
];
// ─────────────────────────────────────────────────────────────────────────────

function LogoItem({ engagement }: { engagement: Engagement }) {
  return (
    <img
      src={engagement.src}
      alt={engagement.name}
      loading="lazy"
      title={engagement.name}
      className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 shrink-0 cursor-default select-none"
      style={engagement.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
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
