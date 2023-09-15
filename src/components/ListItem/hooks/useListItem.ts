import React, { useState } from "react";
import { selectAllCategories } from "../../../app/categories/categoriesSlice";
import { ListItemType } from "../../../types/listItem";
import { useAppSelector } from "../../../app/hooks";

export const useListItem = (item: ListItemType) => {
  const categories = useAppSelector(selectAllCategories);
  const [editModalActive, setEditModalActive] = useState(false);
  const [removeModalActive, setRemoveModalActive] = useState(false);

  const currentCategory = categories.find(
    (category) => category.id === item.category
  )?.name;

  const openEditModal = () => {
    setEditModalActive(true);
  };

  const openRemoveModal = () => {
    setRemoveModalActive(true);
  };

  const closeEditModal = () => {
    setEditModalActive(false);
  };

  const closeRemoveModal = () => {
    setRemoveModalActive(false);
  };

  return {
    editModalActive,
    removeModalActive,
    currentCategory,
    openEditModal,
    openRemoveModal,
    closeEditModal,
    closeRemoveModal,
  };
};
