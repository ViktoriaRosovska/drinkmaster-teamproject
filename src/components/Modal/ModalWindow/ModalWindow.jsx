import { useEffect } from 'react';
import { Overlay } from './ModalWindow.styled';

export default function ModalWindow({ onBackdropClose, ...props }) {
  const onBackdrop = e => {
    if (e.target === e.currentTarget) {
      onBackdropClose();
    }
  };

  useEffect(e => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onBackdropClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  });

  return (
    <>
      <Overlay id="Overlay" onClick={onBackdrop}>
        {props.children}
      </Overlay>
    </>
  );
}
