import React, { useEffect, useState } from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import { MainContainer } from 'styles/App.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useDrink } from 'hooks/useDrink';
import { getOwnDrinks } from 'redux/drinks/drinksOperations';
import NotFound from 'components/NotFound/NotFound';
import Paginator from 'components/Paginator/Paginator';

export default function MyDrinksPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { total, drinks } = useDrink();
  const [currentPage, setCurrentPage] = useState(1);

  const drinksPerPage = 6;

  const onPageChange = pageNum => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil(total / drinksPerPage);

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
    dispatch(getOwnDrinks({ page: currentPage, limit: drinksPerPage }))
      .unwrap()
      .catch(error => console.log(error));
  }, [dispatch, currentPage, total, drinksPerPage]);

  return (
    <MainContainer>
      <PageTitle title="My drinks" />
      {total > 0 ? (
        <DrinkList
          drinksData={drinks}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      ) : (
        <NotFound />
      )}

      {totalPages > 1 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          path={'/favorites'}
        />
      )}
    </MainContainer>
  );
}
