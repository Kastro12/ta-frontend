import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { button, orangeButton } from '@/utils/re-styledComponents';
import Link from 'next/link';

interface SliderBarProps {
  data: {
    id: string;
    title: string;
    description: string;
    imageLink: string;
    alt: string;
  };
}

export default function CreatedRoute({ data }: SliderBarProps) {
  return (
    <Paper elevation={3} className='CreatedRouteComponent'>
      <Box className='content'>
        <Box className='text'>
          <Typography variant='h3'>Adventure from north to south</Typography>
          <Typography variant='subtitle1'>9 days, 5 locations</Typography>
          <Button
            sx={{ ...button, ...orangeButton }}
            variant='outlined'
            href={'./'}
            LinkComponent={Link}
            size='small'
          >
            View more
          </Button>
        </Box>
        <img
          src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
          alt={'couple near car in nature'}
          loading='lazy'
        />
      </Box>
    </Paper>
  );
}
