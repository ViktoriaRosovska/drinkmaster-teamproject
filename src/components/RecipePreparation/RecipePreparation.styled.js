import styled from 'styled-components';

export const RecipeTitle = styled.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  font-weight: 500;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;
export const RecipeBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 60px;
  }
`;
export const Box = styled.div`
  overflow: hidden;
`;
export const Picture = styled.picture`
  width: 335px;
  height: 430px;
  /* border-radius: 8px; */

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 818px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 480px;
  }
`;
export const List = styled.ul`
  list-style-type: square;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 549px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 549px;
  }
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: calc(18 / 14);
  padding: 14px 0;
  border-bottom: 1px dotted rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
