import styled from 'styled-components';

export const WhiteButton = styled.button`
  border-radius: 42px;
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.btncolor};
  border: 1px solid var(--white-color);
  transition: background-color 0.25s ease-in;
  &:hover {
    border: 1px solid ${props => props.theme.color};
    background-color: transparent;
    color: ${props => props.theme.color};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    padding: 18px 44px;
  }
`;
