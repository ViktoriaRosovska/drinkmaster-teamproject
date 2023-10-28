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

@media screen and (min-width: 768px) {
gap: 40px;
}

`
