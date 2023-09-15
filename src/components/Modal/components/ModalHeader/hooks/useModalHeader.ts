import React from "react";
import { useLocation } from "react-router-dom";
import { useModalContext } from "../../../model";

export const useModalHeader = () => {
  const { pathname } = useLocation();
  const { closeModal, item } = useModalContext();

  const isCategories = pathname.includes("categories");
  const title = item
    ? isCategories
      ? "Редактирование категории"
      : "Редактирование задачи"
    : isCategories
    ? "Создание категории"
    : "Создание задачи";

  return {
    title,
    closeModal,
  };
};
