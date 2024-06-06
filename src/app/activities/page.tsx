'use client';
import { useRef, useState, useEffect } from 'react';
import NumberOfPersonsForm from './forms/NumberOfPersonsForm';
import { Container, Typography } from '@mui/material';
import CalendarForm from './forms/CalendarForm';
import FilterForm from './forms/FilterForm';
import { allActivities } from '@/data';
import BoxOfActivity from './components/BoxOfActivity';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { Activity } from '@/utils/interfaces';
import { updateActivitiesToDisplay, updateCurrentPage } from '@/store/activities/activitiesReducer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function Activities() {
  const dispatch = useDispatch();
  const activitiesLength = allActivities.length;
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const ACTIVITY_LIST_SIZE = useSelector((state: RootState) => state.activities.activityListSize);
  const activityList = useSelector((state: RootState) => state.activities.activityList);
  const currentPage = useSelector((state: RootState) => state.activities.currentPage);

  const activitiesToDisplay = useSelector(
    (state: RootState) => state.activities.activitiesToDisplay
  );

  const [IsAllActivitiesLoaded, setIsAllActivitiesLoaded] = useState<boolean>(false);

  const loader = useRef(null);

  const loadMoreData = (data: Activity[] | null, page: number, itemsPerPage: number) => {
    if (data === null) return;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  // load new activities by scroll
  useEffect(() => {
    const fetchData = () => {
      const newActivities = loadMoreData(activityList, currentPage, ACTIVITY_LIST_SIZE);

      if (newActivities == null) return;
      if (newActivities.length < ACTIVITY_LIST_SIZE) {
        setIsAllActivitiesLoaded(true);
      }

      dispatch(updateActivitiesToDisplay(newActivities));
    };

    if (currentPage != 1 && !IsAllActivitiesLoaded && activityList !== null) {
      fetchData();
    }
  }, [currentPage, IsAllActivitiesLoaded, activityList]);

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

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ my: 6 }}>
        Create your Vacation
      </Typography>

      <div className='form-background in-container'>
        <div className='form-calendar-persons'>
          <CalendarForm />
          <NumberOfPersonsForm />
        </div>
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
