import Modal from './Modal';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

export default function ModalPortal({
  showModal,
  onBackdrop,
  isModalUserInfoOpen,
  openUserInfoModal,
}) {
  //   const [, setShowModal] = useState(false);
  //   const [, setIsModalUserInfoOpen] = useState(false);

  const onBackdropClose = () => {
    // setShowModal(false);
    // setIsModalUserInfoOpen(false);
    onBackdrop();
  };
  return (
    <>
      {showModal && (
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
      {isModalUserInfoOpen && !showModal && (
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
