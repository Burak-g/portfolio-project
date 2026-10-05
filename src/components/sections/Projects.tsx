// src/sections/ProjectsSection.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../../components/ui/ProjectCard';
import { projects } from '../../lib/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PAGE_SIZE = 2;

export default function ProjectsSection() {
  const [page, setPage] = React.useState(0);

  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const clampedPage = Math.min(page, pageCount - 1);

  const start = clampedPage * PAGE_SIZE;
  const visible = projects.slice(start, start + PAGE_SIZE);

  const canPrev = clampedPage > 0;
  const canNext = clampedPage < pageCount - 1;

  return (
    <div className="container-wide">
      <header className="section-header">
        <div className="flex items-center justify-between">
          <h2 id="projects-heading">Projekter</h2>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <IconButton
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={!canPrev}
              aria-label="Previous projects">
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {clampedPage + 1} / {pageCount}
            </Typography>

            <IconButton
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={!canNext}
              aria-label="Next projects">
              <FontAwesomeIcon icon={faChevronRight} />
            </IconButton>
          </div>
        </div>
      </header>

      <div className="section-content">
        {/* 2 cards per view */}
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          }}>
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>

        {/* Dots */}
        {pageCount > 1 ? (
          <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 3 }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <Box
                key={i}
                onClick={() => setPage(i)}
                role="button"
                aria-label={`Go to project page ${i + 1}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setPage(i);
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  bgcolor: i === clampedPage ? 'primary.main' : 'grey.500',
                  opacity: i === clampedPage ? 1 : 0.4,
                }}
              />
            ))}
          </Stack>
        ) : null}
      </div>
    </div>
  );
}
