// import { useDispatch } from "react-redux";
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
} from './UserLogoPopup.styled';
import { useEffect, useState } from 'react';
import ModalPortal from '../ModalPortal/ModalPortal';

export default function UserLogoPopup({
  onCloseUserLogoModal,
  onBackdropClose,
}) {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
  const [, setShowModal] = useState(false);

  // const dispatch = useDispatch();
  // const handleLogOut = () => dispatch(signOut());

  const openUserInfoModal = () => {
    setShowModal(false);
    setIsModalUserInfoOpen(true);
  };

  const onBackdrop = () => {
    setIsModalUserInfoOpen(false);
     onCloseUserLogoModal();
    console.log('where are you?');

  };

  useEffect(e => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onBackdrop();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  });

  return (
    <>
      <ModalContainer>
        <EditProfileBtn type="button" onClick={openUserInfoModal}>
          Edit profile
          <IconEdit />
        </EditProfileBtn>
        <LogoutBtn onBackdrop={onBackdrop} />
      </ModalContainer>

      <ModalPortal
        isModalUserInfoOpen={isModalUserInfoOpen}
        onBackdrop={onBackdrop}
        openUserInfoModal={openUserInfoModal}
      />
    </>
  );
}
