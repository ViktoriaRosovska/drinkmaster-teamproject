import PageTitle from 'components/PageTitle/PageTitle';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import { MainContainer } from 'styles/App.styled';
import { Drinks } from 'components/Drinks/Drinks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getMainPageAllDrinks,
  getRequestedDrink,
} from 'redux/drinks/drinksOperations';
import { getCategories, getIngredients } from 'redux/filters/filtersOperations';
import { useDrink } from 'hooks/useDrink';
import { useResize } from 'hooks/useResize';
import {
  categorySelector,
  filterSelector,
  ingredientSelector,
} from 'redux/filter/filterSelector';
import Paginator from 'components/Paginator/Paginator';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from './DrinksPage.styled';

export default function DrinksPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const { drinks, error, total } = useDrink();

  const { width } = useResize();

  const filter = useSelector(filterSelector);
  const category = useSelector(categorySelector);
  const ingredient = useSelector(ingredientSelector);

  const [currentPage, setCurrentPage] = useState(1);

  const drinksPerPage = width < 1440 ? 8 : 9;

  const onPageChange = pageNum => {
    setCurrentPage(pageNum);
  };

  let totalPages = Math.ceil(total / drinksPerPage);

  useEffect(() => {
    if (drinks?.length === 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinks]);

  useEffect(() => {
    navigate(`?page=${currentPage}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    console.log('currentPage ', currentPage);
    dispatch(
      getRequestedDrink({
        query: filter,
        category: category.value,
        ingredient: ingredient.value,
        page: currentPage,
        limit: drinksPerPage,
      })
    )
      .unwrap()
      .catch(error => error);
  }, [dispatch, currentPage, drinksPerPage, filter, category, ingredient]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, category, ingredient]);

  return (
    <MainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      {error ? (
        <ErrorMessage>There are no drinks match your request</ErrorMessage>
      ) : (
        drinks && <Drinks drinks={drinks} />
      )}

      {totalPages > 1 && !error && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          path={'/drinks'}
        />
      )}
    </MainContainer>
  );
}
