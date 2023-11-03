import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { StyledButton } from './ThemeToggler.styled';
import { useEffect, useState } from 'react';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('dark');

  const isDarkTheme = theme === 'dark';
  const onChangeTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  useEffect(() => {
    dispatch(authOperations.themeThunk({ theme: theme }));
  }, [dispatch, theme]);

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
