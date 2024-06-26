import SlickArrowLeft from './SlickArrowLeft';
import SlickArrowRight from './SlickArrowRight';

export const settingThreeInRow = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  arrows: true,
  draggable: true,
  prevArrow: (
    <SlickArrowLeft className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),
  nextArrow: (
    <SlickArrowRight className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        centerMode: true,
        lazyLoad: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const centerModeForGallery = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '300px',
  slidesToShow: 1,
  speed: 300,
  prevArrow: (
    <SlickArrowLeft className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),
  nextArrow: (
    <SlickArrowRight className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),
  arrows: true,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '250px',
      },
    },

    {
      breakpoint: 1000,
      settings: {
        centerPadding: '150px',
      },
    },

    {
      breakpoint: 680,
      settings: {
        centerMode: false,
        centerPadding: '0',
      },
    },
  ],
};
