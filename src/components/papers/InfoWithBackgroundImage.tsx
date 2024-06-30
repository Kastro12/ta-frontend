'use client';
import * as React from 'react';
import { Typography, Button } from '@mui/material';
import { GalleryWithCarousel } from '../../components';
import Link from 'next/link';
import { button, linkGreenButton } from '@/utils/re-styledComponents';

export default function InfoWithBackgroundImage({
  title,
  description,
  images,
  link,
}: {
  title: string;
  description: string;
  images: { imgLink: string; alt: string }[];
  link: string;
}) {
  return (
    <div className='TextImage1 categoryBox'>
      <div className='text'>
        <div>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </div>
        <div className='button-wrap'>
          <Button
            sx={{ ...button, ...linkGreenButton }}
            variant='outlined'
            size='small'
            LinkComponent={Link}
            href={link}
          >
            {title} activities
          </Button>
        </div>
      </div>
      <div className='image'>
        <GalleryWithCarousel images={images} />
      </div>
    </div>
  );
}
