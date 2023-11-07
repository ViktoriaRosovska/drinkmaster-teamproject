import PageTitle from 'components/PageTitle/PageTitle';

import { MainContainer } from 'styles/App.styled';

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';

import AddDrinkForm from '../../components/Forms/AddDrinkForm/AddDrinkForm';
// import FollowUs from 'components/FollowUs/FollowUs';
import {
  AddDrinkContainer,
  FollowUsTitle,
  RightWrapper,
} from './AddDrinkPage.styled';
import PopularDrinks from 'components/PopularDrinks/PopularDrinks';
import FollowUsAdd from 'components/FollowUs/FollowUsAdd';
import { useEffect } from 'react';
export default function AddDrinkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer>
      <PageTitle title="Add drink" />
      <AddDrinkContainer>
        <AddDrinkForm />
        <RightWrapper>
          <div>
            <FollowUsTitle>FollowUs</FollowUsTitle>
            <FollowUsAdd />
          </div>
          <div>
            <PopularDrinks />
          </div>
        </RightWrapper>
      </AddDrinkContainer>
    </MainContainer>
  );
}
