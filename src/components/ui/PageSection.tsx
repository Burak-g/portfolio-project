import type { ReactNode } from 'react';

type PageSectionProps = {
  id: string;
  children: ReactNode;
  variant?: 'screen' | 'content';
  className?: string;
};

export function PageSection({ id, children, className = '' }: PageSectionProps) {
  return (
    <section
      id={id}
      className={`portfolio-section ${id === 'hero' ? 'hero-section flex items-center' : ''} ${className}`}>
      {children}
    </section>
  );
}
