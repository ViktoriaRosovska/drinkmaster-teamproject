import Selection from './Select';
import { Filter, Wrapper } from './DrinksSearch.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/filter/filterSelector';
import { setFilter } from '../../redux/filter/filterSlice';
import { useFilters } from 'hooks/useFilters';

const DrinksSearch = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const { categories, ingredients, isLoading } = useFilters();

  const sortedIngredients = [];
  for (const ingredient of ingredients) {
    if (ingredient.title && !sortedIngredients.includes(ingredient.title)) {
      sortedIngredients.push(ingredient.title);
    }
  }
  // console.log(sortedIngredients);

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    !isLoading && (
      <Wrapper>
        <Filter
          type="text"
          placeholder="Enter the text"
          value={filter}
          onChange={changeFilter}
          debounceTimeout={1000}
        />
        <Selection placeholder="All categories" options={categories} />
        <Selection placeholder="Ingredients" options={sortedIngredients} />
      </Wrapper>
    )
  );
};

export default DrinksSearch;
