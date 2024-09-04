'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Glide from '@glidejs/glide';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Gallery = () => {
  const zoomedActivity = useSelector((state: RootState) => state.activities.zoomedActivity);

  useEffect(() => {
    new Glide('.glide_activity', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      keyboard: true,
      rewind: false,
    }).mount();
  }, []);

  return (
    <div className='glide_activity glide_arrows_center'>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {zoomedActivity &&
            zoomedActivity.images.map((img: { link: string; alt: string }, index: number) => (
              <li key={index}>
                <Image
                  src={img.link}
                  alt={img.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
                />
              </li>
            ))}
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
          <ArrowCircleLeftRoundedIcon />
        </button>
        <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
          <ArrowCircleRightRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
