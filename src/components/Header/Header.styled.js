import styled from 'styled-components';

export const HeaderCont = styled.div`
  border-bottom: 1px solid var(--white-twenty-color);
`;

export const Container = styled.div`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 28px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const NavCont = styled.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    margin-left: 224px
  }
`;

