'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Button, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Grid from '@mui/material/Grid2';
import { button, greenButton } from '@/utils/re-styledComponents';
import CalendarFormWithHandleCalendarDate from '../_forms/CalendarFormWithHandleCalendarDate';
import NumberOfPersonsFormWithHandle from '../_forms/NumberOfPersonsFormWithHandle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  addPredefinedVacation,
  changeRadioGroup,
} from '@/store/vacation/predefinedVacationReducer';
import { useRouter } from 'next/navigation';
import { Activity } from '@/utils/interfaces';
import allActivities from '@/data/activities/allActivities';
import DailyOrganizationBox from './DailyOrganizationBox';
import { PredefinedVacationProps } from '@/data/organizedVacations';
import ChooseServicesForm from '@/forms/chooseServices/ChooseServicesForm';
import { useTranslations } from 'next-intl';

interface PredefinedVacationTemplateProps {
  organizedVacation: PredefinedVacationProps;
}

export default function PredefinedVacationTemplate({
  organizedVacation,
}: PredefinedVacationTemplateProps) {
  const organizedVacationsT = useTranslations(organizedVacation?.translationKey);
  const globalT = useTranslations('global');

  const [isBookAlertActive, setIsBookAlertActive] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const bookVacationRef = useRef<HTMLSpanElement>(null);
  const startDate = useSelector((state: RootState) => state.predefinedVacation.startDate);

  const uniqueLocations: { location: string }[] = [];
  const seenLocations = new Set();

  const uniqueActivities = organizedVacation?.activities.map((activity: { id: string }) => {
    return allActivities.find((all: Activity) => all.id == activity.id);
  });

  uniqueActivities.forEach((item) => {
    if (item)
      if (!seenLocations.has(item.location)) {
        seenLocations.add(item.location);
        uniqueLocations.push({ location: item.location });
      }
  });

  useEffect(() => {
    dispatch(addPredefinedVacation(organizedVacation.id));
  }, []);

  let errorAlert = null;

  if (!startDate) {
    errorAlert = 'Choose the start date.';
  }

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ m: '60px auto 0 auto', maxWidth: '600px' }}>
        {organizedVacationsT('title')}
      </Typography>

      <Typography
        variant='body1'
        sx={{
          maxWidth: '640px',
          m: '32px auto 32px auto',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '28px',
        }}
      >
        {organizedVacationsT('description')}
      </Typography>

      <div className='daily-organization'>
        <Typography variant='h2'>{globalT('Daily organization')}</Typography>

        <div className='items'>
          {organizedVacation.dailyOrganization.map((item) => (
            <DailyOrganizationBox
              key={item.id}
              title={organizedVacationsT(`dailyOrganization.${item?.translationKey}.title`)}
              description={organizedVacationsT.rich(
                `dailyOrganization.${item?.translationKey}.description`,
                {
                  p: (chunks) => <p>{chunks}</p>,
                  strong: (chunks) => <strong>{chunks}</strong>,
                  br: () => <br />,
                },
              )}
              // description={organizedVacationsT(`dailyOrganization.${item?.translationKey}.description`)}
              images={item.images}
              id={item.id}
            />
          ))}
        </div>
        <span className='__' ref={bookVacationRef}></span>
      </div>

      <Typography variant='h2' sx={{ mt: 6 }}>
        {globalT('Summary')}
      </Typography>

      <div className='vacation-summary'>
        <div className='box'>
          <Typography variant='h3'>{globalT('Activities')}</Typography>
          <ul>
            {uniqueActivities.map((activity: Activity | undefined) => (
              <li key={activity?.title}>{activity?.title}</li>
            ))}
          </ul>
        </div>

        <div className='box'>
          <Typography variant='h3'>{globalT('Locations')}</Typography>
          <ul>
            {uniqueLocations.map((location) => (
              <li key={location.location}>{location.location}</li>
            ))}
          </ul>
        </div>

        <div className='box'>
          <Typography variant='h3'>{globalT('Duration')}</Typography>
          <Typography variant='body1' sx={{ fontSize: '15px' }}>
            {organizedVacation.dailyOrganization.length} {globalT('duration_description')}
          </Typography>
        </div>

        <div className='box'>
          <Typography variant='h3'>{globalT('Price overview')}:</Typography>

          <ul className='price'>
            <li>
              {globalT('Activities')} + €34 {globalT('booking fee')}
            </li>
            <li>
              {globalT('Accommodation')} + €34 {globalT('booking fee')}{' '}
              <span>({globalT('optional')})</span>
            </li>
            <li>
              {globalT('Transportation')} + €34 {globalT('booking fee')}{' '}
              <span>({globalT('optional')})</span>
            </li>
          </ul>
        </div>
      </div>

      <Typography variant='h2' sx={{ textAlign: 'center', marginTop: '60px' }}>
        Fill out the form and book your vacation
      </Typography>

      <div className='form-background in-container calendar-persons'>
        <div className='form-calendar-persons'>
          <CalendarFormWithHandleCalendarDate
            duration={organizedVacation.dailyOrganization.length}
          />
          <NumberOfPersonsFormWithHandle />
          <div style={{ position: 'absolute', bottom: '42px' }} id='activity-offer'></div>
        </div>
        <ChooseServicesForm changeRadioGroup={changeRadioGroup} />
      </div>

      <Grid container>
        <Grid size={{ md: 12 }} sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
          <Button
            sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '32px' } }}
            variant='outlined'
            onClick={() => {
              if (startDate) {
                router.push(
                  '/predefined-vacations/challenge-and-hedonism-adventure-vacation/book-vacation',
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
