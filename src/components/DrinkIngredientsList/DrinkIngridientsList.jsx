import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperations';
import { IngredientItem } from './IngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientList.styled';
import { useDrink } from '../../hooks/useDrink';

const DrinkIngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { drinkById } = useDrink();
  const ingredientsWithImages = drinkById.ingredients;

  return (
    <div>
      {ingredientsWithImages.length > 0 && (
        <div>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {ingredients.map(ingredient => {
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
            })}
          </IngredientsList>
        </div>
      )}
    </div>
  );
};

export default DrinkIngredientsList;
