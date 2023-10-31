import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  // LogoutBtn,
  IconEdit,
} from './UserLogoPopup.styled';
import { useState } from 'react';
import ModalPortal from '../ModalPortal/ModalPortal';

export default function UserLogoPopup({ onBackdropClose, showModal }) {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
  const [, setShowModal] = useState(false);

  const openUserInfoModal = () => {
    setShowModal(false);
    setIsModalUserInfoOpen(true);
  };

  const onBackdrop = () => {
    setIsModalUserInfoOpen(false);
  };
  return (
    <>
      <ModalContainer>
        <EditProfileBtn type="button" onClick={openUserInfoModal}>
          Edit profile
          <IconEdit />
        </EditProfileBtn>
        <LogoutBtn onBackdropClose={onBackdropClose} />
        {/* <button onClick={() => onBackdropClose}>Close Modal</button> */}
      </ModalContainer>

      <ModalPortal
        showModal={showModal}
        isModalUserInfoOpen={isModalUserInfoOpen}
        onBackdrop={onBackdrop}
        openUserInfoModal={openUserInfoModal}
      />
    </>
  );
}
