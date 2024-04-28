'use client';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputSelect } from '../components';
import { button, greenButton } from '@/utils/re-styledComponents';

const defaultValues = {
  textValue: '',
  radioValue: '',
};

interface IFormInput {
  textValue: string;
  radioValue: string;
}

const categories = [
  { id: '1', value: 'adventure', label: 'Adventure' },
  { id: '2', value: 'landscape', label: 'Landscape' },
  { id: '3', value: 'history_and_culture', label: 'History and Culture' },
];

const locations = [
  { id: '1', value: 'tara', label: 'Tara' },
  { id: '2', value: 'zlatibor', label: 'Zlatibor' },
  { id: '3', value: 'golubac', label: 'Golubac' },
  { id: '4', value: 'kopaonik', label: 'Kopaonik' },
  { id: '5', value: 'grocka', label: 'Grocka' },
];

const numOfPersons = [
  { id: '1', value: '1', label: '1' },
  { id: '2', value: '2', label: '2' },
  { id: '3', value: '3', label: '3' },
  { id: '4', value: '4', label: '4' },
  { id: '5', value: '5', label: '5' },
  { id: '6', value: '6', label: '6' },
  { id: '7', value: '7', label: '7' },
  { id: '8', value: '8', label: '8' },
  { id: '9', value: '9', label: '9' },
  { id: '10', value: '10', label: '10' },
];

const FormSearchActivities = () => {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({ defaultValues });

  const onSubmit = (data: IFormInput) => console.log(data);
  return (
    <div className='FormSearchActivities_content' style={{ marginTop: '20px' }}>
      {/* <p style={{ margin: '0 0 12px 0' }}>
        <small>Search activities</small>
      </p> */}
      <div className='FormSearchActivities'>
        <div className='field'>
          <InputSelect
            options={categories}
            name={'category'}
            control={control}
            label={'Category'}
          />
        </div>
        <div className='field'>
          <InputSelect options={locations} name={'location'} control={control} label={'Location'} />
        </div>
        <div className='field'>
          <InputSelect
            options={numOfPersons}
            name={'persons'}
            control={control}
            label={'For how many people'}
          />
        </div>
        <Button
          sx={{ ...button, ...greenButton }}
          onClick={handleSubmit(onSubmit)}
          variant='outlined'
        >
          Search activities
        </Button>
      </div>
    </div>
  );
};

export default FormSearchActivities;
