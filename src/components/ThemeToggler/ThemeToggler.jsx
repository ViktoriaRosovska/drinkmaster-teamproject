import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { StyledButton } from './ThemeToggler.styled';
import { useState } from 'react';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('dark');

  const isDarkTheme = theme === 'dark';
  const onChangeTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };
  const payload = { theme: theme };
  dispatch(authOperations.themeThunk(payload));

  return (
    <>
      <StyledButton onClick={onChangeTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </StyledButton>
    </>
  );
};
