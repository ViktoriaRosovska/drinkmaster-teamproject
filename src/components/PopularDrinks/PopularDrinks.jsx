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
import { toast } from 'react-toastify';
import { toastConfig } from '../Notification/notification_options';

const PopularDrinks = () => {
  const { popularDrinks } = useDrink();
  const dispatch = useDispatch();
  const { error } = useDrink();

  useEffect(() => {
    dispatch(getPopularDrinks());
  }, [dispatch]);

  return (
    <>
      <PopularDrinksWrapper>
        <PopularDrinksTitle>Popular drinks</PopularDrinksTitle>
        {error && toast.error('Sorry, there are not popular drinks yet... ', toastConfig())}
        <PopularDrinksList>
          {popularDrinks.map(({ _id, drinkThumb, drink, shortDescription }) => (
            <PopularDrinksItem key={_id}>
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
