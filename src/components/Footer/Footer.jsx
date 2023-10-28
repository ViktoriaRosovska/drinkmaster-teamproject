import { MainContainer } from 'styles/App.styled';
import Logo from '../../components/Logo/Logo';
import SocialMedia from './SocialMedia/SocialMedia';
import { FooterContainer, FooterLogoAndSocial } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <FooterLogoAndSocial>
          <Logo />
          <SocialMedia />
        </FooterLogoAndSocial>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
