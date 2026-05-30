import { useState } from 'react';
import { Lock } from 'lucide-react';

interface Props {
  label: string;
  tooltip: string;
}

export function ComplianceBadge({ label, tooltip }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 z-50 pointer-events-none text-center">
          <div className="bg-[#0e0c1d] border border-white/10 rounded-sm px-3 py-2 text-xs text-white/70 leading-relaxed shadow-xl">
            {tooltip}
          </div>
          <div className="w-2 h-2 bg-[#0e0c1d] border-r border-b border-white/10 rotate-45 mx-auto -mt-1" />
        </div>
      )}
      <div className="flex items-center gap-1.5 border border-maya-gold/20 bg-maya-gold/[0.05] px-3 py-1.5 text-xs font-semibold tracking-widest text-maya-gold/80 uppercase hover:border-maya-gold/40 hover:text-maya-gold transition-all duration-200 cursor-default rounded-sm">
        <Lock size={9} />
        {label}
      </div>
    </div>
  );
}
