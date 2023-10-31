import React from 'react';
import AddDrink from '../../components/AddDrink/AddDrink';
// import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks';
import { MainContainer } from 'styles/App.styled';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <AddDrink />
        {/* <PreviewDrinks /> */}
      </MainContainer>
    </>
  );
}
