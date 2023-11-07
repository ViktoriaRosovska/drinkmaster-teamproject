import { useState } from 'react';
import { SwitchTheme } from './SwitchTheme.styled';
// import { useSelector } from 'react-redux';

// import authSelectors from 'redux/auth/authSelectors';

export const ThemeToggler = ({ isOpenBurgerMenu, toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(true);
  // const themeSelector = useSelector(authSelectors.selectTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
      <SwitchTheme onChange={onToggle} isOpenBurgerMenu={isOpenBurgerMenu} />
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
