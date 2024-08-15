import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { button, greenButton, selectedActivity } from '@/utils/re-styledComponents';
import { Activity } from '@/utils/interfaces';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch } from 'react-redux';
import { addActivity, removeActivity } from '@/store/vacation/vacationReducer';
import { activityDurationInString } from '@/utils/string';
import { zoomActivity } from '@/store/activities/activitiesReducer';

interface BoxOfActivityProps {
  data: Activity;
  isSelected: boolean;
}

export default function BoxOfActivity({ data, isSelected }: BoxOfActivityProps) {
  const dispatch = useDispatch();

  const { durationInDays, title, imageLink, description, id, category, location } = data;

  return (
    <Paper elevation={3} className='BoxOfActivity'>
      <Box className='content-wrapper'>
        <img
          src={imageLink}
          alt={title}
          loading='lazy'
          onClick={() => dispatch(zoomActivity(data))}
        />
        <Box className='content'>
          <Box className='text'>
            <Typography variant='h3'>{title}</Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <span className='gray-label'>{category}</span>
              <span className='gray-label'>{location}</span>
            </div>

            <Typography variant='body1' className='description'>
              {description}
            </Typography>
          </Box>
          <div className='buttons'>
            <Button
              sx={{ ...button, ...(isSelected ? selectedActivity : greenButton), width: '110px' }}
              variant='outlined'
              startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
              onClick={() => dispatch(isSelected ? removeActivity(id) : addActivity(data))}
            >
              {isSelected ? 'Remove' : 'Choose'}
            </Button>

            <span className='gray-label'>{activityDurationInString(durationInDays)}</span>
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
