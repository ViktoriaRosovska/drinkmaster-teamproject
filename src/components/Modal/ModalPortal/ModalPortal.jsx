import ModalWindow from '../ModalWindow/ModalWindow';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

export default function ModalPortal({
  isShowUserLogoModal,
  isModalUserInfoOpen,
  onBackdropClose,
  openUserInfoModal,
}) {
  const closeModal = () => {
    onBackdropClose();
  };

  return (
    <>
      {isShowUserLogoModal && (
        <ModalWindow onBackdropClose={closeModal}>
          <UserLogoPopup
            onBackdropClose={onBackdropClose}
            openUserInfoModal={openUserInfoModal}
          />
        </ModalWindow>
      )}
      {isModalUserInfoOpen && !isShowUserLogoModal && (
        <ModalWindow onBackdropClose={closeModal}>
          <UserInfoModal
            onBackdropClose={onBackdropClose}
            openUserInfoModal={openUserInfoModal}
          />
        </ModalWindow>
      )}
    </>
  );
}
