import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkById } from 'redux/drinks/drinksOperations.js';
import { selectDrinkById } from 'redux/drinks/drinksSelectors';

import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngridientList from 'components/DrinkIngredientsList/DrinkIngridientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { MainContainer } from 'styles/App.styled';
import { Title } from './DrinkIdPage.styled';

const DrinkIdPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const selectedDrink = useSelector(state => selectDrinkById(state, drinkId));
  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  console.log('drinkId:', drinkId);

  if (!selectedDrink || !selectedDrink.drinks) {
    return <div>Loading...</div>;
  }

  const drink = selectedDrink;
  // const drink = selectedDrink.drinks[0];

  return (
    <MainContainer>
      <Title>{drink.drink} </Title>
      <DrinkPageHero
        glass={drink.glass}
        about={drink.description || null}
        title={drink.drink}
        image={drink.drinkThumb || null}
        alcoholic={drink.alcoholic}
      />
      <DrinkIngridientList ingredients={drink.ingredients} />
      <RecipePreparation instructions={drink.instructions} />
    </MainContainer>
  );
};

export default DrinkIdPage;
