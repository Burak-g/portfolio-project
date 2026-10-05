import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { TechCategory } from '../../lib/techStackData';

type Props = {
  category: TechCategory;
};

export default function TechCard({ category }: Props) {
  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: 'background.paper',
        borderRadius: '8px',
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
              <div key={name} className="flex items-center justify-center" title={name}>
                <Icon
                  className="h-10 w-10 opacity-80 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-100"
                  aria-label={name}
                />
              </div>
            ))}
          </div>
        </CardMedia>
      </CardContent>
    </Card>
  );
}
