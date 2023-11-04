import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Box, useMediaQuery } from "@mui/material";
import { StyledText, styleBox, stylePlush } from "./MotivatingModal.styled";
import vectorImg from '../../../assets/images/motivation/Vector.png';

const MotivatingModal = ({ open, handleClose, image, text }) => {
    const isMobile = useMediaQuery('(max-width: 767px');

    console.log(image.tab)

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={styleBox } style={{backgroundImage: `linear-gradient(rgba(10, 10, 17, 0.2), rgba(10, 10, 17, 0.2)), url(${isMobile ? image.mob : image.tab})`, backgroundSize: 'cover'}}>
                <Box sx={stylePlush} style={{backdropFilter: 'blur(15px)'}} 
                >
                    <StyledText>{text}</StyledText>
                    <Button onClick={handleClose}>X</Button>
               </Box>
            </Box>
        </Modal>
    )
}

export default MotivatingModal;