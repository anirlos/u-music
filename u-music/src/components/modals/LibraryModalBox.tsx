import React, { FC, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const LibraryModalBox: FC<ModalProps> = ({ children, onClose }) => {
  const el = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root") as HTMLElement;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalComponents onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalComponents>
    </ModalOverlay>,
    el
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalComponents = styled.div`
  position: relative;
  padding: 5px;
`;

export default LibraryModalBox;
