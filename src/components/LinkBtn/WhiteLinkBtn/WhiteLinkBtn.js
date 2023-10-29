import React from 'react';

import { WhiteButton } from './WhiteLinkBtn.styled';

const WhiteLinkBtn = ({ navLink, title }) => {
  return <WhiteButton type="button">{title}</WhiteButton>;
};

export default WhiteLinkBtn;
