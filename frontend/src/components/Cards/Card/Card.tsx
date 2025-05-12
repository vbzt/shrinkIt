import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface CardProps {
  stats: string;
  title: string;
  description: string;
}

export default function OutlinedCard({ title, stats, description }: CardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Exemplo de breakpoint

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}> {/* Centraliza o card */}
      <Card
        variant="outlined"
        sx={{
          p: 2,
          width: isMobile ? '90%' : 300, // Largura responsiva
          height: 220,
          borderWidth: 3,
          borderRadius: 2,
          borderColor: '#e4e4e4',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
            {title}
          </Typography>

          <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 600, color: '#6D4FB5', mt: 1 }}> {/* Tamanho da fonte responsivo */}
            {stats}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}