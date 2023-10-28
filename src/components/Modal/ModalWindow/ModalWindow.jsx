import { useEffect } from 'react';
import { Overlay } from './ModalWindow.styled';

export default function ModalWindow({ onBackdropClose, ...props }) {
  const onBackdrop = e => {
    if (e.target === e.currentTarget) {
      onBackdropClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onBackdropClose)
    return () => document.removeEventListener('keydown', onBackdropClose)
  })

  return (
    <>
      <Overlay id="Overlay" onClick={onBackdrop}>
        {props.children}
      </Overlay>
    </>
  );
}
