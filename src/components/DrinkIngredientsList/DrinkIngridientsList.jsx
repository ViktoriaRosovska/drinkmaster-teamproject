import React, { useEffect, useState, useCallback } from 'react';
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
    dispatch(getIngredients());
  }, [dispatch]);

  const fetchData = useCallback(() => {
    if (ingredientsAll.length !== 0) {
      const ingredientsImages = ingredientsAll.filter(item =>
        ingredientsIdArr.includes(item._id)
      );

      setIngredientsData(ingredientsImages);
    }
  }, [ingredientsAll, ingredientsIdArr]);

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
          </IngredientsList>
        </div>
      )}
    </div>
  );
};

export default DrinkIngredientsList;
