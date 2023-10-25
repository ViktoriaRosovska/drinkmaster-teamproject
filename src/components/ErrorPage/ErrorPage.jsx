import {
  ErrorPageContainer,
  ErrorPageImage,
  ErrorPageSection,
  ErrorPageText,
} from './ErrorPage.styled';

export default function ErrorPage() {
  return (
    <ErrorPageSection>
      <ErrorPageContainer>
        <ErrorPageText>4</ErrorPageText>
        <ErrorPageImage />
        <ErrorPageText>4</ErrorPageText>
      </ErrorPageContainer>
    </ErrorPageSection>
  );
}
