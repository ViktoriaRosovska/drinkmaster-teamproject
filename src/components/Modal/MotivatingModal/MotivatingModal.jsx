import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, useMediaQuery } from '@mui/material';
import {
  CloseSvg,
  StyledText,
  buttonModal,
  styleBox,
  stylePlush,
} from './MotivatingModal.styled';
import closeSvg from '../../../assets/images/motivation/x.svg';

const MotivatingModal = ({ open, handleClose, image, text }) => {
  const isMobile = useMediaQuery('(max-width: 767px');

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={styleBox}
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 17, 0.2), rgba(10, 10, 17, 0.2)), url(${
            isMobile ? image.mob : image.tab
          })`,
          backgroundSize: 'cover',
        }}
      >
        <Box sx={stylePlush} style={{ backdropFilter: 'blur(15px)' }}>
          <StyledText>{text}</StyledText>
          <Button onClick={handleClose} sx={buttonModal}>
            <CloseSvg src={closeSvg} />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MotivatingModal;
