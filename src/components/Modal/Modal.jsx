import { createPortal } from 'react-dom';

import ModalWindow from './ModalWindow/ModalWindow';

export default function Modal({ children, onBackdropClose }) {
  return createPortal(
    <ModalWindow children={children} onBackdropClose={onBackdropClose} />,
    document.querySelector('#modal-root')
  );
}
