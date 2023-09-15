import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeader = () => {
  const { pathname } = useLocation();

  const [createModalActive, setCreateModalActive] = useState(false);

  const isCategories = pathname.includes("categories");

  const openCreateModal = () => {
    setCreateModalActive(true);
  };

  const closeCreateModal = () => {
    setCreateModalActive(false);
  };

  return {
    createModalActive,
    isCategories,
    openCreateModal,
    closeCreateModal,
  };
};
