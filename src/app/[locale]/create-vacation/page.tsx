'use client';
import { useRef, useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import CalendarFormWithHandleCalendarDate from './forms/CalendarFormWithHandleCalendarDate';
import NumberOfPersonsFormWithHandle from './forms/NumberOfPersonsFormWithHandle';
import ChooseServicesForm from '@/forms/chooseServices/ChooseServicesForm';
import FilterForm from './forms/FilterForm';
import ActivitiesWrapper from './components/BoxOfActivity/ActivitiesWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { Activity } from '@/utils/interfaces';
import {
  updateActivitiesToDisplay,
  updateCurrentPage,
  clearActivities,
} from '@/store/activities/activitiesReducer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AddActivityDialog from '@/components/dialog/AddActivityDialog';
import { Alert } from '@/components';
import { changeRadioGroup } from '@/store/vacation/vacationReducer';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

export default function Activities() {
  const dispatch = useDispatch();
  const router = useRouter();

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
  const lastPageRef = useRef(currentPage);
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
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      const element = document.getElementById('activity_offer_position');
      if (element) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 220);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [router]);

  useEffect(() => {
    lastPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    if (IsAllActivitiesLoaded || !loader.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(updateCurrentPage(lastPageRef.current + 1));
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
  }, [IsAllActivitiesLoaded, loader.current]);

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
    <Suspense>
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
          <div style={{ position: 'absolute', top: '-96px' }} id='activity_offer_position'></div>
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
        </div>

        <ActivitiesWrapper activities={activitiesToDisplay} />

        <div ref={loader} />
      </Container>
    </Suspense>
  );
}
