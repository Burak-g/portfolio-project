'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonStyles } from '@/components/ui/Button';
import type { TechCategory } from '@/lib/techStackData';

export default function TechCard({ category }: { category: TechCategory }) {
  return (
    <Card className="border-border h-full min-w-0 rounded-sm">
      <CardHeader>
        <Heading level={3}>{category.title}</Heading>
        <span aria-hidden="true" className="bg-primary mt-3 block h-0.5 w-8" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {category.icons.map(({ name, Icon }) => (
            <Tooltip key={name} delay={150}>
              <TooltipTrigger
                aria-label={name}
                className={buttonStyles({
                  intent: 'plain',
                  size: 'sq-lg',
                  className: 'size-14 sm:size-14 *:[svg]:size-10 sm:*:[svg]:size-10',
                })}>
                <Icon
                  className="size-10 opacity-80 transition-opacity hover:opacity-100"
                  aria-hidden="true"
                />
              </TooltipTrigger>
              <TooltipContent
                arrow={false}
                className="border-primary bg-primary text-primary-fg rounded-sm">
                {name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
