import ModalWindow from '../ModalWindow/ModalWindow';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

export default function ModalPortal({
  isShowUserLogoModal,
  isModalUserInfoOpen,
  onBackdrop,
  openUserInfoModal,
}) {
  const closeModal = () => {
    onBackdrop();
  };

  return (
    <>
      {isShowUserLogoModal && (
        <ModalWindow onBackdropClose={closeModal}>
          <UserLogoPopup
            onBackdropClose={closeModal}
            openUserInfoModal={openUserInfoModal}
          />
        </ModalWindow>
      )}
      {isModalUserInfoOpen && !isShowUserLogoModal && (
        <ModalWindow onBackdropClose={closeModal}>
          <UserInfoModal
            onBackdropClose={closeModal}
            openUserInfoModal={openUserInfoModal}
          />
        </ModalWindow>
      )}
    </>
  );
}
