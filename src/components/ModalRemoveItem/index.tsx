import React, { FC } from "react";
import { Modal } from "../Modal";
import { useAppDispatch } from "../../app/hooks";
import { useLocation } from "react-router-dom";
import { categoriesRemoved } from "../../app/categories/categoriesSlice";
import {
  tasksClearedCategories,
  tasksRemoved,
} from "../../app/tasks/tasksSlice";
import { ListItemType } from "../../types/listItem";

interface ModalRemoveItemProps {
  item: ListItemType;
  active: boolean;
  closeModal: () => void;
}

export const ModalRemoveItem: FC<ModalRemoveItemProps> = ({
  item,
  active,
  closeModal,
}) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal active={active} closeModal={closeModal} item={item}>
      <Modal.ModalHeader />
      <Modal.ModalText text={text} />
      <Modal.ModalFooter
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(categoriesRemoved(item.id));
                dispatch(tasksClearedCategories(item.id));
              }
            : () => dispatch(tasksRemoved(item.id))
        }
      />
    </Modal>
  );
};
