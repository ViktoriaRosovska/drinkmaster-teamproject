import {
  LogoIconHeader,
  LogoLink,
  LogoTextHeader,
} from 'components/Logo/Logo.styled';

const LogoHeader = () => {
  return (
    <LogoLink to="/home">
      <LogoIconHeader />
      <LogoTextHeader>Drink&nbsp;master</LogoTextHeader>
    </LogoLink>
  );
};

export default LogoHeader;
