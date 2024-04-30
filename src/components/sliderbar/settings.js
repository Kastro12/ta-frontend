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

export const settingCenterActivities = {
  // dots: false,
  // infinite: false,
  // draggable: true,
  // speed: 300,
  // dots: true,
  // infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,

  prevArrow: (
    <SlickArrowLeft
      className='scroll-arrow-button'
      externalClassName='scroll-arrow-button outside background'
    />
  ),
  nextArrow: (
    <SlickArrowRight
      className='scroll-arrow-button'
      externalClassName='scroll-arrow-button outside background'
    />
  ),

  // dots: true,
  // infinite: true,
  // slidesToShow: 4,
  // slidesToScroll: 8,

  responsive: [
    // {
    //   breakpoint: 2000,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 4,
    //   },
    // },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
      },
    },

    {
      breakpoint: 900,
      settings: {
        lazyLoad: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 600,
      settings: {
        centerMode: true,

        lazyLoad: true,
        slidesToShow: 1.07,
        slidesToScroll: 1,
      },
    },
  ],
}; //settingCenterActivities END
