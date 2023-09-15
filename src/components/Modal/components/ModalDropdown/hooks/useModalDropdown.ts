import React, { useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { selectAllCategories } from "../../../../../app/categories/categoriesSlice";

export const useModalDropdown = (
  setSelected: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isActive, setIsActive] = useState(false);
  const options = useAppSelector(selectAllCategories);

  const handleOptionClick = (id: string) => {
    setSelected(id);
    setIsActive(false);
  };

  const handleActive = () => setIsActive(!isActive);

  return {
    isActive,
    options,
    setIsActive,
    handleOptionClick,
    handleActive,
  };
};
