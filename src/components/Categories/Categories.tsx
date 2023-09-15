/* VENDOR */
import { useAppSelector } from "../../app/hooks";
import { selectAllCategories } from "../../app/categories/categoriesSlice";
import { ListItem } from "../ListItem/ListItem";

/* APPLICATION */

export const Categories = () => {
  const categories = useAppSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
