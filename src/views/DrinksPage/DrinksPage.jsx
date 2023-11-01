import PageTitle from 'components/PageTitle/PageTitle';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import { MainContainer } from 'styles/App.styled';
import { Drinks } from 'components/Drinks/Drinks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useDrink } from 'hooks/useDrink';
import { getMainPageAllDrinks } from 'redux/drinks/drinksOperations';

export default function DrinksPage() {
  const dispatch = useDispatch();

  // const { error } = useDrink();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);

  return (
    <MainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks />
    </MainContainer>
  );
}
