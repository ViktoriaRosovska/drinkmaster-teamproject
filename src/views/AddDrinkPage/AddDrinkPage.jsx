import PageTitle from 'components/PageTitle/PageTitle';

import { MainContainer } from 'styles/App.styled';

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';

import AddDrinkForm from '../../components/Forms/AddDrinkForm/AddDrinkForm';
import FollowUs from 'components/FollowUs/FollowUs';
import { AddDrinkContainer } from './AddDrinkPage.styled';

export default function AddDrinkPage() {
  return (
    <MainContainer>
      <PageTitle title="Add drink" />
      <AddDrinkContainer>
        <AddDrinkForm />
        <div>
          <div>
            <h4>FollowUs</h4>
            <FollowUs />
          </div>
          <div>
            <h4>Popular drinks</h4>
            <div>Компонент Популярні напої</div>
          </div>
        </div>
      </AddDrinkContainer>
    </MainContainer>
  );
}
