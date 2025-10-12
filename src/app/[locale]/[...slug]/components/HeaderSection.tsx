'use client';
import { Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { button, greenButton, lightButton } from '@/utils/re-styledComponents';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { RootState, AppDispatch } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  addActivityWithPersistence,
  removeActivityWithPersistence,
} from '@/store/vacation/vacationReducer';
import { Activity } from '@/utils/interfaces';

export default function HeaderSection({
  currentActivity,
  title,
}: {
  currentActivity: Activity;
  title: string;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const isSelected = chosenActivities.some((activity) => activity.id === currentActivity?.id);

  return (
    <Grid container className='header-section'>
      <Image
        src={currentActivity?.images[0].link}
        alt={currentActivity?.images[0].alt}
        style={{ objectFit: 'cover', borderRadius: '4px' }}
        sizes='100vw'
        fill
        priority
      />

      <div className='content'>
        <Grid size={{ md: 12 }} className='titles'>
          <Typography variant='h1'>{title}</Typography>
        </Grid>

        <Grid size={{ md: 12 }} sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
          <Button
            sx={{
              ...button,
              ...(isSelected
                ? { ...lightButton, color: '#21817d', '&:hover': { color: '#1e706c' } }
                : greenButton),
              width: '220px',
            }}
            variant='outlined'
            startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
            onClick={() =>
              dispatch(
                isSelected
                  ? removeActivityWithPersistence(currentActivity.id)
                  : addActivityWithPersistence(currentActivity),
              )
            }
          >
            {isSelected ? 'Remove' : 'Choose'}
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}
