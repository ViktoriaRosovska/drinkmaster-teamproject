import React, { useEffect, useState } from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { MainContainer } from 'styles/App.styled';
import { useDrink } from 'hooks/useDrink';
import { useDispatch } from 'react-redux';
import { getFavoriteAll } from 'redux/drinks/drinksOperations';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const { total, favoriteDrinks } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);

  // const pagesToShow = 8;
  const drinksPerPage = 8;

  const onPageChange = pageNum => {
    setCurrentPage(pageNum);
  };

  // const totalPages = Math.ceil(total / drinksPerPage);
  const totalPages = 8;

  useEffect(() => {
    dispatch(getFavoriteAll({ page: currentPage, limit: drinksPerPage }));
  }, [dispatch, currentPage, drinksPerPage]);

  return (
    <MainContainer>
      <PageTitle title="Favorites" />
      <DrinkList drinks={favoriteDrinks} />
      {totalPages > 1 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </MainContainer>
  );
}
