import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import ModalPortal from 'components/Modal/ModalPortal/ModalPortal';
import {
  Container,
  HeaderCont,
  HeaderList,
  MainWrapper,
  HeaderItem,
} from './Header.styled';
// import Modal from 'components/Modal/ModalPortal/Modal';
// import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
// import UserInfoModal from 'components/Modal/UserInfoModal/UserInfoModal';

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
      <HeaderCont>
        <Container>
          <MainWrapper>
            <HeaderList>
              <HeaderItem>
                <Logo />
              </HeaderItem>
              <HeaderItem>
                <Navigation />
              </HeaderItem>
              <HeaderItem className="push-right">
                <div>Theme</div>
                <UserLogo onShowModalClick={onShowModalClick} />
              </HeaderItem>
            </HeaderList>
            <ModalPortal showModal={showModal} onBackdrop={onBackdrop} />
          </MainWrapper>
        </Container>
      </HeaderCont>

      {/* <Container>
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
      </Container> */}

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
