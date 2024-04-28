import * as React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface TextOverImageProps {
  data: {
    id: string;
    title: string;
    imageLink: string;
    alt: string;
  };
}

export default function TextOverImage({ data }: TextOverImageProps) {
  return (
    <Paper elevation={3} className='TextOverImageComponent'>
      <img src={data.imageLink} alt={data.alt} loading='lazy' />
      <Box className='text'>
        <Typography variant='h3'>{data.title}</Typography>
      </Box>
    </Paper>
  );
}
