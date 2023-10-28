import { MainContainer } from 'styles/App.styled';
import Logo from '../../components/Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import { FooterContainer, FooterLogoAndSocial } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <FooterLogoAndSocial>
          <Logo />
          <FollowUs />
        </FooterLogoAndSocial>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
