import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { ListItemType } from "../../../types/listItem";
import { categoriesUpdated } from "../../../app/categories/categoriesSlice";
import { tasksUpdated } from "../../../app/tasks/tasksSlice";

export const useModalEditItem = (
  item: ListItemType,
  closeModal: () => void
) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const [name, setName] = useState(item.name);
  const [selected, setSelected] = useState(item.category || "");
  const [description, setDescription] = useState(item.description);

  function clearState() {
    setName(item.name);
    setDescription(item.description);
    setSelected(item.category || "");
  }

  const onSubmit = () => {
    dispatch(
      isCategories
        ? categoriesUpdated({ id: item.id, name, description })
        : tasksUpdated({
            id: item.id,
            name,
            description,
            category: selected,
          })
    );
    closeModal();
  };

  const onCLoseModal = () => {
    clearState();
    closeModal();
  };

  return {
    isCategories,
    name,
    setName,
    selected,
    setSelected,
    description,
    setDescription,
    onSubmit,
    onCLoseModal,
  };
};
