import React from 'react';
import { Link } from 'react-router-dom';

const DrinkItem = ({ drinkData }) => {
    const { drink, drinkThumb, alcoholic, description, _id } = drinkData;

    return (
        <li>
            <img src={drinkThumb} alt={drink} />
            <h2>{drink}</h2>
            <p>{alcoholic}</p>
            <p>{description}</p>
            <Link to={`/drink/${_id}`}>
                <button>See more</button>
            </Link>
            <button >
                Delete
            </button>
       </li>
   )
}

export default DrinkItem;