import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function Staff() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/team_of_5_people.jpg'
          alt='team of 5 people'
          loading='lazy'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          width={1141}
          height={400}
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>Meet our staff</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        Dedicated professionals committed to your experience.
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            At &apos;Tailor-made vacations&apos;, our staff consists of highly trained and
            experienced professionals who are dedicated to ensuring you have an unforgettable
            experience. Our guides are not only experts in their fields but also passionate about
            sharing their knowledge and making your journey enjoyable and informative.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            Each member of our team is here to assist you every step of the way, from planning your
            activities to providing support during your vacation. Their expertise and commitment to
            excellence guarantee that you will receive the highest quality service.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            We pride ourselves on having a team that is friendly, approachable, and ready to go the
            extra mile to meet your needs. Rest assured, with &apos;Tailor-made vacations&apos;, you
            are in the best hands.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant='h2'>Team members</Typography>

      <Grid container spacing={4} className='team_members'>
        <Grid xs={12} sm={6} lg={3}>
          <div className='content'>
            <Image
              src='/staff/aleksandar.jpg'
              alt='aleksandar'
              loading='lazy'
              width={500}
              height={280}
            />
            <Typography variant='h3'>Aleksandar</Typography>
            <Typography variant='h4'>CEO</Typography>
          </div>
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <div className='content'>
            <Image src='/staff/elena.jpg' alt='elena' loading='lazy' width={500} height={280} />
            <Typography variant='h3'>Elena</Typography>
            <Typography variant='h4'>Biologist</Typography>
          </div>
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <div className='content'>
            <Image src='/staff/drago.jpg' alt='Dragoje' loading='lazy' width={500} height={280} />
            <Typography variant='h3'>Dragoje</Typography>
            <Typography variant='h4'>Medical doctor</Typography>
          </div>
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <div className='content'>
            <Image
              src='/staff/marijana.jpg'
              alt='couple near car in nature'
              loading='lazy'
              width={500}
              height={280}
            />
            <Typography variant='h3'>Marijana</Typography>
            <Typography variant='h4'>Medical doctor</Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
