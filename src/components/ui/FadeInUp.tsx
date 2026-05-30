import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

// Custom cubic-bezier that feels snappy but not abrupt
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Scroll-triggered fade + rise. Fires once when the element enters the viewport. */
export function FadeInUp({ children, delay = 0, className = '' }: FadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-triggered fade only (no vertical movement). */
export function FadeIn({ children, delay = 0, className = '' }: FadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  target: number;
  /** Animation duration in ms. Default 1200. */
  duration?: number;
}

/**
 * Counts up from 0 → target when it enters the viewport.
 * Renders a bare <span> so it can be inlined inside any text node.
 */
export function CountUp({ target, duration = 1200 }: CountUpProps) {
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref} style={{ opacity: count === null ? 0 : 1 }}>{count ?? target}</span>;
}
