import {
  ErrorPageContainer,
  NotFoundImage,
  NotFoundText,
} from './NotFound.styled';
export default function NotFound() {
  return (
    <ErrorPageContainer>
      <NotFoundImage />
      <NotFoundText>You haven't added any favorite cocktails yet</NotFoundText>
    </ErrorPageContainer>
  );
}
