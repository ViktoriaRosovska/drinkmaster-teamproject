import Subtitle from 'components/Typography/Subtitle/Subtitle';
import { AddFormTextarea } from './DrinkRecipePreparation.styled';

export default function DrinkRecipePreparation() {
  return (
    <>
      <Subtitle title="Recipe Preparation" />
      <label htmlFor="addDrinkFormTextarea">Enter the recipe</label>
      <AddFormTextarea id="addDrinkFormTextarea"></AddFormTextarea>
    </>
  );
}
