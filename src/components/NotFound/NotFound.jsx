import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundText,
} from './NotFound.styled';
export default function NotFound() {
  return (
    <NotFoundPageContainer>
      <NotFoundImage />
      <NotFoundText>You haven't added any favorite cocktails yet</NotFoundText>
    </NotFoundPageContainer>
  );
}
