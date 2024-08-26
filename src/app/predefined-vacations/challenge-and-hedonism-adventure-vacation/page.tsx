'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Button, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Grid from '@mui/material/Unstable_Grid2';
import { button, greenButton } from '@/utils/re-styledComponents';
import { challengeAndHedonism } from '@/data/organizedVacations';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import CalendarFormWithHandleCalendarDate from '../_forms/CalendarFormWithHandleCalendarDate';
import NumberOfPersonsFormWithHandle from '../_forms/NumberOfPersonsFormWithHandle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { addPredefinedVacation } from '@/store/vacation/predefinedVacationReducer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Activity } from '@/utils/interfaces';
import allActivities from '@/data/activities/allActivities';
import DailyOrganizationBox from '../_components/DailyOrganizationBox';


export default function BookVacation() {
  const [isBookAlertActive, setIsBookAlertActive] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const bookVacationRef = useRef<HTMLSpanElement>(null);
  const startDate = useSelector((state: RootState) => state.predefinedVacation.startDate);
  const handleScrollToBookVacation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (bookVacationRef.current) {
      bookVacationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const uniqueLocations: { location: string }[] = [];
  const seenLocations = new Set();

  const uniqueActivities = challengeAndHedonism?.activities.map((activity: { id: string }) => {
    return allActivities.find((all: Activity) => all.id == activity.id);
  });

  console.log('uniqueActivities', uniqueActivities);

  uniqueActivities.forEach((item) => {
    if (item)
      if (!seenLocations.has(item.location)) {
        seenLocations.add(item.location);
        uniqueLocations.push({ location: item.location });
      }
  });

  console.log('uniqueLocations', uniqueLocations);

  useEffect(() => {
    dispatch(addPredefinedVacation(challengeAndHedonism.title));
  }, []);

  let errorAlert = null;

  if (!startDate) {
    errorAlert = 'Choose the start date and number of people.';
  }

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
          alt='couple near car in nature'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>
              Challenge and hedonism
              <br /> adventure vacation
            </Typography>
          </Grid>
          <Grid md={12} sx={{ textAlign: 'center' }}>
            <Button
              sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '16px' } }}
              variant='outlined'
              onClick={handleScrollToBookVacation}
              endIcon={<ArrowCircleDownOutlinedIcon />}
            >
              Book a vacation
            </Button>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        {challengeAndHedonism.description}
      </Typography>

      <div className='vacation-summary'>
        <div className='box'>
          <Typography variant='h2'>Activities</Typography>
          <ul>
            {uniqueActivities.map((activity: Activity | undefined) => (
              <li key={activity?.title}>{activity?.title}</li>
            ))}
          </ul>
        </div>

        <div className='box'>
          <Typography variant='h2'>Locations</Typography>
          <ul>
            {uniqueLocations.map((location) => (
              <li key={location.location}>{location.location}</li>
            ))}
          </ul>
        </div>

        <div className='box'>
          <Typography variant='h2'>Duration</Typography>
          <Typography variant='body1'>
            {challengeAndHedonism.dailyOgranization.length} days, you choose started day
          </Typography>
        </div>

        <div className='box'>
          <Typography variant='h2'>Price</Typography>
          <Typography variant='body1'>
            3000&#8364; - <span className='info'>Price does not include flight cost</span>
          </Typography>
        </div>
      </div>

      <div className='daily-organization'>
        <Typography variant='h2'>Daily organization</Typography>

        <div className='items'>
          {challengeAndHedonism.dailyOgranization.map((item) => (
            <DailyOrganizationBox
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
        <span className='__' ref={bookVacationRef}></span>
      </div>

      <Typography variant='h2' sx={{ textAlign: 'center', marginTop: '60px' }}>
        Choose the start date and number of people
      </Typography>

      <div className='form-background in-container calendar-persons'>
        <div className='form-calendar-persons'>
          <CalendarFormWithHandleCalendarDate
            duration={challengeAndHedonism.dailyOgranization.length}
          />
          <NumberOfPersonsFormWithHandle />
          <div style={{ position: 'absolute', bottom: '42px' }} id='activity-offer'></div>
        </div>
      </div>

      <Grid container>
        <Grid md={12} sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
          <Button
            sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '32px' } }}
            variant='outlined'
            onClick={() => {
              if (startDate) {
                router.push(
                  '/predefined-vacations/challenge-and-hedonism-adventure-vacation/book-vacation'
                );
              } else {
                setIsBookAlertActive(true);

                setTimeout(() => {
                  setIsBookAlertActive(false);
                }, 5000);
              }
              return;
            }}
          >
            Book now
          </Button>

          {errorAlert && isBookAlertActive && (
            <Alert
              className='standard_alert_near_button '
              severity='warning'
              icon={<InfoOutlinedIcon fontSize='small' />}
            >
              {errorAlert}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
