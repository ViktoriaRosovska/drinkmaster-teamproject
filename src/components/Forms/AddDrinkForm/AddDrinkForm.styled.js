import styled from 'styled-components';

const FormContainer = styled.form`
  min-width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;
  color: ${props => props.theme.color};
  @media screen and (min-width: 375px) and (max-width: 767.98px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    width: 100%;
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1440px) {
    width: 833px;
    margin-bottom: 0;
  }
`;

const AddIngedientSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RelativeWrapper = styled.div`
  position: relative;
  margin-bottom: 31px;
`;

export { FormContainer, AddIngedientSelect, RelativeWrapper };
