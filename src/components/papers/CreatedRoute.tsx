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
    link: string;
  };
}

export default function CreatedRoute({ data }: SliderBarProps) {
  return (
    <Link className='CreatedRouteComponent' href={data.link}>
      {/* <Paper elevation={3} className='CreatedRouteComponent'> */}
      <Box className='content'>
        <Box className='text'>
          <Typography variant='h3'>{data.title}</Typography>
          <Typography variant='subtitle1'>{data.description}</Typography>
          <Button
            sx={{ ...button, ...linkGreenButton, width: '80px' }}
            variant='outlined'
            size='small'
          >
            View more
          </Button>
        </Box>
        <img src={data.imageLink} alt={data.alt} loading='lazy' />
      </Box>
      {/* </Paper> */}
    </Link>
  );
}
