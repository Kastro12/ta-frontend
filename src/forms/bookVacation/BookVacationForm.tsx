'use client';
import { Controller } from 'react-hook-form';
import { Grid, Checkbox, Button, TextField, FormControlLabel } from '@mui/material';
import { button, greenButton } from '@/utils/re-styledComponents/index';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { BookVacationProps } from '@/forms/form.interface';
import { SubmitHandler } from 'react-hook-form';

const BookVacationForm = ({
  initialCountryCode,
  handleSubmit,
  onSubmit,
  control,
  errors,
}: {
  initialCountryCode: string | undefined;
  handleSubmit: any;
  onSubmit: SubmitHandler<BookVacationProps>;
  control: any;
  errors: any;
}) => {
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
            render={({ field: { onChange, value } }) => (
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
