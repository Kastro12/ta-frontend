import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  IconButton,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { button, lightButton, greenButton } from '@/utils/re-styledComponents';
import {
  addActivity,
  removeActivity,
  changeTheDate,
  stopAddingActivity,
} from '@/store/vacation/vacationReducer';
import { dateFromString, stringFromDate } from '@/utils/date';

export default function AddActivityDialog() {
  const dispatch = useDispatch();

  const confirmAddingActivity = useSelector(
    (state: RootState) => state.vacation.confirmAddingActivity
  );

  console.log('confirmAddingActivity', confirmAddingActivity);

  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);

  console.log('finishDate', finishDate);

  const finishDateFormatted = dateFromString(finishDate);

  console.log('finishDateFormatted', finishDateFormatted);

  const addDays = (date: any, days: number): Date => {
    const result = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    result.setDate(result.getDate() + days);
    return result;
  };

  const newFinishDate = finishDateFormatted ? addDays(finishDateFormatted, 3) : null;
  console.log('newFinishDate', newFinishDate);

  const newFinishDateString = newFinishDate ? stringFromDate(newFinishDate) : null;

  return (
    <React.Fragment>
      <Dialog
        // onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={confirmAddingActivity == null ? false : true}
        className='dialog-wrapper'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Activity overflow
        </DialogTitle>
        {/* <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent>
          <Typography variant='body1' sx={{ mb: '9px', fontSize: '16px' }}>
            The dates you've selected result in a{' '}
            <strong>{confirmAddingActivity?.differenceBetweenStartFinishDate}-day</strong> vacation.
          </Typography>
          <Typography variant='body1' sx={{ mb: '24px', fontSize: '16px' }}>
            Chosen activities require{' '}
            <strong>{confirmAddingActivity?.maxNumberOfDaysForChosenActivities}</strong> days.
          </Typography>

          <Button
            aria-label='close'
            sx={{ ...button, ...greenButton, mb: 2 }}
            variant='outlined'
            className='actions'
            onClick={() => {
              // if (confirmAddingActivity?.activity)
              //   dispatch(addActivity(confirmAddingActivity.activity));

              // dispatch(changeTheDate({ type: 'finishDate', date: newFinishDateString }));

              dispatch(stopAddingActivity());
            }}
          >
            Extend the finish date to {newFinishDateString}
          </Button>

          <Button
            aria-label='close'
            sx={{ ...button, ...lightButton }}
            variant='outlined'
            className='actions'
            onClick={() => {
              dispatch(stopAddingActivity());
              // setTimeout(() => {
              //   if (confirmAddingActivity?.activity)
              //     dispatch(removeActivity(confirmAddingActivity?.activity.id));
              // }, 1000);
            }}
          >
            Cancel last chosen activity
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
