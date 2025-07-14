'use client';
import { useState } from 'react';
import BoxOfActivity from '../BoxOfActivity';
import { Activity } from '@/utils/interfaces';
import { Snackbar, SnackbarContent } from '@mui/material';
import { useSnackbarControl } from '@/hooks/useSnackbarControl';
interface BoxOfActivityProps {
  activities: Activity[] | null;
}

const ActivitiesWrapper = ({ activities }: BoxOfActivityProps) => {
  const {
    isOpen,
    snackbarMessage,
    snackbarBackgroundColor,
    snackbarColor,
    handleSnackbar,
    handleClose,
  } = useSnackbarControl();

  return (
    <>
      <div className='standard-box-wrapper'>
        {activities?.map((activity: Activity) => {
          return (
            <BoxOfActivity data={activity} key={activity.id} handleSnackbar={handleSnackbar} />
          );
        })}
      </div>
      <Snackbar
        open={isOpen}
        autoHideDuration={2200}
        onClose={handleClose}
        message={snackbarMessage}
        sx={{ width: '100px' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackbarBackgroundColor ? snackbarBackgroundColor : 'transparent',
            color: `${snackbarColor} !important`,
            marginTop: '60px',
            justifyContent: 'center',
            padding: '4px 0',
          }}
          message={
            <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>
              {snackbarMessage}
            </span>
          }
        />
      </Snackbar>
    </>
  );
};

export default ActivitiesWrapper;
