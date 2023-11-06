import React from 'react';
import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-middle@1x.jpg';
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
      <IngredientPhoto src={photo ? photo : drinkIdPageBlock} />
      <Ingredient>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>{quantity ? quantity : measure}</IngredientMeasure>
      </Ingredient>
    </ImageBox>
  );
};
