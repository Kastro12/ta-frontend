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
import Image from 'next/image';

interface BoxOfActivityProps {
  data: Activity;
  isSelected: boolean;
}

export default function BoxOfActivity({ data, isSelected }: BoxOfActivityProps) {
  const dispatch = useDispatch();

  const { durationInDays, title, images, description, id, category, location } = data;

  return (
    <Paper elevation={3} className='BoxOfActivity'>
      <Box className='content-wrapper'>
        <div className='image-wrapper'>
          <Image
            src={images[0].link}
            alt={images[0].alt}
            loading='lazy'
            onClick={() => dispatch(zoomActivity(data))}
            style={{ objectFit: 'cover' }}
            sizes='100%'
            fill
          />
        </div>
        <Box className='content'>
          <Box className='text'>
            <Typography
              variant='h3'
              sx={{ cursor: 'pointer' }}
              onClick={() => dispatch(zoomActivity(data))}
            >
              {title}
            </Typography>
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
