import PageTitle from 'components/PageTitle/PageTitle';

import { MainContainer } from 'styles/App.styled';

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';

import AddDrinkForm from '../../components/Forms/AddDrinkForm/AddDrinkForm';
import FollowUs from 'components/FollowUs/FollowUs';
import {
  AddDrinkContainer,
  FollowUsTitle,
  RightWrapper,
} from './AddDrinkPage.styled';
import PopularDrinks from 'components/PopularDrinks/PopularDrinks';

export default function AddDrinkPage() {
  return (
    <MainContainer>
      <PageTitle title="Add drink" />
      <AddDrinkContainer>
        <AddDrinkForm />
        <RightWrapper>
          <div>
            <FollowUsTitle>FollowUs</FollowUsTitle>
            <FollowUs />
          </div>
          <div>
            <PopularDrinks />
          </div>
        </RightWrapper>
      </AddDrinkContainer>
    </MainContainer>
  );
}
