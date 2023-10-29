import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import AddDrinkPage from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';

import SharedLayout from './SharedLayout/SharedLayout';
import ErrorPage from '../views/ErrorPage/ErrorPage';
import SigninForm from './AuthForm/SigninForm/SigninForm';
import SignupForm from './AuthForm/SignupForm/SignupForm';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
import WelcomePage from 'views/WelcomePage/WelcomePage';
import DrinkIdPage from 'views/DrinkIdPage/DrinkIdPage';
import { useEffect } from 'react';

const isLoggedIn = true;
export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);
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
