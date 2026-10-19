import { useEffect, useRef, useState, type ReactNode } from 'react';

type PageSectionProps = {
  id: string;
  children: ReactNode;
  variant?: 'screen' | 'content';
  className?: string;
};

export function PageSection({ id, children, className = '' }: PageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState<'idle' | 'pending' | 'visible'>('idle');

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content || id === 'hero') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    setReveal('pending');
    const show = () => {
      setReveal('visible');
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (reduced.matches || section.contains(document.activeElement)) {
          show();
        } else if (entry.isIntersecting) {
          show();
        } else {
          setReveal('pending');
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    );
    observer.observe(content);
    section.addEventListener('focusin', show);
    const motionChanged = () => {
      if (reduced.matches) show();
    };
    reduced.addEventListener('change', motionChanged);
    return () => {
      observer.disconnect();
      section.removeEventListener('focusin', show);
      reduced.removeEventListener('change', motionChanged);
    };
  }, [id]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`portfolio-section ${id === 'hero' ? 'hero-section flex items-center' : ''} ${className}`}>
      {id === 'hero' ? (
        children
      ) : (
        <div ref={contentRef}>
          <div
            className={
              reveal === 'pending'
                ? 'motion-safe:opacity-0'
                : reveal === 'visible'
                  ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-[10px] motion-safe:fill-mode-both motion-safe:duration-[600ms]'
                  : undefined
            }>
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
