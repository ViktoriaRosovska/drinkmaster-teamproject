import { toast } from 'react-toastify';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrink } from '../../hooks/useDrink';

import {
  addDrinkToFavorite,
  removeDrink,
  getFavoriteAll,
} from '../../redux/drinks/drinksOperations';
import { selectFavoriteDrinks } from '../../redux/drinks/drinksSelectors';

import { WhiteButton } from 'components/Buttons/WhiteLinkBtn/WhiteLinkBtn.styled';
import {
  About,
  GlassName,
  HeroContainer,
  ImageDrink,
  Box,
} from './DrinkPageHero.styled';

import DefaultImg from '../../assets/images/drinkPage/coctailPlaceholder.png';

const DrinkPageHero = ({ id, glass, about, alcoholic, title, image }) => {
  const notifyAdded = () => toast.success('Added to favorites');
  const notifyRemoved = () => toast.info('Removed from favorites');
  const { isLoading } = useDrink();
  const { favoriteDrinks } = useDrink();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteAll());
  }, [dispatch]);

  const favoriteDrinksList = useSelector(selectFavoriteDrinks);

  const isDrinkInFavoriteList = id => {
    if (favoriteDrinksList) {
      return favoriteDrinksList.find(drink => drink._id === id);
    }
  };

  return (
    <HeroContainer>
      {favoriteDrinksList && (
        <>
          <div>
            {glass && alcoholic && (
              <GlassName>
                {glass} / {alcoholic}
              </GlassName>
            )}

            {about ? (
              <About>{about}</About>
            ) : (
              <p>
                <br />
              </p>
            )}
            {!isDrinkInFavoriteList(id) ? (
              <WhiteButton
                onClick={() =>{
                  dispatch(addDrinkToFavorite(id)).then(() => notifyAdded())
                  if (favoriteDrinks.length === 0) {
                    localStorage.setItem('motivatingFavorite1', 'false')
                  } else if (favoriteDrinks.length === 4) {
                    localStorage.setItem('motivatingFavorite10', 'false')
                  }
                }}
                disabled={isLoading}
              >
                Add to favorite
              </WhiteButton>
            ) : (
              <WhiteButton
                onClick={() =>
                  dispatch(removeDrink(id)).then(() => notifyRemoved())
                }
                disabled={isLoading}
              >
                Remove from favorite
              </WhiteButton>
            )}
          </div>

          <Box>
            <ImageDrink
              src={image || DefaultImg}
              alt={title}
              onError={e => {
                e.target.src = DefaultImg;
              }}
            />
          </Box>
        </>
      )}
    </HeroContainer>
  );
};
export default DrinkPageHero;
