import { useSelector } from 'react-redux';

import {
  selectCategories,
  selectGlasses,
  selectIngredients,
  selectIsLoading,
  selectError,
} from '../redux/filters/filtersSelector';

export const useFilters = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const categories = useSelector(selectCategories);
  const glasses = useSelector(selectGlasses);
  const ingredients = useSelector(selectIngredients);

  return {
    isLoading,
    error,
    categories,
    glasses,
    ingredients,
  };
};
