import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperations';
import {
  // Image,
  // Ingredient,
  // IngredientMeasure,
  // IngredientTitle,
  List,
  Title,
} from './DrrinkIngedientList.styled';
// // import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-middle@1x.jpg';
import { IngredientItem } from './IngredientItem';
import { useDrink } from 'hooks/useDrink';

const DrinkIngridientList = ({ ingredients }) => {
  const dispatch = useDispatch();
  const { drinks } = useDrink();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredientsWithImages = drinks.ingredients;
  return (
    <>
      {ingredientsWithImages.length > 0 && (
        <>
          <Title>Ingredients</Title>
          <List>
            {ingredients?.map(ingredient => {
              const ingredientRec = ingredientsWithImages.find(
                ii => ii._id === ingredient.ingredientId
              );

              const images = {
                ingredientThumb: '',
                // ['thumb-medium']: '',
                // ['thumb-small']: '',
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
          </List>
        </>
      )}
    </>
  );
};
export default DrinkIngridientList;
