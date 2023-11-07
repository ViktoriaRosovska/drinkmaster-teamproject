import { LogoLink, LogoIcon, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to="/home">
      <LogoIcon />
      <LogoText>Drink&nbsp;master</LogoText>
    </LogoLink>
  );
};

export default Logo;
