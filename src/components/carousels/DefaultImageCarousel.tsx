'use client';
import Carousel from 'react-material-ui-carousel';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

export interface DefaultImageCarouselProps {
  images: {
    link: string;
    alt: string;
  }[];
  setActiveImage: (activeImage: number | undefined) => void;
  activeImage: number | undefined;
}

const DefaultImageCarousel = ({
  images,
  setActiveImage,
  activeImage,
}: DefaultImageCarouselProps) => {
  return (
    <Carousel
      className='DefaultImageCarouselComponent'
      index={activeImage}
      onChange={(e) => setActiveImage(e)}
      fullHeightHover={false}
      NextIcon={<ArrowCircleRightRoundedIcon className='arrow-style prev' />}
      PrevIcon={<ArrowCircleLeftRoundedIcon className='arrow-style next' />}
      navButtonsAlwaysVisible
      duration={0}
      indicators={false}
      cycleNavigation={false}
      autoPlay={false}
      height={'100%'}
      navButtonsWrapperProps={{
        style: {
          top: 'calc(50% - 15px)',
          height: 'auto',
        },
      }}
    >
      {images.map((image, i) => (
        <div className='image-wrap' key={i}>
          <img src={image.link} alt={image.alt} loading='lazy' />
        </div>
      ))}
    </Carousel>
  );
};

export default DefaultImageCarousel;
