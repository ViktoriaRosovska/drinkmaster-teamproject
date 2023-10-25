import styled from 'styled-components';

const MainContainer = styled.div`
  min-width: 320px;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--black-color);
  display: flex;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export default MainContainer;
