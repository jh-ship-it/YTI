import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export default function ReadingExperience() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30 });
  const [sections, setSections] = useState<{id:string; title:string}[]>([]);
  const [active, setActive] = useState('');
  useEffect(() => {
    const root = document.querySelector('main');
    if (!root) return;
    const headings = [...root.querySelectorAll('h2')].filter(h => h.textContent && h.textContent.length < 90 && !h.classList.contains('eyebrow'));
    const navigable = pathname !== '/' && headings.length >= 3;
    const items = navigable ? headings.map((h, i) => {
      h.id = h.id || `section-${i}`;
      h.classList.add('reading-anchor');
      return { id: h.id, title: h.textContent || '' };
    }) : [];
    setSections(items); setActive(items[0]?.id || '');
    const headingObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {if(e.isIntersecting) setActive(e.target.id);});
    }, { rootMargin: '-15% 0px -65% 0px' });
    if (navigable) headings.forEach(h => headingObserver.observe(h));
    const elements = [...root.querySelectorAll('.mission-opening h1, .hero-visual, .better-callout-inner, .section-heading, .pillar, .pathway-card, .pathway-feature-visual, .home-photo-story, .need-grid, .need-visual, .flow-step, .data-grid, .leader-card, .leadership-preview-inner, .closing-section, .reading-panel')];
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    }), {threshold: .08});
    if(!reduced) elements.forEach((el,i) => {
      el.classList.add('scroll-reveal');
      (el as HTMLElement).style.setProperty('--reveal-delay', `${el.matches('.pillar,.pathway-card,.flow-step,.leader-card') ? (i % 4)*75 : 0}ms`);
      observer.observe(el);
    });
    return () => {observer.disconnect();headingObserver.disconnect();elements.forEach(el=>el.classList.remove('scroll-reveal','is-visible'));};
  }, [pathname,reduced]);
  return <>
    <motion.div className="reading-progress" style={{scaleX:reduced?scrollYProgress:progress}} aria-hidden="true"/>
    {!!sections.length && <nav className="section-jump" aria-label="On this page"><span>On this page</span><div>{sections.map(s=><a key={s.id} href={`#${s.id}`} aria-current={active===s.id?'location':undefined}>{s.title}</a>)}</div></nav>}
  </>;
}
