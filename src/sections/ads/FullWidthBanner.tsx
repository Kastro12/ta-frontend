import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';

const adsBanner = {
  link: '/',
  title: null,
  description: null,
  image: {
    alt: 'Seosko domacinstvo Kastratovic Crna Gora',
    link: '/activities/relaxation_and_flavors/selo/kastratovic/ads/seosko-domacinstvo-kastratovic.webp',
    mobileLink:
      '/activities/relaxation_and_flavors/selo/kastratovic/ads/seosko-domacinstvo-kastratovic-mobile.webp',
  },
};

const FullWidthBanner = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 600;
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Link className='FullWidthBanner' href={adsBanner.link}>
      {isMobile === null ? (
        <>
          <CircularProgress size='3rem' />
        </>
      ) : (
        <>
          <Image
            src={isMobile ? adsBanner.image.mobileLink : adsBanner.image.link}
            alt={adsBanner.image.alt}
            style={{ objectFit: 'cover', borderRadius: '4px' }}
            fill
            priority
          />
          <div className='content'>
            {(adsBanner.title || adsBanner.description) && (
              <Grid size={{ md: 12 }} className='titles'>
                {adsBanner.title && <Typography variant='h1'>{adsBanner.title}</Typography>}
                {adsBanner.description && <h2>{adsBanner.description}</h2>}
              </Grid>
            )}
          </div>
        </>
      )}
    </Link>
  );
};

export default FullWidthBanner;
