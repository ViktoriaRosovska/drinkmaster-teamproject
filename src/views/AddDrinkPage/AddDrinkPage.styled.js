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

const SvgIcon = styled.svg`
  width: 28px;
  height: 28px;
  fill: var(--dark-blue-color);
  stroke: red;
`;
export { AddPhotoContainer, AddDrinkContainer, AddBtn, SvgIcon };
