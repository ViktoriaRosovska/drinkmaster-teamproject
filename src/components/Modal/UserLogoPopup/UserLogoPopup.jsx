// import { useDispatch } from "react-redux";
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
} from './UserLogoPopup.styled';
import { useEffect, useState, useRef } from 'react';
import ModalPortal from '../ModalPortal/ModalPortal';

export default function UserLogoPopup({
  onCloseUserLogoModal,
  onBackdropClose,
}) {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
  const [, setShowModal] = useState(false);
  const modalContainerRef = useRef(null);

  // const dispatch = useDispatch();
  // const handleLogOut = () => dispatch(signOut());

  const openUserInfoModal = () => {
    setShowModal(false);
    setIsModalUserInfoOpen(true);
  };

  const onBackdrop = () => {
    setIsModalUserInfoOpen(false);
    onCloseUserLogoModal();
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onBackdrop();
      }
    };

    const handleClickOutside = event => {
      if (!modalContainerRef.current.contains(event.target)) {
        if (!isModalUserInfoOpen) {
          openUserInfoModal();
        } else {
          onBackdrop();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <>
      <ModalContainer ref={modalContainerRef} className="modal-container">
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
