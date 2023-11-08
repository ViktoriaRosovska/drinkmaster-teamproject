import {
  StyledUserName,
  UserAvatar,
  UserAvatarWrapper,
  UserLogoContainer,
} from './UserLogo.styled';
import { useState } from 'react';
import UserAvatar1 from '../../../assets/images/userInfoModal/userAvatar.svg';
import UserLogoPopup from 'components/Modal/UserLogoPopup/UserLogoPopup';
import useAuth from 'hooks/useAuth';

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
        <UserAvatar src={user?.avatar || UserAvatar1} alt="User avatar" />
      </UserAvatarWrapper>
      <StyledUserName>{user?.name || 'User'}</StyledUserName>
      {isShowUserLogoModal && (
        <UserLogoPopup onCloseUserLogoModal={onCloseUserLogoModal} />
      )}
    </UserLogoContainer>
  );
};

export default UserLogo;
