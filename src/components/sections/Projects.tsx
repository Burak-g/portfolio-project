'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/projectData';

const PAGE_SIZE = 2;
export default function Projects() {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const current = Math.min(page, pageCount - 1);
  return (
    <div className="container-wide">
      <header className="section-header flex flex-wrap items-center justify-between gap-4">
        <Heading level={2} id="projects-heading" className="text-3xl md:text-5xl">
          Projekter
        </Heading>
        <div className="flex items-center gap-3">
          <Button
            intent="plain"
            size="sq-sm"
            isDisabled={current === 0}
            onPress={() => setPage(Math.max(0, current - 1))}
            aria-label="Forrige projekter">
            <ChevronLeft />
          </Button>
          <Text>
            {current + 1} / {pageCount}
          </Text>
          <Button
            intent="plain"
            size="sq-sm"
            isDisabled={current === pageCount - 1}
            onPress={() => setPage(Math.min(pageCount - 1, current + 1))}
            aria-label="Næste projekter">
            <ChevronRight />
          </Button>
        </div>
      </header>
      <div
        key={current}
        className="section-content motion-safe:animate-in motion-safe:fade-in grid gap-6 motion-safe:duration-[250ms] md:grid-cols-2">
        {projects.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, index) => (
            <Button
              key={index}
              intent="plain"
              size="sq-xs"
              onPress={() => setPage(index)}
              aria-label={`Projektside ${index + 1}`}
              aria-current={current === index ? 'true' : undefined}>
              <span
                aria-hidden="true"
                className={`size-2.5 rounded-full ${current === index ? 'bg-primary' : 'bg-muted-fg opacity-40'}`}
              />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
