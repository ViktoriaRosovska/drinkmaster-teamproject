import DrinksItem from './DrinksItem';
import { List } from './Drinks.styled';
import data from './recipes.json';

export const Drinks = ({ filter }) => {
  const drinks = data;

  const getVisibleDrinks = () => {
    const normalizedFilter = filter.toLowerCase();
    return drinks.filter(drink =>
      drink.drink.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleDrinks = getVisibleDrinks();

  return (
    <List>
      {visibleDrinks.map(({ drink, drinkThumb, _id: { $oid } }) => {
        return (
          <DrinksItem
            key={$oid}
            id={$oid}
            drinkTitle={drink}
            drinkThumb={drinkThumb}
          />
        );
      })}
    </List>
  );
};
