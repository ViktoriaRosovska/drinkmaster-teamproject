import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 14px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SeeMore = styled(Link)`
  font-size: 14px;
  line-height: 1.125;
  color: ${props => props.theme.secondaryTextColor};
  transition: color linear 0.2s;

  &:hover {
    color: ${props => props.theme.hoverBorderColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
