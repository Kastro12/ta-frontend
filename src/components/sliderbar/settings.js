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
}; //settingThreeInRow END

export const settingTwoInRow = {
  dots: false,
  infinite: false,
  slidesToShow: 2,
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
}; //settingTwoInRow END
