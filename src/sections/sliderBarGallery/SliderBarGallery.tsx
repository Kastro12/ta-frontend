'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Paper } from '@mui/material';
import { sliderBarGallerySetting } from '@/components/sliderbar/settings';
import Image from 'next/image';

const SliderBarGallery = ({ serverData, setting }: any) => {
  return (
    <>
      {serverData && (
        <Slider {...sliderBarGallerySetting} className={'arrowInSlickRow SliderBarGallery'}>
          {serverData.map((data: any) => (
            <div key={data.id}>
              <Paper elevation={3} className='TextOverImageComponent'>
                <Image src={data.imgLink} alt={data.alt} loading='lazy' width={760} height={400} />
              </Paper>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderBarGallery;
