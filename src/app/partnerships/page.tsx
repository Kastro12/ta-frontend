'use client';
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { button, greenButton } from '@/utils/re-styledComponents';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Image from 'next/image';

export default function Partnerships() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/partnership.jpg'
          alt='partnership'
          style={{ objectFit: 'cover' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>Partnership with us</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        Join forces for mutual success
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            We are always open to forming new partnerships and collaborations in our field. Whether
            you are an individual, a company, or an organization, we believe in the power of working
            together to achieve mutual success.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            Our team is dedicated to building strong and fruitful relationships that benefit all
            parties involved. By partnering with us, you will gain access to our extensive network,
            resources, and expertise in vacation planning and management. Together, we can create
            unique and unforgettable experiences for our clients.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            If you are interested in exploring potential collaboration opportunities, please feel
            free to reach out to us using the{' '}
            <Link className='green' href={'/contact'}>
              contact form
            </Link>
            . We look forward to hearing from you and discussing how we can work together to achieve
            our shared goals.
          </Typography>
        </Grid>

        <Grid md={12} sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
          <Button
            startIcon={<MailOutlineOutlinedIcon />}
            sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '16px' } }}
            variant='outlined'
            LinkComponent={Link}
            href='/contact'
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
