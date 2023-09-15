/* APPLICATION */
import edit from "../../icons/edit.svg";
import remove from "../../icons/remove.svg";
import { ListItemType } from "../../types/listItem";
import { ModalEditItem } from "../ModalEditItem";
import { ModalRemoveItem } from "../ModalRemoveItem";
import { useListItem } from "./hooks/useListItem";

interface ListItemProps {
  item: ListItemType;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const {
    editModalActive,
    removeModalActive,
    currentCategory,
    openEditModal,
    openRemoveModal,
    closeEditModal,
    closeRemoveModal,
  } = useListItem(item);

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {currentCategory}
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button className="list-item-col2__btn" onClick={openEditModal}>
            <img src={edit} alt="edit" />
          </button>
          <button className="list-item-col2__btn" onClick={openRemoveModal}>
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={editModalActive}
          closeModal={closeEditModal}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          closeModal={closeRemoveModal}
        />
      </li>
    </>
  );
};
