'use client';
import { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import { GalleryModal } from '@/components/galleryWithCarousel/GalleryWithCarousel';

const SlideBarActivityGallery = ({ serverData }) => {
  const [activeImage, setActiveImage] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (index) => {
    setActiveImage(index);
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const glide = new Glide('.glide_activity_gallery', {
      type: 'slider',
      startAt: activeImage + 3 <= serverData.length ? activeImage : serverData.length - 3,
      perView: 3,
      keyboard: true,
      rewind: false,
      gap: '24px',
      bound: true,
      breakpoints: {
        780: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    });
    glide.on('run.after', function () {
      setActiveImage(glide.index);
    });

    glide.mount();
  }, [activeImage]);

  const dispatch = useDispatch();

  return (
    <>
      <div className='glide_activity_gallery glide_arrows_center' style={{ position: 'relative' }}>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            {serverData &&
              serverData.map((data, index) => (
                <li
                  key={index}
                  style={{ height: '180px', objectDit: 'cover', position: 'relative', zIndex: 9 }}
                  onClick={() => handleOpen(index)}
                >
                  <ZoomInOutlinedIcon
                    sx={{
                      position: 'absolute',
                      right: '3px',
                      top: '3px',
                      zIndex: 2,
                      height: '34px',
                      width: '34px',
                    }}
                    className='zoom-icon'
                  />

                  <Image
                    src={data.link}
                    alt={data.alt}
                    loading='lazy'
                    fill
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                    sizes='100%'
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls' style={{ display: 'contents' }}>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
            aria-label='Previous slide'
            style={{ position: 'absolute', top: 'calc(50% - 15px)', zIndex: 9 }}
          >
            <ArrowCircleLeftRoundedIcon />
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
            aria-label='Next slide'
            style={{ position: 'absolute', top: 'calc(50% - 15px)', zIndex: 9, right: 0 }}
          >
            <ArrowCircleRightRoundedIcon />
          </button>
        </div>
      </div>

      <GalleryModal
        isOpen={isOpen}
        handleClose={handleClose}
        images={serverData}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        glide_classname={'glide_activity_gallery'}
      />
    </>
  );
};

export default SlideBarActivityGallery;
