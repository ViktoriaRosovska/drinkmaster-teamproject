import PageTitle from 'components/PageTitle/PageTitle';
import { AddDrinkContainer } from './AddDrinkPage.styled';
import { MainContainer } from 'styles/App.styled';

import { useEffect } from 'react';

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';

import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';

export default function AddDrinkPage() {
  useEffect(() => {}, []);
  return (
    <MainContainer>
      <AddDrinkContainer>
        <PageTitle title="Add drink" />

        <AddDrinkForm />
        <div>
          <h4>Follow Us</h4>
          <div>Іконки</div>
        </div>
        <div>
          <h4>Popular drinks</h4>
          <div>Компонент Популярні напої</div>
        </div>
      </AddDrinkContainer>
    </MainContainer>
  );
}
