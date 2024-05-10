'use client';
import NumberOfPersonsForm from './forms/NumberOfPersonsForm';
import { Container, Typography } from '@mui/material';
import CalendarForm from './forms/CalendarForm';
import { allActivities, activityCategories, activityLocations } from '@/data';
import { InputSelect } from '@/forms/components';
import BoxOfActivity from './components/BoxOfActivity';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useForm } from 'react-hook-form';

interface IFormInput {
  textValue: string;
  radioValue: string;
}

export default function Activities() {
  const activitiesLength = allActivities.length;

  const { control } = useForm<IFormInput>();

  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

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
        <div className='action-filter-wrapper'>
          <span className='label'>Filter by:</span>
          <div className='field'>
            <InputSelect
              options={activityCategories}
              name={'category'}
              control={control}
              label={'Category'}
              className='just-line'
            />
          </div>
          <div className='field'>
            <InputSelect
              options={activityLocations}
              name={'location'}
              control={control}
              label={'Location'}
              className='just-line'
            />
          </div>
        </div>
      </div>

      <div className='standard-box-wrapper'>
        {allActivities.map((data) => {
          const isSelected = chosenActivities.some((activity) => activity.id === data.id);

          return <BoxOfActivity data={data} key={data.id} isSelected={isSelected} />;
        })}
      </div>
    </Container>
  );
}
