import React, { useState } from 'react';

import Logo from 'components/Logo/Logo';
import { Container } from 'components/Header/Header.styled';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import ModalPortal from 'components/Modal/ModalPortal/ModalPortal';
import { HeaderCont, NavCont } from './Header.styled';
// import Modal from 'components/Modal/ModalPortal/Modal';
// import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
// import UserInfoModal from 'components/Modal/UserInfoModal/UserInfoModal';

// import Nav from 'components/Nav/Nav';

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
        <HeaderCont>
          <NavCont>
            <li>
              <Logo />
            </li>
            <li>
              <Navigation />
            </li>
            <div>
              <div>Theme</div>
              <UserLogo onShowModalClick={onShowModalClick} />
            </div>
          </NavCont>
          <ModalPortal showModal={showModal} onBackdrop={onBackdrop} />
        </HeaderCont>
      </Container>

      {/* <Modal onBackdropClose={onBackdrop}>
        <UserLogoPopup onBackdropClose={onBackdrop} />
      </Modal>
      <Modal onBackdropClose={onBackdrop}>
        <UserInfoModal onBackdropClose={onBackdrop} />
      </Modal>  */}
    </>
  );
};

export default Header;
