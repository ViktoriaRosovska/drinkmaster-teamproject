import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import { AddDrinkPage } from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';
import { WelcomePage } from 'views/WelcomePage/WelcomePage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorites" element={<FavoriteDrinksPage />} />

          <Route
            path="/welcome"
            element={<WelcomePage />}  //<h2 style={{ color: 'white' }}>welcome to signin</h2
          />
          {/* <Route path="/signin" element={<SigninForm />} /> */}
          {/* <Route path="/signup" element={<SignupForm />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
