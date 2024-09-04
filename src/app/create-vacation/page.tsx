'use client';
import { useRef, useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import CalendarFormWithHandleCalendarDate from './forms/CalendarFormWithHandleCalendarDate';
import NumberOfPersonsFormWithHandle from './forms/NumberOfPersonsFormWithHandle';
import ChooseServicesForm from '@/forms/chooseServices/ChooseServicesForm';

import FilterForm from './forms/FilterForm';
import BoxOfActivity from './components/BoxOfActivity';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { Activity } from '@/utils/interfaces';
import {
  updateActivitiesToDisplay,
  updateCurrentPage,
  clearActivities,
} from '@/store/activities/activitiesReducer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import AddActivityDialog from '@/components/dialog/AddActivityDialog';
import ZoomedBoxOfActivity from './components/ZoomedBoxOfActivity';
import { Alert } from '@/components';
import { changeRadioGroup } from '@/store/vacation/vacationReducer';

export default function Activities() {
  const dispatch = useDispatch();

  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const ACTIVITY_LIST_SIZE = useSelector((state: RootState) => state.activities.activityListSize);
  const activityList = useSelector((state: RootState) => state.activities.activityList);
  const currentPage = useSelector((state: RootState) => state.activities.currentPage);
  const activitiesLength = activityList?.length;
  const activitiesToDisplay = useSelector(
    (state: RootState) => state.activities.activitiesToDisplay
  );

  const pageAlert = useSelector((state: RootState) => state.alerts.pageAlert);

  const [IsAllActivitiesLoaded, setIsAllActivitiesLoaded] = useState<boolean>(false);

  const loader = useRef(null);

  const loadMoreData = (data: Activity[] | null, page: number, itemsPerPage: number) => {
    if (data === null) return;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  useEffect(() => {
    return () => {
      dispatch(clearActivities());
    };
  }, []);

  useEffect(() => {
    if (IsAllActivitiesLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(updateCurrentPage(currentPage + 1));
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [IsAllActivitiesLoaded, currentPage]);

  // load new activities by scroll
  useEffect(() => {
    const fetchData = async () => {
      const newActivities = await loadMoreData(activityList, currentPage, ACTIVITY_LIST_SIZE);

      if (newActivities == null) return;
      if (newActivities.length < ACTIVITY_LIST_SIZE) {
        setIsAllActivitiesLoaded(true);
      }

      if (newActivities) dispatch(updateActivitiesToDisplay(newActivities));
    };

    if (currentPage != 1 && !IsAllActivitiesLoaded && activityList !== null) {
      fetchData();
    }
  }, [currentPage, IsAllActivitiesLoaded, activityList]);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      {pageAlert && (
        <Alert
          severity={pageAlert.severity}
          className='page-alert'
          message={pageAlert.message}
          timeout={pageAlert.timeout}
        />
      )}

      <Typography variant='h1'>Create vacation</Typography>

      {activitiesToDisplay && activitiesToDisplay.length > 0 && (
        <>
          <AddActivityDialog />
          <ZoomedBoxOfActivity />
        </>
      )}
      <div className='form-background in-container calendar-persons'>
        <div className='form-calendar-persons'>
          <CalendarFormWithHandleCalendarDate />
          <NumberOfPersonsFormWithHandle />
          <div style={{ position: 'absolute', bottom: '42px' }} id='activity-offer'></div>
        </div>
        <ChooseServicesForm changeRadioGroup={changeRadioGroup} />
      </div>

      <div className='title-filter'>
        <Typography variant='h2'>Activity offer ({activitiesLength})</Typography>
        <FilterForm setIsAllActivitiesLoaded={setIsAllActivitiesLoaded} />
      </div>

      <div className='standard-box-wrapper'>
        {activitiesToDisplay && activitiesToDisplay.length === 0 && (
          <div className='empty-result'>
            <AutoGraphIcon />
            <div className='info'>
              <p>No activities found.</p>
              <p>Try other filters.</p>
            </div>
          </div>
        )}

        {activitiesToDisplay?.map((data) => {
          const isSelected = chosenActivities.some((activity) => activity.id === data.id);

          return <BoxOfActivity data={data} key={data.id} isSelected={isSelected} />;
        })}
      </div>
      <div ref={loader} />
    </Container>
  );
}
