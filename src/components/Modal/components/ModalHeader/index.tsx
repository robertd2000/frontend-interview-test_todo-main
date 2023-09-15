import React from "react";
import { useModalHeader } from "./hooks/useModalHeader";
import close from "../../../../icons/close.svg";

export const ModalHeader = () => {
  const { title, closeModal } = useModalHeader();

  return (
    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button className="modal__content-header__btn" onClick={closeModal}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
