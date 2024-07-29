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

export const sliderBarGallerySetting = {
  prevArrow: (
    <SlickArrowLeft className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),
  nextArrow: (
    <SlickArrowRight className='scroll-arrow-button' externalClassName='scroll-arrow-button' />
  ),
  arrows: true,

  centerPadding: '260px',
  className: 'center',
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1270,
      settings: {
        centerPadding: '180px',
      },
    },
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '100px',
      },
    },

    {
      breakpoint: 740,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
