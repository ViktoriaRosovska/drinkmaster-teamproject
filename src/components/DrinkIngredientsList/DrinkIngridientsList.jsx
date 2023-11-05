import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperations';
import { IngredientItem } from './IngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientList.styled';
import { selectIngredients } from 'redux/filters/filtersSelector';
// import { useDrink } from '../../hooks/useDrink';

const DrinkIngredientsList = ({ ingredients }) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const ingredientsAll = useSelector(state => selectIngredients(state));
  const dispatch = useDispatch();

  const ingredientsIdArr = ingredients.map(
    ingredient => ingredient.ingredientId
  );

  const fetchData = useCallback(async () => {
    try {
      console.log('data from Redux', ingredientsAll);

      if (ingredientsAll.length === 0) {
        const data = dispatch(getIngredients());
        if (data.payload.length !== 0) {
          const ingredientsImages = data.payload.filter(item =>
            ingredientsIdArr.includes(item._id)
          );
          setIngredientsData(ingredientsImages);
        }
      } else {
        const ingredientsImages = ingredientsAll.filter(item =>
          ingredientsIdArr.includes(item._id)
        );
        setIngredientsData(ingredientsImages);
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, ingredientsAll, ingredientsIdArr, setIngredientsData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await dispatch(getIngredients());
  //       console.log(data);
  //       if (data.payload.length !== 0) {
  //         const ingredientsImages = data.payload.filter(item =>
  //           ingredientsIdArr.includes(item._id)
  //         );
  //         setIngredientsData(ingredientsImages);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, [ingredientsIdArr, dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await dispatch(getIngredients());
  //       console.log('data', data);
  //       if (data.payload.length !== 0) {
  //         const ingredientsImages = data.payload.filter(item =>
  //           ingredientsIdArr.includes(item._id)
  //         );
  //         setIngredientsData(ingredientsImages);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const combinedIngredients = ingredients.map(ingredient => {
    const ingredientData = ingredientsData.find(
      data => data._id === ingredient.ingredientId
    );
    return {
      ...ingredient,
      ingredientThumb: ingredientData ? ingredientData.ingredientThumb : null,
    };
  });
  // const { drinkById } = useDrink();
  // const ingredientsWithImages = drinkById.ingredients;

  return (
    <div>
      {combinedIngredients.length > 0 && (
        <div>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {combinedIngredients.map(
              ({ title, measure, ingredientId, ingredientThumb }) => (
                <IngredientItem
                  title={title}
                  measure={measure}
                  key={ingredientId}
                  photo={ingredientThumb}
                />
              )
            )}

            {/* {ingredients.map(ingredient => {
              //           <Title>Ingredients</Title>
              //           <List>
              //             {ingredients?.map(ingredient => {

              const ingredientRec = ingredientsWithImages.find(
                ii => ii._id === ingredient.ingredientId
              );

              const images = {
                ingredientThumb: '',
                'thumb-medium': '',
                'thumb-small': '',
              };

              if (ingredientRec) {
                images.ingredientThumb = ingredientRec.ingredientThumb;
                images['thumb-medium'] = ingredientRec['thumb-medium'];
                images['thumb-small'] = ingredientRec['thumb-small'];
              }
              console.log('bbbbbbb', ingredientsWithImages);
              return (
                <li key={ingredient.ingredientId}>
                  <IngredientItem
                    title={ingredient.title}
                    measure={ingredient.measure}
                    quantity={ingredient.quantity}
                    images={images}
                  />
                </li>
              );
            })} */}
          </IngredientsList>
        </div>
      )}
    </div>
  );
};

export default DrinkIngredientsList;

