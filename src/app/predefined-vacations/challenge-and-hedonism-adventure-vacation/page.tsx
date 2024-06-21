'use client';
import React, { useRef, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { button, greenButton } from '@/utils/re-styledComponents';
import { challengeAndHedonism } from '@/data/organizedVacations';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import CalendarFormWithHandleCalendarDate from '../_forms/CalendarFormWithHandleCalendarDate';
import NumberOfPersonsFormWithHandle from '../_forms/NumberOfPersonsFormWithHandle';

import { addPredefinedVacation } from '@/store/vacation/predefinedVacationReducer';

export default function BookVacation() {
  const dispatch = useDispatch();
  const bookVacationRef = useRef<HTMLSpanElement>(null);

  const handleScrollToBookVacation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (bookVacationRef.current) {
      bookVacationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const uniqueLocations: { location: string }[] = [];
  const seenLocations = new Set();

  const uniqueActivities: { activityTitle: string }[] = [];
  const seenActivities = new Set();

  challengeAndHedonism.dailyOgranization.forEach((item) => {
    if (!seenLocations.has(item.location)) {
      seenLocations.add(item.location);
      uniqueLocations.push({ location: item.location });
    }

    if (!seenActivities.has(item.activityTitle)) {
      seenActivities.add(item.activityTitle);
      uniqueActivities.push({ activityTitle: item.activityTitle });
    }
  });

  useEffect(() => {
    dispatch(addPredefinedVacation(challengeAndHedonism.title));
  }, []);

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
        Perfect for adventurers seeking both adrenaline and indulgence. Enjoy hiking, mountain
        biking, and other exciting activities, followed by luxurious relaxation and gourmet
        experiences.
      </Typography>

      <div className='vacation-summary'>
        <div className='box'>
          <Typography variant='h2'>Activities</Typography>
          <ul>
            {uniqueActivities.map((activity) => (
              <li key={activity.activityTitle}>{activity.activityTitle}</li>
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
            <div className='item' key={item.id}>
              <div className='text'>
                <h3>{item.title}</h3>
                <Typography variant='body1'>{item.description}</Typography>
              </div>
              <div className='image'>
                <img src={item.imageLink} alt={item.alt} loading='lazy' />
              </div>
            </div>
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
        <Grid md={12} sx={{ width: '100%', textAlign: 'center' }}>
          <Button
            sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '32px' } }}
            variant='outlined'
            href='/predefined-vacations/challenge-and-hedonism-adventure-vacation/book-vacation'
            LinkComponent={Link}
          >
            Book now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
