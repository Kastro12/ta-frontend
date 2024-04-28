'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TextOverImage } from '@/components';
import Slider from 'react-slick';

const SliderBarActivities = ({ serverData, setting, className }) => {
  return (
    <>
      {serverData && (
        <Slider {...setting} className={className}>
          {serverData.map((data) => (
            <div key={data.id} style={{ padding: '0 16px' }}>
              <TextOverImage data={data} />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderBarActivities;
