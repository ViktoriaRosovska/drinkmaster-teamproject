import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDrinkById } from 'redux/drinks/drinksOperations.js';
// import { selectDrinkById } from 'redux/drinks/drinksSelectors';
// import selectIsLoggedIn from 'redux/auth/authSelectors';

import PageTitle from 'components/PageTitle/PageTitle';
import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngridientList from 'components/DrinkIngredientsList/DrinkIngridientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { MainContainer } from 'styles/App.styled';

const drink = {
  _id: {
    $oid: '639b6de9ff77d221f190c50f',
  },
  drink: 'Quentin',
  drinkAlternate: 'Sorry, not specified',
  tags: 'IBA,ContemporaryClassic',
  video: 'https://www.youtube.com/watch?v=2jtoa_t7g94',
  category: 'Ordinary Drink',
  IBA: 'Contemporary Classics',
  alcoholic: 'Alcoholic',
  glass: 'Cocktail glass',
  description:
    'Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.',
  instructions:
    'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
  instructionsES:
    'En una coctelera llena hasta la mitad con cubitos de hielo, combine el ron, Kahlua y la crema. Agite bien. Colar en una copa de cóctel y decorar con la nuez moscada.',
  instructionsDE:
    'In einem Shaker, der halb mit Eiswürfeln gefüllt ist, Rum, Kahlua und Sahne mischen. Gut schütteln. In ein Cocktailglas abseihen und mit der Muskatnuss garnieren.',
  instructionsFR:
    'Dans un shaker à moitié rempli de glaçons, mélanger le rhum, le Kahlua et la crème. Bien agiter. Versez dans un verre à cocktail et décorez avec la noix de muscade.',
  instructionsIT:
    'In uno shaker riempito a metà con cubetti di ghiaccio, unire il rum, il Kahlua e la panna. Filtrare in una coppetta da cocktail e guarnire con la noce moscata. Agitare bene.',
  instructionsRU:
    'В шейкере, наполовину наполненном кубиками льда, смешайте ром, Калуа и сливки. Хорошо встряхнуть. Процедите в коктейльный бокал и украсьте мускатным орехом.',
  instructionsPL:
    'W shakerze wypełnionym do połowy kostkami lodu wymieszać rum, Kahlua i śmietanę. Dobrze wstrząsnąć. Przelej do kieliszka koktajlowego i udekoruj gałką muszkatołową.',
  instructionsUK:
    'У шейкері, наповненому наполовину кубиками льоду, змішайте ром, Калуа та вершки. Добре струсити. Процідіть у келих для коктейлю та прикрасьте мускатним горіхом.',
  drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Orange_Crush.jpg',
  ingredients: [
    {
      title: 'Dark rum',
      measure: '1 1/2 oz ',
      ingredientId: {
        $oid: '64aebb7f82d96cc69e0eb4a7',
      },
    },
    {
      title: 'Kahlua',
      measure: '1/2 oz ',
      ingredientId: {
        $oid: '64aebb7f82d96cc69e0eb4bd',
      },
    },
    {
      title: 'Light cream',
      measure: '1 oz ',
      ingredientId: {
        $oid: '64f1d5c069d8333cf130fb31',
      },
    },
    {
      title: 'Nutmeg',
      measure: '1/8 tsp grated ',
      ingredientId: {
        $oid: '64f1d5c069d8333cf130fb34',
      },
    },
  ],
  shortDescription: 'A refreshing and citrusy cocktail with a hint of mint.',
};

const DrinkIdPage = () => {
  // const dispatch = useDispatch();
  // const { drinkId } = useParams();
  // const drink = useSelector(selectDrinkById);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   async function fetchDrinkById() {
  //     const res = await dispatch(getDrinkById(drinkId));
  //     return res;
  //   }
  //   function loadPage() {
  //     if (isLoggedIn) {
  //       fetchDrinkById();
  //     }
  //   }
  //   loadPage();
  // }, [dispatch, drinkId, isLoggedIn]);

  return (
    <MainContainer>
      <PageTitle title={drink.drink} style={{ marginBottom: 0 }} />
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
