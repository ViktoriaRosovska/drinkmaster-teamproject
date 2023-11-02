import React, {useRef } from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Link, useLocation } from 'react-router-dom';
import {
  PrivacyContainer,
  PrivacyPolicyText,
  PrivacyPolicyTitle,
} from './PrivacyPolicyPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function PrivacyPolicy() {

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <>
      <PrivacyContainer>

 <Link to={backLinkHref.current}>
        <ButtonBack text=" Go back" />
      </Link>

        <PageTitle title='Privacy Policy'/>
        <PrivacyPolicyText>
          Your privacy is important to us. This section outlines how we collect,
          use, process, and protect your personal data. This Privacy Policy
          applies to the use of our website, applications, and services, so
          please take a moment to read it.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>
          What personal data do we collect:
        </PrivacyPolicyTitle>
        <PrivacyPolicyText>
          We may collect various types of personal data that you voluntarily
          provide when interacting with our website, registering an account or
          filling out forms. This may include your name, email address, phone
          number and more.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>How we use your personal data:</PrivacyPolicyTitle>
        <PrivacyPolicyText>
          We use the collected personal data to provide services, manage your
          account, provide you with information about our products and services,
          and to communicate with you regarding inquiries and updates.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>Protection of personal data:</PrivacyPolicyTitle>
        <PrivacyPolicyText>
          We take every effort to protect your information and use modern
          technologies to prevent unauthorized access, loss, or disclosure of
          your personal information.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>Disclosure to third parties:</PrivacyPolicyTitle>
        <PrivacyPolicyText>
          We do not disclose your personal data to third parties without your
          consent, except when required by law or to provide the services you
          requested.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>Changes to the Privacy Policy:</PrivacyPolicyTitle>
        <PrivacyPolicyText>
          We may periodically update this Privacy Policy. Please refer to this
          page to stay informed about any changes.
        </PrivacyPolicyText>
        <PrivacyPolicyTitle>Contact us:</PrivacyPolicyTitle>
        <PrivacyPolicyText>
          If you have any questions or concerns regarding this Privacy Policy or
          your information, please contact us using the contact details provided
          on our website.
        </PrivacyPolicyText>
      </PrivacyContainer>
    </>
  );
}
