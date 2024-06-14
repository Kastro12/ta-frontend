'use client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Grid, Checkbox, Button, TextField, FormControlLabel } from '@mui/material';
import { button, greenButton } from '@/utils/re-styledComponents/index';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { getCountryCode } from '@/utils/geolocation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

type FormInputs = {
  fullName: string | undefined;
  email: string | undefined;
  street: string | undefined;
  city: string | undefined;
  country: string | undefined;
  message: string | undefined;
  phoneNumber: string | undefined;
  honeypot: string;
  termsAccepted: boolean;
};

const BookVacationForm: React.FC = () => {
  const router = useRouter();

  const [initialCountryCode, setInitialCountryCode] = useState<string | undefined>();

  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);
  const adults = useSelector((state: RootState) => state.vacation.adults);
  const children = useSelector((state: RootState) => state.vacation.children);
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const childrenYears = useSelector((state: RootState) => state.vacation.childrenYears);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const countryCode = await getCountryCode();
      setInitialCountryCode(countryCode || 'rs');
    };

    fetchCountryCode();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      honeypot: '',
      termsAccepted: false,
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data: any) => {
    if (data.honeypot) {
      return;
    }

    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    formData.append('access_key', `${process.env.NEXT_PUBLIC_ACCESS_KEY}`);

    formData.append('startDate', `${startDate}`);
    formData.append('finishDate', `${finishDate}`);

    formData.append('adults', `${adults}`);
    formData.append('children', `${children}`);

    if (children > 0 && childrenYears.length > 0) {
      childrenYears.forEach((age, index) => {
        formData.append(`childrenAge[${index}]`, `${age}`);
      });
    }

    if (chosenActivities.length > 0) {
      chosenActivities.forEach((activity, index) => {
        formData.append(
          `activity[${index}]`,
          `${activity.title} ${activity.location} ${activity.category} ${activity.id}`
        );
      });
    }

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        router.push('/book-vacation/success');
      } else {
        router.push('/book-vacation/error');
      }
    } catch (error) {
      router.push('/book-vacation/error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* Honeypot Field */}
        <Grid item xs={12} style={{ display: 'none' }}>
          <Controller
            name='honeypot'
            control={control}
            render={({ field }) => (
              <TextField {...field} type='text' label='Do not fill this field' variant='outlined' />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            name='fullName'
            control={control}
            rules={{
              required: 'Enter your full name',
              minLength: {
                value: 2,
                message: 'Enter at least 2 characters',
              },
              maxLength: {
                value: 150,
                message: 'Cannot exceed 150 characters',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                label={
                  <span>
                    Full name&nbsp;<span style={{ color: '#ffa235' }}>*</span>
                  </span>
                }
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                label={
                  <span>
                    Email&nbsp;<span style={{ color: '#ffa235' }}>*</span>
                  </span>
                }
                variant='outlined'
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {/* {initialCountryCode &&  */}
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                {initialCountryCode ? (
                  <PhoneInput
                    className='custom'
                    defaultCountry={initialCountryCode}
                    //value={value}
                    onChange={onChange}
                  />
                ) : (
                  <div className='react-international-phone-input-container-placeholder'>
                    <div className='country'></div>
                    <div className='input'></div>
                  </div>
                )}
              </>
            )}
          />
          {/* } */}
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            name='street'
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                label='Street'
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            name='city'
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                label='City'
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            name='country'
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                label='Country'
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <Controller
            name='message'
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                //value={value}
                fullWidth
                multiline
                rows={4}
                label='Message'
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ position: 'relative' }}>
          <Controller
            name='termsAccepted'
            control={control}
            rules={{ required: 'Please read and accept the terms and conditions' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={onChange}
                    checked={value}
                    name='termsAccepted'
                    color='primary'
                    className={errors.termsAccepted ? 'error' : ''}
                  />
                }
                label={<span style={{ fontSize: '14px' }}>I accept the terms and conditions</span>}
              />
            )}
          />
          {errors.termsAccepted && (
            <p
              style={{
                fontSize: '12px',
                color: '#d32f2f',
                position: 'absolute',
                bottom: '-24px',
                left: '24px',
              }}
            >
              {errors.termsAccepted.message}
            </p>
          )}
        </Grid>

        <Grid item xs={12} md={12} sx={{ width: '100%', textAlign: 'center' }}>
          <Button type='submit' sx={{ ...button, ...greenButton }} variant='outlined'>
            Submit Booking
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookVacationForm;
