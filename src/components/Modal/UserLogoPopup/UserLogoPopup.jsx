import React, { useState, useEffect, useRef } from 'react';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
} from './UserLogoPopup.styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

export default function UserLogoPopup({
  onCloseUserLogoModal,
  onBackdropClose,
}) {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
  const modalContainerRef = useRef(null);

  const toggleUserInfoModal = () => {
    setIsModalUserInfoOpen(!isModalUserInfoOpen);
  };

  const closeUserInfoModal = () => {
    setIsModalUserInfoOpen(false);
  };

  const handleEsc = event => {
    if (event.key === 'Escape') {
      closeUserInfoModal();
    }
  };

  const handleClickOutside = event => {
    if (
      modalContainerRef.current &&
      !modalContainerRef.current.contains(event.target)
    ) {
      closeUserInfoModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <ModalContainer ref={modalContainerRef} className="modal-container">
        <EditProfileBtn type="button" onClick={toggleUserInfoModal}>
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
