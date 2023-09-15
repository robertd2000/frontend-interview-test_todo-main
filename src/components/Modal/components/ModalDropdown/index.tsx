/* VENDOR */
import { useState } from "react";

/* APPLICATION */
import down from "../../../../icons/down.svg";
import { CategoriesState } from "../../../../app/categories/categoriesSlice";
import { useModalDropdown } from "./hooks/useModalDropdown";

interface ModalDropdownProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const { isActive, options, handleOptionClick, handleActive } =
    useModalDropdown(setSelected);

  return (
    <div className="dropdown" onClick={handleActive}>
      <span className="dropdown-label">Категория</span>
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option: CategoriesState) => option?.id === selected)
          ?.name || "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option: CategoriesState) => (
            <div
              className="dropdown-item"
              onClick={() => {
                handleOptionClick(option?.id);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
