import { ErrorWrapper } from './ShowError.styled';

export function ShowError({ message }) {
  return <ErrorWrapper>{message}</ErrorWrapper>;
}
