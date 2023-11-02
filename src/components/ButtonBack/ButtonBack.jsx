import PropTypes from 'prop-types';
import { BtnBack } from './ButtonBack.styled';
import React from 'react';
import IconArrowLeft from './IconArrowLeft';

 const ButtonBack = ({text}) => {
  return (
    <BtnBack type='button'>
      <IconArrowLeft size="18" />
      {text}
    </BtnBack>
  );
};


ButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonBack;
