import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import {
  button,
  linkGreenButton,
  greenButton,
  selectedActivity,
} from '@/utils/re-styledComponents';
import Link from 'next/link';
import { Activity } from '@/utils/interfaces';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch } from 'react-redux';
import { addActivity, removeActivity } from '@/store/vacation/vacationReducer';

interface BoxOfActivity {
  data: Activity;
  isSelected: boolean;
}

export default function BoxOfActivity({ data, isSelected }: BoxOfActivity) {
  const dispatch = useDispatch();

  const { durationInDays, title, imageLink, description, id, category } = data;

  let durationText: string = 'It takes ';
  switch (durationInDays) {
    case 1:
      durationText += '1 day';
      break;
    case 0.5:
      durationText += 'half a day';
      break;
    default:
      durationText += `${durationInDays} days`;
      break;
  }

  return (
    <Paper elevation={3} className='BoxOfActivity'>
      <Box className='content-wrapper'>
        <img src={imageLink} alt={title} loading='lazy' />
        <Box className='content'>
          <Box className='text'>
            <Typography variant='h3'>{title}</Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: '6px',
              }}
            >
              <span className='category'>{category}</span>
              <span className='category'>{durationText}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}></div>

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

            {/* <Button
              sx={{ ...button, ...linkGreenButton }}
              variant='outlined'
              href={'./'}
              LinkComponent={Link}
            >
              More info
            </Button> */}
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
