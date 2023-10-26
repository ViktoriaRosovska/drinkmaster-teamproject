import PageTitle from 'components/PageTitle/PageTitle';
import { MainContainer } from 'styles/App.styled';
import { Drinks } from 'components/Drinks/Drinks';

export const DrinksPage = () => {
  return (
    <MainContainer>
      <PageTitle title="Drinks" />
      <Drinks />
    </MainContainer>
  );
};
