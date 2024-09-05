'use client';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { DefaultImageCarousel } from '../../components';
import CloseIcon from '@mui/icons-material/Close';


import { useEffect } from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import Glide from '@glidejs/glide';

interface GalleryModalProps {
  isOpen: boolean;
  handleClose: (isOpen: boolean) => void;
  images: {
    link: string;
    alt: string;
  }[];
  glide_classname: string;
  setActiveImage: (activeImage: number) => void;
  activeImage: number;
}

const GalleryModal = ({
  isOpen,
  handleClose,
  images,
  setActiveImage,
  activeImage,
  glide_classname,
}: GalleryModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='modal-with-image-carousel'
    >
      <div className='content'>
        <CloseIcon
          sx={{ position: 'absolute', right: '12px', top: '12px', zIndex: 2 }}
          className='zoom-icon'
          onClick={() => handleClose(false)}
        />

        <DefaultImageCarousel
          images={images}
          setActiveImage={setActiveImage}
          activeImage={activeImage}
          glide_classname={`modal${glide_classname}`}
        />
      </div>
    </Modal>
  );
};

const GalleryWithCarousel = ({
  images,
  glide_classname,
}: {
  images: { link: string; alt: string }[];
  glide_classname: string;
}) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);


  useEffect(() => {
    const glide = new Glide(`.${glide_classname}`, {
      type: 'slider',
      startAt: activeImage,
      perView: 1,
      keyboard: true,
      rewind: false,
      bound: true,
    });

    glide.on('run.after', function () {
      setActiveImage(glide.index);
    });

    glide.mount();
  }, [activeImage]);


  return (
    <div style={{ position: 'relative', height: '100%' }}>
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
        onClick={handleOpen}
      />

      {/* <DefaultImageCarousel
        images={images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        glide_classname={glide_classname}
      /> */}




<div className={`glide_default_image_carousel glide_arrows_center ${glide_classname}`}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {images &&
            images.map((data, i) => (
              <li key={i}>
                <img src={data.link} alt={data.alt} />
              </li>
            ))}
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
          <ArrowCircleLeftRoundedIcon />
        </button>
        <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
          <ArrowCircleRightRoundedIcon />
        </button>
      </div>
    </div>




      <GalleryModal
        isOpen={isOpen}
        handleClose={handleClose}
        images={images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        glide_classname={glide_classname}
      />
    </div>
  );
};

export default GalleryWithCarousel;
