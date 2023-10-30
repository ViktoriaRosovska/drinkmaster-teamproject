import { useDrink } from '../../hooks/useDrink';
import { ItemDrink } from './ItemDrink';
import Loader from '../Loader/Loader';
import {
  CategoryDrinksLIST,
  DrinkCategoryTitle,
  CategoryDrinksDiv,
  CategoryDrinkToDrink,
  MainWrapper,
  SectionContainer,
} from './PreviewDrinks.styled';
import { MainContainer } from '../../styles/App.styled';
import { useResize } from '../../hooks/useResize';

const PreviewDrinks = () => {
  const { mainPageDrinks, isLoading } = useDrink();
  console.log('mainPageDrinks:', mainPageDrinks);
  const { width } = useResize();

  const drinksToRender = width < 768 ? 1 : width < 1440 ? 2 : 3;

  const drinksCategory = Object.keys(mainPageDrinks).slice(0, 4);
  console.log(drinksCategory);
  return (
    <>
      <MainContainer>
        <SectionContainer>
          <MainWrapper>
            {isLoading ? (
              <Loader />
            ) : (
              drinksCategory.length > 0 &&
              drinksCategory.map((category, idx) => (
                <CategoryDrinksDiv key={idx}>
                  <DrinkCategoryTitle>{category} </DrinkCategoryTitle>
                  <CategoryDrinksLIST>
                    {mainPageDrinks[category]
                      .slice(0, drinksToRender)
                      .map(item => (
                        <ItemDrink key={item.id} item={item} />
                      ))}
                  </CategoryDrinksLIST>
                </CategoryDrinksDiv>
              ))
            )}
          </MainWrapper>

          {!isLoading && (
            <CategoryDrinkToDrink to={`/drinks`}>
              Other drinks
            </CategoryDrinkToDrink>
          )}
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default PreviewDrinks;
