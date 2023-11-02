import {
  Image,
  Ingredient,
  IngredientMeasure,
  IngredientTitle,
  List,
  Title,
} from './DrrinkIngedientList.styled';
import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-middle@1x.jpg';
const DrinkIngridientList = ({ ingredients }) => {
  return (
    <>
      <Title>Ingredients</Title>
      <List>
        {ingredients.map(({ title, measure }) => (
          <li key={title}>
            {/* {ingredientThumb ? (
              <img src={ingredientThumb} alt={title} />
            ) : (
              <div>default image</div>
            )}
             */}
            <Image src={drinkIdPageBlock} alt={title} />
            <Ingredient>
              <IngredientTitle>{title}</IngredientTitle>
              <IngredientMeasure>{measure}</IngredientMeasure>
            </Ingredient>
          </li>
        ))}
      </List>
    </>
  );
};
export default DrinkIngridientList;
