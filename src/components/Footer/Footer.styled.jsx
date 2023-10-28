import styled from 'styled-components';

export const FooterContainer = styled.footer`
border-top: 1px solid var(--white-twenty-color);
display: flex:
margin-top: 40px;
margin-bottom: 18px;
min-width: 320px;

background: radial-gradient(
      circle,
      var(--light-green-forty-color) 40%,
      rgba(255, 255, 255, 0) 70%
    ),
  
  background-size: 774px 762px;
  background-repeat: no-repeat;
  background-position-x: -372px;
  background-position-y: 3219px;

 @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
   
  background-position-x: -63px;
  background-position-y: 3839px;
  }

@media screen and (min-width: 768px) {
background-position-x: 193px;
  background-position-y: 3176px;
}

`;

export const FooterLogoAndSocial = styled.div`
display: flex:
flex-direction: column;
gap: 20px;
justify-content: start;

@media screen and (min-width: 768px) {
gap: 28px;
}

`;
export const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  min-width: 320px;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  
  @media screen and (min-width: 768px) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const FooterNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;
