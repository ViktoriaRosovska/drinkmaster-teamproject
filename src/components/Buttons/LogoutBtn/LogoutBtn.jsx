import { Logout } from './LogautBtn.styled';

export default function LogoutBtn({ onBackdrop }) {
  const onLogoutHandler = () => {
    console.log('Hello');
    onBackdrop();
  };
  return (
    <Logout type="button" onClick={onLogoutHandler}>
      Logout
    </Logout>
  );
}
