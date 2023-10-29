import React from 'react';

import { WhiteButton } from './WhiteLinkBtn.styled';

const WhiteLinkBtn = ({ navLink, title, type }) => {
  return <WhiteButton type={type}>{title}</WhiteButton>;
};

export default WhiteLinkBtn;
