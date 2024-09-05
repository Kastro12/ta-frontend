'use client';
import { useEffect } from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import Glide from '@glidejs/glide';
import Image from 'next/image';

export interface GalleryGlideProps {
  images: {
    link: string;
    alt: string;
  }[];
  glide_classname: string;
  setActiveImage: (activeImage: number) => void;
  activeImage: number;
}

const GalleryGlide = ({
  images,
  setActiveImage,
  activeImage,
  glide_classname,
}: GalleryGlideProps) => {
  useEffect(() => {
    const glide = new Glide(`.${glide_classname}_modal`, {
      type: 'slider',
      startAt: activeImage,
      perView: 1,
      keyboard: true,
      rewind: false,
      bound: true,
      gap: 1,
    });

    glide.on('run.after', function () {
      setActiveImage(glide.index);
    });

    glide.mount();
  }, [activeImage]);

  return (
    <div className={`glide_default_image_carousel glide_arrows_center ${glide_classname}_modal`}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {images &&
            images.map((data, i) => (
              <li key={i} style={{ position: 'relative' }}>
                <div className='image_content'>
                  <Image
                    src={data.link}
                    alt={data.alt}
                    loading='lazy'
                    fill
                    style={{ objectFit: 'contain', borderRadius: '4px' }}
                    sizes='100%'
                  />
                </div>
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

export default GalleryGlide;
