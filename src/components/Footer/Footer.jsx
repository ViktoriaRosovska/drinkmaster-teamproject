import Logo from '../../components/Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import { FooterContainer, FooterLogoAndSocial, Container } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLogoAndSocial>
          <Logo />
          <FollowUs />
        </FooterLogoAndSocial>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
