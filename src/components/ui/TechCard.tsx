import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import type { TechCategory } from '../../lib/techStackData';

type Props = {
  category: TechCategory;
};

export default function TechCard({ category }: Props) {
  return (
    <Card
      sx={{
        minWidth: 0,
        bgcolor: 'background.paper',
        borderRadius: '3px',
      }}>
      <CardContent>
        <Typography
          padding={1}
          borderBottom={1}
          borderColor="divider"
          align="center"
          variant="h5"
          component="div"
          color="text.primary">
          {category.title}
        </Typography>

        <CardMedia>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {category.icons.map(({ name, Icon }) => (
              <Tooltip
                key={name}
                title={name}
                arrow
                enterDelay={150}
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: 'var(--color-signal, #e8bf4f)',
                      color: '#000000',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '3px',
                      px: 1.25,
                      py: 0.75,
                    },
                  },
                  arrow: { sx: { color: 'var(--color-signal, #e8bf4f)' } },
                }}>
                <span
                  tabIndex={0}
                  className="flex items-center justify-center rounded-sm"
                  aria-label={name}>
                  <Icon
                    className="h-10 w-10 opacity-80 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </Tooltip>
            ))}
          </div>
        </CardMedia>
      </CardContent>
    </Card>
  );
}
