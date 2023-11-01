import styled from 'styled-components';

export const UserLogoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const UserAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserAvatar = styled.img`
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%;
`;

export const StyledUserName = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
