'use client';
import { useEffect } from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import Glide from '@glidejs/glide';

export interface DefaultImageCarouselProps {
  images: {
    link: string;
    alt: string;
  }[];
  glide_classname: string;
  setActiveImage: (activeImage: number) => void;
  activeImage: number;
}

const DefaultImageCarousel = ({
  images,
  setActiveImage,
  activeImage,
  glide_classname,
}: DefaultImageCarouselProps) => {
  console.log("activeImage",activeImage)
  console.log("images",images)
  useEffect(() => {
    const glide = new Glide(`.${glide_classname}`, {
      type: 'slider',
      startAt: activeImage,
      perView: 1,
      keyboard: true,
      rewind: false,
      bound: true,
    });

    glide.on('run.after', function () {
      setActiveImage(glide.index);
    });

    glide.mount();
  }, [activeImage]);

  return (
    <div className={`glide_default_image_carousel glide_arrows_center ${glide_classname}`}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {images &&
            images.map((data, i) => (
              <li key={i}>
                <img src={data.link} alt={data.alt} />
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

export default DefaultImageCarousel;
