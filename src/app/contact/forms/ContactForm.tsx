'use client';
import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Grid, Button, TextField } from '@mui/material';
import { button, greenButton } from '@/utils/re-styledComponents/index';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { BookVacationProps } from '@/forms/form.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { getCountryCode } from '@/utils/geolocation';

const ContactForm = () => {
  const [initialCountryCode, setInitialCountryCode] = useState<string | undefined>();
  const router = useRouter();

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
    formState: {},
  } = useForm<BookVacationProps>({
    defaultValues: {
      honeypot: '',
      termsAccepted: false,
    },
  });
  const onSubmit: SubmitHandler<BookVacationProps> = async (data: any) => {
    if (data.honeypot) {
      return;
    }

    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    formData.append('access_key', `${process.env.NEXT_PUBLIC_ACCESS_KEY_2}`);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    localStorage.setItem('formSubmitted', 'true');

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
        router.push('/contact/success');
      } else {
        router.push('/contact/error');
      }
    } catch (error) {
      router.push('/contact/error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
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
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field: { onChange } }) => (
              <>
                {initialCountryCode ? (
                  <PhoneInput
                    className='custom'
                    defaultCountry={initialCountryCode}
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
        </Grid>

        <Grid item xs={12} md={12}>
          <Controller
            name='message'
            control={control}
            rules={{
              required: 'Enter your full name',
              minLength: {
                value: 2,
                message: 'Enter at least 2 characters',
              },
              maxLength: {
                value: 300,
                message: 'Cannot exceed 300 characters',
              },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <TextField
                className='custom-form'
                helperText={error ? error.message : null}
                size='small'
                error={!!error}
                onChange={onChange}
                fullWidth
                multiline
                rows={4}
                label={
                  <span>
                    Message&nbsp;<span style={{ color: '#ffa235' }}>*</span>
                  </span>
                }
                variant='outlined'
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={12} sx={{ width: '100%', textAlign: 'center' }}>
          <Button type='submit' sx={{ ...button, ...greenButton }} variant='outlined'>
            Send a message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
