import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import { AddDrinkPage } from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';

import ErrorPage from './ErrorPage/ErrorPage';
import SigninForm from './AuthForm/SigninForm/SigninForm';
import SignupForm from './AuthForm/SignupForm/SignupForm';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
const isLoggedIn = true;

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/welcome"
            element={<PublicRoute redirectTo="/home" isLoggedIn={isLoggedIn} />}
          >
            <Route path="/welcome/signin" element={<SigninForm />} />
            <Route path="/welcome/signup" element={<SignupForm />} />
          </Route>

          <Route
            element={
              <PrivateRoute
                redirectTo="/welcome/signin"
                isLoggedIn={isLoggedIn}
              />
            }
          >
            <Route path="/home" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/add" element={<AddDrinkPage />} />
            <Route path="/my" element={<MyDrinksPage />} />
            <Route path="/favorites" element={<FavoriteDrinksPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
