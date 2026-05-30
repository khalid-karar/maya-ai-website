import { useState, useEffect, useRef } from 'react';

interface Props {
  text: string;
  active: boolean;
}

export function TypewriterInsight({ text, active }: Props) {
  const [displayed, setDisplayed] = useState('');
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (active) {
      setVisible(true);
      setDisplayed('');
      let i = 0;
      timerRef.current = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length && timerRef.current) clearInterval(timerRef.current);
      }, 38);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setVisible(false);
      setDisplayed('');
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [active, text]);

  if (!visible) return null;

  return (
    <div className="mt-4 pt-4 border-t border-white/5">
      <p className="font-mono text-xs text-maya-gold/70 leading-relaxed">
        <span className="text-maya-gold/30 mr-1">›</span>
        {displayed}
        <span className="animate-pulse">_</span>
      </p>
    </div>
  );
}
