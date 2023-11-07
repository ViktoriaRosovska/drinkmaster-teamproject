import styled from 'styled-components';

export const ErrorWrapper = styled.p`
  position: absolute;
  bottom: -25px;
  left: 0;
  color: red;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  width: 140px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 200px;
  }
`;
