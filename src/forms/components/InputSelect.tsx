'use client';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../form.interface';
import React from 'react';

const InputSelect = ({
  name,
  control,
  label,
  options,
  className,
  getSelectedValue,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <Select
          id={name}
          instanceId={name}
          className={`select-input-field-container ${className}`}
          classNamePrefix={`select-input-field`}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isSearchable={true}
          name='color'
          options={options}
          placeholder={label}
          onChange={getSelectedValue ? getSelectedValue : onChange}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      )}
    />
  );
};

export default InputSelect;

const topFilms = [
  { value: 'The Shawshank Redemption', label: 'The Shawshank Redemption' },
  { value: 'The Godfather', label: 'The Godfather' },
  { value: 'The Godfather: Part II', label: 'The Godfather: Part II' },
  { value: 'The Dark Knight', label: 'The Dark Knight' },
  { value: '12 Angry Men', label: '12 Angry Men' },
  { value: 'Pulp Fiction', label: 'Pulp Fiction' },

  { value: 'The Shawshank Redemption', label: 'The Shawshank Redemption' },
  { value: 'The Godfather', label: 'The Godfather' },
  { value: 'The Godfather: Part II', label: 'The Godfather: Part II' },
  { value: 'The Dark Knight', label: 'The Dark Knight' },
  { value: '12 Angry Men', label: '12 Angry Men' },
  { value: 'Pulp Fiction', label: 'Pulp Fiction' },
];
