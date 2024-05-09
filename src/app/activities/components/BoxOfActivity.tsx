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

  return (
    <Paper elevation={3} className='BoxOfActivity'>
      <Box className='content-wrapper'>
        <img src={data.imageLink} alt={data.title} loading='lazy' />
        <Box className='content'>
          <Box className='text'>
            <Typography variant='h3'>{data.title}</Typography>
            <span className='category'>{data.category}</span>
            <Typography variant='body1' className='description'>
              {data.description}
            </Typography>
          </Box>
          <div className='buttons'>
            <Button
              sx={{ ...button, ...(isSelected ? selectedActivity : greenButton) }}
              variant='outlined'
              startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
              onClick={() => dispatch(isSelected ? removeActivity(data.id) : addActivity(data))}
            >
              {isSelected ? 'Remove' : 'Choose'}
            </Button>

            <Button
              sx={{ ...button, ...linkGreenButton }}
              variant='outlined'
              href={'./'}
              LinkComponent={Link}
              // size='small'
            >
              More info
            </Button>
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
