import styled from 'styled-components';
const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

export const WhiteButton = styled.button`
  border-radius: 42px;
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background: ${props => props.theme.color};
  color: ${props => props.theme.btncolor};
  border: 1px solid transparent;

  transition: color ${transition}, background-color ${transition},
    border-color ${transition};

  &:hover {
    border: 1px solid ${props => props.theme.paginationAccentColor};
    background: ${props => props.theme.btncolor};
    color: ${props => props.theme.color};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    padding: 18px 44px;
  }
`;
