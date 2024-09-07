'use client';
import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { zoomActivity } from '@/store/activities/activitiesReducer';
import { useDispatch } from 'react-redux';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';

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
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            {serverData &&
              serverData.map((data) => (
                <li key={data.id}>
                  <ZoomInOutlinedIcon
                    sx={{
                      position: 'absolute',
                      right: '3px',
                      top: '3px',
                      zIndex: 2,
                      height: '34px',
                      width: '34px',
                    }}
                    className='zoom-icon'
                    onClick={() => dispatch(zoomActivity(data))}
                  />

                  <Image
                    src={data.images[0].link}
                    alt={data.images[0].alt}
                    loading='lazy'
                    fill
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                    sizes='100%'
                  />
                  <Box className='text'>
                    <Typography
                      variant='h3'
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(zoomActivity(data))}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                </li>
              ))}
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
            aria-label='Previous slide'
          >
            <ArrowCircleLeftRoundedIcon />
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
            aria-label='Next slide'
          >
            <ArrowCircleRightRoundedIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderBarActivities;
