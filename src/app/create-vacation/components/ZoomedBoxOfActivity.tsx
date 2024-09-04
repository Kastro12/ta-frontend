import React, { useCallback } from 'react';
import { Dialog, DialogContent, Typography, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import {
  button,
  greenButton,
  selectedActivity,
  linkGreenButton,
} from '@/utils/re-styledComponents';
import { removeZoomedActivity } from '@/store/activities/activitiesReducer';
import { addActivity, removeActivity } from '@/store/vacation/vacationReducer';
import { activityDurationInString } from '@/utils/string';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Gallery from './Gallery';

export default function ZoomedBoxOfActivity() {
  const dispatch = useDispatch();

  const zoomedActivity = useSelector((state: RootState) => state.activities.zoomedActivity);
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const isSelected = chosenActivities.find((activity) => activity.id === zoomedActivity?.id);

  const handleDialogClose = useCallback(() => {
    dispatch(removeZoomedActivity());
  }, [dispatch]);

  return (
    <Dialog
      aria-labelledby='customized-dialog-title'
      open={zoomedActivity == null ? false : true}
      className='dialog-wrapper ZoomedBoxOfActivity'
      onClose={handleDialogClose}
    >
      <DialogContent>
        <Gallery />

        <Box className='content'>
          <Box className='text'>
            <Typography variant='h3'>{zoomedActivity?.title}</Typography>

            {zoomedActivity?.longDescritpion.map((desc: string, index) => (
              <Typography variant='body1' sx={{ mb: 1 }} key={index}>
                {desc}
              </Typography>
            ))}

            <Typography variant='body1' sx={{ mt: 2, fontSize: '15px' }}>
              <span style={{ width: '94px', display: 'inline-block' }}>Category:</span>
              <span className='gray2_color'>{zoomedActivity?.category}</span>
            </Typography>

            <Typography variant='body1' sx={{ mt: 1, mb: 1, fontSize: '15px' }}>
              <span style={{ width: '94px', display: 'inline-block' }}>Location:</span>
              <span className='gray2_color'>{zoomedActivity?.location}</span>
            </Typography>

            <Typography variant='body1' sx={{ mb: 1, fontSize: '15px' }}>
              <span style={{ width: '94px', display: 'inline-block' }}>Time:</span>
              <span className='gray2_color'>
                {zoomedActivity && activityDurationInString(zoomedActivity?.durationInDays)}
              </span>
            </Typography>
          </Box>

          <div className='buttons'>
            <Button
              sx={{
                ...button,
                ...(isSelected ? selectedActivity : greenButton),
                marginTop: '16px',
                marginBottom: '12px',
                width: '108px',
              }}
              variant='outlined'
              startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
              onClick={() => {
                zoomedActivity &&
                  dispatch(
                    isSelected ? removeActivity(zoomedActivity?.id) : addActivity(zoomedActivity)
                  );
              }}
            >
              {isSelected ? 'Remove' : 'Choose'}
            </Button>

            <Button
              sx={{
                ...button,
                ...linkGreenButton,
                marginTop: '16px',
                marginBottom: '12px',
                padding: '0 16px',
              }}
              variant='outlined'
              onClick={handleDialogClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
