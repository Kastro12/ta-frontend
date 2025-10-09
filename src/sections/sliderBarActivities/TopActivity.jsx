'use client';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { zoomActivity } from '@/store/activities/activitiesReducer';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const TopActivity = ({ data }) => {
  const t = useTranslations(data?.translationKey);

  const dispatch = useDispatch();

  return (
    <li key={data.id}>
      <Link href={data.id}>
        <Image
          src={data.images[0].link}
          alt={data.images[0].alt}
          loading='lazy'
          fill
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100%'
        />
        <Typography
          variant='h3'
          sx={{
            cursor: 'pointer',
            p: '0 16px 6px 16px',
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            color: '#fff',
            fontSize: '16px',
            fontWeight: 500,
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(zoomActivity(data))}
        >
          {t('title')}
        </Typography>
      </Link>
    </li>
  );
};

export default TopActivity;
