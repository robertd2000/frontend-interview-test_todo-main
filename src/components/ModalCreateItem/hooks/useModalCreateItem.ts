import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { useLocation } from "react-router-dom";
import { categoriesAdded } from "../../../app/categories/categoriesSlice";
import { tasksAdded } from "../../../app/tasks/tasksSlice";

export const useModalCreateItem = (closeModal: () => void) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(""),
    [selected, setSelected] = useState(""),
    [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  const onSubmit = name
    ? () => {
        dispatch(
          isCategories
            ? categoriesAdded({ name, description })
            : tasksAdded({
                name,
                description,
                category: setSelected,
              })
        );
        clearState();
        closeModal();
      }
    : () => {};
  return {
    name,
    selected,
    isCategories,
    description,
    setSelected,
    setName,
    setDescription,
    onSubmit,
  };
};
