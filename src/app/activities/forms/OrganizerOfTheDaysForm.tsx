// 'use client';
import { useForm } from 'react-hook-form';
import { InputRadio } from '@/forms/components';

const OrganizerOfTheDaysForm = () => {
  const { handleSubmit, reset, control, setValue } = useForm<any>({
    defaultValues: { radioValue: 'agency' },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <InputRadio
        name={'radioValue'}
        control={control}
        label={'Radio Input'}
        options={[
          {
            id: 'agency',
            label: `Our organization per day (Choose your activities, and we'll organize them into daily plans. Our expertise ensures optimal scheduling, considering distances between locations and a balanced mix of challenging and leisurely activities.)`,
            value: 'agency',
          },
          {
            id: 'user',
            label: 'Your organization per day2',
            value: 'user',
          },
        ]}
      />
    </form>
  );
};

export default OrganizerOfTheDaysForm;
