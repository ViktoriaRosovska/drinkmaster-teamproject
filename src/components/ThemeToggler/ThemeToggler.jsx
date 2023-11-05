import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { StyledButton } from './ThemeToggler.styled';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

export const ThemeToggler = ({isOpenBurgerMenu}) => {
  console.log(isOpenBurgerMenu);

  const dispatch = useDispatch();

  const themeSelector = useSelector(authSelectors.selectTheme);

  const onChangeTheme = () => {
    const theme = themeSelector === 'dark' ? 'light' : 'dark';
    dispatch(authOperations.themeThunk({ theme: theme }));
  };

  const currentTheme = themeSelector === 'dark';

  return (
    <>
      <StyledButton onClick={onChangeTheme} isOpenBurgerMenu={isOpenBurgerMenu}>
        {currentTheme ? (
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
