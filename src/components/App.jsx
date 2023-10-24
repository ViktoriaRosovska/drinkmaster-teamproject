import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import { AddDrinkPage } from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorites" element={<FavoriteDrinksPage />} />
        </Route>

        <Route path="*" element={<h2>404 Page not found</h2>} />
      </Routes>
    </div>
  );
};
