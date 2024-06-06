import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { button, linkGreenButton } from '@/utils/re-styledComponents';
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
    <Link className='CreatedRouteComponent' href={'./'}>
      {/* <Paper elevation={3} className='CreatedRouteComponent'> */}
      <Box className='content'>
        <Box className='text'>
          <Typography variant='h3'>Adventure from north to south</Typography>
          <Typography variant='subtitle1'>9 days, 5 locations</Typography>
          <Button
            sx={{ ...button, ...linkGreenButton, width: '80px' }}
            variant='outlined'
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
      {/* </Paper> */}
    </Link>
  );
}
