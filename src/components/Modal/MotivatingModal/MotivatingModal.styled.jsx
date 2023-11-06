import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const CloseSvg = styled(ReactSVG)`
  & div {
    width: 28px;
    height: 28px;
  }
`;

export const buttonModal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '42px',
  height: '42px',
  borderRadius: '58px',
  backgroundColor: 'var(--dark-blue-color)',
  padding: 0,
  minWidth: '42px',
};

export const stylePlush = {
  justifyContent: 'center',
  width: '180px',
  height: '180px',
  borderRadius: '30px',
  backgroundColor: 'rgba(217, 217, 217, 0.138)',

  '@media (min-width: 768px)': {
    width: '248px',
    height: '222px',
  },
};

export const svg = {
  '.injected-svg': {
    width: '28px',
    height: '28px',
  },
};

export const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  height: '300px',
    borderRadius: '30px',
    border: 'none',
  outline: 'none',
  background: 'linear-gradient(rgba(10, 10, 17, 0.4), rgba(10, 10, 17, 0.4))',
  padding: '60px',

  '@media (min-width: 768px)': {
    width: '400px',
    height: '400px',
    paddingTop: '140px',
    paddingLeft: '76px',
    paddingRight: '76px',
    paddingBottom: '38px',
  },
};

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 18px;
  padding: 26px 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 32px 18px;
  }
`;
