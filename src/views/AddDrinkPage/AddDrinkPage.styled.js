import styled from 'styled-components';

const AddDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  border: 1px solid green;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export { AddDrinkContainer };
