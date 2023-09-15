import React, { FC, ReactNode } from "react";
import ModalContext from "./model";
import { ListItemType } from "../../types/listItem";
import { ModalHeader } from "./components/ModalHeader";
import { ModalInput } from "./components/ModalInput";
import { ModalTextarea } from "./components/ModalTextarea";
import { ModalDropdown } from "./components/ModalDropdown";
import { ModalBtn } from "./components/ModalBtn";
import { ModalFooter } from "./components/ModalFooter";
import { ModalRow } from "./components/ModalRow";
import { ModalText } from "./components/ModalText";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  item?: ListItemType;
  active: boolean;
  closeModal: () => void;
}
export const Modal = ({ children, item, active, closeModal }: ModalProps) => {
  return (
    <ModalContext.Provider
      value={{
        item: item || null,
        closeModal,
      }}
    >
      <div className={active ? "modal active" : "modal"} onClick={closeModal}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.ModalHeader = ModalHeader;
Modal.ModalInput = ModalInput;
Modal.ModalTextarea = ModalTextarea;
Modal.ModalDropdown = ModalDropdown;
Modal.ModalFooter = ModalFooter;
Modal.ModalBtn = ModalBtn;
Modal.ModalRow = ModalRow;
Modal.ModalText = ModalText;
