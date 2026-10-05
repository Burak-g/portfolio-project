'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({ icon, title, value, href }: ContactCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 1,
        paddingX: 1,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}>
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'center',
        }}>
        <Box sx={{ color: 'primary.main', fontSize: 48 }}>{icon}</Box>

        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>

        {href ? (
          <Typography
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.secondary',
              textDecoration: 'underline', overflowWrap: 'anywhere',
              '&:hover': {
                color: 'primary.main',
              },
            }}>
            {value}
          </Typography>
        ) : (
          <Typography color="text.secondary">{value}</Typography>
        )}
      </CardContent>
    </Card>
  );
}

