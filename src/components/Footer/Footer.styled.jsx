import styled from 'styled-components';

export const FooterContainer = styled.footer`
border-top: 1px solid var(--white-twenty-color);
display: flex;
margin-top: 40px;
margin-bottom: 18px;
min-width: 320px;

background: radial-gradient(
      circle,
      var(--light-green-forty-color) 10%,
      rgba(255, 255, 255, 0) 70%
    );
  
  background-size: 774px 762px;
  background-repeat: no-repeat;
  background-position-x: -260px;
  background-position-y: 330px;

 @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
    
   background: radial-gradient(
        circle,
        rgba(188, 230, 210, 0.4) 10%,
        rgba(255, 255, 255, 0) 70%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      );
      
    background-size:
      1100px 1100px,
      900px 900px;

    background-repeat: no-repeat;
    background-position-x: calc(40vw - 550px), calc(60vw - 300px);
    background-position-y: 260px, 350px;
  }

@media screen and (min-width: 1440px) {
  background: radial-gradient(
        circle,
        rgba(188, 230, 210, 0.4) 30%,
        rgba(255, 255, 255, 0) 70%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      );
     
    background-size:
      1250px 1250px,
      900px 900px;

    background-repeat: no-repeat, no-repeat;

    background-position-x: calc(50vw - 650px), calc(60vw - 400px);
    background-position-y: 260px, 270px;
}
`;

export const FooterLogoAndSocial = styled.div`
display: flex;
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
  height: 542px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 482px;
    padding-left: 32px;
    padding-right: 32px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 428px;
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
`

export const FooterContent = styled.div`
display: flex;
gap: 40px;
flex-direction: column;

@media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

`;