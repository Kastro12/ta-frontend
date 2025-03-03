import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';
import Image from 'next/image';

export default function Jobs() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/join_our_team.jpg'
          alt='join our team'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid size={{ md: 12 }} className='titles'>
            <Typography variant='h1'>Join Our Team</Typography>
          </Grid>
        </div>
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
            <NoAccountsOutlinedIcon sx={{ fontSize: '86px', color: '#dee2e6' }} />
          </div>

          <Typography
            variant='body1'
            sx={{
              m: '16px auto 0 auto',
              textAlign: 'center',
            }}
          >
            Currently, there are no open positions available.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
