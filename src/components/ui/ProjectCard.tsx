import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import type { Project } from '../../lib/projectData';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      sx={{
        overflow: 'hidden',
        borderRadius: 1,
        bgcolor: 'background.paper',
        boxShadow: 2,
      }}>
      {/* Top image */}
      <CardMedia
        component="img"
        image={project.imageSrc}
        alt={project.imageAlt}
        sx={{
          height: { xs: 180, sm: 220 },
          objectFit: 'cover',
        }}
      />

      {/* Dark content panel like your screenshot */}
      <CardContent
        sx={{
          bgcolor: 'background.paper',
          color: 'grey.100',
          py: 3,
        }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
          {project.title}
        </Typography>

        {/* Tech chips row */}
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          spacing={1}
          sx={{ mb: 2 }}>
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              variant="outlined"
              size="small"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '& .MuiChip-label': { fontWeight: 500 },
              }}
            />
          ))}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: 'grey.200',
            lineHeight: 1.7,
            mb: 3,
          }}>
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
          {project.href ? (
            <Button
              variant="outlined"
              color="primary"
              href={project.href}
              sx={{ textTransform: 'none', px: 2.5 }}>
              Læs mere om projektet
            </Button>
          ) : null}

          {project.githubHref ? (
            <Button
              variant="text"
              color="inherit"
              href={project.githubHref}
              sx={{ textTransform: 'none', color: 'grey.200' }}>
              GitHub
            </Button>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}

