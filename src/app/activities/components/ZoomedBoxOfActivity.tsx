import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, Paper, Typography, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { button, lightButton, greenButton, selectedActivity } from '@/utils/re-styledComponents';
import { removeZoomedActivity } from '@/store/activities/activitiesReducer';
import { dateFromString, stringFromDate } from '@/utils/date';
import { addActivity, removeActivity } from '@/store/vacation/vacationReducer';
import { activityDurationInString } from '@/utils/string';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function ZoomedBoxOfActivity() {
  const dispatch = useDispatch();

  const zoomedActivity = useSelector((state: RootState) => state.activities.zoomedActivity);
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const isSelected = chosenActivities.find((activity) => activity.id === zoomedActivity?.id);

  console.log('zoomedActivity', zoomedActivity);

  return (
    <React.Fragment>
      <Dialog
        aria-labelledby='customized-dialog-title'
        open={zoomedActivity == null ? false : true}
        className='dialog-wrapper ZoomedBoxOfActivity'
        onClose={() => dispatch(removeZoomedActivity())}
      >
        <IconButton
          aria-label='close'
          onClick={() => dispatch(removeZoomedActivity())}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <img src={zoomedActivity?.imageLink} alt={zoomedActivity?.title} loading='lazy' />
          <Box className='content'>
            <Box className='text'>
              <Typography variant='h3'>{zoomedActivity?.title}</Typography>

              <Typography variant='body1' className='description'>
                {zoomedActivity?.description}
              </Typography>

              <Typography variant='body1' sx={{ fontSize: '13px' }}>
                Category: <span className='gray-label'>{zoomedActivity?.category}</span>
              </Typography>

              <Typography variant='body1' sx={{ fontSize: '13px' }}>
                Location: <span className='gray-label'>{zoomedActivity?.location}</span>
              </Typography>

              <Typography variant='body1' sx={{ fontSize: '13px' }}>
                Time:{' '}
                <span className='gray-label'>
                  {zoomedActivity && activityDurationInString(zoomedActivity?.durationInDays)}
                </span>
              </Typography>
            </Box>


            <div className='buttons'>
            <Button
              sx={{
                ...button,
                ...(isSelected ? selectedActivity : greenButton),
                width: '100%',
                marginTop: '16px',
                marginBottom: '12px',
              }}
              variant='outlined'
              startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
              onClick={() =>
                zoomedActivity &&
                dispatch(
                  isSelected ? removeActivity(zoomedActivity?.id) : addActivity(zoomedActivity)
                )
              }
            >
              {isSelected ? 'Remove' : 'Choose'}
            </Button>
            </div>



          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
