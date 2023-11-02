import PageTitle from 'components/PageTitle/PageTitle';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import { MainContainer } from 'styles/App.styled';
import { Drinks } from 'components/Drinks/Drinks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useDrink } from 'hooks/useDrink';
import { getMainPageAllDrinks } from 'redux/drinks/drinksOperations';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from 'redux/filters/filtersOperations';
import { useFilters } from 'hooks/useFilters';

export default function DrinksPage() {
  const dispatch = useDispatch();

  const { error } = useFilters();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getGlasses());
  }, [dispatch]);

  // const { categories, isLoading } = useFilters();
  // console.log('categoriesRedux Drinks page: ', categories);

  return (
    <MainContainer>
      {error && <p>{error}</p>}
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks />
    </MainContainer>
  );
}
