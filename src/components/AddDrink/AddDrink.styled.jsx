import styled from 'styled-components';
import { Link } from 'react-router-dom';
const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

export const HeroContainer = styled.section`
  padding-bottom: 112px;

  @media screen and (min-width: 768px) {
    padding-bottom: 124px;
  }

  // @media screen and (min-width: 1440px) {
  //   padding-top: 128px;
  //   padding-bottom: 160px;
  // }
`;
export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 47px;
  @media screen and (min-width: 768px) {
    row-gap: 54px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 130px;
  }
`;
export const MainWrap = styled.div`
  max-width: 716px;
`;
export const HeroDescription = styled.p`
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
    margin-top: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`;
export const AddDrinkBtnLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 43px;
  border-radius: 42px;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.btncolor};
  border: 1px solid transparent;
  font-weight: 600;
  line-height: 1.285;

  transition: color ${transition}, background-color ${transition},
    border-color ${transition};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 48px;
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.paginationAccentColor};
    background-color: ${props => props.theme.btncolor};
    color: ${props => props.theme.color};
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  z-index: 2;
`;
export const ImageBgYellow = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 110px;
    left: -145px;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;
