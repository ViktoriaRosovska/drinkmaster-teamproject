import React, { useState } from 'react';

import Logo from 'components/Logo/Logo';
import { Container, Ul } from 'components/Header/Header.styled';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import ModalPortal from 'components/Modal/ModalPortal/ModalPortal';
import Modal from 'components/Modal/ModalPortal/Modal';
import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
import UserInfoModal from 'components/Modal/UserInfoModal/UserInfoModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const onShowModalClick = () => {
    setShowModal(true);
  };
  const onBackdrop = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Ul>
          <li>
            <Logo />
          </li>
          <li>
            <Navigation />
          </li>
        </Ul>
        <div>Theme</div>
        <UserLogo onShowModalClick={onShowModalClick} />
      </Container>
      <ModalPortal showModal={showModal} onBackdrop={onBackdrop} />
      {/* <Modal>
        <div
          style={{
            position: 'absolute',
            top: '200px',
            left: '0',
            width: '50px',
            height: '50px',
            backgroundColor: 'pink',
          }}
        >
          hello
        </div>
      </Modal>
      <Modal onBackdropClose={onBackdrop}>
        <UserLogoPopup onBackdropClose={onBackdrop} />
      </Modal>
      <Modal onBackdropClose={onBackdrop}>
        <UserInfoModal onBackdropClose={onBackdrop} />
      </Modal> */}
    </>
  );
};

export default Header;
