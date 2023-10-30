import React from 'react';
import {
  H2,
  P,
  Container,
  DefButton,
  ButtonDiv,
} from 'views/WelcomePage/WelcomePage.styled';
import { WelcomeWrapper } from 'styles/App.styled';

const AuthNav = () => {
  return (
    <WelcomeWrapper>
        <Container>
          <H2>Welcome to the app!</H2>
          <P>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </P>
          <ButtonDiv>
            <DefButton to="/signup">Sign Up</DefButton>
            <DefButton to="/signin">Sign In</DefButton>
          </ButtonDiv>
        </Container>
    </WelcomeWrapper>
  );
};

export default AuthNav;
