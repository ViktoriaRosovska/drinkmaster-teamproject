import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import SharedLayout from './SharedLayout/SharedLayout';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
import WelcomePage from 'views/WelcomePage/WelcomePage';

import { authOperations } from 'redux/auth/authOperations';
import Loader from './Loader';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const ErrorPage = lazy(() => import('../views/ErrorPage/ErrorPage'));
const AddDrinkPage = lazy(() => import('../views/AddDrinkPage/AddDrinkPage'));
const FavoriteDrinksPage = lazy(() =>
  import('../views/FavouriteDrinksPage/FavouriteDrinksPage')
);
const MyDrinksPage = lazy(() => import('../views/MyDrinksPage/MyDrinksPage'));
const DrinkIdPage = lazy(() => import('../views/DrinkIdPage/DrinkIdPage'));
const DrinksPage = lazy(() => import('../views/DrinksPage/DrinksPage'));
const SignInPage = lazy(() => import('../views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../views/SignUpPage/SignUpPage'));
const PrivacyPolicyPage = lazy(() =>
  import('../views/PrivacyPolicyPage/PrivacyPolicyPage')
);
const TermsServicePage = lazy(() =>
  import('../views/TermsServicePage/TermsServicePage')
);

//  const isLoggedIn = true;

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.currentUser());
    if (location.pathname === '/') {
      navigate('/home');
    } else {
      navigate(location.pathname);
    }
  }, [dispatch, location.pathname, navigate]);

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <PublicRoute
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
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignInPage />}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignUpPage />}
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
          <Route path="/drinks/:id" element={<DrinkIdPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorites" element={<FavoriteDrinksPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/service" element={<TermsServicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
