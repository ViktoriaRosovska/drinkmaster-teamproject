import DrinksItem from './DrinksItem';
import { List } from './Drinks.styled';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter/filterSelector';
import { useDrink } from 'hooks/useDrink';

export const Drinks = () => {
  const { mainPageDrinks } = useDrink();

  const filter = useSelector(filterSelector);

  const drinks = Object.values(mainPageDrinks).flat();
  console.log('Drinks:', drinks);
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
