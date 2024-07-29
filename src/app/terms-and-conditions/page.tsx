import React from 'react';
import { Container, Typography } from '@mui/material';

export default function AboutUs() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '32px' }}>
        Terms and conditions
      </Typography>

      <Typography variant='h2'>1. Introduction</Typography>

      <Typography variant='body1'>
        Welcome to [Your Company Name]. By accessing and using our services, you agree to comply
        with and be bound by the following terms and conditions. Please review them carefully.
      </Typography>

      <Typography variant='h2'>2. Booking and reservations</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Booking Process:</strong> All bookings are made through our website or contact form.
        By completing a booking, you agree to these terms and conditions.
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Payment:</strong> Full payment or a deposit is required to confirm your booking.
        Payment details will be provided via email.
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Cancellation policy:</strong> Cancellations must be made in writing. Refunds are
        subject to our cancellation policy, detailed below.
      </Typography>

      <Typography variant='h2'>3. Cancellation and refunds</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Client-Initiated cancellations:</strong> If you cancel your booking, refunds will be
        processed according to the following schedule:
      </Typography>

      <ul style={{ marginBottom: '12px', paddingLeft: '30px', listStyle: 'disc' }}>
        <li>
          <Typography variant='body1'>
            Cancellations made more than 30 days before the start date: Full refund minus a
            processing fee.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Cancellations made 15-30 days before the start date: 50% refund.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Cancellations made less than 15 days before the start date: No refund.
          </Typography>
        </li>
      </ul>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Company-Initiated cancellations:</strong> If we need to cancel your booking due to
        unforeseen circumstances, we will provide a full refund or offer alternative dates.
      </Typography>

      <Typography variant='h2'>4. Changes to booking</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Client-Initiated changes:</strong> Requests to change booking dates or details must
        be made in writing. We will accommodate changes when possible, but additional fees may
        apply.
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Company-Initiated changes:</strong> We reserve the right to make necessary changes
        to your itinerary due to circumstances beyond our control. We will notify you as soon as
        possible and offer alternative arrangements.
      </Typography>

      <Typography variant='h2'>5. Accommodation and dining</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Quality assurance:</strong> We strive to provide high-quality accommodation and
        dining experiences. However, we cannot guarantee specific standards as they depend on
        third-party providers.
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Client responsibility:</strong> It is your responsibility to inform us of any
        dietary restrictions or preferences.
      </Typography>

      <Typography variant='h2'>6. Transportation</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Vehicles and drivers:</strong> We provide luxury vehicles and professional drivers
        to ensure safe and comfortable transportation. We are not liable for delays caused by
        traffic, weather, or other unforeseen events.
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Client responsibility:</strong> Clients must be ready at the designated times for
        transportation services. Delays may result in additional charges.
      </Typography>

      <Typography variant='h2'>7. Activities and itineraries</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Activity participation:</strong> Participation in activities is at your own risk. We
        are not responsible for injuries or accidents that occur during activities.
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Changes to itineraries:</strong> We reserve the right to alter itineraries due to
        weather, safety concerns, or other factors. Clients will be notified of any changes as soon
        as possible.
      </Typography>

      <Typography variant='h2'>8. Health and safety</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Company Responsibility:</strong> We prioritize client safety and will take necessary
        precautions. However, we are not liable for injuries or accidents beyond our control.
      </Typography>
      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Client responsibility:</strong> Clients must inform us of any medical conditions or
        special requirements. We recommend purchasing travel insurance.
      </Typography>

      <Typography variant='h2'>9. Privacy and data protection</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Data collection:</strong> We collect personal information necessary for booking and
        providing our services. We are committed to protecting your privacy.
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Data Use:</strong> Your data will not be shared with third parties except as
        necessary to provide our services.
      </Typography>

      <Typography variant='h2'>10. Complaints and disputes</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Complaints:</strong> Any complaints must be made in writing within 7 days of the end
        of your vacation. We will investigate and respond promptly.
      </Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        <strong>Dispute Resolution:</strong> Any disputes arising from these terms and conditions
        will be resolved through negotiation. If necessary, disputes may be referred to arbitration
        or the appropriate legal jurisdiction.
      </Typography>

      <Typography variant='h2'>11. Governing law and jurisdiction:</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        These Terms and Conditions are governed by and construed by the laws of [Your
        Country/Region]. By using our services, the user agrees that any disputes arising from or in
        connection with these Terms and Conditions will be subject to the exclusive jurisdiction of
        the courts of [Your Country/Region].
      </Typography>

      <Typography variant='h2'>12. Contact Information:</Typography>

      <Typography variant='body1' sx={{ mb: 1 }}>
        For any questions or concerns regarding these terms and conditions, please contact us at:
      </Typography>

      <ul style={{ marginBottom: '12px', paddingLeft: '30px', listStyle: 'disc' }}>
        <li>
          <Typography variant='body1'>
            <strong>Email:</strong> [Your Email Address]
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            <strong>Phone:</strong> [Your Phone Number]
          </Typography>
        </li>
      </ul>
    </Container>
  );
}
