import React from 'react';

import { MainContainer } from 'styles/App.styled';
import { PrivacyPolicyText, PrivacyPolicyTitle } from './PrivacyPolicyPage.styled';

export default function PrivacyPolicy() {
  return (
    <>
      <MainContainer>
        
        <PrivacyPolicyText>
          Your privacy is important to us. This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.

<PrivacyPolicyTitle>What personal data do we collect:</PrivacyPolicyTitle>
We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.

<PrivacyPolicyTitle>How we use your personal data:</PrivacyPolicyTitle>
We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.

<PrivacyPolicyTitle>Protection of personal data:</PrivacyPolicyTitle>
We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.

<PrivacyPolicyTitle>Disclosure to third parties:</PrivacyPolicyTitle>
We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.

<PrivacyPolicyTitle>Changes to the Privacy Policy:</PrivacyPolicyTitle>
We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.

<PrivacyPolicyTitle>Contact us:</PrivacyPolicyTitle>
If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.
        </PrivacyPolicyText>
      </MainContainer>
    </>
  );
}
