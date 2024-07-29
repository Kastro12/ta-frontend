import * as React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { button, linkGreenButton } from '@/utils/re-styledComponents';
import Link from 'next/link';
import { truncateText } from '@/utils/string';

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
      <Box className='content'>
        <Box className='text'>
          <Typography variant='h3'>{data.title}</Typography>
          <Typography variant='subtitle1'>
            {truncateText({ text: data.description, maxLength: 200 })}
          </Typography>
          <Button
            sx={{ ...button, ...linkGreenButton, width: '90px' }}
            variant='outlined'
            size='small'
          >
            Read more
          </Button>
        </Box>
        <img src={data.imageLink} alt={data.alt} loading='lazy' />
      </Box>
    </Link>
  );
}
