'use client';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheDate } from '@/store/vacation/vacationReducer';
import OrganizerOfTheDaysForm from './forms/OrganizerOfTheDaysForm';
import { Container, Typography, Tab, Tabs } from '@mui/material';
import { Navbar, Footer } from '@/sections';
import Grid from '@mui/material/Unstable_Grid2';
import theme from '@/utils/re-styledComponents/theme';
import { ThemeProvider } from '@mui/material/styles';
import CalendarForm from './forms/CalendarForm';
import { allActivities, activityCategories, activityLocations } from '@/data';
import { RootState } from '@/store/store';
import { InputSelect } from '@/forms/components';

import BoxOfActivity from './components/BoxOfActivity';

import { useForm } from 'react-hook-form';

interface IFormInput {
  textValue: string;
  radioValue: string;
}

export default function Activities() {
  const dispatch = useDispatch();

  // const startDate = useSelector((state: RootState) => state.vacation.startDate);
  // const handleClick = () => {
  //   dispatch(changeTheDate({ type: 'startDate', date: '12.12.2024' }));
  // };

  const startDate = useSelector((state: RootState) => state.vacation.chosenActivities);

  const [currentTab, setCurrentTab] = useState<number>(0);

  const activitiesLength = allActivities.length;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const { control } = useForm<IFormInput>();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
        <Typography variant='h1' sx={{ my: 6 }}>
          Create your Vacation
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ mb: 6 }}
          className='mobile_column_desktop_row-reverse_flex'
        >
          <Grid sm={12} md={6}>
            <OrganizerOfTheDaysForm />
          </Grid>
          <Grid sm={12} md={6} sx={{ width: '100%' }}>
            <CalendarForm />
          </Grid>
        </Grid>

        <Typography variant='h2'>Activity offer ({activitiesLength})</Typography>
        <div className='action-filter-wrapper'>
          <div className='field'>
            <InputSelect
              options={activityCategories}
              name={'category'}
              control={control}
              label={'Category'}
            />
          </div>
          <div className='field'>
            <InputSelect
              options={activityLocations}
              name={'location'}
              control={control}
              label={'Location'}
            />
          </div>
        </div>
        <div className='standard-box-wrapper'>
          {allActivities.map((data) => (
            <BoxOfActivity data={data} key={data.id} />
          ))}
        </div>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
