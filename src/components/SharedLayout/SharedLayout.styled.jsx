import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  background-image: radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    );
  background-repeat: no-repeat;
  background-position-x: -400px, calc(100vw - 190px);
  background-position-y: -40px, 400px;
  background-size: 670px 670px, 670px 670px;

  @media screen and (min-width: 768px) {
    background-image: radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      );

    background-position-x: -430px, calc(100vw - 200px);
    background-position-y: 50px, 480px;
    background-size: 670px 670px, 570px 570px;
  }

  @media screen and (min-width: 1440px) {
    background-image: radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      );

    background-position-x: -580px, calc(100vw - 300px);
    background-position-y: 0px, 350px;
    background-size: 870px 870px, 670px 670px;
  }
`;

export const Main = styled.main`
  flex: 1 1 auto;
  background-color: ${props => props.theme};
  /* color: ${props => props.theme}; */
`;
