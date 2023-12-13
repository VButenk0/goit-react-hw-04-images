import React, { useEffect } from 'react';
import { ModalWrapper, ModalContent } from './Modal.styled';

const Modal = ({ largeImageURL, tags, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        <img src={largeImageURL} alt={tags} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
