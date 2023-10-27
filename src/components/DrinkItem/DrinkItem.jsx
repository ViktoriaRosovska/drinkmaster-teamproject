import React from 'react';
import {
  Card,
  CardImage,
  DrinkName,
  IsAlco,
  Description,
    DeleteBtn,
    ButtonsContainer,
  SVG,
} from './DrinkItem.styled';
import trash from '../../assets/images/deleteSvg/trash.svg';
import SeeMoreBtn from 'components/LinkBtn/SeeMoreBtn';

const DrinkItem = ({ drinkData }) => {
  const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

  return (
    <Card>
      <CardImage src={drinkThumb} alt={drink} />
      <DrinkName>{drink}</DrinkName>
      <IsAlco>{alcoholic}</IsAlco>
      <Description>{description}</Description>
      <ButtonsContainer>
        <SeeMoreBtn navLink={`/drink/${_id}`} />
        <DeleteBtn type="button">
          <SVG src={trash} />
        </DeleteBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default DrinkItem;
