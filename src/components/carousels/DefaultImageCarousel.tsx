'use client';
import Carousel from 'react-material-ui-carousel';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

export interface DefaultImageCarouselProps {
  images: {
    name: string;
    link: string;
    active: boolean;
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
      navButtonsWrapperProps={{
        style: {
          top: 'calc(50% - 28px)',
          height: 'auto',
        },
      }}
    >
      {images.map((image, i) => (
        <img key={image.name} src={image.link} alt={'couple near car in nature'} loading='lazy' />
      ))}
    </Carousel>
  );
};

export default DefaultImageCarousel;
