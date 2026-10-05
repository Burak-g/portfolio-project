// PageSection.tsx
import type { ReactNode } from 'react';

type PageSectionProps = {
  id: string;
  children: ReactNode;
  variant?: 'screen' | 'content'; // screen = snap full viewport, content = normal
  className?: string;
};

export function PageSection({
  id,
  children,
  variant = 'screen',
  className = '',
}: PageSectionProps) {
  const base = 'snap-start scroll-mt-32 px-4'; // scroll-mt = anchor offset for sticky header
  const height = variant === 'screen' ? 'min-h-dvh' : 'py-16 md:py-24';
  const layout = variant === 'screen' ? 'flex items-center justify-center' : '';
  return (
    <section id={id} data-snap className={`${base} ${height} ${layout} ${className}`}>
      {children}
    </section>
  );
}
