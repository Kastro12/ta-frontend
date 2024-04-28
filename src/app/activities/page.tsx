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
import ActivityOffer from './components/ActivityOffer';
import ChosenActivities from './components/ChosenActivities';

export default function Activities() {
  const dispatch = useDispatch();

  // const startDate = useSelector((state: RootState) => state.vacation.startDate);
  // const handleClick = () => {
  //   dispatch(changeTheDate({ type: 'startDate', date: '12.12.2024' }));
  // };

  let [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue);
    setCurrentTab(newValue);
  };

  const tabsComponent = useMemo(
    () => (
      <Tabs
        sx={{ mb: 5 }}
        value={currentTab}
        onChange={handleChange}
        centered
        className='custom-tabs'
      >
        <Tab label='Activity offer' />
        <Tab label='Chosen activities' />
      </Tabs>
    ),
    [currentTab]
  );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 3 }}>
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
        {tabsComponent}
        <ActivityOffer value={currentTab} index={0} />
        <ChosenActivities value={currentTab} index={1} />
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
