'use client';
import { Container, Typography } from '@mui/material';
import ContactForm from './forms/ContactForm';

export default function Contact() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '32px' }}>
        Contact
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '940px', m: '0px auto 12px auto', fontWeight: '300', textAlign: 'center' }}
      >
        Head office: Kralja Aleksandra 163 11000 Belgrade, Serbia
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '940px', m: '0 auto 32px auto', fontWeight: '300', textAlign: 'center' }}
      >
        Telephone: +44 7987 030 451
      </Typography>

      <div className='form-background in-container' style={{ maxWidth: '940px', margin: '0 auto' }}>
        <div className='form-personal-data'>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
