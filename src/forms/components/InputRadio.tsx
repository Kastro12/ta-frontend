'use client';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../form.interface';
const InputRadio: React.FC<FormInputProps> = ({ name, control, label, options }) => {
  const generateRadioOptions = () => {
    if (options)
      return options.map((option) => (
        <FormControlLabel
          key={option.id}
          value={option.value}
          label={option.label}
          control={<Radio />}
        />
      ));
  };
  return (
    <FormControl component='fieldset' className='custom-form'>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => {
          return (
            <RadioGroup value={value} onChange={onChange}>
              {generateRadioOptions()}
            </RadioGroup>
          );
        }}
      />
    </FormControl>
  );
};
export default InputRadio;
