import styled from 'styled-components';

const FormContainer = styled.form`
  min-width: 320px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 375px) and (max-width: 767.98px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    width: 768px;
  }
`;

const AddIngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white-color);
  background-color: transparent;
  border-radius: 200px;
  opacity: 0.8;
  width: 104px;
  height: 38px;
`;

const AddIngedientSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export { FormContainer, AddIngedientSelect, AddIngredientsContainer };
