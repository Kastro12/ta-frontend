import { mainBanners } from '@/data';
import MainBanner from './MainBanner';
import { MainBannersProps } from '@/data/mainBanners';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBarMainBanner = () => {
  const isSingleSlide = mainBanners.length === 1;

  const settings = {
    dots: !isSingleSlide,
    infinite: !isSingleSlide,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='slider-container' style={{ position: 'relative' }}>
      <Slider {...settings}>
        {mainBanners.map((banner: MainBannersProps) => (
          <MainBanner data={banner} key={banner.id} />
        ))}
      </Slider>
      <span
        id='predefined-vacations-position'
        style={{ position: 'absolute', bottom: '56px' }}
      ></span>
    </div>
  );
};

export default SliderBarMainBanner;
