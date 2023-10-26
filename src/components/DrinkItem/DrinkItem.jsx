import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, DrinkName, IsAlco, Description, SeeMoreBtn } from './DrinkItem.styled';

const DrinkItem = ({ drinkData }) => {
    const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

    return (
        <Card>
            <CardImage src={drinkThumb} alt={drink} />
            <DrinkName>{drink}</DrinkName>
            <IsAlco>{alcoholic}</IsAlco>
            <Description>{description}</Description>
            <Link to={`/drink/${_id}`}>
                <SeeMoreBtn type='button'>See more</SeeMoreBtn>
            </Link>
            <button type='button' >
                Delete
            </button>
       </Card>
   )
}

export default DrinkItem;