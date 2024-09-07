import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/compass-in-hand.jpg'
          alt='Maps on table'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>
              Expert vacation planning
              <br /> for ultimate relaxation
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 0 auto', fontWeight: '400', textAlign: 'center' }}
      >
        Experience the best vacation planning service, where you can relax and enjoy your adventures
        without any worries.
      </Typography>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '0 auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        Let us handle the details while you make lasting memories!
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            At our service, we tailor each trip to your preferences, managing activity reservations,
            accommodations, and transportation, so you can relax and enjoy your vacation.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            We offer flexible options, whether you want a fully customized experience or a
            pre-planned itinerary. We aim to turn your dream vacation into reality with
            high-quality, personalized service.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            Transparency and quality guide our work. We carefully select the best accommodations and
            transport options, ensuring a seamless and enjoyable experience tailored to your needs.
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Typography variant='h2' sx={{ m: 0 }}>
            Our services
          </Typography>
        </Grid>

        <Grid xs={12} lg={6}>
          <Typography variant='h3' sx={{ mb: 2 }}>
            Create vacation
          </Typography>
          <Typography variant='body1' className='text'>
            With this service, you have the freedom to choose your activities, and we&apos;ll handle
            the rest. We&apos;ll book your activities and can also find accommodations for you,
            offering a selection of clean, well-equipped standard or luxury options. This service
            costs €34.
          </Typography>

          <Typography variant='body1' className='text'>
            We can also arrange transportation with standard or luxury vehicles, all in excellent
            condition. The transportation service is €34. Additionally, we&apos;ll recommend dining
            options, whether in restaurants or at your hotel.
          </Typography>
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography variant='h3' sx={{ mb: 2 }}>
            Predefined vacations
          </Typography>
          <Typography variant='body1' className='text'>
            For those who prefer a set itinerary, we offer predefined vacation packages. These
            vacations come with a fully planned schedule of activities, allowing you to simply
            select your departure date and enjoy a worry-free experience. Everything is taken care
            of, so all you need to do is pack your bags and go.
          </Typography>

          <Typography variant='body1' className='text'>
            Both services allow you to choose the start date and specify the number of people in
            your group, ensuring that the vacation is tailored to your needs.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
