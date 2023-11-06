import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  PopularDrinksWrapper,
  PopularDrinksTitle,
  PopularDrinksList,
  PopularDrinksItem,
  PopularDrinksLink,
  PopularDrinksImg,
  PopularDrinksName,
  PopularDrinksInfo,
  PopularDrinksTxt,
} from './PopularDrinks.styled';
import { useDrink } from 'hooks/useDrink';
import { getPopularDrinks } from 'redux/drinks/drinksOperations';
import DefoultImg from '../../assets/images/drinkIdPage/block-small@2x.jpg';

const PopularDrinks = () => {
  const { popularDrinks } = useDrink();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularDrinks());
  }, [dispatch]);

  return (
    <>
      <PopularDrinksWrapper>
        <PopularDrinksTitle>Popular drinks</PopularDrinksTitle>
        <PopularDrinksList>
          {popularDrinks.map(({ _id, drinkThumb, drink, shortDescription }) => (
            <PopularDrinksItem key={_id}>
              {' '}
              <PopularDrinksLink to={`/drinks/${_id}`}>
                <PopularDrinksImg
                  src={drinkThumb ? drinkThumb : DefoultImg}
                  alt={drink}
                  width={90}
                  height={90}
                />

                <PopularDrinksInfo>
                  <PopularDrinksName>{drink}</PopularDrinksName>
                  <PopularDrinksTxt>{shortDescription}</PopularDrinksTxt>
                </PopularDrinksInfo>
              </PopularDrinksLink>
            </PopularDrinksItem>
          ))}
        </PopularDrinksList>
      </PopularDrinksWrapper>
    </>
  );
};

export default PopularDrinks;
