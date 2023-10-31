import React from 'react';
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
import { useDispatch } from 'react-redux';
import { removeDrink } from 'redux/drinks/drinksOperations';

const DrinkItem = ({ drinkData }) => {
  const dispatch = useDispatch();

  const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

  const handleRemoveFromFav = () => {
    dispatch(removeDrink(_id));
  }

  return (
    <Card>
      <CardImage src={drinkThumb} alt={drink} />
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
