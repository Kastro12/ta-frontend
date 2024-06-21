'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CreatedRoute } from '@/components';
import Slider from 'react-slick';

interface SliderBarProps {
  serverData: {
    id: string;
    title: string;
    description: string;
    imageLink: string;
    alt: string;
    link: string;
  }[];
  setting: {};
  className: string;
}

const SliderBarCreatedRoutesBox = ({ serverData, setting, className }: SliderBarProps) => {
  return (
    <>
      {serverData && (
        <Slider {...setting} className={className}>
          {serverData.map((data) => (
            <div key={data.id} style={{ padding: '0 16px' }}>
              <CreatedRoute data={data} />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderBarCreatedRoutesBox;
