'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Glide from '@glidejs/glide';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const SliderBarGallery = ({ serverData }: any) => {
  useEffect(() => {
    const glide = new Glide(`.glide_slider_bar_gallery`, {
      type: 'slider',
      startAt: 0,
      perView: 1,
      keyboard: true,
      rewind: false,
      bound: false,
      gap: 0,
    });

    glide.mount();
  }, []);

  return (
    <div className=' glide_slider_bar_gallery glide_arrows_center'>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {serverData &&
            serverData.map((img: { link: string; alt: string; id: string }) => (
              <li key={img.id}>
                <Image
                  src={img.link}
                  alt={img.alt}
                  loading='lazy'
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  sizes='100%'
                />
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
  );
};

export default SliderBarGallery;
