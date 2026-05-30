import { motion, useScroll, useTransform } from 'motion/react';

export default function ReadingProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollY, [80, 130], [0, 1]);

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-maya-gold origin-left"
      style={{ scaleX: scrollYProgress, opacity }}
    />
  );
}
