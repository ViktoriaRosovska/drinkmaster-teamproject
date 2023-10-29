import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/authSelectors';

import SharedLayout from './SharedLayout/SharedLayout';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
import WelcomePage from 'views/WelcomePage/WelcomePage';

import SigninForm from './AuthForm/SigninForm/SigninForm';
import SignupForm from './AuthForm/SignupForm/SignupForm';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const ErrorPage = lazy(() => import('../views/ErrorPage/ErrorPage'));
const AddDrinkPage = lazy(() => import('../views/AddDrinkPage/AddDrinkPage'));
const FavoriteDrinksPage = lazy(() =>
  import('../views/FavouriteDrinksPage/FavouriteDrinksPage')
);
const MyDrinksPage = lazy(() => import('../views/MyDrinksPage/MyDrinksPage'));
const DrinkIdPage = lazy(() => import('../views/DrinkIdPage/DrinkIdPage'));
const DrinksPage = lazy(() => import('../views/DrinksPage/DrinksPage'));

const isLoggedIn = true;

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <PublicRoute
              // restricted={false}
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<WelcomePage />}
            />
          }
        />

        <Route
          path="/signin"
          element={
            <PublicRoute
              // restricted={false}
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SigninForm />}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute
              // restricted={false}
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignupForm />}
            />
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute
              redirectTo="/welcome"
              isLoggedIn={isLoggedIn}
              component={<SharedLayout />}
            />
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/drinks/drinkId" element={<DrinkIdPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorites" element={<FavoriteDrinksPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
