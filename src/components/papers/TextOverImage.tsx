import * as React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Image from 'next/image';

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
      {/* <img src={data.imageLink} alt={data.alt} loading='lazy' /> */}
      <Image src={data.imageLink} alt={data.alt} loading='lazy' width={420} height={280} />
      <Box className='text'>
        <Typography variant='h3'>{data.title}</Typography>
      </Box>
    </Paper>
  );
}
