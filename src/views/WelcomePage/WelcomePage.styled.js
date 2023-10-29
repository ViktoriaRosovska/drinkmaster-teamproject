import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  color: var(--start-page-txt-color);
  max-width: 485px;
  margin-left: 100px;
  position: relative;
`;

export const H2 = styled.h2`
  margin-bottom: 14px;
`;

export const P = styled.p`
  margin-bottom: 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const DefButton = styled.button`
  background-color: transparent;
  color: var(--white-color);
  padding: 18px 44px 18px 44px;
  border-radius: 42px;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  &:hover {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  height: 100%;
`;

export const ImgWithGradient = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 100%);
`;

export const Ellipse223 = styled.div`
  position: absolute;
  width: 387px;
  height: 381px;
  left: 171px;
  top: -132px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.854px);
`;

export const Ellipse222 = styled.div`
  position: absolute;
  width: 784px;
  height: 849px;
  left: -494px;
  top: -231px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
`;

export const Ellipse224 = styled.div`
  position: absolute;
  width: 549px;
  height: 543px;
  left: 1781px;
  top: 858px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: 2;
`;
