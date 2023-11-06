import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperations';
import { IngredientItem } from './IngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientList.styled';
import { selectIngredients } from 'redux/filters/filtersSelector';

const DrinkIngredientsList = ({ ingredients }) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const ingredientsAll = useSelector(state => selectIngredients(state));
  const dispatch = useDispatch();

  const ingredientsIdArr = ingredients.map(
    ingredient => ingredient.ingredientId
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (ingredientsAll.length === 0) {
          const data = await dispatch(getIngredients());
          if (data.payload.length !== 0) {
            const ingredientsImages = data.payload.filter(item =>
              ingredientsIdArr.includes(item._id)
            );
            setIngredientsData(ingredientsImages);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [dispatch, ingredientsAll, ingredientsIdArr]);

  const combinedIngredients = ingredients.map(ingredient => {
    const ingredientData = ingredientsData.find(
      data => data._id === ingredient.ingredientId
    );
    return {
      ...ingredient,
      ingredientThumb: ingredientData ? ingredientData.ingredientThumb : null,
    };
  });

  return (
    <>
      {combinedIngredients.length > 0 && (
        <>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {combinedIngredients.map(
              ({ title, measure, ingredientId, ingredientThumb, quantity }) => (
                <IngredientItem
                  title={title}
                  measure={measure}
                  quantity={quantity}
                  photo={ingredientThumb}
                  key={ingredientId}
                />
              )
            )}
          </IngredientsList>
        </>
      )}
    </>
  );
};

export default DrinkIngredientsList;
