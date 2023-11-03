import React, {useRef, useEffect } from 'react';
import { PrivacyContainer, PrivacyPolicyText, PrivacyPolicyTitle } from '../PrivacyPolicyPage/PrivacyPolicyPage.styled'; 
import PageTitle from '../../components/PageTitle/PageTitle';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Link, useLocation } from 'react-router-dom';

export default function TermsService() {
const pageTitleRef = useRef();
const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  
  useEffect(() => {
    pageTitleRef.current.scrollIntoView();
  }, []);

  return (
    <PrivacyContainer>

      <Link to={backLinkHref.current}>
        <ButtonBack text=" Go back" />
      </Link>
      
      <PageTitle title='Terms of Service' forwardRef={pageTitleRef}/>
      
  <PrivacyPolicyText>
    This "User Agreement" (the "Agreement") sets forth the terms and conditions governing the use of the Drink Master application ("App") and its services.
</PrivacyPolicyText>
<PrivacyPolicyTitle>Acceptance of Terms:</PrivacyPolicyTitle>
<PrivacyPolicyText>By accessing or using the Drink Master app, you agree to comply with and be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you should immediately discontinue the use of the App.
</PrivacyPolicyText>
<PrivacyPolicyTitle>App Features and Services:</PrivacyPolicyTitle>
<PrivacyPolicyText>The Drink Master app provides users with access to a collection of cocktail recipes, both curated and user-generated. Users can explore, search, and create their own cocktail recipes using the provided tools.
</PrivacyPolicyText>
<PrivacyPolicyTitle>User Accounts and Content:</PrivacyPolicyTitle>
<PrivacyPolicyText>To fully utilize the App's features, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and any content you submit, including your own cocktail recipes. You retain ownership of your content, but by submitting, you grant the App a non-exclusive, royalty-free license to use, modify, and distribute your content within the App.
</PrivacyPolicyText>
<PrivacyPolicyTitle>Intellectual Property:</PrivacyPolicyTitle>
<PrivacyPolicyText>All content provided by the Cocktail Creations app, including cocktail recipes, images, and text, are protected by copyright and other intellectual property laws. Users may not reproduce, distribute, or use these materials for commercial purposes without explicit permission from the App's operators.
</PrivacyPolicyText>
<PrivacyPolicyTitle>User-Generated Content Guidelines:</PrivacyPolicyTitle>
<PrivacyPolicyText>When creating and sharing user-generated cocktail recipes, you agree not to submit content that is offensive, unlawful, infringing, or harmful. The App reserves the right to remove or moderate user-generated content that violates these guidelines.
</PrivacyPolicyText>
<PrivacyPolicyTitle>App Updates and Changes:</PrivacyPolicyTitle>
<PrivacyPolicyText>The features and functionality of the Drink Master app may evolve over time. The App reserves the right to modify, update, or discontinue any aspect of the App without prior notice.
</PrivacyPolicyText>
<PrivacyPolicyTitle>Disclaimer of Liability:</PrivacyPolicyTitle>
<PrivacyPolicyText>While we strive to provide accurate and reliable information, the Drink Master app does not warrant the accuracy, completeness, or reliability of the content provided. Users acknowledge that cocktail recipes involve the use of alcohol and potentially hazardous ingredients and should exercise caution when using the recipes. The App's liability is limited to the extent permitted by applicable law.
</PrivacyPolicyText>
<PrivacyPolicyTitle>Governing Law and Dispute Resolution:</PrivacyPolicyTitle>
<PrivacyPolicyText>This Agreement shall be governed by the laws of [Country/State]. Any disputes arising from or related to this Agreement or the use of the App shall be subject to the exclusive jurisdiction of the courts in [City, Country/State].
</PrivacyPolicyText>
<PrivacyPolicyText>By accessing or using the Drink Master app, you acknowledge that you have read, understood, and agreed to be bound by this User Agreement. If you do not agree to these terms, you must cease using the App immediately.
      </PrivacyPolicyText>
      </PrivacyContainer>
  )
};


