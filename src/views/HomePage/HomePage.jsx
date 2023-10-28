import Modal from 'components/Modal/Modal';
import UserInfoModal from 'components/Modal/UserInfoModal/UserInfoModal';
import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
import { useState } from 'react';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);

  const openUserInfoModal = () => {
    setShowModal(false);
    setIsModalUserInfoOpen(true);
  };


  const onShowModalClick = () => {
    setShowModal(true);
  };
  const onBackdropClose = () => {
    setShowModal(false);
    setIsModalUserInfoOpen(false);
  };

  return (
    <>
      <h1 style={{ color: 'white' }}>welcome to HomePage</h1>
      <button
        style={{ position: 'absolute', top: '50px', right: '50px' }}
        onClick={onShowModalClick}
      >
        Show modal
      </button>
      {showModal &&(
        <Modal
          onBackdropClose={onBackdropClose}
          children={<UserLogoPopup onBackdropClose={onBackdropClose} openUserInfoModal={openUserInfoModal}/>}
        />
      )}
      {isModalUserInfoOpen && !showModal &&(
        <Modal
        onBackdropClose={onBackdropClose}
          children={<UserInfoModal onBackdropClose={onBackdropClose}/>}
        />
      )}
    </>
  );
};
