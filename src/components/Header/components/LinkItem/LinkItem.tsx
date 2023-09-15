import React, { FC } from "react";
import { Link } from "react-router-dom";

interface LinkItemProps {
  url: string;
  title: string;
  isCategories: boolean;
}

export const LinkItem: FC<LinkItemProps> = ({ title, url, isCategories }) => {
  return (
    <li
      className={
        !isCategories
          ? "header-list-item header-list-item-active"
          : "header-list-item"
      }
    >
      <Link to={url}>{title}</Link>
    </li>
  );
};
