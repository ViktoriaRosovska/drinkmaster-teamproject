import styled from 'styled-components';

const AddFormTextarea = styled.textarea`
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;
  margin-bottom: 20px;
  width: 335px;
  height: 184px;
  &::placeholder {
    color: var(--white-color);
    line-height: calc(14px / 18px);
  }
`;
export { AddFormTextarea };
