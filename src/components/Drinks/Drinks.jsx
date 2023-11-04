import DrinksItem from './DrinksItem';
import { List } from './Drinks.styled';

export const Drinks = ({ drinks }) => {
  return (
    <List>
      {drinks.map(({ drink, drinkThumb, _id }) => {
        return (
          <DrinksItem
            key={_id}
            id={_id}
            drinkTitle={drink}
            drinkThumb={drinkThumb}
          />
        );
      })}
    </List>
  );
};
