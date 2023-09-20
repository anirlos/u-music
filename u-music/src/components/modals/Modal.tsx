import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
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
        <CloseButton onClick={onClose}>X</CloseButton>
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
`;

const ModalComponents = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);
`;

export default Modal;
