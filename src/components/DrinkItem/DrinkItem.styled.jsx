import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Card = styled.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const DrinkName = styled.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.color};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const IsAlco = styled.p`
  margin-bottom: 18px;
  /* color: var(--white-fifty-color); */
  color: ${props => props.theme.isAlco};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 75px;
  margin-bottom: 18px;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  color: ${props => props.theme.color}; 

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    height: 110px;
    -webkit-line-clamp: 5;
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 1440px) {
    height: 92px;
    -webkit-line-clamp: 4;
  }
`;

export const DeleteBtn = styled.button`
  border-radius: 40px;
  background-color: var(--dark-blue-color);
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.25s ease-in;
  &:hover {
    background-color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    height: 54px;
    width: 56px;
  }
`;

export const SVG = styled(ReactSVG)`
  & div svg {
    ${DeleteBtn}:hover & {
      stroke: var(--dark-blue-color);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
