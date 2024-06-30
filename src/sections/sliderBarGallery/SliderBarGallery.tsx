'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Paper } from '@mui/material';

const SliderBarGallery = ({ serverData, setting }: any) => {
  return (
    <>
      {serverData && (
        <Slider {...setting} className='arrowInSlickRow slick-list-without-margin'>
          {serverData.map((data: any) => (
            <div className='SliderBarGallery' key={data.id}>
              <Paper elevation={3}>
                <img src={data.imgLink} alt={data.alt} />
              </Paper>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderBarGallery;
