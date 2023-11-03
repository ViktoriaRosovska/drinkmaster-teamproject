import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardImage,
  DrinkName,
  IsAlco,
  Description,
  ButtonsContainer,
  SVG,
  DeleteBtn,
} from './DrinkItem.styled';
import trash from '../../assets/images/deleteSvg/trash.svg';
import SeeMoreBtn from 'components/LinkBtn/SeeMoreBtn';
import { removeDrink } from 'redux/drinks/drinksOperations';
import { removeOwnDrink } from 'redux/drinks/drinksOperations';
import placeholderImage from '../../assets/images/drinkPage/coctailPlaceholder.png';

const DrinkItem = ({ drinkData, favorite }) => {
  const dispatch = useDispatch();

  const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

  const handleRemoveFromFav = () => {
    favorite ? dispatch(removeDrink(_id)) : dispatch(removeOwnDrink(_id)); 
  };

  return (
    <Card>
      <CardImage
        src={drinkThumb || placeholderImage}
        alt={drink}
        onError={e => {
          e.target.src = placeholderImage;
        }}
      />
      <DrinkName>{drink}</DrinkName>
      <IsAlco>{alcoholic}</IsAlco>
      <Description>{description}</Description>
      <ButtonsContainer>
        <SeeMoreBtn navLink={`/drink/${_id}`} />
        <DeleteBtn type="button" onClick={handleRemoveFromFav}>
          <SVG src={trash} />
        </DeleteBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default DrinkItem;
