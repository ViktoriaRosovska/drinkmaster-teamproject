import React from 'react';
import drinkIdPageBlock from '../../assets/images/drinkPage/coctailPlaceholder.png';
import {
  ImageBox,
  Ingredient,
  IngredientMeasure,
  IngredientPhoto,
  IngredientTitle,
} from './IngredientItem.styled';

export const IngredientItem = ({ title, measure, quantity, photo }) => {
  return (
    <ImageBox>
      <IngredientPhoto
        src={photo || drinkIdPageBlock}
        alt={title}
        onError={e => {
          e.target.src = drinkIdPageBlock;
        }}
      />
      <Ingredient>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>{quantity ? quantity : measure}</IngredientMeasure>
      </Ingredient>
    </ImageBox>
  );
};
