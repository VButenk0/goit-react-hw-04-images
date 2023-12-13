import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  max-width: 80vw;
  max-height: 80vw;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;