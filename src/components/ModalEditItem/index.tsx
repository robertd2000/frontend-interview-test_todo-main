/* VENDOR */
import { Modal } from "../Modal";
import { ListItemType } from "../../types/listItem";
import { useModalEditItem } from "./hooks/useModalEditItem";

/* APPLICATION */

interface ModalEditItemProps {
  item: ListItemType;
  active: boolean;
  closeModal: () => void;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  closeModal,
}) => {
  const {
    isCategories,
    name,
    setName,
    selected,
    setSelected,
    description,
    setDescription,
    onSubmit,
    onCLoseModal,
  } = useModalEditItem(item, closeModal);

  return (
    <Modal active={active} closeModal={onCLoseModal} item={item}>
      <Modal.ModalHeader />
      {isCategories ? (
        <Modal.ModalInput name={name} setName={setName} size="large" />
      ) : (
        <Modal.ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <Modal.ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <Modal.ModalFooter
        submitBtnText="Сохранить"
        size="large"
        onSubmit={onSubmit}
      />
    </Modal>
  );
};
