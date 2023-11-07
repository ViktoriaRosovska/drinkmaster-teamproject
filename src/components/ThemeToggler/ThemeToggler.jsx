// import { useState } from 'react';
import { SwitchTheme } from './SwitchTheme.styled';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/authSelectors';
import { toggleTheme } from 'redux/auth/authSlice';

export const ThemeToggler = ({ isOpenBurgerMenu }) => {
  // const [isToggled, setIsToggled] = useState(true);
  const themeSelector = useSelector(authSelectors.selectTheme);
  const dispatch = useDispatch();

  // const onToggle = () => {
  //   setIsToggled(!isToggled);
  //   toggleTheme();
  // };

  return (
    <>
      <SwitchTheme
        type="checkbox"
        role="switch"
        checked={themeSelector === 'light'}
        onChange={() => dispatch(toggleTheme())}
        isOpenBurgerMenu={isOpenBurgerMenu}
      />
      {/* <StyledButton onClick={onChangeTheme} isOpenBurgerMenu={isOpenBurgerMenu}>
        {currentTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </StyledButton> */}
    </>
  );
};
