import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/signup">
            <DefButton>Sign Up</DefButton>
          </Link>
          <Link to="/signin">
            <DefButton>Sign In</DefButton>
          </Link>
        </ButtonDiv>
      </Conteiner>
    </MainContainer>
  );
};

export default AuthNav;
