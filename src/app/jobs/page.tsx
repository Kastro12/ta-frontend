import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';

export default function Jobs() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <img
          src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
          alt='couple near car in nature'
          loading='lazy'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>Join Our Team</Typography>
          </Grid>
        </div>
      </Grid>

      <Grid container spacing={4}>
        <Grid xs={12} lg={12}>
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
