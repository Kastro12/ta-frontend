'use client';
import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { zoomActivity } from '@/store/activities/activitiesReducer';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const SliderBarActivities = ({ serverData }) => {
  useEffect(() => {
    new Glide('.glide_top_activity', {
      type: 'slider',
      startAt: 0,
      perView: 3,
      keyboard: true,
      rewind: false,
      gap: '24px',
      bound: true,
      breakpoints: {
        780: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    }).mount();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className='glide_top_activity glide_arrows_center'>
        <div
          className='glide__track'
          data-glide-el='track'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <ul className='glide__slides'>
            {serverData &&
              serverData.map((data) => (
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
                      {data.title}
                    </Typography>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
            aria-label='Previous slide'
            style={{ zIndex: 2 }}
          >
            <ArrowCircleLeftRoundedIcon />
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
            aria-label='Next slide'
            style={{ zIndex: 2 }}
          >
            <ArrowCircleRightRoundedIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderBarActivities;
