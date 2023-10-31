import { Logout } from './LogautBtn.styled';

export default function LogoutBtn({ onBackdropClose }) {
  const onLogoutHandler = () => {
    // Logout user .....
    onBackdropClose();
  };
  return (
    <Logout type="button" onClick={onLogoutHandler}>
      Logout
    </Logout>
  );
}
