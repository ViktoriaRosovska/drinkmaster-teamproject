import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-middle@1x.jpg';
import {
  Image,
  Ingredient,
  IngredientMeasure,
  IngredientPhoto,
  IngredientTitle,
} from './IngredientItem.styled';
export const IngredientItem = ({ title, measure, quantity, images }) => {
  return (
    <>
      <>
        {images['ingredientThumb'] === '' ? (
          <Image src={drinkIdPageBlock} alt={title} />
        ) : (
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={images['ingredientThumb']}
            />
            <source
              media="(min-width: 768px)"
              srcSet={images['thumb-medium']}
            />
            <source media="(min-width: 375px)" srcSet={images['thumb-small']} />
            <IngredientPhoto
              src={images['ingredientThumb']}
              alt="ingredient photo"
            />
          </picture>
        )}
      </>
      <Ingredient>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>
          {quantity ? `${quantity} ${measure}` : measure}
        </IngredientMeasure>
      </Ingredient>
    </>
  );
};
