import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}
export default function ContactCard({ icon, title, value, href }: ContactCardProps) {
  return (
    <Card className="h-full rounded-sm">
      <CardContent className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <div className="text-primary-subtle-fg text-4xl" aria-hidden="true">
          {icon}
        </div>
        <Heading level={3}>{title}</Heading>
        {href ? (
          <Link
            href={href}
            target={href.startsWith('https:') ? '_blank' : undefined}
            rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
            className="text-muted-fg hover:text-primary-subtle-fg break-all underline">
            {value}
          </Link>
        ) : (
          <Text>{value}</Text>
        )}
      </CardContent>
    </Card>
  );
}
