import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  as?: 'div' | 'section' | 'article' | 'main';
}

export default function FadeIn({ children, delay = 0, className = "", direction = 'up', as = 'div' }: FadeInProps) {
  const reduced = useReducedMotion();
  const directionOffsets = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 }
  };

  const offset = directionOffsets[direction];
  
  const components = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    main: motion.main
  };
  
  const Component = components[as];

  return (
    <Component
      initial={reduced ? false : { opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Component>
  );
}

