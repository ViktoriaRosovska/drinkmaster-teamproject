import PageTitle from 'components/PageTitle/PageTitle';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import { MainContainer } from 'styles/App.styled';
import { Drinks } from 'components/Drinks/Drinks';
import { useState } from 'react';

export default function DrinksPage() {
  const [filterValue, setFilterValue] = useState('');

  const updateData = value => {
    setFilterValue(value);
    console.log(filterValue);
  };

  return (
    <MainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch updateData={updateData} />
      <Drinks filter={filterValue} />
    </MainContainer>
  );
}
