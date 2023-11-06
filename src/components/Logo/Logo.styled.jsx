import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as logo_icon } from '../../assets/images/logo/logo_icon.svg';

export const LogoLink = styled(Link)`
  display: flex;
  gap: 14px;
  transition: 0.5s;
  width: 133px;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    width: 151px;
  }
`;

export const LogoIcon = styled(logo_icon)`
  fill: var(--white-color);
  // fill: ${props => props.theme};
 
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const LogoText = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  padding: 2px 0 2px 0;
  // color: ${props => props.theme};
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
  }
`;
