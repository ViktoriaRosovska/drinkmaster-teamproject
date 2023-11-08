import { useDispatch } from 'react-redux';
import { Logout } from './LogautBtn.styled';
import { authOperations } from 'redux/auth/authOperations';

export default function LogoutBtn({ onBackdrop }) {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authOperations.signOut());
  };
  return (
    <Logout type="button" onClick={() => onLogoutHandler()}>
      Logout
    </Logout>
  );
}
