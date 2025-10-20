import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { button, linkGreenButton, greenButton } from '@/utils/re-styledComponents';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { getTranslations } from 'next-intl/server';

export default async function AboutUs() {
  const termsT = await getTranslations('termsAndConditions');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '32px' }}>
        {termsT('mainTitle')}
      </Typography>

      <Typography variant='h2'>1. {termsT('introduction.title')}:</Typography>

      <Typography variant='body1'>{termsT('introduction.text1')}</Typography>

      <Typography variant='h2'>2. {termsT('bookingAndReservations.title')}:</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('bookingAndReservations.text1')}
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('bookingAndReservations.text2')}
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('bookingAndReservations.text3')}
      </Typography>

      <Typography variant='h2'>3. {termsT('cancellationAndRefunds.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('cancellationAndRefunds.text1')}
      </Typography>

      <ul style={{ marginBottom: '12px', paddingLeft: '30px', listStyle: 'disc' }}>
        <li>
          <Typography variant='body1'>{termsT('cancellationAndRefunds.ul1.li1')}</Typography>
        </li>
        <li>
          <Typography variant='body1'>{termsT('cancellationAndRefunds.ul1.li2')}</Typography>
        </li>
        <li>
          <Typography variant='body1'>{termsT('cancellationAndRefunds.ul1.li3')}</Typography>
        </li>
      </ul>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('cancellationAndRefunds.text2')}
      </Typography>

      <Typography variant='h2'>4. {termsT('changesToBooking.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('changesToBooking.text1')}
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('changesToBooking.text2')}
      </Typography>

      <Typography variant='h2'>5. {termsT('accommodation.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('accommodation.text1')}
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('accommodation.text2')}
      </Typography>

      <Typography variant='h2'>6. {termsT('transportation.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('transportation.text1')}
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('transportation.text2')}
      </Typography>

      <Typography variant='h2'>7. {termsT('activitiesAndItineraries.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('activitiesAndItineraries.text1')}
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('activitiesAndItineraries.text2')}
      </Typography>

      <Typography variant='h2'>8. {termsT('healthAndSafety.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('healthAndSafety.text1')}
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('healthAndSafety.text2')}
      </Typography>

      <Typography variant='h2'>9. {termsT('privacyAndDataProtection.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('privacyAndDataProtection.text1')}
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('privacyAndDataProtection.text2')}
      </Typography>

      <Typography variant='h2'>10. {termsT('complaintsAndDisputes.title')}</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('complaintsAndDisputes.text1')}
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('complaintsAndDisputes.text2')}
      </Typography>

      <Typography variant='h2'>11. {termsT('governingLawAndJurisdiction.title')}:</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('governingLawAndJurisdiction.text1')}
      </Typography>

      <Typography variant='h2'>12. {termsT('contactInformation.title')}:</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        {termsT('contactInformation.text1')}
      </Typography>

      <ul style={{ marginBottom: '12px', paddingLeft: '0px' }}>
        <li>
          <Typography variant='body1'>
            <Button
              startIcon={<MailOutlineOutlinedIcon />}
              sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '16px', mb: '9px' } }}
              variant='outlined'
              LinkComponent={Link}
              href='/contact'
            >
              {termsT('contactInformation.buttonLabel')}
            </Button>
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            <Button
              sx={{ ...button, ...linkGreenButton }}
              variant='outlined'
              LinkComponent={Link}
              href={'mailto:tailormadevacationserbia@gmail.com'}
            >
              tailormadevacationserbia@gmail.com
            </Button>
          </Typography>
        </li>
      </ul>
    </Container>
  );
}
