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
  width: '268px',
  height: '242px',
  borderRadius: '30px',
  backgroundColor: 'rgba(217, 217, 217, 0.138)',
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
  width: '500px',
  height: '500px',
  borderRadius: '30px',
  background: 'linear-gradient(rgba(10, 10, 17, 0.4), rgba(10, 10, 17, 0.4))',
  paddingTop: '200px',
  paddingLeft: '116px',
  paddingRight: '116px',
};

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 28px;
  padding: 32px 18px;
  text-align: center;
`;
