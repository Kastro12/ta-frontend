'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CreatedRoute } from '@/components';

interface CreatedRoutesBox {
  serverData: {
    id: string;
    title: string;
    description: string;
    imageLink: string;
    alt: string;
    link: string;
  }[];
}

const SliderBarCreatedRoutesBox = ({ serverData }: CreatedRoutesBox) => {
  return (
    <div className='CreatedRouteComponent_wrap'>
      {serverData && serverData.map((data) => <CreatedRoute data={data} key={data.id} />)}
    </div>
  );
};

export default SliderBarCreatedRoutesBox;
