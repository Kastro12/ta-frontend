'use client';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { DefaultImageCarousel } from '../../components';
import CloseIcon from '@mui/icons-material/Close';

interface GalleryModalProps {
  isOpen: boolean;
  handleClose: (isOpen: boolean) => void;
  images: {
    name: string;
    link: string;
    active: boolean;
  }[];
  setActiveImage: (activeImage: number | undefined) => void;
  activeImage: number | undefined;
}

interface ImageProps {
  name: string;
  link: string;
  active: boolean;
}

const GalleryModal = ({
  isOpen,
  handleClose,
  images,
  setActiveImage,
  activeImage,
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
        />
      </div>
    </Modal>
  );
};

const GalleryWithCarousel = () => {
  const images: ImageProps[] = [
    {
      name: 'First place',
      link: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
      active: true,
    },
    {
      name: 'Second place',
      link: 'https://images.pexels.com/photos/20975683/pexels-photo-20975683/free-photo-of-a-black-and-white-photo-of-a-horse-jumping-over-an-obstacle.jpeg',
      active: false,
    },
    {
      name: 'Third place',
      link: 'https://images.pexels.com/photos/21614980/pexels-photo-21614980/free-photo-of-street-photoshoot.jpeg',
      active: false,
    },
  ];

  const [activeImage, setActiveImage] = useState<number | undefined>(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div style={{ position: 'relative' }}>
      <ZoomInOutlinedIcon
        sx={{ position: 'absolute', right: '12px', top: '12px', zIndex: 2 }}
        className='zoom-icon'
        onClick={handleOpen}
      />

      <DefaultImageCarousel
        images={images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
      />

      <GalleryModal
        isOpen={isOpen}
        handleClose={handleClose}
        images={images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
      />
    </div>
  );
};

export default GalleryWithCarousel;
