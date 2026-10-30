import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import { Badge } from '@/components/ui/badge';
import { buttonStyles } from '@/components/ui/Button';
import type { Project } from '@/lib/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full gap-5 overflow-hidden rounded-sm pt-0">
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="h-48 w-full object-cover sm:h-56"
      />
      <CardHeader>
        <Heading level={3} className="text-xl">
          {project.title}
        </Heading>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              intent="outline"
              isCircle={false}
              className="[--badge-border:var(--color-border)] [--badge-fg:var(--color-muted-fg)]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <Text className="text-base leading-relaxed">{project.description}</Text>
      </CardContent>
      {project.githubHref && (
        <CardFooter className="flex flex-wrap justify-center gap-3">
          <Link
            href={project.githubHref}
            aria-label={`Se ${project.title} på GitHub`}
            className={buttonStyles({ intent: 'outline' })}>
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" className="size-4" />
            GitHub
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
