import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;

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

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;
