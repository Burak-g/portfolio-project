import { twJoin } from 'tailwind-merge';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import type { TimelineEntry } from '@/lib/timelineData';

export default function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol>
      {entries.map((entry, index) => (
        <li key={entry.id} className="grid min-w-0 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-x-6">
          <Text className="hidden pt-1 font-mono text-xs leading-relaxed md:block">
            {entry.period}
          </Text>
          <div
            className={twJoin(
              'border-border relative min-w-0 border-l pl-6 sm:pl-8',
              index < entries.length - 1 && 'pb-10',
            )}>
            <span
              aria-hidden="true"
              className="bg-primary ring-card absolute top-1.5 -left-1.5 size-3 rounded-full ring-4"
            />
            <Text className="mb-2 font-mono text-xs leading-relaxed md:hidden">{entry.period}</Text>
            <Heading level={3} className="font-sans text-lg leading-snug font-semibold sm:text-xl">
              {entry.title}
            </Heading>
            <Text className="text-primary-subtle-fg mt-1">{entry.company}</Text>
            {!!entry.roles?.length && (
              <ol aria-label={`Stillinger hos ${entry.title}`} className="my-6 ml-1">
                {entry.roles.map((role, roleIndex, roles) => (
                  <li
                    key={role.id}
                    className={twJoin(
                      'border-border relative border-l pl-5',
                      roleIndex < roles.length - 1 && 'pb-5',
                    )}>
                    <span
                      aria-hidden="true"
                      className={twJoin(
                        'ring-card absolute top-2 -left-1 size-2 rounded-full ring-4',
                        roleIndex === 0 ? 'bg-primary' : 'bg-muted-fg',
                      )}
                    />
                    <Heading
                      level={4}
                      className={twJoin(
                        'font-sans text-base leading-6 font-medium',
                        roleIndex > 0 && 'text-muted-fg',
                      )}>
                      {role.title}
                    </Heading>
                    <Text className="mt-1 font-mono text-xs leading-relaxed">{role.period}</Text>
                  </li>
                ))}
              </ol>
            )}
            <Text className="mt-3 max-w-[65ch] text-base leading-7">{entry.description}</Text>
            {!!entry.highlights?.length && (
              <div className="mt-5">
                {entry.type === 'work' && (
                  <Heading level={4} className="font-sans text-sm font-semibold">
                    Mine primære arbejdsopgaver
                  </Heading>
                )}
                <ul className="text-muted-fg marker:text-primary mt-3 max-w-[65ch] list-disc space-y-2 pl-5">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Text className="max-w-none text-base leading-7">{highlight}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
