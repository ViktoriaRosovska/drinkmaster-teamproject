import styled from 'styled-components';

const AddDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export { AddDrinkContainer };
