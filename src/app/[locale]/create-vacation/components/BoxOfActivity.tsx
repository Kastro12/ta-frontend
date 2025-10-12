'use client';
import { Paper, Typography, Box, Button } from '@mui/material';
import { button, greenButton, selectedActivity } from '@/utils/re-styledComponents';
import { Activity } from '@/utils/interfaces';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {
  addActivityWithPersistence,
  removeActivityWithPersistence,
} from '@/store/vacation/vacationReducer';
import { activityDurationInString } from '@/utils/string';
import Image from 'next/image';
import Link from 'next/link';
import { RootState, AppDispatch } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';

interface BoxOfActivityProps {
  data: Activity;
  handleSnackbar: (message: 'REMOVE' | 'ADD') => void;
}

export default function BoxOfActivity({ data, handleSnackbar }: BoxOfActivityProps) {
  const t = useTranslations('activities.' + data?.translationKey);
  const globalT = useTranslations('global');
  const dispatch = useDispatch<AppDispatch>();
  const { durationInDays, images, id } = data;
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const isSelected = chosenActivities.some((activity) => activity.id === data.id);

  return (
    <Paper elevation={3} className={`BoxOfActivity${data?.paidAd ? ' paidAd' : ''}`}>
      <Box className='content-wrapper'>
        <div className='image-wrapper'>
          <Link href={data.id}>
            <Image
              src={images[0].link}
              alt={images[0].alt}
              loading='lazy'
              style={{ objectFit: 'cover' }}
              sizes='100%'
              fill
            />
          </Link>
        </div>
        <Box className='content'>
          <Box className='text'>
            <Link
              href={data.id}
              style={{ cursor: 'pointer', fontWeight: '600', fontSize: '18px', lineHeight: '30px' }}
            >
              {t('title')}
            </Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <span className='gray-label'>{globalT(data.category)}</span>
              <span className='gray-label'>{data.location}</span>
            </div>

            <Typography variant='body1' className='description'>
              {t('description')}
            </Typography>
          </Box>
          <div className='buttons'>
            <Button
              sx={{ ...button, ...(isSelected ? selectedActivity : greenButton), width: '110px' }}
              variant='outlined'
              startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
              onClick={() => {
                if (isSelected) {
                  dispatch(removeActivityWithPersistence(id));
                  handleSnackbar('REMOVE');
                } else {
                  dispatch(addActivityWithPersistence(data));
                  handleSnackbar('ADD');
                }
              }}
            >
              {isSelected ? globalT('Remove') : globalT('Choose')}
            </Button>

            <span className='gray-label'>{globalT(activityDurationInString(durationInDays))}</span>
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
