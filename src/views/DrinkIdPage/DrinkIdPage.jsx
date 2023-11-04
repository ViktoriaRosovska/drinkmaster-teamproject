import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkById } from 'redux/drinks/drinksOperations.js';
import { selectDrinkById } from 'redux/drinks/drinksSelectors';

import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
// import DrinkIngridientList from 'components/DrinkIngredientsList/DrinkIngridientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { MainContainer } from 'styles/App.styled';
import { Title } from './DrinkIdPage.styled';
import { getIngredients } from 'redux/filters/filtersOperations';
import { selectIngredients } from 'redux/filters/filtersSelector';

const DrinkIdPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector(state => selectDrinkById(state, drinkId));
  const ingredients = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
    dispatch(getIngredients());
  }, [dispatch, drinkId]);

  const ingridientsMap = new Map();
  ingredients.forEach(i => {
    ingridientsMap.set(i._id, i);
  });

  const ingredientArrayFromDrink = drink.ingredients
    ? drink.ingredients.map(el => ingridientsMap.get(el.ingredientId))
    : [];
  console.log('ingredientArrayFromDrink', ingredientArrayFromDrink);

  // useEffect(() => {
  //   async function fetchDrinkById() {
  //     const res = await dispatch(getDrinkById(drinkId));
  //     return res;
  //   }

  //   // function loadPage() {
  //   //   if (isLoggedIn) {
  //   //     fetchDrinkById();
  //   //   }
  //   // }
  //   // loadPage();
  // }, [dispatch, drinkId, isLoggedIn]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer>
      {drink && (
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

          {/* <DrinkIngridientList ingredients={ingredientArrayFromDrink} /> */}

          <RecipePreparation instructions={drink.instructions} />
        </>
      )}
    </MainContainer>
  );
};

export default DrinkIdPage;
