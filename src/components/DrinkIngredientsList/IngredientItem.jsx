import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-middle@1x.jpg';
import {
  ImageBox,
  Ingredient,
  IngredientMeasure,
  IngredientPhoto,
  IngredientTitle,
} from './IngredientItem.styled';
export const IngredientItem = ({ title, measure, photo }) => {
  return (
    <>
      {/* <>
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
      </> */}
      <>
        <ImageBox>
          <IngredientPhoto src={photo ? photo : drinkIdPageBlock} />
        </ImageBox>
        <Ingredient>
          <IngredientTitle>{title}</IngredientTitle>
          <IngredientMeasure>{measure}</IngredientMeasure>
        </Ingredient>
      </>

      {/* <Ingredient>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>
          {quantity ? `${quantity} ${measure}` : measure}
        </IngredientMeasure>
      </Ingredient> */}
    </>
  );
};
