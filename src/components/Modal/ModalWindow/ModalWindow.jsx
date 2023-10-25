import { Overlay } from './ModalWindow.styled';

export default function ModalWindow({ onBackdropClose, ...props }) {
  const onBackdrop = e => {
    if (e.target === e.currentTarget) {
      onBackdropClose();
    }
  };

  return (
    <>
      <Overlay id="Overlay" onClick={onBackdrop}>
        {props.children}
      </Overlay>
    </>
  );
}
