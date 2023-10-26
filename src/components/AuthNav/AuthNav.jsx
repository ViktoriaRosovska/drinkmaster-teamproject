import React from 'react';
import { MainContainer } from 'styles/App.styled';
import {
  H2,
  P,
  Conteiner,
  DefButton,
  ButtonDiv,
} from 'views/WelcomePage/WelcomePage.styled';

const AuthNav = () => {
  return (
    <MainContainer>
      <Conteiner>
        <H2>Welcome to the app!</H2>
        <P>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </P>
        <ButtonDiv>
          <DefButton>
            <link to={`/signup`}></link>Sign Up
          </DefButton>
          <DefButton>
            <link to={`/signin`}></link>
            Sign In
          </DefButton>
        </ButtonDiv>
      </Conteiner>
    </MainContainer>
  );
};

export default AuthNav;
