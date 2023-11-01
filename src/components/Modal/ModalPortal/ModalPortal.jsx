import Modal from './Modal';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

export default function ModalPortal({
  isShowUserLogoModal,
  onBackdrop,
  isModalUserInfoOpen,
  openUserInfoModal,
}) {
  //   const [, setShowModal] = useState(false);
  //   const [, setIsModalUserInfoOpen] = useState(false);

  const onBackdropClose = () => {
    console.log("onBackdropClose-portal");
    //  setShowModal(false);
    //  setIsModalUserInfoOpen(false);
    onBackdrop();
  };
  return (
    <>
      {isShowUserLogoModal && (
        <Modal
          onBackdropClose={onBackdropClose}
       
          children={
            <UserLogoPopup
              onBackdropClose={onBackdropClose}
              openUserInfoModal={openUserInfoModal}
            />
          }
        />
      )}
      {isModalUserInfoOpen && !isShowUserLogoModal && (
        <Modal
          onBackdropClose={onBackdropClose}
          children={
            <UserInfoModal
              onBackdropClose={onBackdropClose}
              openUserInfoModal={openUserInfoModal}
            />
          }
        />
      )}
    </>
  );
}
