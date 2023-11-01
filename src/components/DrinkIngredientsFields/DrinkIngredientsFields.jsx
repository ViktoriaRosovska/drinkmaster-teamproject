import {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientWrapper,
  TitleWrapper,
} from './DrinkIngredientsFields.styled';
import closeIcon from '../../assets/images/addDrink/X.svg';
// import { AddIngedientSelect } from 'components/Forms/AddDrinkForm/AddDrinkForm.styled';
import { AddFormSelect } from 'components/DrinkDescriptionFields/DrinkDescriptionFields.styled';
import Subtitle from 'components/Typography/Subtitle/Subtitle';
import QuantitySwitch from './QuantitySwitch/QuantitySwitch';
export default function DrinkIngridientsFields() {
  return (
    <DrinkIngredientsWrapper>
      <TitleWrapper>
        <Subtitle title="Ingredients" />
        <QuantitySwitch />
      </TitleWrapper>
      <IngredientWrapper>
        <AddFormSelect
          placeholder="Ingredient"
          getOptionLabel={ingredient => ingredient.title}
          getOptionValue={ingredient => ingredient.title}
          // options={ingredients}
          styles={{
            control: base => ({
              base,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '1px solid var(--white-fifty-color)',
              borderRadius: '200px',
              width: '200px',
              height: '50px',
              '&:hover': {
                border: '1px solid var(--white-color)',
              },
            }),
            option: (provided, state) => ({
              ...provided,

              backgroundColor: 'none',
              '&:hover': {
                color: 'var(--white-fifty-color)',
              },
            }),
          }}
        />

        <input
          type="text"
          style={{
            width: '101px',
            height: '50px',
            borderRadius: '200px',
            border: '1px solid var(--white-fifty-color)',
            backgroundColor: 'transparent',
          }}
        />
        <CloseIconReactSvg src={closeIcon} />
      </IngredientWrapper>
    </DrinkIngredientsWrapper>
  );
}
