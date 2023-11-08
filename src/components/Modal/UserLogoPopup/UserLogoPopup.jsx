import React, { useState, useEffect, useRef } from 'react';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
  // CloseModalLogoBtn,
  // CloseSVGIcon,
} from './UserLogoPopup.styled';
// import CloseModal1 from '../../../assets/images/addDrink/X.svg';
import ModalWindow from '../ModalWindow/ModalWindow';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

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

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onCloseUserLogoModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  });

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
