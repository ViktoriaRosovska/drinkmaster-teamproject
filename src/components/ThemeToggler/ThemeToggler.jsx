import { SwitchTheme } from './SwitchTheme.styled';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/authSelectors';
import { toggleTheme } from 'redux/auth/authSlice';

export const ThemeToggler = ({ isOpenBurgerMenu }) => {
  const themeSelector = useSelector(authSelectors.selectTheme);
  const dispatch = useDispatch();
  return (
    <>
      <SwitchTheme
        type="checkbox"
        role="switch"
        checked={themeSelector === 'light'}
        onChange={() => dispatch(toggleTheme())}
        isOpenBurgerMenu={isOpenBurgerMenu}
      />
    </>
  );
};
