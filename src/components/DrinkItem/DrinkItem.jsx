import React from 'react';
// import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImage,
  DrinkName,
  IsAlco,
  Description,
  SeeMoreBtn,
    DeleteBtn,
    ButtonsContainer,
  SVG,
} from './DrinkItem.styled';
import trash from '../../assets/images/deleteSvg/trash.svg';

const DrinkItem = ({ drinkData }) => {
  const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

  return (
    <Card>
      <CardImage src={drinkThumb} alt={drink} />
      <DrinkName>{drink}</DrinkName>
      <IsAlco>{alcoholic}</IsAlco>
      <Description>{description}</Description>
      <ButtonsContainer>
        <Link to={`/drink/${_id}`}>
          <SeeMoreBtn type="button">See more</SeeMoreBtn>
        </Link>
        <DeleteBtn type="button">
          <SVG src={trash} />
        </DeleteBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default DrinkItem;
