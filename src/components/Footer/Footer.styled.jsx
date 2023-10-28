import styled from 'styled-components';

export const FooterContainer = styled.footer`
border-top: 1px solid var(--white-twenty-color);
display: flex:
margin-top: 40px;
margin-bottom: 18px;
min-width: 320px;

 @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`

export const FooterLogoAndSocial = styled.div`
display: flex:
flex-direction: column;
gap: 20px;
justify-content: start;

@media screen and (min-width: 768px) {
gap: 28px;
}

`
export const Container = styled.div`
  min-width: 320px;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  /* background-color: var(--black-color); */

  
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
   
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    
  }
`;