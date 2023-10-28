import {
  EditProfileBtn,
  ModalContainer,
  LogoutBtn,
  IconEdit,
} from './UserLogoPopup.styled';

export default function UserLogoPopup({ onBackdropClose, openUserInfoModal }) {


  return (
    <ModalContainer>
      <EditProfileBtn type="button" onClick={openUserInfoModal}>
        Edit profile
        <IconEdit />
      </EditProfileBtn>
      <LogoutBtn type="button">Log out</LogoutBtn>
      {/* <button onClick={() => onBackdropClose()}>Close Modal</button> */}
    </ModalContainer>
  );
}
