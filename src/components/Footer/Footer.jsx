import Logo from '../../components/Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import {
  FooterContainer,
  FooterLogoAndSocial,
  Container,
  FooterNavWrapper,
  FooterContent,
} from './Footer.styled';
import Nav from 'components/Nav/Nav';
import SubscribeForm from 'components/Forms/SubscribeForm/SubscribeForm';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const Footer = ({isInFooter}) => {
  const theme = useSelector(authSelectors.selectTheme);

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterNavWrapper>
            <FooterLogoAndSocial theme={theme}>
              <Logo />
              <FollowUs isInFooter={true}/>
            </FooterLogoAndSocial>

            <Nav />
          </FooterNavWrapper>
          <SubscribeForm />
        </FooterContent>
        <FooterCopyright />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
