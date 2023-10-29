import React from 'react';
import {
  H2,
  P,
  Cont,
  Container,
  DefButton,
  ButtonDiv,
  Img,
  Ellipse223,
  Ellipse222,
  Ellipse224,
  ImgWithGradient,
} from 'views/WelcomePage/WelcomePage.styled';
import myImage from 'assets/images/welcomePage/bg-welcome-desc@2x.jpg';

const AuthNav = () => {
  return (
    <Cont>
      <Ellipse223></Ellipse223>
      <Ellipse222></Ellipse222>
      <Ellipse224></Ellipse224>
      <Container>
        <H2>Welcome to the app!</H2>
        <P>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </P>
        <ButtonDiv>
          <DefButton to="/signup">Sign Up</DefButton>
          <DefButton to="/signin">Sign In</DefButton>
        </ButtonDiv>
      </Container>
      <ImgWithGradient>
        <Img src={myImage} alt="Cocktail" />
      </ImgWithGradient>
    </Cont>
  );
};

export default AuthNav;
