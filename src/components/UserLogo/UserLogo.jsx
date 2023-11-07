import {
  StyledUserName,
  UserAvatar,
  UserAvatarWrapper,
  UserLogoContainer,
} from './UserLogo.styled';
import { useState } from 'react';
import UserAvatar1 from '../../assets/images/userInfoModal/userAvatar.svg';
import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
import useAuth from 'hooks/useAuth';
import ModalPortal from 'components/Modal/ModalPortal/ModalPortal';

const UserLogo = () => {
  const [isShowUserLogoModal, setIsShowUserLogoModal] = useState(false);
  const { user } = useAuth();

  const onShowUserLogoModal = () => {
    setIsShowUserLogoModal(true);
  };

  const onCloseUserLogoModal = () => {
    setIsShowUserLogoModal(false);
  };

  return (
    <UserLogoContainer onClick={() => onShowUserLogoModal()}>
      <UserAvatarWrapper>
        <UserAvatar src={user?.avatarURL || UserAvatar1} alt="User avatar" />
      </UserAvatarWrapper>
      <StyledUserName>{user?.name || 'User'}</StyledUserName>
      <ModalPortal
        isShowUserLogoModal={isShowUserLogoModal}
        onBackdropClose={onCloseUserLogoModal}
        openUserInfoModal={onShowUserLogoModal}
      />
      <UserLogoPopup onCloseUserLogoModal={onCloseUserLogoModal} />
    </UserLogoContainer>
  );
};

export default UserLogo;
