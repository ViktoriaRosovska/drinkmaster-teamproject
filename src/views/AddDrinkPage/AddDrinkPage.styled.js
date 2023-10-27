import styled from 'styled-components';

const AddPhotoContainer = styled.div`
  width: 335px;
  height: 320px;
  background-color: var(--dark-blue-fifty-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const AddBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--white-color);
  border: none;
  color: var(--dark-blue-color);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='29' height='28' viewBox='0 0 29 28' fill='none'%3e%3cpath d='M14.5 5.83334V22.1667' stroke='%23161F37' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M6.33203 14H22.6654' stroke='%23161F37' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px 28px;
  &:hover {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='29' height='28' viewBox='0 0 29 28' fill='none'%3e%3cpath d='M14.5 5.83334V22.1667' stroke='%23434D67' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M6.33203 14H22.6654' stroke='%23434D67' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    stroke: #bce6d2;
  }
`;

// const SvgIcon = styled.svg`
//   width: 28px;
//   height: 28px;
//   fill: var(--dark-blue-color);
//   stroke: red;
// `;

const AddBtnText = styled.span`
  color: var(--white-color);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const AddFormInput = styled.input`
  width: 335px;
  height: 34px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--white-fifty-color);

  &::placeholder {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

const AddFormTextarea = styled.textarea`
  width: 335px;
  height: 184px;
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;

  &::placeholder {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const AddFormSelect = styled(Select)`
  padding: 0;
  width: 100%;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  &::placeholder {
    color: red;
    font-family: 'Manrope';
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .css-1fdsijx-ValueContainer {
    padding: 0;
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

    & ::selection {
      background-color: transparent;
    }
  }

  & #react-select-3-listbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 131px;
    height: 258px;
    padding: 0;
    color: red;
    background-color: #161f37;
    color: rgba(243, 243, 243, 0.4);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    padding: 10px;
    overflow: hidden;
    position: absolute;
    right: 0;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  & .css-qbdosj-Input {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .css-t3ipsp-control {
    background-color: transparent;
  }
  & .css-13cymwt-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--white-fifty-color);
    border-radius: 0;
    outline: none;
  }
  & .react-select-3-placeholder {
    display: block;
  }
  & .css-1dimb5e-singleValue {
    text-align: right;
  }
  & .css-1u9des2-indicatorSeparator {
    display: none;
  }
  & #react-select-3-input {
    text-align: right;
    margin-left: 50px;
  }
  & #react-select-5-listbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 131px;
    height: 258px;
    padding: 0;
    color: red;
    background-color: #161f37;
    color: rgba(243, 243, 243, 0.4);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    padding: 10px;
    overflow: hidden;
    position: absolute;
    right: 0;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export {
  AddPhotoContainer,
  AddDrinkContainer,
  AddBtn,
  // ReactSVGIcon,
  AddBtnText,
  AddFormInput,
  AddFormTextarea,
  AddFormSelect,
};
