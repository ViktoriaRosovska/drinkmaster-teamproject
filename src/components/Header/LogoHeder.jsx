import {
  LogoIconHeader,
  LogoLink,
  LogoText,
} from 'components/Logo/Logo.styled';

const LogoHeader = () => {
  return (
    <LogoLink to="/">
      <LogoIconHeader />
      <LogoText>Drink&nbsp;master</LogoText>
    </LogoLink>
  );
};

export default LogoHeader;
