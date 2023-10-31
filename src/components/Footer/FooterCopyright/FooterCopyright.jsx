import { FooterCopyrightWrapper, FooterText, FooterLinkInfo, FooterLink } from './FooterCopyright.styled';

const FooterCopyright = () => {
  return (
    <FooterCopyrightWrapper>
      <FooterText>&#169;2023 Drink Master. All rights reserved.</FooterText>
      <FooterLinkInfo>
        <FooterLink to={'/privacy'}>Privacy Policy</FooterLink>
        <FooterLink to={'/service'}>Terms of Service</FooterLink>
      </FooterLinkInfo>
    </FooterCopyrightWrapper>
  );
};

export default FooterCopyright;
