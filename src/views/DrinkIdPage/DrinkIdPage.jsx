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
import Loader from 'components/Loader';

const DrinkIdPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector(state => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer>
      {drink && drink.ingredients ? (
        <>
          <Title>{drink.drink} </Title>
          <DrinkPageHero
            id={drink._id}
            glass={drink.glass}
            about={drink.description || null}
            title={drink.drink}
            image={drink.drinkThumb || null}
            alcoholic={drink.alcoholic}
          />

          <DrinkIngridientList ingredients={drink.ingredients} />

          {/* <DrinkIngridientList ingredients={ingredientArrayFromDrink} /> */}

          <RecipePreparation instructions={drink.instructions} />
        </>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default DrinkIdPage;
