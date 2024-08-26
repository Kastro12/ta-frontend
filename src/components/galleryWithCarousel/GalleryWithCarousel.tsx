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
    link: string;
    alt: string;
  }[];
  setActiveImage: (activeImage: number | undefined) => void;
  activeImage: number | undefined;
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

const GalleryWithCarousel = ({ images }: { images: { link: string; alt: string }[] }) => {
  const [activeImage, setActiveImage] = useState<number | undefined>(0);

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
