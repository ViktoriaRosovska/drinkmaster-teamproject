import React from 'react';
import { Link } from 'react-router-dom';
import { WhiteButton } from './WhiteLinkBtn.styled';

const WhiteLinkBtn = ({ navLink, title }) => {
  return (
    <Link to={navLink}>
      <WhiteButton type="button">{title}</WhiteButton>
    </Link>
  );
};

export default WhiteLinkBtn;
