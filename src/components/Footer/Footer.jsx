import Logo from '../../components/Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import { FooterContainer, FooterLogoAndSocial, Container, FooterNavWrapper } from './Footer.styled';
import Nav from 'components/Nav/Nav';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterNavWrapper>
          <FooterLogoAndSocial>
          <Logo />
          <FollowUs />
        </FooterLogoAndSocial>

        <Nav/>
        </FooterNavWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
