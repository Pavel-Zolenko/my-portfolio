import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`;

export const ModalWindow = styled.div`
  width: 640px;
  max-height: calc(100vh-24px);

  @media (max-width: 639px) {
    width: 100%;
  }
`;
