'use client';
import { InputSelect } from '@/forms/components';
import { useForm } from 'react-hook-form';
import { getUniquePropOfAllActivities } from '@/utils/filterFunctions';
import { allActivities, activityCategories } from '@/data';
import { Container, Typography, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  index: number;
  value: number;
}

interface IFormInput {
  textValue: string;
  radioValue: string;
}

const ActivityOffer = (props: TabPanelProps) => {
  const { value, index, ...other } = props;

  const allCategories = getUniquePropOfAllActivities(allActivities, 'category');
  const allLocations = getUniquePropOfAllActivities(allActivities, 'location');

  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  console.log(allCategories);
  console.log(allLocations);

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          Activity offer
          <InputSelect
            options={activityCategories}
            name={'category'}
            control={control}
            label={'Category'}
          />
        </>
      )}
    </div>
  );
};

export default ActivityOffer;
