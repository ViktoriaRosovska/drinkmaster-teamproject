import Selection from './Select';
import { Filter, Wrapper } from './DrinksSearch.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  filterSelector,
  ingredientSelector,
  categorySelector,
} from '../../redux/filter/filterSelector';
import {
  setFilter,
  setIngredient,
  setCategory,
} from '../../redux/filter/filterSlice';
import { useFilters } from 'hooks/useFilters';

const DrinksSearch = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const ingredient = useSelector(ingredientSelector);
  const category = useSelector(categorySelector);

  const { categories, ingredients, isLoading } = useFilters();

  const sortedIngredients = [];
  for (const ingredient of ingredients) {
    if (ingredient.title && !sortedIngredients.includes(ingredient.title)) {
      sortedIngredients.push(ingredient.title);
    }
  }

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const handleChangeCategory = changeValue => {
    dispatch(setCategory(changeValue));
    console.log('Should be setCategory value', changeValue);
  };

  const handleChangeIngredient = changeValue => {
    dispatch(setIngredient(changeValue));
    console.log('Should be setIngredient value', changeValue);
  };

  return (
    !isLoading && (
      <Wrapper>
        <Filter
          type="text"
          placeholder="Enter the text"
          value={filter}
          onChange={handleChangeFilter}
          debounceTimeout={1000}
        />
        <Selection
          placeholder="All categories"
          options={categories}
          onChange={handleChangeCategory}
          value={category}
        />
        <Selection
          placeholder="Ingredients"
          options={sortedIngredients}
          onChange={handleChangeIngredient}
          value={ingredient.value}
        />
      </Wrapper>
    )
  );
};

export default DrinksSearch;
