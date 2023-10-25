import Modal from 'components/Modal/Modal';
import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
import { useState } from 'react';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onShowModalClick = () => {
    setShowModal(true);
  };
  const onBackdropClose = () => {
    setShowModal(false);
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
      {showModal && (
        <Modal
          onBackdropClose={onBackdropClose}
          children={<UserLogoPopup onBackdropClose={onBackdropClose} />}
        />
      )}
    </>
  );
};
