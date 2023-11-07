import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
} from './UserLogoPopup.styled';
import { useState, useRef } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow'; // Добавьте этот импорт
import UserInfoModal from '../UserInfoModal/UserInfoModal'; // И этот

export default function UserLogoPopup({
  onCloseUserLogoModal,
  onBackdropClose,
}) {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
  const modalContainerRef = useRef(null);

  const openUserInfoModal = () => {
    setIsModalUserInfoOpen(true);
  };

  const closeUserInfoModal = () => {
    setIsModalUserInfoOpen(false);
  };

  return (
    <>
      <ModalContainer ref={modalContainerRef} className="modal-container">
        <EditProfileBtn type="button" onClick={openUserInfoModal}>
          Edit profile
          <IconEdit />
        </EditProfileBtn>
        <LogoutBtn onBackdrop={onBackdropClose} />
      </ModalContainer>

      {isModalUserInfoOpen && (
        <ModalWindow onBackdropClose={closeUserInfoModal}>
          <UserInfoModal onBackdropClose={closeUserInfoModal} />
        </ModalWindow>
      )}
    </>
  );
}
