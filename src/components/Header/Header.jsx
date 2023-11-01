// import React, { useState } from 'react';
import React from 'react'; //  useState
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
// import ModalPortal from 'components/Modal/ModalPortal/ModalPortal';
import {
  Container,
  HeaderCont,
  HeaderList,
  MainWrapper,
  HeaderItem,
} from './Header.styled';

const Header = () => {
  // const [showModal, setShowModal] = useState(false);
  // const onShowModalClick = () => {
  //   setShowModal(true);
  // };
  // const onBackdrop = () => {
  //   setShowModal(false);
  // };

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
                <UserLogo />
              </HeaderItem>
            </HeaderList>
            {/* <ModalPortal showModal={showModal} onBackdrop={onBackdrop} /> */}
          </MainWrapper>
        </Container>
      </HeaderCont>
    </>
  );
};

export default Header;
