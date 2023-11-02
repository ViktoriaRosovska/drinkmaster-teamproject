import { useDispatch } from 'react-redux';
// import selectTheme from '../../redux/auth/authSelectors';
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
  const payload = JSON.stringify({ theme: theme });
  dispatch(authOperations.themeThunk(payload));

  return (
    <>
      <StyledButton
        title={isDarkTheme ? 'switch to light theme' : 'switch to dark theme'}
        onClick={onChangeTheme}
      ></StyledButton>
    </>
  );
};
