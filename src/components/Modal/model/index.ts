import { createContext, useContext } from "react";
import { ListItemType } from "../../../types/listItem";

const ModalContext = createContext<{
  item: ListItemType | null;
  closeModal: () => void;
} | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Use Todo* component inside TodoContext");

  return context;
};

export default ModalContext;
