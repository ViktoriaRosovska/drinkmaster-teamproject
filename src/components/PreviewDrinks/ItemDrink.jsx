import React, { useState } from 'react';
import DefaultImg from '../../assets/images/drinkPage/coctailPlaceholder.png';
import {
  CategoryDrinksITEM,
  CategoryDrinksIMG,
  CategoryDrinksTEXTDIV,
  CategoryDrinksP,
  CategoryDrinksLink,
} from './PreviewDrinks.styled';

export const ItemDrink = ({ item }) => {
  const { _id: id, drink, drinkThumb } = item;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <CategoryDrinksITEM key={id}>
      <CategoryDrinksIMG
        src={imageError ? DefaultImg : drinkThumb}
        alt={drink}
        onError={handleImageError}
      />
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink}</CategoryDrinksP>
        <CategoryDrinksLink to={`/drinks/${id}`}>See more</CategoryDrinksLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksITEM>
  );
};
