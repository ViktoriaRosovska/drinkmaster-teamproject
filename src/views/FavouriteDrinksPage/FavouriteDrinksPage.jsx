import React, { useEffect, useState } from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paginator from 'components/Paginator/Paginator';
import { MainContainer } from 'styles/App.styled';
import { useDrink } from 'hooks/useDrink';
import { useDispatch } from 'react-redux';
import { getFavoriteAll } from 'redux/drinks/drinksOperations';
import NotFound from 'components/NotFound/NotFound';
import { useResize } from 'hooks/useResize';
import { useNavigate } from 'react-router-dom';

export default function FavoriteDrinksPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { width } = useResize();
  const { total, favoriteDrinks } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);

  const drinksPerPage = width < 1440 ? 8 : 9;

  const onPageChange = pageNum => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil(total / drinksPerPage);

  useEffect(() => {
    if (favoriteDrinks?.length === 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteDrinks]);

  useEffect(() => {
    navigate(`?page=${currentPage}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    dispatch(getFavoriteAll({ page: currentPage, limit: drinksPerPage }))
      .unwrap()
      .catch(() => {
        toast.error(`Something went wrong. Try again`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      });
  }, [dispatch, currentPage, total, drinksPerPage]);

  return (
    <MainContainer>
      <ToastContainer transition={Slide} />
      <PageTitle title="Favorites" />
      {total > 0 ? (
        <DrinkList
          favorite={true}
          drinksData={favoriteDrinks}
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
