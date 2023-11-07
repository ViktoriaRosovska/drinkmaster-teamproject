import { useDispatch } from 'react-redux';
import { Logout } from './LogautBtn.styled';
import { authOperations } from 'redux/auth/authOperations';

export default function LogoutBtn({ onBackdrop }) {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    // Logout user .....
    dispatch(authOperations.signOut());
    // onBackdrop();
  };
  return (
    <Logout type="button" onClick={() => onLogoutHandler()}>
      Logout
    </Logout>
  );
}
