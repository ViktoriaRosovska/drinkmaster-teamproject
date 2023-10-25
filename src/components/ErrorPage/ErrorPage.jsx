import { CenterPageContainer } from 'styles/App.styled';
import {
  ErrorPageImage,
  // ErrorPageSection,
  ErrorPageText,
} from './ErrorPage.styled';

export default function ErrorPage() {
  return (
    // <ErrorPageSection>
    <CenterPageContainer>
      <ErrorPageText>4</ErrorPageText>
      <ErrorPageImage />
      <ErrorPageText>4</ErrorPageText>
    </CenterPageContainer>
    // </ErrorPageSection>
  );
}
