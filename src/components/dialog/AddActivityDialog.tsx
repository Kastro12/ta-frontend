import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { button, lightButton, greenButton } from '@/utils/re-styledComponents';
import {
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

  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);

  const finishDateFormatted = dateFromString(finishDate);

  const addDays = (date: any, days: number | undefined): Date => {
    const result = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    if (days) result.setDate(result.getDate() + days);

    return result;
  };

  let numberOfChosenMinusLastActivity;
  let numberOfFreeDays;
  let dateNumberIncrease;
  if (confirmAddingActivity) {
    numberOfChosenMinusLastActivity =
      Math.round(confirmAddingActivity?.maxNumberOfDaysForChosenActivities) -
      confirmAddingActivity?.activity.durationInDays;

    numberOfFreeDays =
      confirmAddingActivity.differenceBetweenStartFinishDate - numberOfChosenMinusLastActivity;

    dateNumberIncrease = confirmAddingActivity?.activity.durationInDays - numberOfFreeDays;
  }

  const newFinishDate = finishDateFormatted
    ? addDays(finishDateFormatted, dateNumberIncrease)
    : null;

  const newFinishDateString = newFinishDate ? stringFromDate(newFinishDate) : null;

  return (
    <React.Fragment>
      <Dialog
        aria-labelledby='customized-dialog-title'
        open={confirmAddingActivity == null ? false : true}
        className='dialog-wrapper'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Activity overflow
        </DialogTitle>

        <DialogContent>
          <Typography variant='body1' sx={{ mb: '9px', fontSize: '16px' }}>
            The dates you&apos;ve selected result in a{' '}
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
              dispatch(changeTheDate({ type: 'finishDate', date: newFinishDateString }));

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
              if (confirmAddingActivity?.activity)
                dispatch(removeActivity(confirmAddingActivity?.activity.id));
            }}
          >
            Cancel last chosen activity
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
