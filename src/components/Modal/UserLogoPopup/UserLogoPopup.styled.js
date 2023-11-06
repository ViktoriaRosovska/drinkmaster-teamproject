import styled from 'styled-components';
import IconEdit2 from '../IconEdit2/IconEdit2';

const ModalContainer = styled.div`
  position: absolute;
  top: 55px;
  // right: 20px;
  width: 177px;
  height: 134px;
  padding: 18px;
  border-radius: 8px;
  background-color: #161f37;
  color: #f3f3f3;
  //   transform: translate(-50%, -50%);
`;

const EditProfileBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 18px;
  margin-bottom: 38px;
  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  background-color: transparent;
  color: #f3f3f3;
  cursor: pointer;
  color: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    color: #f3f3f333;
  }
`;

const IconEdit = styled(IconEdit2)`
  width: 14px;
  height: 14px;
  //   @media screen and (min-width: 768px) {
  //     width: 20px;
  //     height: 20px;
  //   }
`;

// const LogoutBtn = styled.button`
//   width: 100%;
//   height: 42px;
//   padding: 12px;
//   font-family: Manrope;
//   font-size: 14px;
//   font-weight: 600;
//   border: none;
//   cursor: pointer;
//   border-radius: 42px;
//   background-color: #f3f3f3;
//   color: #161f37;
//   transition: background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
//     color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
//     border 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
//   &:hover {
//     border: 1px solid #f3f3f333;
//     background-color: transparent;
//     color: #f3f3f3;
//   }
// `;

export { EditProfileBtn, ModalContainer, IconEdit };
