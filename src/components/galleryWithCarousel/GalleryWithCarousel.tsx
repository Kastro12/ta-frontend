'use client';

import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { DefaultImageCarousel } from '../../components';
import CloseIcon from '@mui/icons-material/Close';
import GalleryGlide from './GalleryGlide';

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

export const GalleryModal = ({
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

        <GalleryGlide
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

      <DefaultImageCarousel
        images={images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        glide_classname={glide_classname}
      />

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
